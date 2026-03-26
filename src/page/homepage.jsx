import { useState, useEffect, useRef, useCallback } from "react";
import youtube3 from '../assets/images/3.png'
import youtube1 from '../assets/images/1.png'
import youtube2 from '../assets/images/2.png'
import kios from '../assets/images/kios.png'
import reactIcon from '../assets/icon/react.png'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaYoutube } from "react-icons/fa";

// ─── REACT ICONS IMPORTS ──────────────────────────────────────────────────────
import { FiMonitor, FiSettings, FiDatabase, FiTool, FiGlobe, FiServer, FiLink, FiGitBranch, FiCloud, FiRefreshCw, FiMail, FiMessageCircle, FiGithub, FiCode, FiFigma } from "react-icons/fi";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiSupabase, SiTailwindcss, SiThreedotjs, SiFastapi, SiExpress } from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";


const CYAN = "0,245,255";
const ORANGE = "255,107,0";

// ─── ICON HELPER ──────────────────────────────────────────────────────────────
const Icon = ({ Component, size = 20, color = "rgb(0,245,255)" }) => (
  <Component size={size} color={color} style={{ display: "inline-block", verticalAlign: "middle" }} />
);

const ICONS = {
  monitor: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiMonitor} size={s} color={c} />,
  gear: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiSettings} size={s} color={c} />,
  database: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiDatabase} size={s} color={c} />,
  wrench: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiTool} size={s} color={c} />,
  react: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FaReact} size={s} color={c} />,
  nextjs: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiNextdotjs} size={s} color={c} />,
  typescript: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiTypescript} size={s} color={c} />,
  palette: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiTailwindcss} size={s} color={c} />,
  globe: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiThreedotjs} size={s} color={c} />,
  nodejs: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FaNodeJs} size={s} color={c} />,
  server: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiExpress} size={s} color={c} />,
  python: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FaPython} size={s} color={c} />,
  bolt: (s = 20, c = "rgb(0,245,255)") => <Icon Component={HiLightningBolt} size={s} color={c} />,
  link: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiLink} size={s} color={c} />,
  elephant: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiPostgresql} size={s} color={c} />,
  leaf: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiMongodb} size={s} color={c} />,
  circle: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiRedis} size={s} color={c} />,
  diamond: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiPrisma} size={s} color={c} />,
  gitBranch: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiGitBranch} size={s} color={c} />,
  docker: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FaDocker} size={s} color={c} />,
  figma: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiFigma} size={s} color={c} />,
  cloud: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiCloud} size={s} color={c} />,
  refresh: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiRefreshCw} size={s} color={c} />,
  fastapi: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiFastapi} size={s} color={c} />,
  supabase: (s = 20, c = "rgb(0,245,255)") => <Icon Component={SiSupabase} size={s} color={c} />,
  mail: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiMail} size={s} color={c} />,
  messageCircle: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiMessageCircle} size={s} color={c} />,
  github: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiGithub} size={s} color={c} />,
  code: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FiCode} size={s} color={c} />,
  user: (s = 60, c = "rgb(0,245,255)") => <Icon Component={FiCode} size={s} color={c} />,
  youtube: (s = 20, c = "rgb(0,245,255)") => <Icon Component={FaYoutube} size={s} color={c} />,
};

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const STATS = [
  { target: 3, suffix: "+", label: "Years Exp." },
  { target: 24, suffix: "", label: "Projects Done" },
  { target: 99, suffix: "%", label: "Passion" },
  { target: 12, suffix: "", label: "Happy Clients" },
];

