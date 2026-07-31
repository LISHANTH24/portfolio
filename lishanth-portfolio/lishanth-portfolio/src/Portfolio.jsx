import React, { useState } from "react";

const FILES = [
  { id: "about", label: "about.js", dot: "#22d3ee" },
  { id: "projects", label: "projects.js", dot: "#f2b155" },
  { id: "skills", label: "skills.js", dot: "#7ee787" },
  { id: "certifications", label: "certifications.js", dot: "#f472b6" },
  { id: "contact", label: "contact.js", dot: "#d2a8ff" },
];

const LANG = {
  about: "JavaScript",
  projects: "JavaScript",
  skills: "JavaScript",
  certifications: "JavaScript",
  contact: "JavaScript",
};

const LAST_LINE = { about: 26, projects: 2, skills: 19, certifications: 18, contact: 12 };

function Dot({ color, pulse }) {
  return (
    <span
      className={"file-dot" + (pulse ? " pulse" : "")}
      style={{ background: color, boxShadow: pulse ? `0 0 0 0 ${color}` : "none" }}
    />
  );
}

function Line({ n, children }) {
  return (
    <div className="line">
      <span className="ln">{n}</span>
      <span className="code">{children}</span>
    </div>
  );
}

const kw = (t) => <span className="tok-kw">{t}</span>;
const str = (t) => <span className="tok-str">{t}</span>;
const num = (t) => <span className="tok-num">{t}</span>;
const prop = (t) => <span className="tok-prop">{t}</span>;
const cm = (t) => <span className="tok-comment">{t}</span>;
const pl = (t) => <span>{t}</span>;

function AboutFile() {
  return (
    <div className="code-block">
      <Line n={1}>{cm("/**")}</Line>
      <Line n={2}>{cm(" * @file about.js")}</Line>
      <Line n={3}>{cm(" * @description Personal profile — Lishanth")}</Line>
      <Line n={4}>{cm(" */")}</Line>
      <Line n={5}> </Line>
      <Line n={6}>{kw("const")}{pl(" profile = {")}</Line>
      <Line n={7}>{"  "}{prop("name")}{pl(": ")}{str("'Lishanth'")}{pl(",")}</Line>
      <Line n={8}>{"  "}{prop("role")}{pl(": ")}{str("'Software Engineer · Java Developer'")}{pl(",")}</Line>
      <Line n={9}>{"  "}{prop("location")}{pl(": ")}{str("'Bengaluru, Karnataka, IN'")}{pl(",")}</Line>
      <Line n={10}>{"  "}{prop("education")}{pl(": {")}</Line>
      <Line n={11}>{"    "}{prop("college")}{pl(": ")}{str("'K S School of Engineering and Management'")}{pl(",")}</Line>
      <Line n={12}>{"    "}{prop("degree")}{pl(": ")}{str("'B.E. Computer Science Engineering'")}{pl(",")}</Line>
      <Line n={13}>{"    "}{prop("duration")}{pl(": ")}{str("'2023 – 2027'")}{pl(",")}</Line>
      <Line n={14}>{"    "}{prop("cgpa")}{pl(": ")}{num("8.14")}{pl(",")}</Line>
      <Line n={15}>{"  },"}</Line>
      <Line n={16}>{"  "}{prop("summary")}{pl(":")}</Line>
      <Line n={17}>{"    "}{str("'Final-year CS Engineering student with a solid foundation in '")}{pl(" +")}</Line>
      <Line n={18}>{"    "}{str("'Core Java, DSA, and OOP, plus working knowledge of DBMS, OS, '")}{pl(" +")}</Line>
      <Line n={19}>{"    "}{str("'and Computer Networks. Builds full-stack apps with React and '")}{pl(" +")}</Line>
      <Line n={20}>{"    "}{str("'Node.js, and explores applied ML through speech-processing '")}{pl(" +")}</Line>
      <Line n={21}>{"    "}{str("'research. Led a 4-member team building a deep-learning based '")}{pl(" +")}</Line>
      <Line n={22}>{"    "}{str("'audio analysis system from scratch.'")}{pl(",")}</Line>
      <Line n={23}>{"  "}{prop("status")}{pl(": ")}{str("'open_to_work'")}{pl(", ")}{cm("// actively interviewing")}</Line>
      <Line n={24}>{"};"}</Line>
      <Line n={25}> </Line>
      <Line n={26}>{kw("export default")}{pl(" profile;")}<span className="cursor" /></Line>
    </div>
  );
}

