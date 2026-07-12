import React, { useState, useEffect, useRef } from "react";
import { Play, ArrowUpRight, Mail, MessageCircle, Linkedin, Youtube, Globe, Menu, X } from "./icons";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    time: "PRESENT",
    role: "Lead Video Editor",
    org: "Meta Brains",
    url: "https://www.metabrains.org/",
    desc: "Leading video production for AI-powered educational content — from raw screen recordings to polished, publish-ready lessons.",
  },
  {
    time: "PREV",
    role: "Video Editor",
    org: "Gen AI Skool",
    url: "https://youtube.com/@genaiskool?si=eLgbmlayyldtpejs",
    desc: "Edited YouTube and course content focused on AI tools and workflows, handling everything from cuts to audio cleanup.",
  },
];

const SKILLS = [
  "AI Voice Synchronization",
  "Educational Video Editing",
  "YouTube Editing",
  "Udemy Course Production",
  "Screen Recording Editing",
  "Audio Cleanup",
  "AI-Assisted Workflows",
];

const SOFTWARE = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "CapCut",
  "Adobe Photoshop",
  "ChatGPT",
  "Gemini",
  "Google AI Studio",
];

const PROJECTS = [
  { code: "01" },
  { code: "02" },
  { code: "03" },
];

const CONTACT = {
  whatsapp: "+92 309 6157211",
  whatsappHref: "https://wa.me/923096157211",
  email: "immohsiny@outlook.com",
  linkedin: "www.linkedin.com/in/im-mohsin-y11",
  linkedinHref: "https://www.linkedin.com/in/im-mohsin-y11",
  metabrains: "https://www.metabrains.org/",
  genaiskool: "https://youtube.com/@genaiskool?si=eLgbmlayyldtpejs",
};


function useLiveTimecode() {
  const [tc, setTc] = useState("00:00:00:00");
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const totalFrames = Math.floor((elapsed / 1000) * 24); // 24fps
      const ff = totalFrames % 24;
      const totalSeconds = Math.floor(totalFrames / 24);
      const ss = totalSeconds % 60;
      const mm = Math.floor(totalSeconds / 60) % 60;
      const hh = Math.floor(totalSeconds / 3600);
      const pad = (n) => String(n).padStart(2, "0");
      setTc(`${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`);
    }, 42);
    return () => clearInterval(id);
  }, []);
  return tc;
}

function Corners({ className = "" }) {
  return (
    <>
      <span className={`corner corner-tl ${className}`} />
      <span className={`corner corner-tr ${className}`} />
      <span className={`corner corner-bl ${className}`} />
      <span className={`corner corner-br ${className}`} />
    </>
  );
}

function Eyebrow({ time, label }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-time">{time}</span>
      <span className="eyebrow-rule" />
      <span className="eyebrow-label">{label}</span>
    </div>
  );
}

