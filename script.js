const NAV=[{k:"home",l:"🌻 home"},{k:"about",l:"🦋 about me"},{k:"projects",l:"💐 projects"},{k:"technical",l:"👾 technical"}];
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
};
function tb(n){const m=T[n]||{i:"•",c:"def"};return `<span class="t t-${m.c}"><span class="ti">${m.i}</span>${n}</span>`;}

const P=[
  {e:"💫",n:"Lady Fantasy",tg:"AI-powered tarot video experience — live on Vercel",
   d:"Draw cards from a full 78-card Rider-Waite tarot deck and watch AI bring them to life as cinematic video. Hand-crafted prompts for each card describe the illustration animating — fabrics sway, objects glow, figures reach toward each other. Three fal.ai video models to choose from. Architecture: browser → 4 serverless API routes (generate, status, result, image) → fal.ai Queue API. API key is server-side only — never exposed to the client. Also uses FLUX Schnell for card image generation.",
   t:["Next.js 15","React 19","Next.js Serverless API Routes","fal.ai Queue API","Minimax Video-01","Hailuo-02 Text-to-Video","FLUX Schnell (Image Gen)","Vercel (Serverless)"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/lady-fantasy",l:"https://lady-fantasy.vercel.app",co:"#6C5CE7"},
  {e:"🎀",n:"Linçmatik",tg:"mental toughness trainer — social media lynch simulator",
   d:"A full-stack social media criticism simulator designed as a mental resilience trainer. Write anything you'd post online → Claude generates 5 brutally realistic toxic comments from different troll personas (Toxic Teyze, Keyboard Warrior, Moral Bekçisi, Haklı Hasan, Bilmiş Burcu) → you practice responding → get a psychological analysis of the interaction. Features a curated library of important quotes (Marcus Aurelius, Musashi, Pink Floyd, Mevlana) and book recommendations (Schopenhauer, Nietzsche, Dostoyevski, Sun Tzu). Lila-pink design system with floating emojis, grain overlay, dot-bg pattern, dark mode. Inspired by Schopenhauer's eristic dialectics, Nietzsche's rawness, and Dostoevsky's Prince Myshkin — because being good was his crime.",
   t:["Python","Flask + CORS","Anthropic Claude API","React","Vercel","JavaScript"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/linc-matik",l:"https://linc-matik.vercel.app",co:"#8e35b8"},
  {e:"🎵",n:"Musical Improvisation Tool",tg:"scale identifier & composition aid — deployed",
   d:"Identifies all possible musical scales from a few notes you play or hear, then suggests compatible triad chords for improvisation and composition. Built with a custom music theory algorithm that maps note combinations to scales across all modes — Phrygian, Dorian, Mixolydian, you name it. Features piano and guitar tab interfaces with dark/light mode. Designed for musicians who want to compose or jam fluently: hear a riff like Sails of Charon by Scorpions, punch in the notes, get B Phrygian instantly, know all the triads. Comes with detailed music theory documentation covering ethnomusicology, rhythm, chord progressions, texture analysis, and composition techniques from MSC110 at Bilkent.",
   t:["JavaScript","HTML/CSS","Music Theory Algorithms"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/musical-improvisation-tool",l:"https://nosey-dewdrop.github.io/musical-improvisation-tool/",co:"#00B894"},
  {e:"🐞",n:"LadyBug",tg:"a debugging-first learning platform",
   d:"Born from my experience as a Python TA at Bilkent: students never really learned by writing code — they learned when they had to find and fix logical errors. LadyBug teaches algorithmic thinking through real debugging challenges with a code execution sandbox, personalized error profiles, and an instructor dashboard. In an AI world where code generation is trivial, the ability to read, evaluate, and fix code is the real human edge.",
   t:["Next.js 16","React 19","TypeScript","Supabase (PostgreSQL + Auth + Realtime)","Tailwind CSS 4","Node.js","ESLint"],
   s:"MVP in progress",g:"https://github.com/nosey-dewdrop/ladybug",co:"#E8453C"},
  {e:"🌊",n:"Dewdrop",tg:"general-purpose event + social platform with AI posters",
   d:"\"we are drops in an ocean of time\" — a full-scale event and social platform with a 67-step roadmap across 10 phases! Create events, discover what's happening, RSVP (Going/Interested/Maybe), connect with friends. AI-generated event posters via fal.ai, mutual-friends-only messaging enforced at database level (Supabase RLS), XP/tier gamification (Newcomer → Tide Rider → Storm Chaser → Wave Maker → Ocean), threaded comments, calendar with conflict detection, personalized recommendations, category filters, leaderboards, and real-time notifications via Supabase Realtime. 10 pages designed: Feed, Discover, Event Detail, Create Event, Profile, Messaging, Notifications, Leaderboard, Calendar, Auth 🌊",
   t:["Python","JavaScript","HTML/CSS","Supabase (PostgreSQL + Auth + Realtime)","fal.ai Queue API"],
   s:"In development",g:"https://github.com/nosey-dewdrop/dewdrop",co:"#3498DB"},
  {e:"💌",n:"Everlong",tg:"slow letter platform — FAB Fellowship final project, vibecoded mock ready",
   d:"A slow letter platform where letters travel based on real geographic distance (Istanbul→Tokyo = 3.5 days). Built as my FAB Fellowship final project — full PRD with 40+ screens, complete PostgreSQL schema (15+ tables), and a vibecoded mock prototype via deep research. Features: bottle mail with random matching, memory box for unsent letters with time capsules, playlist sharing, AI compatibility scoring with Claude, XP/leveling gamification with collectible stamps, a mythology blog about historical love stories, and Stripe-powered premium subscriptions.",
   t:["Next.js 14 (App Router)","React","Supabase (PostgreSQL + Auth + Realtime)","Anthropic Claude API","Mapbox GL JS","Leaflet","Stripe Payments","Tailwind CSS","Vercel (Serverless)","React Native / Expo (Phase 2)"],
   s:"Mock prototype ready",g:"https://github.com/nosey-dewdrop/everlong",co:"#9B59B6"},
  {e:"👾",n:"League of Bilkent",tg:"campus event social platform — CS102 final project, 30 Java files",
   d:"A full-stack campus event management platform built as the CS102 final project. 30 Java classes across MVC architecture: 4 screens (login, register, home, main), 13 panel components (feed, event detail, calendar, leaderboard, discover, profile, search, messaging, notifications, create event, interest selection), 8 data models with MySQL integration, and 4 tool utilities. Features SHA-256 + salt password hashing, Bilkent email verification via JavaMail API, a complete XP/tier gamification system (Seedling → Cosmos), Going/Interested/Maybe RSVP with calendar conflict detection, threaded comments, follow system, DMs, smart recommendations based on interest tags and attendance patterns. UI prototyped in Figma, inspired by Strava's community feed, X's timeline, Instagram's discover page, and Ekşi Sözlük's threaded discussions.",
   t:["Java 17+","Java Swing","MySQL 8.0","SQL","MVC Architecture","SHA-256 + Salt (Password Hashing)","JavaMail API (Email Verification)","Figma (UI Prototyping)","Git/GitHub"],
   s:"Built & Deployed",g:"https://github.com/nosey-dewdrop/leagueofbilkent-mvp",co:"#E67E22"},
  {e:"🌷",n:"Damlacık",tg:"personal community platform — YouTube & content hub",
   d:"A personal community platform for building a space around content creation. Becoming a YouTuber — I believe I have so much to say, but my innocence has been used up on the wrong people. This is where I build my own community, on my own terms. Database security is critical — because leaking people's data would get me linçed like Tosuncuk from Çiftlik Bank.",
   t:["Web Technologies","JavaScript","Supabase (PostgreSQL + Auth + Realtime)"],
   s:"Planning",g:"https://github.com/nosey-dewdrop",co:"#E91E63"},
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
   s:"In development",g:"https://github.com/nosey-dewdrop/coffee-menu",co:"#6F4E37"},
  {e:"🌸",n:"Flower Timer",tg:"fairy garden timer in Java Swing",
   d:"A whimsical productivity timer with fairy garden aesthetics — animated butterflies, flowers, and leaves. Learning Java Swing GUI programming by building something beautiful instead of boring.",
   t:["Java","Java Swing","JavaFX"],
   s:"Early build",g:"https://github.com/nosey-dewdrop/flower-timer",co:"#FD79A8"},
  {e:"🦢",n:"Lala Retro",tg:"skincare ingredient & allergen tracker",
   d:"I'm allergic to something, but what? A tracker to identify which skincare ingredients cause reactions by logging products and symptoms over time. Because a $200 cream (looking at you, La La Retro) isn't special — it just has fewer ingredients.",
   t:["Web Technologies","JavaScript"],
   s:"Planning",g:"https://github.com/nosey-dewdrop/lala-retro",co:"#A29BFE"},
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
  {r:"FAB Fellowship",d:"My window into the startup world — and it changed how I think about building things. Designed community-building projects from scratch, conducted client interviews with 5 participants across completely different tech literacy levels (from my doctor parents who barely use AI agents to CS students who critique API architecture), and learned to evaluate products from a real user's perspective, not a developer's. Built Lady Fantasy (AI tarot video experience) with fal.ai during this period. Met incredible founders and mentors who taught me that startups aren't about code — they're about solving real problems for real people. This fellowship shaped every project I've built since.",p:"2026 – present"},
  {r:"IEEE Bilkent",d:"Board Member & Public Relations Coordinator — one of Bilkent's most active student communities, organizing events, coordinating outreach",p:"2024 – present"},
  {r:"CS115 Teaching Assistant",d:"Introduction to Programming with Python at Bilkent — guided 100+ students through 10 labs, discovered that debugging teaches algorithmic thinking better than writing code from scratch",p:"2025"},
  {r:"Software Persona (Internship)",d:"A program that gives everyone a chance — and at first I didn't find that impressive enough. But that's exactly what makes it beautiful: life is what you make it, and the important thing isn't being chosen, it's what you do with the opportunity. Learned UI/UX fundamentals, Figma prototyping, HTML/CSS/JS from scratch, React basics, database design, open source concepts, and frameworks vs libraries. Built real projects including the Interactive Coffee Menu. Went from someone who only wrote backend logic to someone who understands the full product — design thinking to deployment.",p:"2026"},
  {r:"Hound Coffee Group",d:"Third wave barista & developer — built the interactive coffee menu in JavaScript while learning the art of specialty coffee",p:"2024 – 2025"},
  {r:"Bilkent Sociology Society",d:"Audit Board President (Denetim Kurulu Başkanı) — exploring how society, culture, power, and norms shape every interaction. Also took PSYC102 (Social Psychology). Skills: professional writing, philosophy, critical analysis.",p:"Mar 2024 – Sep 2025"},
  {r:"Bilkent Music, Crochet & TEMA Clubs",d:"Former Board Member across three communities — music theory & performance (Music Club), textile arts (Knitting & Crocheting Society), environmental volunteering (TEMA)",p:"2023 – 2024"},
  {r:"Joyport One Tower",d:"Game Warden — I love spending time with children. They're kind, bright, and innocent in a way the world desperately needs more of. Getting the chance to be around them, play with them, and watch them figure things out was genuinely precious to me.",p:"Aug – Sep 2023"},
];

let cur="home";
function go(p){
  if(p===cur)return;
  document.querySelectorAll(".pg").forEach(x=>x.classList.remove("on"));
  document.querySelectorAll(".nb").forEach(x=>x.classList.remove("on"));
  cur=p;
  requestAnimationFrame(()=>{
    document.getElementById("p-"+p).classList.add("on");
    document.querySelector(`[data-p="${p}"]`).classList.add("on");
    if(p==="projects") setTimeout(()=>document.querySelectorAll(".pk").forEach((c,i)=>setTimeout(()=>c.classList.add("vis"),50+i*30)),30);
  });
}

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

  const sg=document.getElementById("sgrid");
  Object.entries(SK).forEach(([k,v])=>{sg.innerHTML+=`<div class="sc"><h4>${k}</h4>${v.map(i=>`<span>${i}</span>`).join("")}</div>`});

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

  setTimeout(()=>{document.getElementById("p-home").classList.add("on");document.getElementById("hm").classList.add("vis")},100);
});