function SkillsFile() {
  return (
    <div className="code-block">
      <Line n={1}>{cm("/**")}</Line>
      <Line n={2}>{cm(" * @file skills.js")}</Line>
      <Line n={3}>{cm(" */")}</Line>
      <Line n={4}> </Line>
      <Line n={5}>{kw("const")}{pl(" skills = {")}</Line>
      <Line n={6}>{"  "}{prop("languages")}{pl(": [")}{str("'Core Java'")}{pl(", ")}{str("'Python'")}{pl("],")}</Line>
      <Line n={7}>{"  "}{prop("frontend")}{pl(": [")}{str("'React.js'")}{pl("],")}</Line>
      <Line n={8}>{"  "}{prop("backend")}{pl(": [")}{str("'Node.js'")}{pl("],")}</Line>
      <Line n={9}>{"  "}{prop("databases")}{pl(": [")}{str("'MySQL'")}{pl(", ")}{str("'MongoDB (basic)'")}{pl("],")}</Line>
      <Line n={10}>{"  "}{prop("coreSubjects")}{pl(": [")}</Line>
      <Line n={11}>{"    "}{str("'Data Structures & Algorithms'")}{pl(",")}</Line>
      <Line n={12}>{"    "}{str("'Object-Oriented Programming'")}{pl(",")}</Line>
      <Line n={13}>{"    "}{str("'Database Management Systems'")}{pl(",")}</Line>
      <Line n={14}>{"    "}{str("'Operating Systems'")}{pl(",")}</Line>
      <Line n={15}>{"    "}{str("'Computer Networks'")}{pl(",")}</Line>
      <Line n={16}>{"  ],"}</Line>
      <Line n={17}>{"  "}{prop("tools")}{pl(": [")}{str("'Git'")}{pl(", ")}{str("'GitHub'")}{pl(", ")}{str("'VS Code'")}{pl("],")}</Line>
      <Line n={18}>{"};"}</Line>
      <Line n={19}>{kw("export default")}{pl(" skills;")}<span className="cursor" /></Line>
    </div>
  );
}

function CertificationsFile() {
  return (
    <div className="code-block">
      <Line n={1}>{cm("/**")}</Line>
      <Line n={2}>{cm(" * @file certifications.js")}</Line>
      <Line n={3}>{cm(" */")}</Line>
      <Line n={4}> </Line>
      <Line n={5}>{kw("const")}{pl(" certifications = [")}</Line>
      <Line n={6}>{"  { "}{prop("name")}{pl(": ")}{str("'AWS Cloud Practitioner Essentials'")}{pl(", ")}{prop("issuer")}{pl(": ")}{str("'AWS Academy'")}{pl(" },")}</Line>
      <Line n={7}>{"  { "}{prop("name")}{pl(": ")}{str("'Full Stack Web Development'")}{pl(", ")}{prop("issuer")}{pl(": ")}{str("'Apna College'")}{pl(" },")}</Line>
      <Line n={8}>{"  { "}{prop("name")}{pl(": ")}{str("'Data Structures & Algorithms with Java'")}{pl(", ")}{prop("issuer")}{pl(": ")}{str("'Apna College'")}{pl(" },")}</Line>
      <Line n={9}>{"  { "}{prop("name")}{pl(": ")}{str("'UI/UX Design Verse'")}{pl(", ")}{prop("issuer")}{pl(": ")}{str("'1st Prize'")}{pl(" },")}</Line>
      <Line n={10}>{"  { "}{prop("name")}{pl(": ")}{str("'Hire-4-Thon Hackathon'")}{pl(", ")}{prop("issuer")}{pl(": ")}{str("'Participant'")}{pl(" },")}</Line>
      <Line n={11}>{"];"}</Line>
      <Line n={12}> </Line>
      <Line n={13}>{kw("const")}{pl(" achievements = [")}</Line>
      <Line n={14}>{"  "}{str("'70+ day coding streak on LeetCode'")}{pl(",")}</Line>
      <Line n={15}>{"  "}{str("'Led a 4-member team from ideation through final project review'")}{pl(",")}</Line>
      <Line n={16}>{"];"}</Line>
      <Line n={17}> </Line>
      <Line n={18}>{kw("export")}{pl(" { certifications, achievements };")}<span className="cursor" /></Line>
    </div>
  );
}