const SKILLS = [
  {
    cat: "Frontend",
    iconKey: "monitor",
    items: [
      { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", iconUrl: reactIcon },
      { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Flutter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Tailwind CSS", iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    ],
  },
  {
    cat: "Backend",
    iconKey: "gear",
    items: [
      { name: "Node", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Go", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "C#.NET", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "REST API", iconUrl: "https://cdn-icons-png.flaticon.com/512/906/906175.png" },
    ],
  },
  {
    cat: "Database",
    iconKey: "database",
    items: [
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebse", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    cat: "Tools",
    iconKey: "wrench",
    items: [
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Jira", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "CI/CD", iconUrl: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
    ],
  },
  {
    cat: "Test",
    iconKey: "wrench",
    items: [
      { name: "Playwright", iconUrl: "https://playwright.dev/img/playwright-logo.svg" },
    ],
  },
];

const PROJECTS = [
  { id: "060", title: "Kios App", category: "Intern Project", tags: ["Flutter", "Go"], desc: "โจทย์ยอดฮิตจาก LeetCode ที่ให้หาคู่ตัวเลขใน array ที่มีผลรวมเท่ากับ target โดยเน้นการใช้เทคนิค Hash Map เพื่อเพิ่มประสิทธิภาพในการค้นหา", status: "ARCHIVE", color: ORANGE, img: kios, link: "https://lolsdsdsdsdasdasdsadwad.my.canva.site/black-yellow-gradient-modern-company-profile-presentation" },
  { id: "061", title: "LeetCode Two Sum", category: "Youtube", tags: ["Python"], desc: "โจทย์ยอดฮิตจาก LeetCode ที่ให้หาคู่ตัวเลขใน array ที่มีผลรวมเท่ากับ target โดยเน้นการใช้เทคนิค Hash Map เพื่อเพิ่มประสิทธิภาพในการค้นหา", status: "ARCHIVE", color: ORANGE, img: youtube1, link: "https://youtu.be/w5bQCtVhwyU?si=IRspVjtw8zeLJzSw" },
  { id: "062", title: "Add Two Numbers", category: "Youtube", tags: ["Python"], desc: "สอนแก้โจทย์บวกเลขสองจำนวนที่อยู่ในรูปแบบ Linked List โดยต้องจัดการการทดเลข (carry) ทีละหลักอย่างถูกต้อง", status: "ARCHIVE", color: ORANGE, img: youtube2, link: "https://youtu.be/GDPLmPEXSqg?si=9aW35-7alCUNty37" },
  { id: "063", title: "Longest Substring Without Repeating Characters", category: "Youtube", tags: ["Python"], desc: "สอนแก้โจทย์หาความยาว substring ที่ไม่มีตัวอักษรซ้ำ โดยใช้เทคนิค Sliding Window เพื่อให้ได้ประสิทธิภาพ O(n)", status: "ARCHIVE", color: ORANGE, img: youtube3, link: "https://youtu.be/DSN9rgC4990?si=97CNG0VkRXMBvIYp" },
];

const FILTER_CATS = ["ALL", "Intern Project", "Youtube"];

// ─── SVG DEFAULT THUMBNAIL ────────────────────────────────────────────────────
function makeDefaultSVG(proj) {
  const c = proj.color;
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="200" viewBox="0 0 640 200">',
    '<defs>',
    `<radialGradient id="rbg${proj.id}" cx="30%" cy="40%" r="90%">`,
    `<stop offset="0%" stop-color="rgb(${c})" stop-opacity="0.18"/>`,
    `<stop offset="100%" stop-color="#020408" stop-opacity="1"/>`,
    '</radialGradient>',
    `<pattern id="grd${proj.id}" width="28" height="28" patternUnits="userSpaceOnUse">`,
    `<path d="M28 0L0 0 0 28" fill="none" stroke="rgb(${c})" stroke-width="0.4" stroke-opacity="0.2"/>`,
    '</pattern>',
    '</defs>',
    '<rect width="640" height="200" fill="#060c12"/>',
    `<rect width="640" height="200" fill="url(#rbg${proj.id})"/>`,
    `<rect width="640" height="200" fill="url(#grd${proj.id})"/>`,
    `<line x1="-30" y1="200" x2="230" y2="-30" stroke="rgb(${c})" stroke-width="0.6" stroke-opacity="0.1"/>`,
    `<line x1="120" y1="200" x2="380" y2="-30" stroke="rgb(${c})" stroke-width="0.6" stroke-opacity="0.07"/>`,
    `<line x1="280" y1="200" x2="540" y2="-30" stroke="rgb(${c})" stroke-width="0.6" stroke-opacity="0.05"/>`,
    `<polyline points="16,34 16,16 34,16" fill="none" stroke="rgb(${c})" stroke-width="1.8" stroke-opacity="0.7"/>`,
    `<polyline points="624,34 624,16 606,16" fill="none" stroke="rgb(${c})" stroke-width="1.8" stroke-opacity="0.7"/>`,
    `<polyline points="16,166 16,184 34,184" fill="none" stroke="rgb(${c})" stroke-width="1.8" stroke-opacity="0.35"/>`,
    `<polyline points="624,166 624,184 606,184" fill="none" stroke="rgb(${c})" stroke-width="1.8" stroke-opacity="0.35"/>`,
    `<text x="320" y="115" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="120" font-weight="900" fill="rgb(${c})" fill-opacity="0.055" letter-spacing="-6">${proj.id}</text>`,
    `<text x="320" y="84" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="21" font-weight="700" fill="rgb(${c})" fill-opacity="0.9" letter-spacing="3">${proj.title}</text>`,
    `<text x="320" y="116" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="9.5" fill="rgb(${c})" fill-opacity="0.4" letter-spacing="3.5">${proj.category.toUpperCase()}</text>`,
    `<rect x="0" y="100" width="640" height="1" fill="rgb(${c})" fill-opacity="0.055"/>`,
    '</svg>'
  ].join('');
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const G = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Share+Tech+Mono&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:#020408;color:#e0e8f0;font-family:'Rajdhani',sans-serif;overflow-x:hidden;cursor:none;}
@keyframes gridMove{from{background-position:0 0}to{background-position:60px 60px}}
@keyframes scanDown{0%{top:-2px;opacity:0}5%{opacity:.5}95%{opacity:.5}100%{top:100%;opacity:0}}
@keyframes hR{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.6)}}
@keyframes scrollDown{0%{top:-100%}100%{top:200%}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes skillPop{0%{opacity:0;transform:scale(0.5) translateY(10px)}100%{opacity:1;transform:scale(1) translateY(0)}}
@keyframes g1{0%,89%,100%{clip-path:inset(0 0 100% 0);transform:translate(0)}90%{clip-path:inset(20% 0 60% 0);transform:translate(-3px,0)}93%{clip-path:inset(55% 0 20% 0);transform:translate(3px,0)}96%{clip-path:inset(75% 0 5% 0);transform:translate(-2px,0)}}
@keyframes g2{0%,91%,100%{clip-path:inset(0 0 100% 0);transform:translate(0)}92%{clip-path:inset(40% 0 40% 0);transform:translate(2px,0)}95%{clip-path:inset(10% 0 70% 0);transform:translate(-2px,0)}98%{clip-path:inset(65% 0 10% 0);transform:translate(1px,0)}}
.gw{position:relative;display:inline-block;}
.gw::before,.gw::after{content:attr(data-text);position:absolute;inset:0;background:linear-gradient(90deg,rgb(0,245,255),rgb(255,107,0));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;pointer-events:none;}
.gw::before{animation:g1 4s step-end infinite;opacity:.7;}
.gw::after{animation:g2 4s step-end .6s infinite;opacity:.5;}
.hb{animation:hR 1.2s .15s both;}.ht{animation:hR 1.2s .25s both;}.hs{animation:hR 1.2s .38s both;}.ha{animation:hR 1.2s .48s both;}.hst{animation:hR 1.2s .62s both;}
.nl{position:relative;}
.nl::after{content:'';position:absolute;bottom:-4px;left:0;right:0;height:1px;background:rgb(0,245,255);transform:scaleX(0);transition:transform .3s;}
.nl:hover{color:rgb(0,245,255)!important;}.nl:hover::after,.nl.active::after{transform:scaleX(1);}
.nl.active{color:rgb(0,245,255)!important;}
.bp::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.25),transparent);transform:translateX(-100%);transition:transform .4s;}
.bp:hover::before{transform:translateX(100%);}
.bp:hover{box-shadow:0 0 40px rgba(0,245,255,.5),0 0 80px rgba(0,245,255,.2);transform:translateY(-2px);}
.bs:hover{background:rgba(255,107,0,.12)!important;border-color:rgb(255,107,0)!important;box-shadow:0 0 30px rgba(255,107,0,.4);transform:translateY(-2px);}
.nc:hover{background:rgb(0,245,255)!important;color:#020408!important;}
.fl:hover{color:rgb(0,245,255)!important;}
.pc{opacity:0;transform:translateY(30px);transition:opacity .5s ease,transform .5s ease;}
.pc.vis{opacity:1;transform:translateY(0);}
.pc:hover .pc-overlay{opacity:1;}
.pc:hover .pc-img{transform:scale(1.06);}
.pc-overlay{position:absolute;inset:0;background:rgba(2,4,8,.88);opacity:0;transition:opacity .3s;display:flex;flex-direction:column;justify-content:flex-end;padding:22px;}
.pc-img{transition:transform .6s cubic-bezier(.25,.46,.45,.94);width:100%;height:100%;object-fit:cover;display:block;}
.sk-badge{opacity:0;transform:scale(0.5) translateY(10px);}
.sk-badge.go{animation:skillPop .35s cubic-bezier(.34,1.56,.64,1) forwards;}
.sk-badge-wrap:hover .sk-badge-inner{border-color:rgba(0,245,255,.6)!important;background:rgba(0,245,255,.1)!important;box-shadow:0 0 16px rgba(0,245,255,.25);}
.sk-badge-wrap:hover .sk-badge-label{color:rgb(0,245,255)!important;}
.filter-btn{font-family:'Share Tech Mono',monospace;font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;padding:7px 16px;border:1px solid rgba(0,245,255,.2);color:rgba(200,220,240,.45);background:transparent;cursor:pointer;transition:all .25s;clip-path:polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%);}
.filter-btn:hover{border-color:rgba(0,245,255,.5);color:rgb(0,245,255);}
.filter-btn.active{border-color:rgb(0,245,255);color:rgb(0,245,255);background:rgba(0,245,255,.08);}
.cur{position:fixed;width:12px;height:12px;background:rgb(0,245,255);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);box-shadow:0 0 20px rgba(0,245,255,.6),0 0 60px rgba(0,245,255,.3);transition:width .2s,height .2s;}
.crg{position:fixed;width:36px;height:36px;border:1.5px solid rgba(0,245,255,.5);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .3s,height .3s,border-color .3s;}
.inp{width:100%;background:rgba(0,245,255,.04);border:1px solid rgba(0,245,255,.15);color:#e0e8f0;font-family:'Rajdhani',sans-serif;font-size:1rem;padding:14px 18px;outline:none;transition:border-color .3s;}
.inp:focus{border-color:rgba(0,245,255,.5);}
.inp::placeholder{color:rgba(200,220,240,.3);}
.sec-in{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease;}
.sec-in.vis{opacity:1;transform:translateY(0);}
@media(max-width:768px){
  nav .nav-desktop{display:none!important;}
  .hero-stats-bar{flex-wrap:wrap;}
  .hero-stats-bar>div{min-width:50%;border-right:none!important;border-bottom:1px solid rgba(0,245,255,.08);}
  .skills-grid,.projects-grid,.about-grid{grid-template-columns:1fr!important;}
  footer{flex-direction:column;align-items:center;text-align:center;}
}
`;

// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useCanvas(ref) {
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); let W, H, fr = 0, gt = 0, raf;
    const pts = Array.from({ length: 80 }, () => ({ x: Math.random() * 2000, y: Math.random() * 1000, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.6 + .4, op: Math.random() * .5 + .1, col: Math.random() > .55 ? CYAN : ORANGE, ph: Math.random() * Math.PI * 2 }));
    const beams = Array.from({ length: 5 }, () => ({ x: Math.random() * 2000, y: Math.random() * 1000, ang: Math.random() * Math.PI * 2, spd: (Math.random() + .3) * .3, len: Math.random() * 160 + 80, op: Math.random() * .18 + .04, col: Math.random() > .5 ? CYAN : ORANGE }));
    function resize() { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; } resize();
    const ro = new ResizeObserver(resize); ro.observe(c);
    function hex() { const sz = 55, ww = sz * 2, hh = Math.sqrt(3) * sz, ox = fr * .04 % ww, oy = fr * .028 % hh; ctx.strokeStyle = "rgba(0,245,255,0.03)"; ctx.lineWidth = .5; for (let r = -1; r < H / hh + 2; r++)for (let cl = -1; cl < W / ww + 2; cl++) { const offX = r % 2 === 0 ? 0 : ww * .75, cx = cl * ww * 1.5 + offX - ox, cy = r * hh - oy; ctx.beginPath(); for (let a = 0; a < 6; a++) { const ag = a * Math.PI / 3; a === 0 ? ctx.moveTo(cx + sz * .88 * Math.cos(ag), cy + sz * .88 * Math.sin(ag)) : ctx.lineTo(cx + sz * .88 * Math.cos(ag), cy + sz * .88 * Math.sin(ag)); } ctx.closePath(); ctx.stroke(); } }
    function drawBeams() { beams.forEach(b => { b.x += Math.cos(b.ang) * b.spd; b.y += Math.sin(b.ang) * b.spd; if (b.x < -200 || b.x > W + 200 || b.y < -200 || b.y > H + 200) { b.x = Math.random() * W; b.y = Math.random() * H; } const g = ctx.createLinearGradient(b.x, b.y, b.x - Math.cos(b.ang) * b.len, b.y - Math.sin(b.ang) * b.len); g.addColorStop(0, `rgba(${b.col},${b.op})`); g.addColorStop(1, `rgba(${b.col},0)`); ctx.beginPath(); ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.moveTo(b.x, b.y); ctx.lineTo(b.x - Math.cos(b.ang) * b.len, b.y - Math.sin(b.ang) * b.len); ctx.stroke(); }); }
    function drawPts() { pts.forEach(p => { p.x += p.vx; p.y += p.vy; p.ph += .018; if (p.x < 0) p.x = W; if (p.x > W) p.x = 0; if (p.y < 0) p.y = H; if (p.y > H) p.y = 0; const o = p.op * (.7 + .3 * Math.sin(p.ph)); ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(${p.col},${o})`; ctx.fill(); ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2); ctx.fillStyle = `rgba(${p.col},${o * .12})`; ctx.fill(); }); }
    function conn() { for (let i = 0; i < pts.length; i++)for (let j = i + 1; j < pts.length; j++) { const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y); if (d < 100) { ctx.beginPath(); ctx.strokeStyle = `rgba(0,245,255,${(1 - d / 100) * .09})`; ctx.lineWidth = .5; ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); } } }
    function gl() { gt++; if (gt > 220 && Math.random() > .97) { const gh = Math.random() * 20 + 3, gy = Math.random() * H; ctx.fillStyle = "rgba(255,0,60,0.03)"; ctx.fillRect(0, gy, W, gh); ctx.fillStyle = "rgba(0,245,255,0.02)"; ctx.fillRect(0, gy + 2, W, gh * .5); gt = 0; } }
    function anim() { fr++; ctx.clearRect(0, 0, W, H); const bg = ctx.createRadialGradient(W * .5, H * .42, 0, W * .5, H * .42, W * .85); bg.addColorStop(0, "rgba(0,25,38,0.97)"); bg.addColorStop(.45, "rgba(2,8,18,0.99)"); bg.addColorStop(1, "rgba(2,4,8,1)"); ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H); const g1 = ctx.createRadialGradient(W * .28, H * .5, 0, W * .28, H * .5, W * .3); g1.addColorStop(0, "rgba(0,80,120,0.15)"); g1.addColorStop(1, "rgba(0,80,120,0)"); ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H); const g2 = ctx.createRadialGradient(W * .72, H * .38, 0, W * .72, H * .38, W * .22); g2.addColorStop(0, "rgba(120,40,0,0.12)"); g2.addColorStop(1, "rgba(120,40,0,0)"); ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H); hex(); drawBeams(); conn(); drawPts(); gl(); raf = requestAnimationFrame(anim); }
    anim(); return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [ref]);
}

