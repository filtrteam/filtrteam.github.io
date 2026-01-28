/* =========================
   FILTR — Liquid Glass (Apple-like)
   ========================= */

* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

:root{
  --filtr-yellow:#F7C600;

  --text: rgba(10,10,12,0.92);
  --muted: rgba(10,10,12,0.60);

  --bg:#f6f6f8;
  --surface: rgba(255,255,255,0.58);
  --stroke: rgba(0,0,0,0.08);

  --blur: 18px;

  --shadow: 0 20px 70px rgba(0,0,0,0.10);
  --shadow-soft: 0 12px 40px rgba(0,0,0,0.08);

  --r-lg: 28px;
  --r-md: 22px;
  --r-sm: 16px;

  --container: 1120px;

  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 800ms;

  --g1: radial-gradient(1200px 600px at 20% -10%, rgba(247, 198, 0, 0.24), transparent 55%);
  --g2: radial-gradient(900px 500px at 85% 0%, rgba(0, 0, 0, 0.06), transparent 60%);
  --g3: radial-gradient(900px 500px at 70% 110%, rgba(247, 198, 0, 0.12), transparent 55%);
}

html[data-theme="dark"]{
  --text: rgba(255,255,255,0.92);
  --muted: rgba(255,255,255,0.64);

  --bg:#0b0b0f;
  --surface: rgba(18,18,24,0.56);
  --stroke: rgba(255,255,255,0.10);

  --shadow: 0 26px 90px rgba(0,0,0,0.60);
  --shadow-soft: 0 18px 60px rgba(0,0,0,0.45);

  --g1: radial-gradient(1200px 600px at 20% -10%, rgba(247, 198, 0, 0.14), transparent 55%);
  --g2: radial-gradient(900px 500px at 85% 0%, rgba(255, 255, 255, 0.05), transparent 60%);
  --g3: radial-gradient(900px 500px at 70% 110%, rgba(247, 198, 0, 0.09), transparent 55%);
}

body::before{
  content:"";
  position: fixed;
  inset:0;
  background: var(--g1), var(--g2), var(--g3);
  pointer-events:none;
  z-index:-2;
}
body{
  background: var(--bg);
  color: var(--text);
}
body::after{
  content:"";
  position: fixed;
  inset:0;
  background-image:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.20'/%3E%3C/svg%3E");
  opacity:0.04;
  pointer-events:none;
  z-index:-1;
  mix-blend-mode: overlay;
}

.container{
  width: min(var(--container), calc(100% - 40px));
  margin: 0 auto;
}

a{ color: inherit; text-decoration:none; }
a:hover{ opacity:.95; }

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:12px 16px;
  border-radius:999px;
  border:1px solid var(--stroke);
  background: var(--surface);
  backdrop-filter: blur(var(--blur));
  -webkit-backdrop-filter: blur(var(--blur));
  box-shadow: var(--shadow-soft);
  transition: transform 250ms var(--ease), box-shadow 250ms var(--ease), border-color 250ms var(--ease);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.btn:hover{ transform: translateY(-1px); box-shadow: var(--shadow); border-color: rgba(247,198,0,0.22); }
.btn:active{ transform: translateY(0) scale(0.99); }

.btn.primary{
  background: linear-gradient(180deg, rgba(247,198,0,0.95), rgba(247,198,0,0.75));
  color: rgba(0,0,0,0.92);
  border-color: rgba(0,0,0,0.10);
  box-shadow: 0 20px 70px rgba(247,198,0,0.22);
}

.glass{
  position: relative;
  background: var(--surface);
  border: 1px solid var(--stroke);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(var(--blur));
  -webkit-backdrop-filter: blur(var(--blur));
}
.glass::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius: inherit;
  pointer-events:none;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.60),
    rgba(255,255,255,0.14) 30%,
    rgba(255,255,255,0.06) 60%,
    rgba(255,255,255,0.00)
  );
  opacity:0.30;
  mask-image: radial-gradient(120% 80% at 20% 0%, black 30%, transparent 70%);
}
.glass::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius: inherit;
  pointer-events:none;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -1px 0 rgba(0,0,0,0.06);
  opacity:0.65;
}
html[data-theme="dark"] .glass::before{ opacity:0.22; }
html[data-theme="dark"] .glass::after{
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.35);
  opacity:1;
}

