// portfolio sync: scans public repos of the damlahelloworld org and refreshes
// the data baked into index.html and commits the refresh straight to main so the
// live site self-updates daily. Never invents copy, never deletes rows, never marks
// anything "live" — new deployments enter as landing links, new repos as wip rows
// (only once they carry a one-liner), and Damla promotes landing -> live herself.
// Run: GITHUB_TOKEN=... node scripts/sync.mjs   (token optional, raises rate limit)

import { readFileSync, writeFileSync } from "node:fs";

const ORG = "damlahelloworld";
const INDEX = new URL("../index.html", import.meta.url).pathname;
const SUMMARY = process.env.SUMMARY_PATH || "/tmp/sync-summary.md";
// wall names that differ from repo names (mirror of ALIAS in index.html)
const ALIAS = { snailmail: "snailmail-web", gymgyme: "gymgyme" };

const HEADERS = { "User-Agent": "portfolio-sync", Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) HEADERS.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

async function listPublicRepos() {
  const out = [];
  for (let page = 1; ; page++) {
    const batch = await gh(`/users/${ORG}/repos?per_page=100&page=${page}`); // /users works for user and org accounts, returns public repos only
    out.push(...batch);
    if (batch.length < 100) break;
  }
  return out.filter((r) => !r.fork && !r.private);
}

function buildTree(entries) {
  // internal claude docs are gitignored in the repos; never list them even if an old commit still tracks one
  const blobs = entries
    .filter((e) => e.type === "blob")
    .map((e) => e.path)
    .filter((p) => !/(^|\/)CLAUDE(\.context)?\.md$/.test(p));
  const rootFiles = blobs.filter((p) => !p.includes("/")).sort();
  const top = {}, sub = {};
  for (const p of blobs) {
    if (!p.includes("/")) continue;
    const parts = p.split("/");
    top[parts[0]] = (top[parts[0]] || 0) + 1;
    if (parts.length > 2) {
      sub[parts[0]] = sub[parts[0]] || {};
      sub[parts[0]][parts[1]] = (sub[parts[0]][parts[1]] || 0) + 1;
    }
  }
  const lines = [];
  for (const d of Object.keys(top).sort((a, b) => top[b] - top[a] || a.localeCompare(b))) {
    lines.push(` ├─ ${d}/  (${top[d]} files)`);
    const s = sub[d] || {};
    for (const k of Object.keys(s).sort((a, b) => s[b] - s[a] || a.localeCompare(b)).slice(0, 3))
      lines.push(` │   ├─ ${k}/ (${s[k]})`);
  }
  for (const f of rootFiles) lines.push(` ├─ ${f}`);
  return lines.join("\n");
}

async function fetchTree(repo) {
  const info = await gh(`/repos/${ORG}/${repo}`);
  const t = await gh(`/repos/${ORG}/${repo}/git/trees/${info.default_branch}?recursive=1`);
  return buildTree(t.tree);
}

async function isDeployed(url) {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    return res.ok;
  } catch {
    return false;
  }
}

const normName = (n) => n.toLowerCase().replace(/ v2$/, "");
const toRepo = (wallName) => {
  const k = normName(wallName);
  return ALIAS[k] || k;
};

const src = readFileSync(INDEX, "utf8");
const changes = [];