function useCursor() {
  const cr = useRef(null), rr = useRef(null), pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  useEffect(() => {
    function mv(e) { pos.current.mx = e.clientX; pos.current.my = e.clientY; if (cr.current) { cr.current.style.left = e.clientX + "px"; cr.current.style.top = e.clientY + "px"; } }
    document.addEventListener("mousemove", mv);
    let raf; (function loop() { const p = pos.current; p.rx += (p.mx - p.rx) * .12; p.ry += (p.my - p.ry) * .12; if (rr.current) { rr.current.style.left = p.rx + "px"; rr.current.style.top = p.ry + "px"; } raf = requestAnimationFrame(loop); })();
    return () => { document.removeEventListener("mousemove", mv); cancelAnimationFrame(raf); };
  }, []);
  const oe = useCallback(() => { if (!cr.current || !rr.current) return; cr.current.style.width = "5px"; cr.current.style.height = "5px"; rr.current.style.width = "52px"; rr.current.style.height = "52px"; rr.current.style.borderColor = "rgba(255,107,0,0.8)"; }, []);
  const ol = useCallback(() => { if (!cr.current || !rr.current) return; cr.current.style.width = "12px"; cr.current.style.height = "12px"; rr.current.style.width = "36px"; rr.current.style.height = "36px"; rr.current.style.borderColor = "rgba(0,245,255,0.5)"; }, []);
  return { cr, rr, oe, ol };
}

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; setTimeout(() => el.classList.add("vis"), delay); io.disconnect(); }, { threshold: .12 });
    io.observe(el); return () => io.disconnect();
  }, [ref, delay]);
}

