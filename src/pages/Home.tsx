import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Command,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const resume = `${import.meta.env.BASE_URL}Thierry-Rugira-Resume.pdf`;
const links = [
  ["work", "Selected work"],
  ["experience", "Experience"],
  ["about", "About"],
  ["contact", "Contact"],
];
const projects = [
  {
    id: "01",
    category: "Healthcare",
    status: "Professional contribution",
    name: "Making health data usable.",
    subtitle: "eBuzima utilization systems",
    description:
      "Contributing to the pipelines and utilization systems that turn healthcare records into structured, usable data across Rwanda.",
    detail:
      "Work spans ingestion, transformation and data-quality workflows. The pipeline context is roughly 10,500 rows per day across approximately 450 facilities; these describe data scope, not patient outcomes or product adoption.",
    tags: ["Python", "Prefect", "PostgreSQL", "dbt"],
    visual: "health",
    note: "~10,500 rows / day",
    second: "~450 facilities in scope",
  },
  {
    id: "02",
    category: "Environment",
    status: "Professional contribution",
    name: "Signals for cleaner air.",
    subtitle: "Rwanda air-quality data · REMA / PurpleAir",
    description:
      "Working with environmental data and air-quality workflows in the Rwanda REMA / PurpleAir context, with a focus on reliable inputs and useful downstream data.",
    detail:
      "Contributions span data engineering and data quality for environmental monitoring. The engineering emphasis is on checking sensor-derived data and preparing it for analysis; no ownership of national deployments or measured environmental outcomes is claimed.",
    tags: ["Python", "Data quality", "Environmental data"],
    visual: "air",
    note: "Sensor → usable data",
    second: "Rwanda air-quality work",
  },
  {
    id: "03",
    category: "Automation",
    status: "Professional contribution",
    name: "Less friction. Better systems.",
    subtitle: "APIs, support & automation",
    description:
      "Building FastAPI APIs and contributing to support and automation systems that connect data workflows with practical operational needs.",
    detail:
      "Work spans backend interfaces, workflow automation and AI solutions. My focus is making systems easier to operate and maintain, with clear data boundaries and attention to failure cases. Internal implementations and endpoints remain private.",
    tags: ["FastAPI", "Python", "APIs", "Automation"],
    visual: "api",
    note: "Connect. Validate. Automate.",
    second: "Backend & workflow engineering",
  },
  {
    id: "04",
    category: "Product",
    status: "Prototype · in development",
    name: "From workflow to product.",
    subtitle: "Waka · gym platform",
    description:
      "Prototyping a gym platform and exploring how day-to-day operational needs translate into a coherent product and maintainable system.",
    detail:
      "An ongoing systems and product exploration. The work focuses on shaping workflows, backend structure and user experience together. This is a prototype, with no public launch, adoption or revenue claim.",
    tags: ["Product thinking", "System design", "Prototyping"],
    visual: "waka",
    note: "WAKA / product lab",
    second: "An evolving prototype",
  },
];