// ---- parse data blocks ----
const pMatch = src.match(/const P=\[\n([\s\S]*?)\n\];/);
// parse the whole array body at once (robust to rows sharing a line); the
// write-back below re-normalises to one row per line
const rows = JSON.parse(`[${pMatch[1].replace(/,\s*$/, "")}]`);
const builtMatch = src.match(/const BUILT=(\{[\s\S]*?\});/);
const BUILT = JSON.parse(builtMatch[1]);
const xinfoMatch = src.match(/const XINFO=(\{[\s\S]*?\});\n/);
const XINFO = JSON.parse(xinfoMatch[1]);
const linkedUrls = [...src.matchAll(/(?:[,{\s]l:|"live":\s*|"landing":\s*)"(https?:\/\/[^"]+)"/g)]
  .map((m) => m[1].replace(/\/$/, ""));

const repos = await listPublicRepos();
const repoByName = Object.fromEntries(repos.map((r) => [r.name, r]));

// ---- 1. refresh last-commit dates on existing rows ----
for (const row of rows) {
  const repo = repoByName[toRepo(row[0])];
  if (repo && row[4] !== repo.pushed_at) {
    row[4] = repo.pushed_at;
  }
}

// ---- 2. new repos join the wall as wip — but only once they carry a one-liner
// (their GitHub About description); no invented copy, no placeholder on the live site ----
const known = new Set([...rows.map((r) => toRepo(r[0])), ...Object.keys(BUILT), ...Object.values(ALIAS)]);
for (const r of repos) {
  if (known.has(r.name)) continue;
  known.add(r.name);
  if (!r.description) {
    changes.push(`held off the wall until it has a one-liner: **${r.name}** — set its GitHub About description and it appears next sync`);
    continue;
  }
  rows.push([r.name, r.description, r.language || "?", "wip", r.pushed_at]);
  changes.push(`new project on the wall: **${r.name}** (status wip)`);
}

// ---- 3. landing links for freshly deployed repos (never auto-"live") ----
// a repo already carrying a link in PJ (l:"...") is skipped even when the
// detected url differs (e.g. a second vercel alias) — one link per project,
// and never relabel a live product as landing
const pjLinked = [...src.matchAll(/\{sl:"([^"]+)"[^\n]*?[,\s]l:"https?:\/\//g)].map((m) => m[1]);
const fuzzy = (a, b) => a === b || a.replace(/\./g, "-") === b || b.replace(/\./g, "-") === a || a.startsWith(b) || b.startsWith(a);
for (const r of repos) {
  if (r.name === `${ORG}.github.io`) continue; // the portfolio itself
  const x = XINFO[r.name];
  if (x && (x.live || x.landing)) continue;
  if (pjLinked.some((sl) => fuzzy(sl, r.name))) continue;
  const candidates = [r.homepage, `https://${ORG}.github.io/${r.name}/`].filter(Boolean);
  for (const url of candidates) {
    const clean = url.replace(/\/$/, "");
    if (linkedUrls.includes(clean)) break;
    if (await isDeployed(url)) {
      XINFO[r.name] = { ...(x || {}), landing: clean };
      changes.push(`landing detected for **${r.name}**: ${clean}`);
      break;
    }
  }
}

// ---- 4. regenerate repo trees ----
for (const r of repos) {
  try {
    const tree = await fetchTree(r.name);
    if (BUILT[r.name] !== tree) {
      if (BUILT[r.name] === undefined) changes.push(`repo tree added: ${r.name}`);
      BUILT[r.name] = tree;
    }
  } catch (e) {
    console.error(`tree failed for ${r.name}, keeping old: ${e.message}`);
  }
}
// drop trees of repos that no longer exist publicly (renamed or made private)
for (const k of Object.keys(BUILT)) {
  if (!repoByName[k]) {
    delete BUILT[k];
    changes.push(`repo tree dropped (no longer public under this name): ${k}`);
  }
}

// ---- write back ----
rows.sort((a, b) => (a[4] < b[4] ? 1 : -1));
let out = src.replace(pMatch[0], `const P=[\n${rows.map((r) => ` ${JSON.stringify(r)},`).join("\n")}\n];`);
out = out.replace(builtMatch[0], `const BUILT=${JSON.stringify(BUILT)};`);
out = out.replace(xinfoMatch[0], `const XINFO=${JSON.stringify(XINFO)};\n`);

if (out !== src) {
  writeFileSync(INDEX, out);
  const dateChanges = changes.length ? changes : [];
  const body = [
    "portfolio sync committed straight to main — the live site is already updated.",
    "",
    ...(dateChanges.length ? dateChanges.map((c) => `- ${c}`) : []),
    "- last-commit dates and repo trees refreshed where stale",
    "",
    "nothing is ever auto-labeled live; promote landing → live yourself when the product works.",
  ].join("\n");
  writeFileSync(SUMMARY, body);
  console.log("changed");
  console.log(body);
} else {
  console.log("no changes");
}