// ─── STAT ITEM ────────────────────────────────────────────────────────────────
function StatItem({ target, suffix, label, isLast }) {
  const ref = useRef(null); const [v, setV] = useState("0" + suffix);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; let s = 0, tot = 70; const t = setInterval(() => { s++; const c2 = target * (s / tot); if (s >= tot) { clearInterval(t); setV(target + suffix); return; } setV((Number.isInteger(target) ? Math.floor(c2) : c2.toFixed(1)) + suffix); }, 18); io.disconnect(); }, { threshold: .4 });
    io.observe(el); return () => io.disconnect();
  }, [target, suffix]);
  return (
    <div ref={ref} style={{ flex: 1, minWidth: 120, padding: "18px 24px", textAlign: "center", borderRight: isLast ? "none" : "1px solid rgba(0,245,255,0.08)" }}>
      <span style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.9rem", fontWeight: 900, color: "rgb(0,245,255)", textShadow: "0 0 20px rgba(0,245,255,.6)", display: "block", lineHeight: 1 }}>{v}</span>
      <span style={{ fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(200,220,240,.35)", display: "block", marginTop: 5 }}>{label}</span>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ proj, index }) {
  const ref = useRef(null);
  const col = `rgb(${proj.color})`;
  const displayImg = proj.img || makeDefaultSVG(proj);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; setTimeout(() => el.classList.add("vis"), index * 80); io.disconnect(); }, { threshold: .1 });
    io.observe(el); return () => io.disconnect();
  }, [index]);

  const statusColor = proj.status === "LIVE" ? "rgb(0,245,255)" : proj.status === "BETA" ? "rgb(255,200,0)" : proj.status === "OPEN SOURCE" ? "rgb(100,255,120)" : "rgba(200,220,240,.3)";

  return (
    <a href={proj.link} target="_blank" ref={ref} className="pc" style={{ background: "rgba(7,13,20,.8)", border: `1px solid rgba(${proj.color},.12)`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 2, background: `linear-gradient(90deg,${col},transparent)` }} />
      <div style={{ height: 200, position: "relative", overflow: "hidden", flexShrink: 0 }}>
        <img className="pc-img" src={displayImg} alt={proj.title} />
        <div className="pc-overlay">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            {proj.tags.map(t => (
              <span key={t} style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".6rem", letterSpacing: ".1em", padding: "2px 8px", border: `1px solid rgba(${proj.color},.4)`, color: col }}>{t}</span>
            ))}
          </div>
          <a href={proj.link} style={{ fontFamily: "'Orbitron',monospace", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: col, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>VIEW PROJECT →</a>
        </div>
      </div>
      <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
          <div>
            <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".6rem", letterSpacing: ".2em", color: `rgba(${proj.color},.6)`, marginBottom: 4 }}>{proj.category} · {proj.year}</div>
            <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 700, letterSpacing: ".05em", color: "#fff" }}>{proj.title}</h3>
          </div>
          <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".58rem", letterSpacing: ".15em", padding: "3px 10px", border: `1px solid ${statusColor}`, color: statusColor, whiteSpace: "nowrap", flexShrink: 0, marginTop: 2 }}>{proj.status}</span>
        </div>
        <p style={{ fontSize: ".88rem", lineHeight: 1.7, color: "rgba(200,220,240,.55)", flex: 1 }}>{proj.desc}</p>
      </div>
    </a>
  );
}