function SystemVisual() {
  return (
    <div
      className="system-visual"
      aria-label="Illustration of a data workflow, from sources through validation to useful systems"
    >
      <div className="panel-top">
        <span>
          <i /> SYSTEMS / FIELD NOTES
        </span>
        <span>RW · 01</span>
      </div>
      <div className="orbit" aria-hidden="true">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="orbit-ring ring-three" />
        <span className="orbit-dot" />
        <div className="core">
          <span>TR</span>
          <small>DATA × PURPOSE</small>
        </div>
        <span className="coordinate top">INGEST / 01</span>
        <span className="coordinate bottom">DELIVER / 03</span>
      </div>
      <div className="pipeline">
        <span>Sources</span>
        <b>→</b>
        <span>Validate</span>
        <b>→</b>
        <span>Serve</span>
      </div>
      <div className="panel-bottom">
        <span>Built around real constraints.</span>
        <span className="mint">●</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [training, setTraining] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const commandButton = useRef<HTMLButtonElement>(null);
  const openCommands = () => {
    setQuery("");
    dialog.current?.showModal();
    search.current?.focus();
  };
  const closeCommands = () => {
    dialog.current?.close();
    commandButton.current?.focus();
  };
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else {
          setQuery("");
          dialog.current?.showModal();
          search.current?.focus();
        }
      }
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  const commands = [
    ...links.map(([id, label]) => ({ href: `#${id}`, label })),
    { href: resume, label: "Download resume (PDF)" },
    { href: "mailto:thierry.ru34@gmail.com", label: "Email Thierry" },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#" aria-label="Thierry Rugira, home">
            <span className="brand-symbol">
              tr<span>.</span>
            </span>
            <span>
              THIERRY RUGIRA<small>DATA & AI ENGINEERING</small>
            </span>
          </a>
          <nav
            className={menu ? "navigation is-open" : "navigation"}
            aria-label="Main navigation"
          >
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              ref={commandButton}
              className="command-button"
              onClick={openCommands}
              aria-label="Open quick navigation (Control or Command K)"
            >
              <Command size={16} />
              <span>K</span>
            </button>
            <button
              className="menu-button"
              onClick={() => setMenu(!menu)}
              aria-label={menu ? "Close navigation" : "Open navigation"}
              aria-expanded={menu}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> KIGALI, RWANDA / BUILDING WITH
              PURPOSE
            </p>
            <p className="intro">Hi, I’m Thierry.</p>
            <h1 id="hero-title">
              Good data.
              <br />
              Useful AI.
              <br />
              <em>Real-world systems.</em>
            </h1>
            <p className="hero-description">
              I build data pipelines, APIs and practical AI solutions — with a
              focus on reliability, automation and the realities of working in
              Rwanda and beyond.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href={resume} download>
                Resume <Download size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                SAND Technologies <b>↗</b>
              </span>
              <span>Software Engineering @ ALU</span>
            </div>
          </div>
          <SystemVisual />
          <a className="scroll-hint" href="#work">
            <ArrowDown size={15} /> EXPLORE THE SYSTEMS
          </a>
        </section>
        <div className="focus-strip">
          <div className="shell">
            <span>ENGINEERING FOCUS</span>
            <p>
              Data quality <b>/</b> Practical AI <b>/</b> Reliable pipelines{" "}
              <b>/</b> African context
            </p>
          </div>
        </div>
        <section
          id="work"
          className="section shell"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Real problems.
                <br />
                <span>Thoughtful engineering.</span>
              </h2>
            </div>
            <p>
              From healthcare records to environmental signals: building the
              systems that make data useful.
            </p>
          </div>
          <div className="filters" aria-label="Filter projects">
            {["All", "Healthcare", "Environment", "Automation", "Product"].map(
              (item) => (
                <button
                  key={item}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                  {item === "All" && <span>04</span>}
                </button>
              ),
            )}
          </div>
          <p className="sr-only" role="status">
            {filter === "All" ? 4 : 1} projects shown
          </p>
          <div className="project-grid">
            {projects
              .filter((p) => filter === "All" || p.category === filter)
              .map((project) => (
                <article className="project-card" key={project.id}>
                  <div
                    className={`project-visual ${project.visual}`}
                    aria-hidden="true"
                  >
                    <span className="visual-code">
                      {project.category.toUpperCase()} / {project.id}
                    </span>
                    <div className="signal-bars">
                      {Array.from({ length: 24 }, (_, i) => (
                        <i
                          key={i}
                          style={{ height: `${20 + ((i * 31 + 17) % 70)}%` }}
                        />
                      ))}
                    </div>
                    <div className="visual-caption">
                      <strong>{project.note}</strong>
                      <small>{project.second}</small>
                    </div>
                    <span className="visual-cross">+</span>
                  </div>
                  <div className="project-body">
                    <p className="project-status">{project.status}</p>
                    <h3>{project.name}</h3>
                    <h4>{project.subtitle}</h4>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <details>
                      <summary>
                        Contribution & scope <span>+</span>
                      </summary>
                      <p>{project.detail}</p>
                    </details>
                  </div>
                </article>
              ))}
          </div>
          <div className="lab-note">
            <span className="lab-label">ON THE DRAWING BOARD</span>
            <div>
              <h3>Small AI, meaningful constraints.</h3>
              <p>
                Exploring a lightweight medication-safety assistant for
                low-connectivity clinics: trusted medical rules, bounded AI
                decisions and clinician review. An early concept for Small AI
                for Development — not a deployed or clinically validated tool.
              </p>
            </div>
            <span className="lab-mark" aria-hidden="true">
              ↗
            </span>
          </div>
        </section>
        <section id="experience" className="experience-section">
          <div className="section shell experience-layout">
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                Built through
                <br />
                <span>hands-on work.</span>
              </h2>
              <p className="section-description">
                Production-minded engineering means caring about the data, the
                failure cases and the people using the system.
              </p>
            </div>
            <div className="experience-content">
              <div className="role-top">
                <span className="role-period">DEC 2024 — PRESENT</span>
                <span>Kigali, Rwanda</span>
              </div>
              <h3>SAND Technologies</h3>
              <p className="role-title">Data & AI engineering contributions</p>
              <p className="role-note">
                Employee · Focus: data systems, AI solutions & automation.
              </p>
              <ul className="contribution-list">
                <li>
                  Build and contribute to data workflows using Python, Prefect
                  and PostgreSQL, with dbt transformations and data-quality
                  work.
                </li>
                <li>
                  Develop FastAPI APIs and practical AI solutions alongside
                  support and workflow automation systems.
                </li>
                <li>
                  Contribute to healthcare / eBuzima utilization systems and
                  Rwanda air-quality work involving REMA and PurpleAir data.
                </li>
                <li>
                  Connect backend engineering, data reliability and operational
                  needs while keeping sensitive implementation details private.
                </li>
              </ul>
              <a className="text-link" href={resume} download>
                View the concise resume <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="section shell">
          <div className="about-grid">
            <div>
              <p className="eyebrow">03 / THE ENGINEER BEHIND THE SYSTEMS</p>
              <h2>
                Curiosity in.
                <br />
                <span>Useful systems out.</span>
              </h2>
              <p className="about-lead">
                I’m interested in the space between a promising idea and a
                system people can actually use.
              </p>
              <p>
                My work brings together data engineering, backend development
                and AI. In healthcare, environmental monitoring and product
                prototyping, I look for clear interfaces, trustworthy data and
                automation that solves a practical problem.
              </p>
              <p>
                Rwanda is my starting point. I want to build technology that
                respects local constraints — connectivity, resources and
                maintainability — and contributes to useful, lasting systems
                across Africa.
              </p>
              <div className="education">
                <span className="eyebrow">EDUCATION / IN PROGRESS</span>
                <h3>African Leadership University</h3>
                <p>Bachelor of Software Engineering (BSE)</p>
                <p>
                  Current studies: Year 2 · Expected completion: January 2028
                </p>
              </div>
            </div>
            <div className="toolkit">
              <p className="eyebrow">WORKING TOOLKIT</p>
              {[
                ["01", "Data foundations", "Python · SQL · PostgreSQL"],
                [
                  "02",
                  "Pipelines & quality",
                  "Prefect · dbt · Data validation",
                ],
                [
                  "03",
                  "APIs & automation",
                  "FastAPI · Backend integration · Workflow automation",
                ],
                [
                  "04",
                  "Applied systems",
                  "AI solutions · System design · Product prototyping",
                ],
              ].map(([n, title, text]) => (
                <div className="toolkit-row" key={n}>
                  <span>{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <Check size={16} />
                </div>
              ))}
              <div className="principle">
                <span>ENGINEERING PRINCIPLE</span>
                <p>
                  “Make it useful.
                  <br />
                  Make it understandable.
                  <br />
                  Then make it better.”
                </p>
                <button
                  aria-pressed={training}
                  onClick={() => setTraining(!training)}
                >
                  {training
                    ? "Training arc: activated ✦"
                    : "Always in a learning arc ↗"}
                </button>
                <p className="training-message" role="status">
                  {training
                    ? "One small improvement. Every iteration."
                    : "A little curiosity goes a long way."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="section shell">
            <p className="eyebrow">04 / NEXT CONNECTION</p>
            <div className="contact-grid">
              <div>
                <h2>
                  Let’s build
                  <br />
                  <em>something useful.</em>
                </h2>
                <p>
                  For engineering opportunities, research conversations or
                  practical AI collaborations — let’s talk.
                </p>
                <a
                  className="contact-email"
                  href="mailto:thierry.ru34@gmail.com"
                >
                  thierry.ru34@gmail.com <ArrowUpRight />
                </a>
              </div>
              <div className="contact-links">
                <a href="mailto:thierry.ru34@gmail.com">
                  <Mail size={19} />
                  <span>
                    Email<small>Start a conversation</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://github.com/Thierry-ctrl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={19} />
                  <span>
                    GitHub<small>Thierry-ctrl</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/thierry-rugira-644146264/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={19} />
                  <span>
                    LinkedIn<small>Thierry Rugira</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
                <a href={resume} download>
                  <Download size={19} />
                  <span>
                    Resume<small>One page · PDF</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell">
        <span>© {new Date().getFullYear()} Thierry Rugira</span>
        <span>ENGINEERED WITH INTENTION / KIGALI, RW</span>
        <a href="#">Back to top ↑</a>
      </footer>
      <dialog
        aria-labelledby="command-title"
        ref={dialog}
        className="command-dialog"
        onClick={(e) => {
          if (e.target === dialog.current) closeCommands();
        }}
      >
        <div className="dialog-heading">
          <h2 id="command-title">Quick navigation</h2>
          <button onClick={closeCommands} aria-label="Close quick navigation">
            <X size={20} />
          </button>
        </div>
        <label className="sr-only" htmlFor="command-search">
          Search destinations
        </label>
        <input
          id="command-search"
          ref={search}
          placeholder="Where would you like to go?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <nav aria-label="Quick navigation">
          {commands.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeCommands}
              download={item.href === resume || undefined}
            >
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          {commands.length === 0 && (
            <p role="status">No matches. Try “work” or “resume”.</p>
          )}
        </nav>
        <small>Tab to move · Enter to select · Esc to close</small>
      </dialog>
    </>
  );
}