function ContactFile() {
  const rows = [
    { label: "email", value: "lishanth65cta@gmail.com", href: "mailto:lishanth65cta@gmail.com" },
    { label: "github", value: "github.com/LISHANTH24", href: "https://github.com/LISHANTH24" },
    { label: "linkedin", value: "linkedin.com/in/lishanthn", href: "https://www.linkedin.com/in/lishanthn/" },
    { label: "leetcode", value: "leetcode.com/u/Lishanth24", href: "https://leetcode.com/u/Lishanth24/" },
  ];
  return (
    <div className="code-block">
      <Line n={1}>{cm("/**")}</Line>
      <Line n={2}>{cm(" * @file contact.js")}</Line>
      <Line n={3}>{cm(" */")}</Line>
      <Line n={4}> </Line>
      <Line n={5}>{kw("const")}{pl(" contact = {")}</Line>
      {rows.map((r, i) => (
        <Line n={6 + i} key={r.label}>
          {"  "}
          {prop(r.label)}
          {pl(": ")}
          <a className="tok-str link" href={r.href} target="_blank" rel="noreferrer">
            {"'" + r.value + "'"}
          </a>
          {pl(",")}
        </Line>
      ))}
      <Line n={10}>{"};"}</Line>
      <Line n={11}> </Line>
      <Line n={12}>{kw("export default")}{pl(" contact; ")}{cm("// always happy to talk tech")}<span className="cursor" /></Line>
    </div>
  );
}

const PROJECTS = [
  {
    id: 1,
    name: "DeepVoice-IND",
    subtitle: "AI-cloned speech detection · Hindi & Kannada",
    status: "shipped",
    duration: "12 weeks",
    role: "Team lead · 4-member team",
    stack: ["Python", "TensorFlow/PyTorch", "Librosa", "Scikit-learn", "Hugging Face", "Flask/Streamlit"],
    bullets: [
      "Led a four-member team to design a multilingual deepfake audio detector for Hindi and Kannada speech.",
      "Built a labeled real-vs-synthetic dataset using Google TTS and Coqui TTS to simulate voice-cloning attacks.",
      "Extracted MFCC, Mel-Spectrogram, Chroma, Spectral Contrast, and Zero-Crossing-Rate features to capture acoustic differences.",
      "Trained CNN/Transformer-based classifiers to flag synthetic speech across two Indian languages.",
      "Benchmarked results with Accuracy, False Acceptance Rate, and Equal Error Rate.",
      "Shipped an interactive Flask/Streamlit demo for real-time classification.",
    ],
    link: { label: "github.com/LISHANTH24", href: "https://github.com/LISHANTH24" },
  },
  {
    id: 2,
    name: "MoodTunes",
    subtitle: "Mood-based music recommender",
    status: "in_progress",
    duration: null,
    role: null,
    stack: ["Python", "OpenCV", "DeepFace", "NLP (text/voice)", "Spotify Web API"],
    bullets: [
      "Detects the user's current mood from facial expression (OpenCV + DeepFace), typed text, voice, or manual selection.",
      "Classifies the detected mood into categories such as happy, sad, calm, energetic, or relaxed.",
      "Matches the classified mood against a mood-tagged song catalog pulled via the Spotify Web API.",
      "Generates a personalized playlist suited to the user's emotional state to improve the listening experience.",
    ],
    flow: ["User Input", "Mood Detection", "Mood Classification", "Song Recommendation", "Personalized Playlist"],
    link: null,
  },
];