// ─── SKILL BADGE ──────────────────────────────────────────────────────────────
function SkillBadge({ name, iconUrl, baseDelay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      setTimeout(() => el.classList.add("go"), baseDelay);
      io.disconnect();
    }, { threshold: 0.3 });

    io.observe(el);
    return () => io.disconnect();
  }, [baseDelay]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div ref={ref} className="sk-badge">
        <div
          style={{
            width: 52,
            height: 52,
            border: "1px solid rgba(0,245,255,.18)",
            background: "rgba(0,245,255,.04)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={iconUrl} alt={name} style={{ width: 22, height: 22 }} />
        </div>
      </div>
      <span style={{ fontSize: ".58rem", color: "rgba(200,220,240,.45)" }}>
        {name}
      </span>
    </div>
  );
}

// ─── SKILL CAT ────────────────────────────────────────────────────────────────
function SkillCat({ cat, iconKey, items, index }) {
  const ref = useRef(null); useReveal(ref, index * 120);
  const catIconFn = ICONS[iconKey];
  return (
    <div ref={ref} className="sec-in" style={{ background: "rgba(0,245,255,.02)", border: "1px solid rgba(0,245,255,.07)", padding: "32px 28px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,rgb(0,245,255),transparent)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
        <span style={{ display: "flex", alignItems: "center" }}>{catIconFn ? catIconFn(26, "rgb(0,245,255)") : null}</span>
        <span style={{ fontFamily: "'Orbitron',monospace", fontSize: ".8rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "rgb(0,245,255)" }}>{cat}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {/* ✅ แก้ตรงนี้: ส่ง iconUrl แทน iconKey */}
        {items.map((item, i) => (
          <SkillBadge
            key={item.name}
            name={item.name}
            iconUrl={item.iconUrl}
            baseDelay={(index * 120) + (i * 70)}
          />
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ tag, title, accent }) {
  const ref = useRef(null); useReveal(ref);
  return (
    <div ref={ref} className="sec-in" style={{ marginBottom: 60 }}>
      <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".72rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgb(0,245,255)", marginBottom: 10, opacity: .8 }}>{tag}</div>
      <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: ".04em" }}>
        {title} <span style={{ color: "rgb(255,107,0)" }}>{accent}</span>
      </h2>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function PoochitPortfolio() {
  const cvs = useRef(null); useCanvas(cvs);
  const { cr, rr, oe, ol } = useCursor();
  const hp = { onMouseEnter: oe, onMouseLeave: ol };
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeNav, setActiveNav] = useState("home");
  const filteredProjects = activeFilter === "ALL" ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);
  useEffect(() => {
    function onScroll() { const sections = ["home", "about", "skills", "projects", "contact"]; for (let i = sections.length - 1; i >= 0; i--) { const el = document.getElementById(sections[i]); if (el && window.scrollY >= el.offsetTop - 120) { setActiveNav(sections[i]); break; } } }
    window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

  return (
    <>
      <style>{G}</style>
      <div className="cur" ref={cr} /><div className="crg" ref={rr} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 60px", background: "rgba(2,4,8,.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,245,255,.06)" }}>
        <button onClick={() => scrollTo("home")} {...hp} style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.2rem", fontWeight: 900, letterSpacing: ".15em", background: "none", border: "none", cursor: "none", color: "rgb(0,245,255)", textShadow: "0 0 20px rgba(0,245,255,.6)" }}>P<span style={{ color: "rgb(255,107,0)" }}>.</span>S</button>
        <ul className="nav-desktop" style={{ display: "flex", gap: 36, listStyle: "none" }}>
          {NAV_LINKS.map(l => <li key={l.id}><button onClick={() => scrollTo(l.id)} className={`nl${activeNav === l.id ? " active" : ""}`} {...hp} style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, fontSize: ".85rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", background: "none", border: "none", cursor: "none", position: "relative" }}>{l.label}</button></li>)}
        </ul>
        <a href="mailto:atom.141101@gmail.com" className="nc" {...hp} style={{ fontFamily: "'Orbitron',monospace", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: "9px 22px", border: "1px solid rgb(0,245,255)", color: "rgb(0,245,255)", textDecoration: "none", clipPath: "polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%)", transition: "all .3s", background: "transparent" }}>HIRE ME</a>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", width: "100%", height: "100vh", minHeight: 700, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <canvas ref={cvs} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "linear-gradient(rgba(0,245,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,.022) 1px,transparent 1px)", backgroundSize: "60px 60px", animation: "gridMove 20s linear infinite" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "radial-gradient(ellipse 80% 60% at 50% 50%,transparent 20%,rgba(2,4,8,.55) 100%),linear-gradient(to bottom,rgba(2,4,8,.3) 0%,transparent 18%,transparent 65%,rgba(2,4,8,.95) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 3, background: "linear-gradient(90deg,transparent,rgb(0,245,255) 50%,transparent)", animation: "scanDown 4s linear infinite" }} />
        {[{ t: 80, l: 30, style: { borderTop: "2px solid rgb(0,245,255)", borderLeft: "2px solid rgb(0,245,255)" } }, { t: 80, r: 30, style: { borderTop: "2px solid rgb(0,245,255)", borderRight: "2px solid rgb(0,245,255)" } }, { b: 56, l: 30, style: { borderBottom: "2px solid rgb(255,107,0)", borderLeft: "2px solid rgb(255,107,0)" } }, { b: 56, r: 30, style: { borderBottom: "2px solid rgb(255,107,0)", borderRight: "2px solid rgb(255,107,0)" } }].map((d, i) => (
          <div key={i} style={{ position: "absolute", top: d.t, bottom: d.b, left: d.l, right: d.r, width: 40, height: 40, zIndex: 10, pointerEvents: "none", ...d.style }} />
        ))}
        <div style={{ position: "absolute", right: 30, top: "50%", transform: "translateY(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".55rem", letterSpacing: ".35em", textTransform: "uppercase", color: "rgba(0,245,255,.3)", writingMode: "vertical-rl" }}>SCROLL</span>
          <div style={{ width: 1, height: 70, background: "linear-gradient(to bottom,transparent,rgb(0,245,255))", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-100%", left: 0, width: "100%", height: "100%", background: "rgb(0,245,255)", animation: "scrollDown 2s ease-in-out infinite" }} />
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 900, padding: "0 40px" }}>
          <div className="hb" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Share Tech Mono',monospace", fontSize: ".72rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgb(0,245,255)", border: "1px solid rgba(0,245,255,.35)", padding: "6px 16px", marginBottom: 28, background: "rgba(0,245,255,.04)", clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgb(0,245,255)", boxShadow: "0 0 8px rgb(0,245,255)", animation: "blink 1.5s ease-in-out infinite", flexShrink: 0 }} />
            FULL-STACK DEVELOPER · OPEN TO WORK
          </div>
          <h1 className="ht" style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(2.6rem,7.5vw,6rem)", fontWeight: 900, lineHeight: .92, letterSpacing: "-.02em", textTransform: "uppercase", marginBottom: 24 }}>
            <span style={{ display: "block", color: "#fff", textShadow: "0 0 60px rgba(255,255,255,.2)", fontSize: "clamp(1.4rem,3.5vw,2.8rem)", letterSpacing: ".05em", fontWeight: 400, marginBottom: 6 }}>Hello, I'm</span>
            <span style={{ display: "block", color: "#fff", textShadow: "0 0 60px rgba(255,255,255,.25)" }}>Poochit Sakunthong</span>
            <span style={{ display: "block", background: "linear-gradient(90deg,rgb(0,245,255) 0%,rgb(64,224,255) 40%,rgb(255,107,0) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 25px rgba(0,245,255,.5))" }}>
              <span className="gw" data-text="Poochit Sakunthong">Poochit Sakunthong</span>
            </span>
          </h1>
          <div className="ha" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")} className="bp" {...hp} style={{ position: "relative", fontFamily: "'Orbitron',monospace", fontSize: ".78rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: "15px 38px", background: "linear-gradient(135deg,rgb(0,245,255),rgb(0,144,255))", color: "#020408", border: "none", cursor: "none", clipPath: "polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)", transition: "all .3s", overflow: "hidden", display: "inline-flex", alignItems: "center", gap: 8 }}>{ICONS.bolt(14, "#020408")} ดูผลงาน</button>
            <button onClick={() => scrollTo("contact")} className="bs" {...hp} style={{ fontFamily: "'Orbitron',monospace", fontSize: ".78rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: "13px 34px", border: "1px solid rgba(255,107,0,.6)", color: "rgb(255,107,0)", background: "rgba(255,107,0,.05)", cursor: "none", clipPath: "polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)", transition: "all .3s" }}>ติดต่อ</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 60px", background: "#070d14", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgb(0,245,255),transparent)" }} />
        <SectionLabel tag="// WHO AM I" title="ABOUT" accent="ME" />
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <AboutAvatar /><AboutBio hp={hp} scrollTo={scrollTo} />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "120px 60px", background: "#020408", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgb(255,107,0),transparent)" }} />
        <SectionLabel tag="// WHAT I DO" title="MY" accent="SKILLS" />
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 2 }}>
          {SKILLS.map((s, i) => <SkillCat key={s.cat} {...s} index={i} />)}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "120px 60px", background: "#070d14", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgb(0,245,255),transparent)" }} />
        <SectionLabel tag="// WHAT I'VE BUILT" title="MY" accent="PROJECTS" />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
          {FILTER_CATS.map(cat => <button key={cat} className={`filter-btn${activeFilter === cat ? " active" : ""}`} onClick={() => setActiveFilter(cat)} {...hp}>{cat}</button>)}
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 2 }}>
          {filteredProjects.map((p, i) => <ProjectCard key={p.id} proj={p} index={i} />)}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "120px 60px", background: "#020408", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgb(255,107,0),transparent)" }} />
        <ContactSection hp={hp} />
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#020408", borderTop: "1px solid rgba(0,245,255,.06)", padding: "32px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <button onClick={() => scrollTo("home")} {...hp} style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 900, letterSpacing: ".15em", background: "none", border: "none", cursor: "none", color: "rgb(0,245,255)", textShadow: "0 0 20px rgba(0,245,255,.6)" }}>P<span style={{ color: "rgb(255,107,0)" }}>.</span>S</button>
        <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".65rem", letterSpacing: ".15em", color: "rgba(200,220,240,.18)", display: "inline-flex", alignItems: "center", gap: 4 }}>© 2025 POOCHIT SAKUNTHONG · BUILT WITH {ICONS.bolt(12, "rgba(200,220,240,.18)")}</span>
      </footer>
    </>
  );
}