/* HEADER */
.header{
  position: sticky;
  top: 16px;
  z-index: 50;
  margin: 16px auto 0;
  width: min(var(--container), calc(100% - 24px));
  border-radius: 999px;
}
.header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 10px 16px;
  gap: 12px;
}
.logo-text{
  font-weight: 850;
  letter-spacing: -0.05em;
  font-size: 18px;
}
.logo-i,.logo-dot{ color: var(--filtr-yellow); }

.nav{
  display:flex;
  align-items:center;
  gap: 16px;
  padding: 0 8px;
}
.nav a{
  font-weight: 650;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: var(--muted);
  padding: 10px 10px;
  border-radius: 999px;
  transition: background 250ms var(--ease), color 250ms var(--ease);
}
.nav a:hover{
  background: rgba(255,255,255,0.35);
  color: var(--text);
}
html[data-theme="dark"] .nav a:hover{
  background: rgba(255,255,255,0.08);
}

.header-actions{
  display:flex;
  align-items:center;
  gap: 10px;
}
#lang-toggle, #theme-toggle{
  height: 40px;
  min-width: 44px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(var(--blur));
  -webkit-backdrop-filter: blur(var(--blur));
  cursor:pointer;
  font-weight: 750;
  letter-spacing: -0.02em;
  transition: transform 250ms var(--ease);
}
#lang-toggle:hover, #theme-toggle:hover{ transform: translateY(-1px); }
#lang-toggle:active, #theme-toggle:active{ transform: translateY(0) scale(0.99); }

/* SECTIONS */
.section{ padding: 96px 0; }
.section h2{
  font-size: clamp(22px, 3vw, 34px);
  line-height: 1.15;
  letter-spacing: -0.05em;
  font-weight: 850;
  margin:0;
}
.section p{
  margin: 12px 0 0;
  color: var(--muted);
  line-height: 1.6;
  max-width: 72ch;
}

.section.dark{
  background: transparent;
  border: none;
}
.section.dark .container{
  padding: 26px;
  border-radius: var(--r-lg);
  background: var(--surface);
  border: 1px solid var(--stroke);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(var(--blur));
  -webkit-backdrop-filter: blur(var(--blur));
}

/* HERO */
.hero{ padding: 110px 0 72px; }
.hero-grid{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 22px;
  align-items: start;
}
.kicker{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: var(--surface);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(var(--blur));
  -webkit-backdrop-filter: blur(var(--blur));
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 14px;
}
.kicker::before{
  content:"";
  width: 10px; height: 10px;
  border-radius: 999px;
  background: var(--filtr-yellow);
  box-shadow: 0 10px 26px rgba(247,198,0,0.35);
}
.hero h1{
  margin:0;
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.03;
  letter-spacing: -0.06em;
  font-weight: 900;
  max-width: 22ch;
}
.hero p{
  margin-top: 16px;
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--muted);
  max-width: 62ch;
}
.hero-actions{
  display:flex;
  gap:12px;
  align-items:center;
  flex-wrap:wrap;
  margin-top: 22px;
}
.hero-note{
  margin-top: 14px;
  font-size: 13px;
  color: var(--muted);
}

.hero-panel{
  padding: 18px;
  border-radius: var(--r-lg);
}
.hero-panel-top{
  margin-bottom: 12px;
}
.hero-panel-title{
  font-weight: 900;
  letter-spacing: -0.03em;
}
.hero-panel-sub{
  margin-top: 6px;
  color: var(--muted);
  line-height: 1.55;
  font-size: 14px;
}
.chips{
  display:flex;
  flex-wrap:wrap;
  gap: 8px;
  margin-top: 12px;
}
.chip{
  font-size: 12px;
  font-weight: 800;
  letter-spacing: -0.01em;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: rgba(255,255,255,0.35);
}
html[data-theme="dark"] .chip{
  background: rgba(255,255,255,0.06);
}
.mini-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,0.10), transparent);
  margin: 14px 0;
}
html[data-theme="dark"] .mini-divider{
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
}
.hero-panel-list{
  display:grid;
  gap: 10px;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.55;
}
.tick{
  display:flex;
  align-items:flex-start;
  gap:10px;
}
.tick-dot{
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(0,0,0,0.14);
  margin-top: 4px;
}
html[data-theme="dark"] .tick-dot{
  background: rgba(255,255,255,0.12);
}
.hero-panel-cta{
  margin-top: 16px;
  width: 100%;
}