function Ruler() {
  const ticks = Array.from({ length: 40 });
  return (
    <div className="ruler" aria-hidden="true">
      {ticks.map((_, i) => (
        <span key={i} className={`tick ${i % 5 === 0 ? "tick-major" : ""}`} />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */

export default function MohsinPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tc = useLiveTimecode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mmy-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .mmy-root {
          --bg: #FAFAF8;
          --bg-alt: #F1EEE5;
          --ink: #17181C;
          --ink-soft: #5B5E66;
          --ink-faint: #93958E;
          --line: #DEDAD0;
          --accent: #C1440E;
          --accent-tint: #F6E2D6;
          --paper: #FFFFFF;

          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .mmy-root * { box-sizing: border-box; }

        .mmy-root :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        .display {
          font-family: 'Archivo', sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 0.98;
        }

        .mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* --- Corner brackets (signature element) --- */
        .frame { position: relative; }
        .corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: var(--ink);
          border-style: solid;
          border-width: 0;
          opacity: 0.55;
        }
        .corner-tl { top: -1px; left: -1px; border-top-width: 2px; border-left-width: 2px; }
        .corner-tr { top: -1px; right: -1px; border-top-width: 2px; border-right-width: 2px; }
        .corner-bl { bottom: -1px; left: -1px; border-bottom-width: 2px; border-left-width: 2px; }
        .corner-br { bottom: -1px; right: -1px; border-bottom-width: 2px; border-right-width: 2px; }

        /* --- Eyebrow / timecode section label --- */
        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .eyebrow-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 0.05em;
        }
        .eyebrow-rule {
          width: 28px;
          height: 1px;
          background: var(--line);
        }
        .eyebrow-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--ink-soft);
        }

        /* --- Ruler divider (timeline motif) --- */
        .ruler {
          display: flex;
          align-items: flex-end;
          gap: 0;
          width: 100%;
          height: 14px;
          overflow: hidden;
        }
        .tick {
          flex: 1 0 auto;
          width: 1px;
          height: 5px;
          background: var(--line);
          margin-right: calc((100% - 40px) / 39);
        }
        .tick-major { height: 10px; background: var(--ink-faint); }

        .section { padding: 96px 0; position: relative; }
        .section-alt { background: var(--bg-alt); }
        .container { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

        /* --- Nav --- */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(250, 250, 248, 0.86);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.25s ease;
        }
        .nav.scrolled { border-bottom-color: var(--line); }
        .nav-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 18px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-family: 'Archivo', sans-serif;
          font-weight: 900;
          font-size: 18px;
          letter-spacing: -0.01em;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--ink);
        }
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink-soft);
          padding: 6px 2px;
          border-bottom: 1px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .nav-link:hover { color: var(--ink); border-color: var(--accent); }
        .nav-burger { display: none; background: none; border: none; cursor: pointer; color: var(--ink); }
        .nav-mobile {
          display: none;
          flex-direction: column;
          gap: 2px;
          padding: 8px 28px 20px;
          border-bottom: 1px solid var(--line);
        }
        .nav-mobile.open { display: flex; }
        .nav-mobile button {
          text-align: left;
          background: none;
          border: none;
          padding: 10px 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--ink-soft);
          border-bottom: 1px solid var(--line);
        }

        @media (max-width: 720px) {
          .nav-links { display: none; }
          .nav-burger { display: block; }
        }

        /* --- Hero --- */
        .hero {
          padding: 64px 0 80px;
        }
        .hero-frame {
          border: 1px solid var(--line);
          background: var(--paper);
          padding: 56px 40px;
        }
        .hero-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 48px;
        }
        .rec {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--ink-soft);
        }
        .rec-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
        }
        .hero-name {
          font-size: clamp(40px, 7vw, 84px);
          margin: 0 0 18px;
        }
        .hero-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--accent);
          letter-spacing: 0.02em;
          margin-bottom: 26px;
        }
        .hero-desc {
          max-width: 560px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.65;
          margin-bottom: 36px;
        }
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 14px 22px;
          border: 1px solid var(--ink);
          background: var(--ink);
          color: var(--paper);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.15s ease, transform 0.15s ease;
          text-decoration: none;
        }
        .btn:hover { opacity: 0.82; }
        .btn-ghost {
          background: transparent;
          color: var(--ink);
        }
        .btn-ghost:hover { background: var(--bg-alt); opacity: 1; }

        /* --- About --- */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          align-items: start;
        }
        .about-title {
          font-size: clamp(28px, 4vw, 40px);
        }
        .about-body {
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.75;
        }
        .about-body p { margin: 0 0 16px; }
        .about-placeholder {
          border-left: 2px solid var(--accent);
          padding-left: 16px;
          color: var(--ink-faint);
          font-style: italic;
        }
        @media (max-width: 780px) {
          .about-grid { grid-template-columns: 1fr; gap: 28px; }
        }

        /* --- Experience --- */
        .exp-list { display: flex; flex-direction: column; }
        .exp-item {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 28px;
          padding: 30px 0;
          border-top: 1px solid var(--line);
        }
        .exp-item:last-child { border-bottom: 1px solid var(--line); }
        .exp-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--ink-faint);
          padding-top: 4px;
        }
        .exp-role {
          font-family: 'Archivo', sans-serif;
          font-weight: 700;
          font-size: 21px;
          margin: 0 0 4px;
        }
        .exp-org {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          text-decoration: none;
          margin-bottom: 12px;
        }
        .exp-org:hover { text-decoration: underline; }
        .exp-desc { color: var(--ink-soft); font-size: 15px; line-height: 1.65; max-width: 560px; }
        @media (max-width: 600px) {
          .exp-item { grid-template-columns: 1fr; gap: 8px; }
        }

        /* --- Skills / Software --- */
        .tag-wrap { display: flex; flex-wrap: wrap; gap: 10px; }
        .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          padding: 10px 16px;
          border: 1px solid var(--line);
          background: var(--paper);
          color: var(--ink);
          letter-spacing: 0.01em;
        }
        .tag-accent {
          border-color: var(--accent);
          background: var(--accent-tint);
          color: var(--accent);
        }
        .split-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-faint);
          margin-bottom: 18px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 700px) {
          .skills-grid { grid-template-columns: 1fr; gap: 36px; }
        }

        /* --- Work / Projects --- */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 860px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
        .proj-card {
          position: relative;
          border: 1px solid var(--line);
          background: var(--paper);
          aspect-ratio: 16/10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--ink-faint);
        }
        .proj-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
        }
        .proj-play {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid var(--line);
          display: flex; align-items: center; justify-content: center;
        }
        .proj-note {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
        }

        /* --- Contact --- */
        .contact-title {
          font-size: clamp(32px, 6vw, 56px);
          max-width: 680px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        @media (max-width: 780px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        .contact-card {
          border: 1px solid var(--line);
          padding: 26px;
          text-decoration: none;
          color: var(--ink);
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: var(--paper);
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .contact-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-faint);
        }
        .contact-value {
          font-family: 'Archivo', sans-serif;
          font-weight: 700;
          font-size: 17px;
          word-break: break-word;
        }
        .contact-icon-row { display: flex; justify-content: space-between; align-items: center; }

        .channels-row {
          margin-top: 40px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .channel-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 10px 16px;
          border: 1px solid var(--line);
          text-decoration: none;
          color: var(--ink-soft);
        }
        .channel-pill:hover { color: var(--ink); border-color: var(--ink); }

        footer.mmy-footer {
          border-top: 1px solid var(--line);
          padding: 28px 0;
        }
        .footer-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--ink-faint);
          letter-spacing: 0.04em;
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo("home")}>MMY</button>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button className="nav-link" onClick={() => scrollTo(l.id)}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="nav-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-frame frame">
            <Corners />
            <div className="hero-top-row">
              <span className="mono" style={{ fontSize: 12, color: "var(--ink-faint)" }}>
                {tc}
              </span>
              <span className="rec">
                <span className="rec-dot" /> AVAILABLE FOR WORK
              </span>
            </div>
            <h1 className="display hero-name">
              Muhammad<br />Mohsin Yaqoob
            </h1>
            <div className="hero-role mono">
              Professional Video Editor — AI Content Specialist
            </div>
            <p className="hero-desc">
              Editing video for the AI education space — turning raw lessons,
              screen recordings, and course footage into clean, watchable content.
            </p>
            <div className="btn-row">
              <button className="btn" onClick={() => scrollTo("work")}>
                View Work <ArrowUpRight size={14} />
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><Ruler /></div>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <Eyebrow time="00:01" label="About" />
          <div className="about-grid">
            <h2 className="display about-title">Who I Am</h2>
            <div className="about-body">
              <p className="about-placeholder">
                Write a short intro here about your experience editing AI-powered
                educational content — what you focus on, the kind of creators or
                courses you work with, and what makes your edits effective for
                learning. Two to three sentences is plenty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <Eyebrow time="00:02" label="Experience" />
          <h2 className="display" style={{ fontSize: "clamp(28px,4vw,40px)", marginBottom: 12 }}>
            Where I've Worked
          </h2>
          <div className="exp-list">
            {EXPERIENCE.map((e) => (
              <div className="exp-item" key={e.org}>
                <div className="exp-time mono">{e.time}</div>
                <div>
                  <h3 className="exp-role">{e.role}</h3>
                  <a className="exp-org mono" href={e.url} target="_blank" rel="noopener noreferrer">
                    {e.org} <ArrowUpRight size={12} />
                  </a>
                  <p className="exp-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="container">
          <Eyebrow time="00:03" label="Skills & Software" />
          <div className="skills-grid">
            <div>
              <div className="split-title">Skills</div>
              <div className="tag-wrap">
                {SKILLS.map((s) => (
                  <span className="tag tag-accent" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="split-title">Software</div>
              <div className="tag-wrap">
                {SOFTWARE.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section section-alt">
        <div className="container">
          <Eyebrow time="00:04" label="Featured Work" />
          <h2 className="display" style={{ fontSize: "clamp(28px,4vw,40px)", marginBottom: 32 }}>
            Selected Edits
          </h2>
          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <div className="proj-card frame" key={p.code}>
                <Corners />
                <div className="proj-play">
                  <Play size={16} />
                </div>
                <span className="proj-note mono">CLIP {p.code} — COMING SOON</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <Eyebrow time="00:05" label="Contact" />
          <h2 className="display contact-title">
            Have a project in mind? Let's cut it together.
          </h2>

          <div className="contact-grid">
            <a className="contact-card" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon-row">
                <span className="contact-label">WhatsApp</span>
                <MessageCircle size={16} />
              </div>
              <span className="contact-value">{CONTACT.whatsapp}</span>
            </a>
            <a className="contact-card" href={`mailto:${CONTACT.email}`}>
              <div className="contact-icon-row">
                <span className="contact-label">Email</span>
                <Mail size={16} />
              </div>
              <span className="contact-value">{CONTACT.email}</span>
            </a>
            <a className="contact-card" href={CONTACT.linkedinHref} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon-row">
                <span className="contact-label">LinkedIn</span>
                <Linkedin size={16} />
              </div>
              <span className="contact-value">im-mohsin-y11</span>
            </a>
          </div>

          <div className="channels-row">
            <a className="channel-pill mono" href={CONTACT.metabrains} target="_blank" rel="noopener noreferrer">
              <Globe size={13} /> Meta Brains
            </a>
            <a className="channel-pill mono" href={CONTACT.genaiskool} target="_blank" rel="noopener noreferrer">
              <Youtube size={13} /> Gen AI Skool
            </a>
          </div>
        </div>
      </section>

      <footer className="mmy-footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} MUHAMMAD MOHSIN YAQOOB</span>
          <span>EDIT · SYNC · DELIVER</span>
        </div>
      </footer>
    </div>
  );
}