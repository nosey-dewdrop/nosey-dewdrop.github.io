const NAV=[{k:"home",l:"🌻 home"},{k:"about",l:"🦋 about me"},{k:"schedule",l:"📋 schedule"},{k:"projects",l:"💐 projects"},{k:"technical",l:"👾 technical"}];
const EM=["🌼","💫","🌙","✨","🌻","💐","🌞","🌷","🌈","👾"];

const T={
  "Next.js 16":{i:"▲",c:"nxt"},"Next.js 15":{i:"▲",c:"nxt"},"Next.js 14 (App Router)":{i:"▲",c:"nxt"},
  "React 19":{i:"⚛",c:"rct"},"React":{i:"⚛",c:"rct"},
  "TypeScript":{i:"TS",c:"ts"},"JavaScript":{i:"JS",c:"js"},
  "Supabase (PostgreSQL + Auth + Realtime)":{i:"⚡",c:"sup"},"Supabase":{i:"⚡",c:"sup"},
  "Tailwind CSS 4":{i:"🌊",c:"tw"},"Tailwind CSS":{i:"🌊",c:"tw"},
  "Anthropic Claude API":{i:"✦",c:"cla"},"Claude API":{i:"✦",c:"cla"},
  "Mapbox GL JS":{i:"🗺",c:"map"},"Leaflet":{i:"🗺",c:"map"},
  "Stripe Payments":{i:"💳",c:"str"},
  "fal.ai Queue API":{i:"✨",c:"fal"},"FLUX Schnell (Image Gen)":{i:"🎨",c:"fal"},
  "Minimax Video-01":{i:"🎬",c:"fal"},"Hailuo-02 Text-to-Video":{i:"🎬",c:"fal"},
  "Vercel (Serverless)":{i:"▲",c:"ver"},"Vercel":{i:"▲",c:"ver"},
  "HTML/CSS":{i:"🎨",c:"hc"},"Music Theory Algorithms":{i:"🎵",c:"mu"},
  "Python":{i:"🐍",c:"py"},"Flask + CORS":{i:"🧪",c:"fl"},
  "Web Audio API":{i:"🔊",c:"wau"},"Spotify Embed API":{i:"🎧",c:"spo"},"LocalStorage API":{i:"💾",c:"ls"},
  "Web Technologies":{i:"🌐",c:"web"},"Astronomy APIs":{i:"🔭",c:"ast"},
  "Java 17+":{i:"☕",c:"jav"},"Java":{i:"☕",c:"jav"},"Java Swing":{i:"🖼",c:"sw"},"JavaFX":{i:"🖼",c:"sw"},
  "MySQL 8.0":{i:"🐬",c:"db"},"Database Design (PostgreSQL)":{i:"🗄",c:"db"},"Database":{i:"🗄",c:"db"},"SQL":{i:"🗃",c:"db"},
  "Next.js Serverless API Routes":{i:"⚡",c:"nxt"},
  "Node.js":{i:"🟢",c:"nd"},"ESLint":{i:"✓",c:"def"},
  "React Native / Expo (Phase 2)":{i:"📱",c:"rct"},
  "SHA-256 + Salt (Password Hashing)":{i:"🔐",c:"sec"},"JavaMail API (Email Verification)":{i:"📧",c:"jav"},
  "MVC Architecture":{i:"🏗",c:"def"},"Figma (UI Prototyping)":{i:"🎨",c:"fig"},
  "Git/GitHub":{i:"🐙",c:"git"},"VS Code":{i:"💻",c:"def"},
  "C++":{i:"⚙️",c:"cpp"},
  "Google OAuth":{i:"🔑",c:"sec"},"CSS":{i:"🎨",c:"hc"},"Next.js (App Router)":{i:"▲",c:"nxt"},"Supabase (PostgreSQL + Auth)":{i:"⚡",c:"sup"},
};
function tb(n){const m=T[n]||{i:"•",c:"def"};return `<span class="t t-${m.c}"><span class="ti">${m.i}</span>${n}</span>`;}

