const NAV=[{k:"home",l:"🦋 home"},{k:"about",l:"💃🏽 about me"},{k:"projects",l:"💐 projects"},{k:"technical",l:"👾 technical"}];
const SCHEDULE_KEY="schedule";
const EM=["🌼","💫","🌙","✨","🌻","💐","🌞","🌷","🌈","👾","🌸","💞","☀️","🎀","🍃","🐞","🦋","🐝","🌺","💖","🧸","🪻","🌹","🎵","☕","🍵","💌","🫧"];

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
  "SwiftUI":{i:"🍎",c:"swu"},"CoreLocation":{i:"📍",c:"swu"},"WeatherAPI":{i:"🌤",c:"web"},"UserNotifications":{i:"🔔",c:"swu"},
};
function tb(n){const m=T[n]||{i:"•",c:"def"};return `<span class="t t-${m.c}"><span class="ti">${m.i}</span>${n}</span>`;}

const P=[
  {e:"☀️",n:"Sunny",tg:"iOS weather app with hand-drawn backgrounds & sunscreen reminders",
   d:"A native iOS weather app that shows <strong>current conditions with illustrated backgrounds</strong> that change based on weather (sunny, cloudy, rainy, hot). Uses <strong>CoreLocation</strong> for GPS + reverse geocoding, fetches real-time data from <strong>WeatherAPI</strong>, and sends <strong>sunscreen reminder notifications</strong> when temperature exceeds your threshold. Features 8 unique hand-drawn weather illustrations, doodle-style typography, staggered entrance animations, and a baby blue settings screen. Built entirely in <strong>SwiftUI</strong> — my first iOS app.",
   t:["SwiftUI","CoreLocation","WeatherAPI","UserNotifications"],
   s:"💐 Built",g:"https://github.com/nosey-dewdrop/sunny",l:"https://nosey-dewdrop.github.io/sunny/",ll:"☀️ documentation",co:"#F39C12"},
  {e:"💌",n:"Forget-Me-Not",tg:"slow letter platform — letters travel based on real distance",
   d:"A slow letter platform where <strong>letters travel based on real geographic distance</strong> (Istanbul→Tokyo = 3.5 days). Built as my <strong>FAB Fellowship final project</strong>. Features: <strong>Google OAuth</strong> via Supabase, bottle mail with random matching, memory box for unsent letters, <strong>user matching with conversation starters</strong>, XP/leveling gamification with collectible stamps, seasonal themes, and <em>a mythology blog about historical love stories</em>. No instant messaging, no read receipts, no pressure — intentionally slow.",
   t:["Next.js (App Router)","React","TypeScript","Supabase (PostgreSQL + Auth)","Google OAuth","CSS","Vercel"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/forget-me-not",l:"https://myosotis-sylvatica.vercel.app",co:"#9B59B6"},
  {e:"🎀",n:"Linçmatik",tg:"mental toughness trainer — social media criticism simulator",
   d:"A full-stack <strong>social media criticism simulator</strong> designed as a mental toughness trainer. Write anything you'd post online → <strong>Claude API generates brutally realistic toxic comments</strong> from different troll personas → you practice handling harsh criticism to build resilience. Features a curated library of quotes and book recommendations. <strong>Python</strong> for the API backend, <strong>React</strong> for the frontend, deployed on <strong>Vercel</strong>. <em>Schopenhauer — people will use dirty tricks in arguments, always expect the worst. Nietzsche — most people aren't trying to destroy you, this is how they act in their point of view. Prince Myshkin — he is the best person. this was his crime.</em>",
   t:["Python","Flask + CORS","Anthropic Claude API","React","Vercel","JavaScript"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/linc-matik",l:"https://lincmatik.vercel.app",co:"#8e35b8"},
  {e:"🎵",n:"Musical Improvisation Tool",tg:"Y2K aesthetic scale identifier & composition aid with Web Audio API — deployed",
   d:"Play or input a few notes → get every possible <strong>scale, mode, chord, and progression</strong> instantly. Built with a <strong>custom music theory algorithm</strong> (Circle of Fifths, 7 diatonic modes, enharmonic mapping). Features <strong>Web Audio API</strong> synthesis for piano & guitar, interactive <strong>piano + guitar fretboard</strong>, QWERTY keyboard mapping, <strong>Spotify</strong> song suggestions per key, and a <strong>chord progression planner</strong>. Includes handwritten essays on music theory & philosophy. <em>Hear a riff like Sails of Charon, punch in the notes, get B Phrygian instantly.</em>",
   t:["JavaScript","HTML/CSS","Web Audio API","Spotify Embed API","LocalStorage API","Music Theory Algorithms"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/musical-improvisation-tool",l:"https://nosey-dewdrop.github.io/musical-improvisation-tool/",co:"#00B894"},
  {e:"💫",n:"Lady Fantasy",tg:"AI-powered tarot video experience — live on Vercel",
   d:"Draw cards from a full <strong>78-card Rider-Waite tarot deck</strong> and watch AI bring them to life as <strong>cinematic video</strong>. Hand-crafted prompts for each card describe the illustration animating — <em>fabrics sway, objects glow, figures reach toward each other.</em> Three fal.ai video models to choose from. Architecture: browser → <strong>4 serverless API routes</strong> (generate, status, result, image) → fal.ai Queue API. API key is server-side only — never exposed to the client.",
   t:["Next.js 15","React 19","Next.js Serverless API Routes","fal.ai Queue API","Minimax Video-01","Hailuo-02 Text-to-Video","FLUX Schnell (Image Gen)","Vercel (Serverless)"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/lady-fantasy",l:"https://lady-fantasy.vercel.app",co:"#6C5CE7"},
  {e:"👾",n:"League of Bilkent",tg:"campus event social platform — CS102 final project, 30 Java files",
   d:"A full-stack campus event management platform built as the <strong>CS102 final project</strong>. <strong>30 Java classes</strong> across MVC architecture: 4 screens, 13 panel components, 8 data models with MySQL integration, and 4 tool utilities. Features <strong>SHA-256 + salt password hashing</strong>, Bilkent email verification via JavaMail API, a complete <strong>XP/tier gamification system</strong> (Seedling → Cosmos), RSVP with calendar conflict detection, threaded comments, follow system, DMs, smart recommendations. UI prototyped in Figma, inspired by <em>Strava's community feed, X's timeline, Instagram's discover page, and Ekşi Sözlük's threaded discussions.</em> <strong>Interactive UML class diagram</strong> with method descriptions and dependency mapping is <a href='https://nosey-dewdrop.github.io/leagueofbilkent-mvp/' target='_blank'>deployed on GitHub Pages</a>.",
   t:["Java 17+","Java Swing","MySQL 8.0","SQL","MVC Architecture","SHA-256 + Salt (Password Hashing)","JavaMail API (Email Verification)","Figma (UI Prototyping)","Git/GitHub"],
   s:"💐 Built & Deployed",g:"https://github.com/nosey-dewdrop/leagueofbilkent-mvp",l:"https://nosey-dewdrop.github.io/leagueofbilkent-mvp/",ll:"✨ live uml website!",co:"#E67E22"},
  {e:"🥦",n:"Butterfry",tg:"food allergen detective — find what's messing with your stomach",
   d:"A food ingredient cross-reference tool. When multiple foods cause reactions (bloating, nausea, heartburn...), add them and <strong>find common ingredients</strong> — the culprit. Features: <strong>24 curated products</strong> + Open Food Facts API for unlimited search, OCR label scanning via <strong>Tesseract.js</strong>, personal reaction tracking, suspect ingredient watchlist, and cross-reference analysis engine. Mint green health-themed UI. All data stays in your browser via localStorage — no accounts, no servers, no tracking.",
   t:["Next.js 16","React 19","TypeScript","Tailwind CSS 4","LocalStorage API"],
   s:"💐 Built",g:"https://github.com/nosey-dewdrop/butterfry",co:"#34d399"},
  {e:"🛒",n:"BilMart",tg:"secondhand marketplace for Bilkent students",
   d:"A desktop marketplace application for buying and selling secondhand items within Bilkent University. Full database-backed user management and item catalog with Bilkent student ID verification for privacy and trust. Built with Java Swing GUI and a relational database for persistent storage.",
   t:["Java","Java Swing","Database","SQL"],
   s:"💐 Built",g:"https://github.com/nosey-dewdrop",co:"#27AE60"},
  {e:"☕",n:"Interactive Coffee Menu",tg:"third wave coffee education — full brewing knowledge",
   d:"Built while working as a barista at Hound Coffee Group, a third wave specialty shop where taste is everything. I learned every brewing method hands-on — Chemex, V60, French press, aeropress, cold brew, siphon — and understand extraction science, grind size, water temperature, and how each variable affects flavor. This interactive menu teaches customers the real differences: americano vs filter, cappuccino vs latte vs flat white vs cortado, with visual breakdowns of milk ratios, extraction methods, and flavor profiles. Because third wave coffee isn't about speed — it's about understanding what you're drinking.",
   t:["JavaScript","HTML/CSS"],
   s:"💐 Live",g:"https://github.com/nosey-dewdrop/coffee-menu",l:"https://nosey-dewdrop.github.io/coffee-menu/",co:"#6F4E37"},
  {e:"🌸",n:"Flower Timer",tg:"fairy garden timer in Java Swing",
   d:"A whimsical productivity timer with fairy garden aesthetics — animated butterflies, flowers, and leaves. Learning Java Swing GUI programming by building something beautiful instead of boring.",
   t:["Java","Java Swing","JavaFX"],
   s:"💐 Early build",g:"https://github.com/nosey-dewdrop/flower-timer",co:"#FD79A8"},
];

const SCHED=[
  {e:"🎀",n:"Linçmatik",note:"it is live. i bought tokens. you can mentally practice yourself. slay!!!",s:"💐 live"},
  {e:"🎵",n:"Musical Improvisation Tool",note:"such a beautiful website. helps you identify scales, make chord progressions. no database but local storage. i think it is a useful tool with song recommendations in related scale.",s:"💐 live"},
  {e:"💌",n:"Forget-Me-Not",note:"a huge letter platform. there is a lot to implement. will take weeks, maybe whole semester. nevertheless, it is live now! i need to start advertising it on linkedin.",s:"💐 live"},
  {e:"💫",n:"Lady Fantasy",note:"tarot, lenormand, blogs using claude api and fal.ai api — finished but needs to be polished. it simply uses fortune telling with prompts.",s:"needs polish"},
  {e:"🌙",n:"Moonlight",note:"easy, astrology platform. i love watching moon phases. moon phases, horary added.",s:"core done"},
  {e:"🌊",n:"Dewdrop",note:"events platform. MVP can be done. my name is damla su, in english drop, drip, dewdrop, waterdrop. inspo is communities are like an ocean, nevertheless we are all individual drops. everyone does a project like this. what i can have that they don't?",s:"MVP possible"},
  {e:"🐞",n:"LadyBug",note:"will take ages but MVP can be done. while working as a TA for CS115, i found out that people were not really learning by writing code. it was teaching when you were trying to find and correct a logical error, which is silent but more destructive for the code.",s:"MVP possible"},
  {e:"🌷",n:"Damlacık",note:"a personal community platform. i am becoming a youtuber. i believe i have so much to say, but my innocence has been used up on the wrong people. it might take some weeks. database should be secured, else i will be linçed like tosuncuk from çiftlik bank for stealing (leaking) people's data. for building a community. still on planning because i want a community platform but i can't find an astonishing point for this project only for this moment because my mind is too full... <strong>stack:</strong> Supabase (PostgreSQL + Auth + Realtime), JavaScript, Web Technologies. <strong>mock:</strong> youtube channel integration, community feed, user profiles, content scheduling, comment threads.",s:"planning"},
  {e:"🥦",n:"Butterfry",note:"food allergen detective! cross-reference foods that mess with you to find the common ingredient culprit. 24 curated products + Open Food Facts API. OCR scanning. mint themed. it's built!",s:"💐 built"},
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
  "programming languages":["Java","Python","C++","JavaScript","TypeScript","Swift","HTML/CSS","SQL","SystemVerilog"],
  "frameworks & libraries":["Next.js (14–16, App Router)","React 19","SwiftUI","Flask","Tailwind CSS","Java Swing","JavaFX","SpringBoot","Numpy","Matplotlib"],
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
    const navBtn=document.querySelector(`[data-p="${p}"]`);
    if(navBtn)navBtn.classList.add("on");
    const schedBtn=document.querySelector(".nl-sched");
    if(schedBtn){if(p==="schedule")schedBtn.classList.add("on");else schedBtn.classList.remove("on");}
    const lpBtn=document.querySelector(".nl-lp");
    if(lpBtn){if(p==="lifeplan")lpBtn.classList.add("on");else lpBtn.classList.remove("on");}
    if(p==="home") setTimeout(()=>{const hm=document.querySelector(".hm");if(hm)hm.classList.add("vis");},30);
    if(p==="projects") renderProjects(0);
    if(p==="schedule") setTimeout(()=>document.querySelectorAll("#sched-list .es").forEach((c,i)=>setTimeout(()=>c.classList.add("vis"),40+i*60)),30);
    if(p==="technical") renderTech(0);
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
  const selEM=EM.sort(()=>Math.random()-.5).slice(0,12);
  selEM.forEach((e)=>{const s=document.createElement("span");s.className="fl";s.textContent=e;s.style.left=`${40+Math.random()*58}%`;s.style.animationDelay=`${Math.random()*16}s`;s.style.animationDuration=`${10+Math.random()*8}s`;fb.appendChild(s)});

  const pl=document.getElementById("plist");
  const PER_PAGE=4;
  let pPage=0;
  function renderProjects(page){
    pPage=page;
    const start=page*PER_PAGE,end=Math.min(start+PER_PAGE,P.length);
    pl.innerHTML="";
    P.slice(start,end).forEach((p,i)=>{
      const d=document.createElement("div");d.className="pk";d.style.transitionDelay=`${i*.05}s`;
      const isGreen=p.s.includes('Live')||p.s.includes('Built')||p.s.includes('MVP');
      d.innerHTML=`
        <div class="pt"><span class="pe">${p.e}</span><div style="flex:1">
          <div class="ptr"><h3 class="pn">${p.n}</h3><span class="ps" style="color:${isGreen?'#2B8A3E':p.co};background:${isGreen?'#E6F9ED':p.co+'15'};border:1px solid ${isGreen?'#8FD5A6':p.co+'30'}">${p.s}</span></div>
          <div class="ptg">${p.tg}</div>
        </div></div>
        <p class="pd">${p.d}</p>
        <div class="tb">${p.t.map(tb).join("")}</div>
        <div class="pll">
          <a href="${p.g}" target="_blank" class="plk">→ github</a>
          ${p.l?`<a href="${p.l}" target="_blank" class="plk plk-l">${p.ll||"✨ live demo !"}</a>`:""}
        </div>`;
      pl.appendChild(d);
    });
    const totalPages=Math.ceil(P.length/PER_PAGE);
    const pagerTop=document.getElementById("proj-pager-top");
    pagerTop.className="pp";pagerTop.style.marginBottom="14px";pagerTop.innerHTML="";
    for(let i=0;i<totalPages;i++){
      const b=document.createElement("button");b.className="pp-b"+(i===page?" on":"");b.textContent=i+1;
      b.onclick=()=>{renderProjects(i);document.getElementById("p-projects").scrollTop=0;};
      pagerTop.appendChild(b);
    }
    setTimeout(()=>pl.querySelectorAll(".pk").forEach((c,i)=>setTimeout(()=>c.classList.add("vis"),40+i*60)),30);
  }
  renderProjects(0);

  const sl=document.getElementById("sched-list");
  sl.innerHTML=`<div class="es">${SCHED.map(s=>{const isLive=s.s.includes('live');return `<div class="ei"><div class="er"><span style="margin-right:6px">${s.e}</span>${s.n} <span class="ps" style="color:${isLive?'#2B8A3E':'var(--muted)'};background:${isLive?'#E6F9ED':'var(--baby-light)'};border:1px solid ${isLive?'#8FD5A6':'var(--border)'};margin-left:8px;font-size:9px;padding:2px 8px;border-radius:2px">${s.s}</span></div><div class="ed">${s.note}</div></div>`;}).join("")}</div>`;

  const techContent=document.getElementById("tech-content");
  const techPagerTop=document.getElementById("tech-pager-top");
  const techPages=[
    {label:"experience",html:`<div class="es"><h4>experience & involvement</h4>${EX.map(e=>`<div class="ei"><div class="er">${e.r}</div><div class="ed">${e.d}</div><div class="ep">${e.p}</div></div>`).join("")}</div>`},
    {label:"education",html:`<div class="es"><h4>education</h4>
      <div class="ei"><div class="er">Bilkent University</div><div class="ed">B.Sc. in Computer Science</div><div class="ep">2023 – present</div></div>
      <div class="ei"><div class="er">Medipol University</div><div class="ed">Medicine — 91/100</div><div class="ep">2020 – 2023</div></div>
      <div class="ei"><div class="er">Damla Fen Lisesi (Open High School)</div><div class="ed">Transferred in 12th grade for cancer treatment. What looked like darkness became the most transformative period of my life — learned 2 instruments, studied music theory, spent time with ideas and art. Learned to manage my own life on my own terms.</div><div class="ep">2019 – 2020</div></div>
      <div class="ei"><div class="er">Nesibe Aydın Fen Lisesi (Science High School)</div><div class="ed">GPA: 96.68/100 — Top class C, ranked 1–20. Active MUN delegate: BHMUN 2016, MUNBU 2017, MUNTR 2017, NAMUN 2018. Skills: Negotiation, public speaking, diplomacy.</div><div class="ep">2016 – 2019</div></div>
    </div>`},
    {label:"skills",html:`<div class="sg">${Object.entries(SK).map(([k,v])=>`<div class="sc"><h4>${k}</h4>${v.map(i=>`<span>${i}</span>`).join("")}</div>`).join("")}</div>`}
  ];
  let tPage=0;
  function renderTech(page){
    tPage=page;
    techContent.innerHTML=techPages[page].html;
    techPagerTop.className="pp";techPagerTop.style.marginBottom="14px";techPagerTop.innerHTML="";
    techPages.forEach((tp,i)=>{
      const b=document.createElement("button");b.className="pp-b"+(i===page?" on":"");b.textContent=tp.label;
      b.onclick=()=>{renderTech(i);document.getElementById("p-technical").scrollTop=0;};
      techPagerTop.appendChild(b);
    });
    setTimeout(()=>techContent.querySelectorAll(".sc,.es").forEach((c,i)=>setTimeout(()=>c.classList.add("vis"),40+i*60)),30);
  }
  renderTech(0);

  const eu="su.bilge",edom="ug.bilkent.edu.tr",ea=eu+"@"+edom;
  const el=document.getElementById("email-link"),et=document.getElementById("email-text");
  if(el&&et){el.href="mailto:"+ea;et.textContent=ea;}
  const mi=document.getElementById("mail-ideas");
  if(mi)mi.href="mailto:"+ea+"?subject=Project Idea";

  const hash=location.hash.replace("#","");
  const allPages=[...NAV.map(n=>n.k),"schedule","lifeplan"];
  const startPage=allPages.includes(hash)?hash:"home";
  cur="";go(startPage);
});