function ProjectCard({ p, open, onToggle }) {
  return (
    <div className="proj-card">
      <button className="proj-head" onClick={onToggle} aria-expanded={open}>
        <span className={"caret" + (open ? " open" : "")}>▸</span>
        {kw("const")}
        <span>{" project_0" + p.id + " = { "}</span>
        {prop("name")}
        <span>{": "}</span>
        {str("'" + p.name + "'")}
        <span>{", "}</span>
        {prop("status")}
        <span>{": "}</span>
        {str("'" + p.status + "'")}
        <span>{" }"}</span>
      </button>
      {open && (
        <div className="proj-body">
          <div className="proj-sub">{p.subtitle}</div>
          <div className="proj-meta">
            {p.role && <span className="chip">{p.role}</span>}
            {p.duration && <span className="chip">{p.duration}</span>}
          </div>
          {p.stack.length > 0 && (
            <div className="stack-row">
              {p.stack.map((s) => (
                <span className="stack-chip" key={s}>{s}</span>
              ))}
            </div>
          )}
          <ul className="bullets">
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {p.flow && (
            <div className="flow-row">
              {p.flow.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="flow-chip">{step}</span>
                  {i < p.flow.length - 1 && <span className="flow-arrow">→</span>}
                </React.Fragment>
              ))}
            </div>
          )}
          {p.todo && <div className="todo-line">{cm("// TODO: " + p.todo)}</div>}
          {p.link && (
            <a className="proj-link" href={p.link.href} target="_blank" rel="noreferrer">
              {cm("// " + p.link.label)}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectsFile() {
  const [openIds, setOpenIds] = useState({ 1: true, 2: false });
  const toggle = (id) => setOpenIds((s) => ({ ...s, [id]: !s[id] }));
  return (
    <div className="code-block projects-block">
      <div className="line static">
        <span className="ln">1</span>
        <span className="code">{cm("// portfolio/src/projects.js — click a project to expand")}</span>
      </div>
      {PROJECTS.map((p) => (
        <ProjectCard key={p.id} p={p} open={!!openIds[p.id]} onToggle={() => toggle(p.id)} />
      ))}
      <div className="line static">
        <span className="ln">2</span>
        <span className="code">{cm("// more projects coming soon")}<span className="cursor" /></span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderFile = () => {
    if (active === "about") return <AboutFile />;
    if (active === "projects") return <ProjectsFile />;
    if (active === "skills") return <SkillsFile />;
    if (active === "certifications") return <CertificationsFile />;
    if (active === "contact") return <ContactFile />;
    return null;
  };

  const activeMeta = FILES.find((f) => f.id === active);

  return (
    <div className="ide">
      <style>{`
        :root {
          --bg: #0a0e13;
          --bg-elevated: #0d1117;
          --bg-sidebar: #080b0f;
          --bg-hover: #131a22;
          --border: #1f2630;
          --text: #c9d1d9;
          --text-bright: #e6edf3;
          --text-dim: #5b6472;
          --accent: #22d3ee;
          --accent-soft: rgba(34,211,238,0.10);
          --accent-border: rgba(34,211,238,0.4);
          --kw: #f47174;
          --str: #7ee787;
          --num: #79c0ff;
          --prop: #d2a8ff;
        }
        * { box-sizing: border-box; }
        .ide {
          font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, Menlo, monospace;
          background: var(--bg);
          color: var(--text);
          height: 100dvh;
          min-height: 560px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          position: relative;
        }
        button { font-family: inherit; cursor: pointer; }
        a { text-decoration: none; }
        :focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }

        .titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        .tb-left { display: flex; align-items: center; gap: 14px; }
        .dots { display: flex; gap: 7px; }
        .dots span { width: 11px; height: 11px; border-radius: 50%; background: #2a323d; }
        .tb-title { color: var(--text-dim); font-size: 12.5px; }
        .status-pill {
          display: flex; align-items: center; gap: 7px;
          border: 1px solid var(--accent-border);
          background: var(--accent-soft);
          color: var(--accent);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11.5px;
          white-space: nowrap;
        }
        .status-pill .ping {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent);
          animation: pulse 1.8s ease-out infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.55); }
          70% { box-shadow: 0 0 0 6px rgba(34,211,238,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,211,238,0); }
        }

        .body-row { display: flex; flex: 1; min-height: 0; }

        .sidebar {
          width: 210px;
          background: var(--bg-sidebar);
          border-right: 1px solid var(--border);
          padding: 14px 0;
          flex-shrink: 0;
          overflow-y: auto;
        }
        .sidebar-title { color: var(--text-dim); font-size: 10.5px; letter-spacing: 0.08em; padding: 0 16px 10px; }
        .tree-root { color: var(--text-dim); font-size: 12.5px; padding: 4px 16px; }
        .tree-src { padding-left: 10px; color: var(--text-dim); font-size: 12.5px; padding-top: 2px; }
        .file-row {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 16px 6px 26px;
          font-size: 12.5px;
          color: var(--text);
          background: none; border: none; width: 100%; text-align: left;
        }
        .file-row:hover { background: var(--bg-hover); }
        .file-row.active { background: var(--accent-soft); color: var(--accent); }
        .file-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

        .editor-col { flex: 1; min-width: 0; display: flex; flex-direction: column; }

        .tabbar { display: flex; background: var(--bg-elevated); border-bottom: 1px solid var(--border); overflow-x: auto; flex-shrink: 0; }
        .mobile-toggle {
          display: none;
          align-items: center; justify-content: center;
          background: none; border: none; color: var(--text-dim);
          padding: 0 12px; font-size: 16px; border-right: 1px solid var(--border);
        }
        .tab {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 16px;
          font-size: 12.5px;
          color: var(--text-dim);
          background: none; border: none; border-right: 1px solid var(--border);
          white-space: nowrap;
        }
        .tab.active { color: var(--text-bright); background: var(--bg); border-bottom: 2px solid var(--accent); }
        .tab:hover:not(.active) { color: var(--text); }

        .editor-content { flex: 1; overflow-y: auto; padding: 18px 0; font-size: 13px; line-height: 1.7; }
        .code-block { padding: 0 20px; }
        .line { display: flex; }
        .line.static .code { color: var(--text-dim); }
        .ln { width: 34px; flex-shrink: 0; text-align: right; margin-right: 20px; color: #2e3742; user-select: none; }
        .code { white-space: pre-wrap; word-break: break-word; color: var(--text); }
        .tok-kw { color: var(--kw); }
        .tok-str { color: var(--str); }
        .tok-num { color: var(--num); }
        .tok-prop { color: var(--prop); }
        .tok-comment { color: var(--text-dim); font-style: italic; }
        .link { border-bottom: 1px dotted currentColor; }
        .link:hover { color: var(--accent) !important; }
        .cursor {
          display: inline-block; width: 7px; height: 15px; background: var(--accent);
          margin-left: 3px; vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .projects-block { display: flex; flex-direction: column; gap: 12px; }
        .proj-card { border: 1px solid var(--border); border-radius: 6px; overflow: hidden; background: var(--bg-elevated); }
        .proj-head {
          width: 100%; text-align: left; background: none; border: none;
          padding: 12px 16px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          font-size: 12.5px; color: var(--text);
        }
        .proj-head:hover { background: var(--bg-hover); }
        .caret { color: var(--text-dim); transition: transform 0.15s ease; display: inline-block; }
        .caret.open { transform: rotate(90deg); color: var(--accent); }
        .proj-body { padding: 4px 16px 18px 42px; border-top: 1px solid var(--border); }
        .proj-sub { color: var(--text-bright); font-size: 13px; margin: 10px 0 6px; }
        .proj-meta { display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
        .chip { font-size: 11px; color: var(--text-dim); border: 1px solid var(--border); padding: 2px 8px; border-radius: 10px; }
        .stack-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
        .stack-chip { font-size: 11px; color: var(--accent); background: var(--accent-soft); border: 1px solid var(--accent-border); padding: 2px 8px; border-radius: 4px; }
        .bullets { margin: 0; padding-left: 18px; color: var(--text); font-size: 12.5px; line-height: 1.75; }
        .bullets li { margin-bottom: 4px; }
        .flow-row { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
        .flow-chip { font-size: 11px; color: var(--text-bright); background: var(--bg); border: 1px solid var(--border); padding: 3px 9px; border-radius: 4px; }
        .flow-arrow { color: var(--accent); font-size: 12px; }
        .todo-line, .proj-link { display: block; font-size: 12px; color: var(--text-dim); font-style: italic; margin-top: 8px; }
        .proj-link:hover { color: var(--accent); }

        .statusbar {
          display: flex; align-items: center; justify-content: space-between;
          background: var(--accent); color: #04222a;
          font-size: 11px; padding: 4px 14px; flex-shrink: 0;
        }
        .statusbar .sb-left, .statusbar .sb-right { display: flex; align-items: center; gap: 14px; }

        @media (max-width: 720px) {
          .sidebar {
            position: absolute; top: 0; left: 0; height: 100%; z-index: 10;
            transform: translateX(-100%); transition: transform 0.2s ease;
            box-shadow: 4px 0 16px rgba(0,0,0,0.4);
          }
          .sidebar.open { transform: translateX(0); }
          .mobile-toggle { display: flex; }
          .tb-title { display: none; }
          .status-pill span:not(.ping) { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor, .ping { animation: none !important; }
        }
      `}</style>

      <div className="titlebar">
        <div className="tb-left">
          <div className="dots"><span /><span /><span /></div>
          <div className="tb-title">lishanth.dev — Visual Studio Code</div>
        </div>
        <div className="status-pill">
          <span className="ping" />
          <span>Open to opportunities · SDE / Java roles</span>
        </div>
      </div>

      <div className="body-row">
        <div className={"sidebar" + (sidebarOpen ? " open" : "")}>
          <div className="sidebar-title">EXPLORER</div>
          <div className="tree-root">▾ portfolio</div>
          <div className="tree-src">▾ src</div>
          {FILES.map((f) => (
            <button
              key={f.id}
              className={"file-row" + (active === f.id ? " active" : "")}
              onClick={() => { setActive(f.id); setSidebarOpen(false); }}
            >
              <Dot color={f.dot} />
              {f.label}
            </button>
          ))}
        </div>

        <div className="editor-col">
          <div className="tabbar">
            <button className="mobile-toggle" onClick={() => setSidebarOpen((s) => !s)} aria-label="Toggle file explorer">☰</button>
            {FILES.map((f) => (
              <button
                key={f.id}
                className={"tab" + (active === f.id ? " active" : "")}
                onClick={() => setActive(f.id)}
              >
                <Dot color={f.dot} />
                {f.label}
              </button>
            ))}
          </div>
          <div className="editor-content">{renderFile()}</div>
        </div>
      </div>

      <div className="statusbar">
        <div className="sb-left">
          <span>⎇ main*</span>
          <span>✓ no problems</span>
        </div>
        <div className="sb-right">
          <span>{activeMeta.label}</span>
          <span>Ln {LAST_LINE[active]}, Col 1</span>
          <span>UTF-8</span>
          <span>{LANG[active]}</span>
        </div>
      </div>
    </div>
  );
}