const P=[
  {e:"🐞",n:"LadyBug",tg:"a debugging-first learning platform",
   d:"Born from my experience as a <strong>Python TA</strong> at Bilkent: students never really learned by writing code — <em>they learned when they had to find and fix logical errors.</em> LadyBug teaches <strong>algorithmic thinking through real debugging challenges</strong> with a code execution sandbox, personalized error profiles, and an instructor dashboard. In an AI world where code generation is trivial, <em>the ability to read, evaluate, and fix code is the real human edge.</em>",
   t:["Next.js 16","React 19","TypeScript","Supabase (PostgreSQL + Auth + Realtime)","Tailwind CSS 4","Node.js","ESLint"],
   s:"MVP in progress",g:"https://github.com/nosey-dewdrop/ladybug",co:"#E8453C"},
  {e:"💌",n:"Forget-Me-Not",tg:"slow letter platform — letters travel based on real distance",
   d:"A slow letter platform where <strong>letters travel based on real geographic distance</strong> (Istanbul→Tokyo = 3.5 days). Built as my <strong>FAB Fellowship final project</strong>. Features: <strong>Google OAuth</strong> via Supabase, bottle mail with random matching, memory box for unsent letters, <strong>user matching with conversation starters</strong>, XP/leveling gamification with collectible stamps, seasonal themes, and <em>a mythology blog about historical love stories</em>. No instant messaging, no read receipts, no pressure — intentionally slow.",
   t:["Next.js (App Router)","React","TypeScript","Supabase (PostgreSQL + Auth)","Google OAuth","CSS","Vercel"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/forget-me-not",l:"https://myosotis-sylvatica.vercel.app",co:"#9B59B6"},
  {e:"🎀",n:"Linçmatik",tg:"mental toughness trainer — social media criticism simulator",
   d:"A full-stack <strong>social media criticism simulator</strong> designed as a mental toughness trainer. Write anything you'd post online → <strong>Claude API generates brutally realistic toxic comments</strong> from different troll personas → you practice handling harsh criticism to build resilience. Features a curated library of quotes and book recommendations. <strong>Python</strong> for the API backend, <strong>React</strong> for the frontend, deployed on <strong>Vercel</strong>. <em>Schopenhauer — people will use dirty tricks in arguments, always expect the worst. Nietzsche — most people aren't trying to destroy you, this is how they act in their point of view. Prince Myshkin — he is the best person. this was his crime.</em>",
   t:["Python","Flask + CORS","Anthropic Claude API","React","Vercel","JavaScript"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/linc-matik",l:"https://linc-matik.vercel.app",co:"#8e35b8"},
  {e:"💫",n:"Lady Fantasy",tg:"AI-powered tarot video experience — live on Vercel",
   d:"Draw cards from a full <strong>78-card Rider-Waite tarot deck</strong> and watch AI bring them to life as <strong>cinematic video</strong>. Hand-crafted prompts for each card describe the illustration animating — <em>fabrics sway, objects glow, figures reach toward each other.</em> Three fal.ai video models to choose from. Architecture: browser → <strong>4 serverless API routes</strong> (generate, status, result, image) → fal.ai Queue API. API key is server-side only — never exposed to the client.",
   t:["Next.js 15","React 19","Next.js Serverless API Routes","fal.ai Queue API","Minimax Video-01","Hailuo-02 Text-to-Video","FLUX Schnell (Image Gen)","Vercel (Serverless)"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/lady-fantasy",l:"https://lady-fantasy.vercel.app",co:"#6C5CE7"},
  {e:"🌊",n:"Dewdrop",tg:"general-purpose event + social platform with AI posters",
   d:"<em>\"we are drops in an ocean of time\"</em> — a full-scale event and social platform with a <strong>67-step roadmap across 10 phases</strong>. Create events, discover what's happening, RSVP, connect with friends. <strong>AI-generated event posters</strong> via fal.ai, <strong>mutual-friends-only messaging</strong> enforced at database level (Supabase RLS), XP/tier gamification (Newcomer → Tide Rider → Storm Chaser → Wave Maker → Ocean), threaded comments, calendar with conflict detection, personalized recommendations, and real-time notifications. <strong>10 pages designed</strong>: Feed, Discover, Event Detail, Create Event, Profile, Messaging, Notifications, Leaderboard, Calendar, Auth 🌊",
   t:["Python","JavaScript","HTML/CSS","Supabase (PostgreSQL + Auth + Realtime)","fal.ai Queue API"],
   s:"In development",g:"https://github.com/nosey-dewdrop/dewdrop",co:"#3498DB"},
  {e:"👾",n:"League of Bilkent",tg:"campus event social platform — CS102 final project, 30 Java files",
   d:"A full-stack campus event management platform built as the <strong>CS102 final project</strong>. <strong>30 Java classes</strong> across MVC architecture: 4 screens, 13 panel components, 8 data models with MySQL integration, and 4 tool utilities. Features <strong>SHA-256 + salt password hashing</strong>, Bilkent email verification via JavaMail API, a complete <strong>XP/tier gamification system</strong> (Seedling → Cosmos), RSVP with calendar conflict detection, threaded comments, follow system, DMs, smart recommendations. UI prototyped in Figma, inspired by <em>Strava's community feed, X's timeline, Instagram's discover page, and Ekşi Sözlük's threaded discussions.</em>",
   t:["Java 17+","Java Swing","MySQL 8.0","SQL","MVC Architecture","SHA-256 + Salt (Password Hashing)","JavaMail API (Email Verification)","Figma (UI Prototyping)","Git/GitHub"],
   s:"Built & Deployed",g:"https://github.com/nosey-dewdrop/leagueofbilkent-mvp",co:"#E67E22"},
  {e:"🌷",n:"Damlacık",tg:"personal community platform — YouTube & content hub",
   d:"A personal community platform for building a space around <strong>content creation</strong>. Becoming a YouTuber — <em>I believe I have so much to say, but my innocence has been used up on the wrong people.</em> This is where I build my own community, on my own terms. <strong>Database security is critical</strong> — because leaking people's data would get me linçed like Tosuncuk from Çiftlik Bank.",
   t:["Web Technologies","JavaScript","Supabase (PostgreSQL + Auth + Realtime)"],
   s:"Planning",g:"https://github.com/nosey-dewdrop",co:"#E91E63"},
  {e:"🎵",n:"Musical Improvisation Tool",tg:"Y2K aesthetic scale identifier & composition aid with Web Audio API — deployed",
   d:"Identifies all possible musical scales from a few notes you play or hear, then suggests <strong>compatible triad chords, 7th chords, sus chords</strong> and <strong>common chord progressions</strong> (Pop Classic, Jazz ii-V-I, Andalusian, Canon) for improvisation and composition. Built with a <strong>custom music theory algorithm</strong> — pitch-class enharmonic mapping (C#=Db), all 12 major scales via Circle of Fifths, and <strong>7 diatonic modes</strong> (Ionian through Locrian) derived from degree rotation. <strong>Web Audio API</strong> synthesizes real-time sound: sine waves for piano, triangle oscillators with 2nd & 3rd harmonics for guitar timbre — each with proper ADSR envelopes. <strong>Spotify Embed API</strong> powers an iPod-style player with curated song suggestions per key. <strong>LocalStorage API</strong> persists your note selections, octave preference, and saved chord progressions across sessions. Features a <strong>dynamic piano generator</strong> (1–3 octaves with responsive key sizing), interactive <strong>guitar fretboard</strong> (6 strings × 12 frets with correct string-to-octave mapping), <strong>QWERTY keyboard mapping</strong> for live playing, and a <strong>chord progression planner</strong> where you build, save, and recall your own progressions. Wrapped in a <strong>Y2K aesthetic</strong> design with dark/light mode toggle. Designed for musicians who want to compose or jam fluently: <em>hear a riff like Sails of Charon by Scorpions, punch in the notes, get B Phrygian instantly, know all the triads.</em> Includes a <strong>handwritten music theory & philosophy section</strong> — essays on why music is nature, how the seven modes survived a form of natural selection, how Bach and Vivaldi composed from observation rather than rules, and an explanation of intervals, triads, and chord construction from first principles. Written from <strong>MSC110 at Bilkent</strong> and years of self-taught music theory.",
   t:["JavaScript","HTML/CSS","Web Audio API","Spotify Embed API","LocalStorage API","Music Theory Algorithms"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/musical-improvisation-tool",l:"https://nosey-dewdrop.github.io/musical-improvisation-tool/",co:"#00B894"},
  {e:"🌙",n:"Moonlight",tg:"astrology platform — moon phases & horary",
   d:"Moon phase tracking, horary astrology calculations, and celestial event monitoring. There's something meditative about following the sky's rhythm — this platform makes it beautiful and accessible.",
   t:["Web Technologies","Astronomy APIs","JavaScript"],
   s:"Core features done",g:"https://github.com/nosey-dewdrop",co:"#2C3E50"},
  {e:"🛒",n:"BilMart",tg:"secondhand marketplace for Bilkent students",
   d:"A desktop marketplace application for buying and selling secondhand items within Bilkent University. Full database-backed user management and item catalog with Bilkent student ID verification for privacy and trust. Built with Java Swing GUI and a relational database for persistent storage.",
   t:["Java","Java Swing","Database","SQL"],
   s:"Built",g:"https://github.com/nosey-dewdrop",co:"#27AE60"},
  {e:"☕",n:"Interactive Coffee Menu",tg:"third wave coffee education — full brewing knowledge",
   d:"Built while working as a barista at Hound Coffee Group, a third wave specialty shop where taste is everything. I learned every brewing method hands-on — Chemex, V60, French press, aeropress, cold brew, siphon — and understand extraction science, grind size, water temperature, and how each variable affects flavor. This interactive menu teaches customers the real differences: americano vs filter, cappuccino vs latte vs flat white vs cortado, with visual breakdowns of milk ratios, extraction methods, and flavor profiles. Because third wave coffee isn't about speed — it's about understanding what you're drinking.",
   t:["JavaScript","HTML/CSS"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/coffee-menu",l:"https://nosey-dewdrop.github.io/coffee-menu/",co:"#6F4E37"},
  {e:"🌸",n:"Flower Timer",tg:"fairy garden timer in Java Swing",
   d:"A whimsical productivity timer with fairy garden aesthetics — animated butterflies, flowers, and leaves. Learning Java Swing GUI programming by building something beautiful instead of boring.",
   t:["Java","Java Swing","JavaFX"],
   s:"Early build",g:"https://github.com/nosey-dewdrop/flower-timer",co:"#FD79A8"},
  {e:"🦢",n:"Lala Retro",tg:"skincare ingredient & allergen tracker",
   d:"I'm allergic to something, but what? A tracker to identify which skincare ingredients cause reactions by logging products and symptoms over time. Because a $200 cream (looking at you, La La Retro) isn't special — it just has fewer ingredients.",
   t:["Web Technologies","JavaScript"],
   s:"Planning",g:"https://github.com/nosey-dewdrop/lala-retro",co:"#A29BFE"},
];

const SCHED=[
  {e:"🎀",n:"Linçmatik",note:"it is live. i bought tokens. you can mentally practice yourself. slay!!!",s:"💐 live"},
  {e:"🎵",n:"Musical Improvisation Tool",note:"such a beautiful website. helps you identify scales, make chord progressions. no database but local storage. i think it is a useful tool with song recommendations in related scale.",s:"💐 live"},
  {e:"💌",n:"Forget-Me-Not",note:"a huge letter platform. there is a lot to implement. will take weeks, maybe whole semester. nevertheless, it is live now! i need to start advertising it on linkedin.",s:"💐 live"},
  {e:"💫",n:"Lady Fantasy",note:"tarot, lenormand, blogs using claude api and fal.ai api — finished but needs to be polished. it simply uses fortune telling with prompts.",s:"needs polish"},
  {e:"🌙",n:"Moonlight",note:"easy, astrology platform. i love watching moon phases. moon phases, horary added.",s:"core done"},
  {e:"🌊",n:"Dewdrop",note:"events platform. MVP can be done. my name is damla su, in english drop, drip, dewdrop, waterdrop. inspo is communities are like an ocean, nevertheless we are all individual drops. everyone does a project like this. what i can have that they don't?",s:"MVP possible"},
  {e:"🐞",n:"LadyBug",note:"will take ages but MVP can be done. while working as a TA for CS115, i found out that people were not really learning by writing code. it was teaching when you were trying to find and correct a logical error, which is silent but more destructive for the code.",s:"MVP possible"},
  {e:"🌷",n:"Damlacık",note:"a personal community platform. i am becoming a youtuber. i believe i have so much to say, but my innocence has been used up on the wrong people. it might take some weeks. database should be secured, else i will be linçed like tosuncuk from çiftlik bank for stealing (leaking) people's data. for building a community. still on planning because i want a community platform but i can't find an astonishing point for this project only for this moment because my mind is too full...",s:"planning"},
  {e:"🦢",n:"Lala Retro",note:"i am allergic to something and this shows what. will be simple.",s:"planning"},
  {e:"☕",n:"Interactive Coffee Menu",note:"i have done implementing it before i was a vibecoder but a barista!!!! doesn't sound incredible now but i want to finish it. i have one more programming idea for my future coffee shop. but i don't have money to open it only at this moment! hahhaaha",s:"💐 live"},
  {e:"🏥",n:"Medical Case Generator",note:"when i finish engineering, and if i am still alive and not dead of cancer, i will study medicine in muğla... akyaka... and it is literally on a mountain. meaning it doesn't have a great range of cases as much as universities in big cities such as ankara, izmir... this is a platform which generates cases. when i was in medical school, problem-based learning was such a privileged class.",s:"future dream"},
];

const CP=[
  {cat:"⚔️ LeetCode — 18 problems in Java & C++",items:[]},
  {cat:"🏋️ Exercism — 42+ problems across Java (31), Python (10), JavaScript (1)",items:[]},
  {cat:"🎄 Advent of Code — Java",items:[]},
  {cat:"📚 CS201 Data Structures — 3 C++ projects",items:[]},
  {cat:"📝 CS102 Object-Oriented Programming — League of Bilkent, BilMart",items:[]},
  {cat:"🐍 CS115 Python TA — developed & guided labs",items:[]},
];

const SK={
  "programming languages":["Java","Python","C++","JavaScript","TypeScript","HTML/CSS","SQL","SystemVerilog"],
  "frameworks & libraries":["Next.js (14–16, App Router)","React 19","Flask","Tailwind CSS","Java Swing","JavaFX","SpringBoot","Numpy","Matplotlib"],
  "platforms & tools":["Git/GitHub","Vercel","Supabase","MySQL","fal.ai","Mapbox GL","Figma","Maven","Vivado","VS Code","Reaper (DAW)"],
  "architecture & concepts":["RESTful API Design","Serverless Functions","Queue-based Async Processing","PostgreSQL Schema Design","MVC Pattern","SHA-256 Hashing","OAuth & Auth Flows","Algorithm Analysis","Data Structures"]
};

const EX=[
  {r:"FAB Fellowship",d:"My window into the <strong>startup world</strong> — and it changed how I think about building things. Designed community-building projects from scratch, conducted <strong>client interviews with 5 participants</strong> across completely different tech literacy levels (from my doctor parents who barely use AI agents to CS students who critique API architecture), and learned to evaluate products from <strong>a real user's perspective, not a developer's</strong>. Built <strong>Lady Fantasy</strong> (AI tarot video experience) with fal.ai during this period. <em>Startups aren't about code — they're about solving real problems for real people.</em> This fellowship shaped every project I've built since.",p:"2026 – present"},
  {r:"IEEE Bilkent",d:"<strong>Board Member & Public Relations Coordinator</strong> — one of Bilkent's most active student communities, organizing events, coordinating outreach",p:"2024 – present"},
  {r:"CS115 Teaching Assistant",d:"Introduction to Programming with Python at Bilkent — guided <strong>100+ students through 10 labs</strong>, discovered that <em>debugging teaches algorithmic thinking better than writing code from scratch</em>",p:"2025"},
  {r:"Software Persona (Internship)",d:"A program that gives everyone a chance — <em>and at first I didn't find that impressive enough. But that's exactly what makes it beautiful: life is what you make it, and the important thing isn't being chosen, it's what you do with the opportunity.</em> Learned <strong>UI/UX fundamentals, Figma prototyping, HTML/CSS/JS from scratch, React basics, database design</strong>, open source concepts, and frameworks vs libraries. Built real projects including the <strong>Interactive Coffee Menu</strong>. Went from someone who only wrote backend logic to someone who understands the full product — <em>design thinking to deployment.</em>",p:"2026"},
  {r:"Hound Coffee Group",d:"<strong>Third wave barista & developer</strong> — built the interactive coffee menu in JavaScript while learning the art of <em>specialty coffee</em>",p:"2024 – 2025"},
  {r:"Bilkent Sociology Society",d:"<strong>Audit Board President</strong> (Denetim Kurulu Başkanı) — exploring how society, culture, power, and norms shape every interaction. Also took <strong>PSYC102</strong> (Social Psychology). Skills: <em>professional writing, philosophy, critical analysis.</em>",p:"Mar 2024 – Sep 2025"},
  {r:"Bilkent Music, Crochet & TEMA Clubs",d:"<strong>Former Board Member</strong> across three communities — music theory & performance (Music Club), textile arts (Knitting & Crocheting Society), environmental volunteering (TEMA)",p:"2023 – 2024"},
  {r:"Joyport One Tower",d:"<strong>Game Warden</strong> — <em>I love spending time with children. They're kind, bright, and innocent in a way the world desperately needs more of.</em> Getting the chance to be around them, play with them, and watch them figure things out was genuinely precious to me.",p:"Aug – Sep 2023"},
];

let cur="home";
function go(p){
  if(p===cur)return;
  document.querySelectorAll(".pg").forEach(x=>{x.classList.remove("on");x.scrollTop=0});
  document.querySelectorAll(".nb").forEach(x=>x.classList.remove("on"));
  cur=p;
  history.replaceState(null,null,"#"+p);
  requestAnimationFrame(()=>{
    document.getElementById("p-"+p).classList.add("on");
    document.querySelector(`[data-p="${p}"]`).classList.add("on");
    if(p==="projects") setTimeout(()=>document.querySelectorAll(".pk").forEach((c,i)=>setTimeout(()=>c.classList.add("vis"),50+i*30)),30);
    if(p==="schedule") setTimeout(()=>document.querySelectorAll("#sched-list .es").forEach((c,i)=>setTimeout(()=>c.classList.add("vis"),40+i*60)),30);
    if(p==="technical") setTimeout(()=>document.querySelectorAll(".sc,.es").forEach((c,i)=>setTimeout(()=>c.classList.add("vis"),40+i*60)),30);
  });
}
document.addEventListener("keydown",e=>{
  if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")return;
  const keys=NAV.map(n=>n.k);const i=keys.indexOf(cur);
  if(e.key==="ArrowRight"&&i<keys.length-1)go(keys[i+1]);
  if(e.key==="ArrowLeft"&&i>0)go(keys[i-1]);
});

document.addEventListener("DOMContentLoaded",()=>{
  const nr=document.getElementById("nr");
  NAV.forEach(n=>{const b=document.createElement("button");b.className="nb"+(n.k==="home"?" on":"");b.dataset.p=n.k;b.textContent=n.l;b.onclick=()=>go(n.k);nr.appendChild(b)});

  const fb=document.getElementById("fb");
  EM.forEach((e,i)=>{const s=document.createElement("span");s.className="fl";s.textContent=e;s.style.left=`${5+i*9.5}%`;s.style.animationDelay=`${i*2.8}s`;fb.appendChild(s)});

  const pl=document.getElementById("plist");
  P.forEach((p,i)=>{
    const d=document.createElement("div");d.className="pk";d.style.transitionDelay=`${i*.03}s`;
    d.innerHTML=`
      <div class="pt"><span class="pe">${p.e}</span><div style="flex:1">
        <div class="ptr"><h3 class="pn">${p.n}</h3><span class="ps" style="color:${p.co};background:${p.co}15;border:1px solid ${p.co}30">${p.s}</span></div>
        <div class="ptg">${p.tg}</div>
      </div></div>
      <p class="pd">${p.d}</p>
      <div class="tb">${p.t.map(tb).join("")}</div>
      <div class="pll">
        <a href="${p.g}" target="_blank" class="plk">→ github</a>
        ${p.l?`<a href="${p.l}" target="_blank" class="plk plk-l">✦ live demo</a>`:""}
      </div>`;
    pl.appendChild(d);
  });

  const sl=document.getElementById("sched-list");
  sl.innerHTML=`<div class="es">${SCHED.map(s=>`<div class="ei"><div class="er"><span style="margin-right:6px">${s.e}</span>${s.n} <span class="ps" style="color:var(--sun);background:var(--sun)15;border:1px solid var(--sun)30;margin-left:8px;font-size:9px;font-family:var(--fm);padding:2px 8px;border-radius:12px">${s.s}</span></div><div class="ed" style="font-style:italic">${s.note}</div></div>`).join("")}</div>`;

  const sg=document.getElementById("sgrid");
  sg.innerHTML=Object.entries(SK).map(([k,v])=>`<div class="sc"><h4>${k}</h4>${v.map(i=>`<span>${i}</span>`).join("")}</div>`).join("");

  const cs=document.getElementById("coding-sec");
  cs.innerHTML=`<div class="es"><h4>coding practice — <a href="https://github.com/nosey-dewdrop/fantaisie-impromptu" target="_blank" style="color:var(--amber);text-decoration:none">fantaisie-impromptu repo</a></h4>
    ${CP.map(c=>`<div class="cp-cat"><div class="cp-h">${c.cat}</div>${c.items.length?`<ul class="cp-list">${c.items.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}</div>`).join("")}
  </div>`;

  const es=document.getElementById("exp-sec");
  es.innerHTML=`<div class="es"><h4>experience & involvement</h4>${EX.map(e=>`<div class="ei"><div class="er">${e.r}</div><div class="ed">${e.d}</div><div class="ep">${e.p}</div></div>`).join("")}</div>`;

  const ed=document.getElementById("edu-sec");
  ed.innerHTML=`<div class="es"><h4>education</h4>
    <div class="ei"><div class="er">Bilkent University</div><div class="ed">B.Sc. in Computer Science</div><div class="ep">2023 – present</div></div>
    <div class="ei"><div class="er">Medipol University</div><div class="ed">Medicine — 91/100</div><div class="ep">2020 – 2023</div></div>
    <div class="ei"><div class="er">Damla Fen Lisesi (Open High School)</div><div class="ed">Transferred in 12th grade for cancer treatment. What looked like darkness became the most transformative period of my life — learned 2 instruments, studied music theory, spent time with ideas and art. Learned to manage my own life on my own terms.</div><div class="ep">2019 – 2020</div></div>
    <div class="ei"><div class="er">Nesibe Aydın Fen Lisesi (Science High School)</div><div class="ed">GPA: 96.68/100 — Top class C, ranked 1–20. Active MUN delegate: BHMUN 2016, MUNBU 2017, MUNTR 2017, NAMUN 2018. Skills: Negotiation, public speaking, diplomacy.</div><div class="ep">2016 – 2019</div></div>
  </div>`;

  const eu="su.bilge",edom="ug.bilkent.edu.tr",ea=eu+"@"+edom;
  const el=document.getElementById("email-link"),et=document.getElementById("email-text");
  if(el&&et){el.href="mailto:"+ea;et.textContent=ea;}

  const hash=location.hash.replace("#","");
  const startPage=NAV.some(n=>n.k===hash)?hash:"home";
  cur="";go(startPage);
});