// ─── ABOUT AVATAR ─────────────────────────────────────────────────────────────
function AboutAvatar() {
  const ref = useRef(null); useReveal(ref, 0);
  return (
    <div ref={ref} className="sec-in" style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 300, height: 300 }}>
        <div style={{ position: "absolute", inset: -20, border: "1px solid rgba(0,245,255,.15)", borderRadius: "50%", animation: "spin 20s linear infinite" }} />
        <div style={{ position: "absolute", inset: -35, border: "1px dashed rgba(255,107,0,.1)", borderRadius: "50%", animation: "spin 30s linear reverse infinite" }} />
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(0,245,255,.3)", overflow: "hidden", background: "linear-gradient(135deg,rgba(0,245,255,.06),rgba(255,107,0,.04))" }}>
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,245,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,.04) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
            <span style={{ filter: "drop-shadow(0 0 20px rgba(0,245,255,.4))", animation: "float 4s ease-in-out infinite", display: "flex", alignItems: "center", justifyContent: "center" }}>{ICONS.code(80, "rgb(0,245,255)")}</span>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 10, right: -10, background: "rgba(7,13,20,.95)", border: "1px solid rgba(0,245,255,.3)", padding: "8px 14px", clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
          <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".6rem", letterSpacing: ".15em", color: "rgb(0,245,255)" }}>AVAILABLE</span>
        </div>
      </div>
    </div>
  );
}