/* COMMON CARD SYSTEM */
.cards-3{
  margin-top: 22px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.card{
  padding: 18px;
  border-radius: 26px;
  min-height: 170px;
  transition: transform 250ms var(--ease), box-shadow 250ms var(--ease), border-color 250ms var(--ease);
}
.card:hover{
  transform: translateY(-1px);
  box-shadow: var(--shadow);
  border-color: rgba(247,198,0,0.22);
}
.card-title{
  font-weight: 900;
  letter-spacing: -0.03em;
  margin-top: 10px;
}
.card-desc{
  color: var(--muted);
  line-height: 1.6;
  font-weight: 520;
  margin-top: 8px;
  font-size: 14.5px;
}

/* ICONS (FIXES THE "HUGE ICON" PROBLEM) */
.icon-wrap{
  width: 52px;
  height: 52px;
  border-radius: 18px;
  border: 1px solid var(--stroke);
  background: rgba(255,255,255,0.35);
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: var(--shadow-soft);
}
html[data-theme="dark"] .icon-wrap{
  background: rgba(255,255,255,0.06);
}
.icon{
  width: 28px;
  height: 28px;
  color: rgba(10,10,12,0.82);
}
html[data-theme="dark"] .icon{
  color: rgba(255,255,255,0.84);
}

/* TAGS */
.tag-row{
  display:flex;
  flex-wrap:wrap;
  gap: 8px;
  margin-top: 14px;
}
.tag{
  font-size: 12px;
  font-weight: 800;
  letter-spacing: -0.01em;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: rgba(255,255,255,0.35);
}
html[data-theme="dark"] .tag{
  background: rgba(255,255,255,0.06);
}

/* METHOD */
.method-cards .card-step{
  min-height: 150px;
}
.step-kicker{
  display:inline-flex;
  align-items:center;
  gap:8px;
  font-weight: 900;
  color: var(--filtr-yellow);
  letter-spacing: -0.02em;
}

/* PRICING */
.pricing{
  margin-top: 22px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  align-items: stretch;
}
.price-card{
  padding: 18px;
  border-radius: 28px;
  min-height: 420px;
  display:flex;
  flex-direction: column;
  transition: transform 250ms var(--ease), box-shadow 250ms var(--ease), border-color 250ms var(--ease);
}
.price-card:hover{
  transform: translateY(-1px);
  box-shadow: var(--shadow);
  border-color: rgba(247,198,0,0.22);
}
.price-head{
  display:flex;
  flex-direction: column;
  gap: 6px;
}
.price-icon{
  width: 52px;
  height: 52px;
  border-radius: 18px;
  border: 1px solid var(--stroke);
  background: rgba(255,255,255,0.35);
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: var(--shadow-soft);
}
html[data-theme="dark"] .price-icon{
  background: rgba(255,255,255,0.06);
}
.price-name{
  font-weight: 950;
  letter-spacing: -0.03em;
  margin-top: 6px;
}
.price-tagline{
  color: var(--muted);
  line-height: 1.55;
  font-size: 14px;
}

.price{
  margin-top: 14px;
  display:flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.price-from{
  color: var(--muted);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.price-value{
  font-size: 34px;
  font-weight: 950;
  letter-spacing: -0.04em;
}
.price-period{
  color: var(--muted);
  font-weight: 700;
}

.price-list{
  margin-top: 14px;
  display:grid;
  gap: 10px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.55;
}
.price-list .li{
  position: relative;
  padding-left: 18px;
}
.price-list .li::before{
  content:"";
  position:absolute;
  left:0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(0,0,0,0.14);
}
html[data-theme="dark"] .price-list .li::before{
  background: rgba(255,255,255,0.12);
}
.price-cta{
  margin-top: auto;
  width: 100%;
}
.price-foot{
  margin-top: 10px;
  font-size: 12.5px;
  color: var(--muted);
  line-height: 1.5;
}

.featured{
  border-color: rgba(247,198,0,0.35);
  box-shadow: 0 26px 90px rgba(247,198,0,0.18);
}
.badge{
  position:absolute;
  top: 14px;
  right: 14px;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(247,198,0,0.20);
  border: 1px solid rgba(247,198,0,0.35);
}

.packages-note{
  margin-top: 14px;
  font-size: 13px;
  color: var(--muted);
}

/* CASES */
.card-case .case-title{
  font-weight: 950;
  letter-spacing: -0.03em;
}
.card-case .case-desc{
  margin-top: 10px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 14.5px;
}
.card-case .case-metric{
  margin-top: 14px;
  font-weight: 950;
  letter-spacing: -0.03em;
}

/* FAQ */
.faq{
  margin-top: 24px;
  display:grid;
  gap: 10px;
}
.faq-item{ padding: 0; overflow: hidden; border-radius: 22px; }
.faq-question{
  all: unset;
  width: 100%;
  padding: 16px 18px;
  font-weight: 850;
  letter-spacing: -0.02em;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.faq-question::after{
  content:"+";
  font-size: 20px;
  transition: transform 300ms var(--ease);
  color: var(--muted);
}
.faq-item.open .faq-question::after{ transform: rotate(45deg); }
.faq-answer{
  max-height: 0;
  overflow: hidden;
  padding: 0 18px;
  color: var(--muted);
  transition: max-height 420ms var(--ease), padding 420ms var(--ease);
  font-size: 14.5px;
  line-height: 1.6;
}
.faq-item.open .faq-answer{
  max-height: 260px;
  padding: 0 18px 18px;
}

/* FORM */
form.glass{
  margin-top: 20px;
  padding: 16px;
  border-radius: var(--r-lg);
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
}
input{
  grid-column: span 6;
  height: 48px;
  padding: 0 14px;
  border-radius: 18px;
  border: 1px solid var(--stroke);
  background: rgba(255,255,255,0.55);
  color: var(--text);
  outline:none;
  transition: border-color 200ms var(--ease), background 200ms var(--ease);
}
html[data-theme="dark"] input{ background: rgba(0,0,0,0.18); }
input:focus{
  border-color: rgba(247,198,0,0.75);
  box-shadow: 0 0 0 6px rgba(247,198,0,0.14);
}
form .btn.primary{
  grid-column: span 12;
  height: 48px;
}

.small-note{
  margin-top: 12px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.55;
}

/* FOOTER */
.footer{
  padding: 34px 0 60px;
}
.footer-inner{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 14px;
  flex-wrap: wrap;
}
.footer-brand{
  font-weight: 950;
  letter-spacing: -0.04em;
}
.footer-note{
  color: var(--muted);
  font-size: 13px;
}

/* REVEAL */
.reveal{
  opacity:0;
  transform: translateY(14px);
  filter: blur(10px);
  transition: opacity var(--dur) var(--ease), transform var(--dur) var(--ease), filter var(--dur) var(--ease);
  will-change: opacity, transform, filter;
}
.reveal.active{
  opacity:1;
  transform: translateY(0);
  filter: blur(0);
}

html{ scroll-behavior: smooth; }

@media (max-width: 980px){
  .nav{ display:none; }
  .hero-grid{ grid-template-columns: 1fr; }
  .cards-3, .pricing{ grid-template-columns: 1fr; }
  input{ grid-column: span 12; }
  .section.dark .container{ padding: 18px; }
}

@media (prefers-reduced-motion: reduce){
  *{ transition:none !important; scroll-behavior:auto !important; }
  .reveal{ opacity:1; transform:none; filter:none; }
}