// ─── ABOUT BIO ────────────────────────────────────────────────────────────────
function AboutBio({ hp, scrollTo }) {
  const ref = useRef(null);
  useReveal(ref, 150);

  return (
    <div ref={ref} className="sec-in">
      {/* INTRO */}
      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.85,
          color: "rgba(200,220,240,.65)",
          marginBottom: 28,
        }}
      >
        สวัสดีครับ! ผมชื่อ{" "}
        <span style={{ color: "rgb(0,245,255)", fontWeight: 600 }}>
          Poochit Sakunthong
        </span>{" "}
        — Full-stack Developer ที่หลงใหลในการสร้าง Web Application ที่ทั้งใช้งานได้ดีและมีคุณภาพ
      </p>

      {/* EXPERIENCE */}
      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.85,
          color: "rgba(200,220,240,.55)",
          marginBottom: 36,
        }}
      >
        มีประสบการณ์มากกว่า 2 ปี ครอบคลุมทั้ง Frontend และ Backend
        รวมถึงสามารถทำ End-to-End Testing เพื่อให้มั่นใจว่าระบบทำงานได้จริงในทุกขั้นตอน
        ผมชอบการแก้ปัญหา และเรียนรู้สิ่งใหม่ๆ อยู่เสมอ (Learn by Doing)
      </p>

      {/* INFO GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px 32px",
          marginBottom: 36,
        }}
      >
        {[
          { k: "Location", v: "Bangkok, Thailand" },
          { k: "Email", v: "poochit.sak@email.com" },
          { k: "Focus", v: "Full-stack Developer" },
          { k: "Status", v: "Open to work" },
        ].map(({ k, v }) => (
          <div key={k}>
            <span
              style={{
                fontFamily: "'Share Tech Mono',monospace",
                fontSize: ".62rem",
                letterSpacing: ".15em",
                color: "rgba(0,245,255,.5)",
                textTransform: "uppercase",
              }}
            >
              {k}
            </span>
            <div
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: ".95rem",
                fontWeight: 600,
                color: "rgba(200,220,240,.8)",
                marginTop: 2,
              }}
            >
              {v}
            </div>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => scrollTo("contact")}
          className="bp"
          {...hp}
          style={{
            position: "relative",
            fontFamily: "'Orbitron',monospace",
            fontSize: ".72rem",
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            padding: "12px 28px",
            background:
              "linear-gradient(135deg,rgb(0,245,255),rgb(0,144,255))",
            color: "#020408",
            border: "none",
            cursor: "none",
            clipPath:
              "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
            transition: "all .3s",
            overflow: "hidden",
          }}
        >
          LET'S TALK
        </button>

        <a
          href="#"
          className="bs"
          {...hp}
          style={{
            fontFamily: "'Orbitron',monospace",
            fontSize: ".72rem",
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            padding: "11px 26px",
            border: "1px solid rgba(255,107,0,.5)",
            color: "rgb(255,107,0)",
            textDecoration: "none",
            clipPath:
              "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
            transition: "all .3s",
            background: "rgba(255,107,0,.05)",
          }}
        >
          RESUME ↓
        </a>
      </div>
    </div>
  );
}


// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactSection({ hp }) {
  const ref = useRef(null); useReveal(ref);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  return (
    <div ref={ref} className="sec-in">
      <div style={{ marginBottom: 60 }}>
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".72rem", letterSpacing: ".3em", textTransform: "uppercase", color: "rgb(0,245,255)", marginBottom: 10, opacity: .8 }}>// GET IN TOUCH</div>
        <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: ".04em" }}>LET'S <span style={{ color: "rgb(255,107,0)" }}>CONNECT</span></h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
        <div>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(200,220,240,.55)", marginBottom: 40 }}>ถ้าคุณมีโปรเจกต์ที่น่าสนใจ หรืออยากร่วมงานด้วย — ยินดีรับฟังเสมอครับ อย่าลังเลที่จะทักมา!</p>
          {[
            { iconKey: "mail", label: "Email", val: "poochit.sak@email.com" },
            { iconKey: "youtube", label: "Youtube", val: "chabucute" },
            { iconKey: "github", label: "GitHub", val: "github.com/AtomSakChongun" },
          ].map(({ iconKey, label, val }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(0,245,255,.06)" }}>
              <span style={{ width: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {ICONS[iconKey](22, "rgb(0,245,255)")}
              </span>
              <div>
                <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: ".6rem", letterSpacing: ".15em", color: "rgba(0,245,255,.5)", marginBottom: 2 }}>{label}</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, color: "rgba(200,220,240,.75)" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input className="inp" placeholder="ชื่อ / Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          <input className="inp" placeholder="อีเมล / Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          <textarea className="inp" rows={5} placeholder="ข้อความ / Message..." value={form.msg} onChange={e => setForm(f => ({ ...f, msg: e.target.value }))} style={{ resize: "vertical" }} />
          <button className="bp" {...hp} style={{ position: "relative", fontFamily: "'Orbitron',monospace", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", padding: "15px", background: "linear-gradient(135deg,rgb(0,245,255),rgb(0,144,255))", color: "#020408", border: "none", cursor: "none", clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)", transition: "all .3s", overflow: "hidden", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            {ICONS.bolt(14, "#020408")} ส่งข้อความ
          </button>
        </div>
      </div>
    </div>
  );
}
