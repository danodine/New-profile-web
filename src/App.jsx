import React, { useEffect, useRef, useState } from "react";

/* ========= SETTINGS ========= */
const FACTS = [
  "I debug best with coffee and a lo-fi playlist.",
  "I once fixed a production bug on 1 bar of Wi-Fi in the Alps.",
  "I enjoy mentoring and simplifying complex topics.",
  "Tailwind keeps my UI expressive and consistent.",
  "Big dark-mode fan—but I always test accessibility.",
  "I sketch system diagrams on paper before I code.",
  "Keyboard shortcuts are my second language.",
];

/* ========= UTILS ========= */
function useScrollTo() {
  return (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

/* ========= HEADER ========= */
function Header() {
  const scrollTo = useScrollTo();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (id, label) => (
    <button
      onClick={() => {
        setOpen(false);
        scrollTo(id);
      }}
      className="px-3 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {label}
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div
          className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          David Nodine
        </div>
        <nav className="hidden md:flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300">
          {navItem("about", "About")}
          {navItem("projects", "Projects")}
          {navItem("skills", "Skills")}
          {navItem("experience", "Experience")}
          {navItem("education", "Education")}
          {navItem("game", "Fun Facts")}
          {navItem("contact", "Contact")}
        </nav>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden pb-4 flex flex-col gap-2 text-sm px-4">
          {[
            "about",
            "projects",
            "skills",
            "experience",
            "education",
            "game",
            "contact",
          ].map((id) => navItem(id, id.charAt(0).toUpperCase() + id.slice(1)))}
        </div>
      )}
    </header>
  );
}

/* ========= HERO ========= */
function Hero() {
  const scrollTo = useScrollTo();
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-transparent dark:from-indigo-900/20 dark:via-zinc-900 dark:to-zinc-900" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200">
            Software Engineer · Hamburg, Germany
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            I build scalable web & mobile experiences
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
            I’m a Software Engineer focused on React, React Native, and Node.js.
            I care about performance, clean architecture, and user-friendly
            interfaces. I enjoy solving real problems with pragmatic engineering
            and collaborative teamwork.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium hover:opacity-90"
            >
              See my projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Contact
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            {[
              "React",
              "React Native",
              "TypeScript",
              "Node.js",
              "Express",
              "Redux Toolkit",
              "Jest",
              "Vite",
              "MongoDB",
            ].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 to-fuchsia-200 dark:from-indigo-900/40 dark:to-fuchsia-900/30 blur-3xl rounded-[2rem]" />
          <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 bg-white/70 dark:bg-zinc-900/60 shadow-xl">
            <code className="font-mono text-sm text-zinc-800 dark:text-zinc-100">
              const developer = {"{"} name: "David Nodine", role: "Software
              Engineer", location: "Hamburg" {"}"}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= ABOUT ========= */
function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h2>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
        I have 4+ years of experience building web and mobile applications. I’ve
        delivered production apps across React, React Native, and Node.js;
        improved performance and stability through testing and clean
        architecture; and collaborated in agile teams. I’m currently open to
        opportunities in Germany and remote roles across Europe.
      </p>
    </section>
  );
}

function useQueryParamState(key, initial) {
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key) || initial || "";
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (value) params.set(key, value);
    else params.delete(key);
    const next = `${window.location.pathname}?${params.toString()}${
      window.location.hash
    }`;
    window.history.replaceState({}, "", next);
  }, [key, value]);
  return [value, setValue];
}

/* ========= PROJECTS ========= */
function Projects() {
  const items = [
    {
      slug: "appt-backend",
      year: "2025",
      title: "Appointment App – Backend API",
      tags: ["Node.js", "Express", "MongoDB", "Auth", "RBAC"],
      blurb:
        "Secure, scalable REST API for authentication, profiles, and appointment CRUD. Includes role-based access control, consistent error handling, and detailed docs.",
      links: {
        demo: "#", // we’ll route internally
        code: "https://github.com/danodine/appointment-app-backend",
        writeup: "#", // we’ll route internally
      },
      demoUrl: "https://your-deploy-url.example/demo-appt-backend", // or /demos/appt-backend/index.html
      screens: ["/screens/appt-backend-1.png", "/screens/appt-backend-2.png"], // optional
      writeup: {
        problem:
          "Build a reliable API for appointment scheduling with multi-role access and predictable error semantics.",
        architecture: [
          "Node.js + Express, Feature-first modules",
          "MongoDB (Mongoose) with indexed queries",
          "RBAC middleware + JWT auth; refresh tokens on secure path",
          "Global error handler with problem+json responses",
        ],
        tradeoffs: [
          "Chose MongoDB for iteration speed; added compound indexes to mitigate hot paths.",
          "Kept monorepo out of scope initially to reduce deployment complexity.",
        ],
        results: [
          "p95 latency under 120ms on core endpoints.",
          "Zero 5xx in first 2 weeks post-release.",
        ],
        future: [
          "Rate-limits per route using sliding window in Redis.",
          "Async domain events for audit log and analytics.",
        ],
      },
      note: "Backend powering the appointment platform.",
    },
    {
      slug: "appt-patient",
      year: "2025",
      title: "Appointment App – Patient (Mobile + Web)",
      tags: ["React Native", "Expo", "React", "Redux Toolkit"],
      blurb:
        "Patient-facing client for searching doctors and booking appointments. Designed for fast UX and reliability. Also includes a full web client.",
      links: {
        demo: "#",
        code: "https://github.com/danodine/appointment-app-patient",
        writeup: "#",
      },
      demoUrl: "https://your-deploy-url.example/demo-appt-patient",
      screens: ["/screens/appt-patient-1.png"],
      writeup: {
        problem: "Search and booking flow with offline tolerance.",
        architecture: [
          "React Native + Expo, shared UI tokens with web client",
          "Redux Toolkit Query for caching & retries",
          "Optimistic updates for booking; reconciliation on reconnect",
        ],
        tradeoffs: [
          "Chose RTK Query over SWR for better mutation ergonomics.",
          "Deferred deep-link routes to focus on reliability.",
        ],
        results: [
          "TTI < 2s on mid-tier devices",
          "Crash-free sessions > 99.7%",
        ],
        future: [
          "In-app reminders and calendar sync",
          "Biometrics for quick login",
        ],
      },
      note: "Includes a web client for desktop usage.",
    },
    {
      slug: "plate-generator",
      year: "2025",
      title: "Plate Generator (WIP)",
      tags: ["React", "TypeScript", "Vite"],
      blurb:
        "Generate printable plate layouts from input data. Precise UI, export flow, and keyboard-first productivity.",
      links: {
        demo: "#",
        code: "https://github.com/danodine/plate-generator",
        writeup: "#",
      },
      demoUrl: "/demos/plate-generator/index.html", // host a small sample in /public/demos
      screens: ["/screens/plate-1.png"],
      writeup: {
        problem: "Fast, pixel-precise editor with export to PDF.",
        architecture: [
          "React + Zustand for low-overhead state",
          "Keyboard command palette; grid & snapping",
          "Canvas render → vector export pipeline",
        ],
        tradeoffs: ["Kept feature scope tight to achieve stable v1 export"],
        results: ["Sub-50ms interaction budget on common actions"],
        future: ["SVG export, presets, multi-doc batch mode"],
      },
      note: "Early stage; iterating quickly.",
    },
  ];
  const [projectSlug, setProjectSlug] = useQueryParamState("p", "");
  const [view, setView] = useQueryParamState("view", "");
  const active = items.find((p) => p.slug === projectSlug) || null;

  useEffect(() => {
    // sanitize view
    if (active && !["demo", "writeup"].includes(view)) setView("demo");
  }, [active, view, setView]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Selected work
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">
        A few projects that reflect my approach—focused on clear UX, robust
        APIs, and pragmatic engineering.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60 hover:shadow-lg transition"
          >
            <div className="text-xs text-zinc-500">{p.year}</div>
            <h3 className="mt-1 font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              {p.title}
            </h3>
            <div className="aspect-video rounded-xl bg-zinc-100 dark:bg-zinc-800 my-3 overflow-hidden grid place-items-center text-xs text-zinc-500">
              screenshot
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {p.blurb}
            </p>
            {p.note && <p className="mt-2 text-xs text-zinc-500">{p.note}</p>}
            <div className="mt-3 flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <button
                onClick={() => {
                  setProjectSlug(p.slug);
                  setView("demo");
                }}
                className="underline underline-offset-4 hover:no-underline"
              >
                Demo
              </button>
              <a
                href={p.links.code}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                Code
              </a>
              <button
                onClick={() => {
                  setProjectSlug(p.slug);
                  setView("writeup");
                }}
                className="underline underline-offset-4 hover:no-underline"
              >
                Write-up
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://github.com/danodine"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
        >
          See more on GitHub →
        </a>
      </div>
      {active && (
        <ProjectPanel
          project={active}
          view={view || "demo"}
          onClose={() => {
            setProjectSlug("");
            setView("");
          }}
        />
      )}
    </section>
  );
}

function ProjectPanel({ project, view, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 md:inset-y-6 md:right-6 md:left-auto md:w-[900px] bg-white dark:bg-zinc-900 border-t md:border rounded-t-2xl md:rounded-2xl border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <div className="font-semibold">{project.title}</div>
          <div className="flex items-center gap-2">
            <button
              className={`text-sm px-3 py-1.5 rounded-lg ${
                view === "demo"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "border border-zinc-300 dark:border-zinc-700"
              }`}
              onClick={() => {
                const params = new URLSearchParams(window.location.search);
                params.set("p", project.slug);
                params.set("view", "demo");
                window.history.replaceState({}, "", `?${params.toString()}`);
              }}
            >
              Demo
            </button>
            <button
              className={`text-sm px-3 py-1.5 rounded-lg ${
                view === "writeup"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "border border-zinc-300 dark:border-zinc-700"
              }`}
              onClick={() => {
                const params = new URLSearchParams(window.location.search);
                params.set("p", project.slug);
                params.set("view", "writeup");
                window.history.replaceState({}, "", `?${params.toString()}`);
              }}
            >
              Write-up
            </button>
            <button
              onClick={onClose}
              className="px-2 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 overflow-auto grow">
          {view === "demo" ? (
            project.demoUrl ? (
              <div className="space-y-3">
                <div className="text-sm text-zinc-500">
                  Embedded demo (open in new tab if blocked):{" "}
                  <a
                    className="underline"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open demo ↗
                  </a>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800">
                  <iframe
                    src={project.demoUrl}
                    title={`${project.title} demo`}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                {project.screens?.length ? (
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.screens.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt="screenshot"
                        className="rounded-lg border border-zinc-200 dark:border-zinc-800"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="text-sm text-zinc-500">Demo coming soon.</div>
            )
          ) : (
            <Writeup w={project.writeup} codeUrl={project.links.code} />
          )}
        </div>
      </div>
    </div>
  );
}

function Writeup({ w, codeUrl }) {
  if (!w)
    return <div className="text-sm text-zinc-500">Write-up coming soon.</div>;
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h3>Problem</h3>
      <p>{w.problem}</p>

      <h3>Architecture</h3>
      <ul>
        {w.architecture?.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <h3>Key Trade-offs</h3>
      <ul>
        {w.tradeoffs?.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h3>Results</h3>
      <ul>
        {w.results?.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>

      <h3>What’s next</h3>
      <ul>
        {w.future?.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <p>
        <a
          className="inline-flex items-center gap-2 underline underline-offset-4"
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub →
        </a>
      </p>
    </article>
  );
}

/* ========= SKILLS ========= */
function Skills() {
  const categories = [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java (basic)"],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React",
        "React Native",
        "Redux Toolkit",
        "Express.js",
        "Node.js",
        "Vite",
        "Flask",
      ],
    },
    {
      title: "Testing & Tools",
      items: ["Jest", "React Testing Library", "Git", "Storybook", "Jira"],
    },
    { title: "Databases", items: ["MongoDB", "MySQL", "SQLite", "Firebase"] },
  ];
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Technical skills
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-900/60"
          >
            <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ========= EXPERIENCE ========= */
function Experience() {
  const jobs = [
    {
      role: "Technical Project Manager",
      company: "Media.ventive",
      period: "Jun 2025 – Present · Remote, Germany",
      details: [
        "I conduct technical reviews for 50+ client websites focusing on performance, SEO, and code quality.",
        "I identify and document issues that improved client satisfaction by 20%.",
      ],
    },
    {
      role: "Software Engineer (Freelance)",
      company: "Independent",
      period: "Nov 2024 – Jun 2025 · Remote, Germany",
      details: [
        "I developed web and mobile apps using React, React Native, and Node.js.",
        "I implemented offline sync and RESTful APIs, improving retention in low-connectivity areas.",
      ],
    },
    {
      role: "Frontend Semi-Senior Developer",
      company: "Galileo Financial Technologies",
      period: "Aug 2021 – Jan 2024 · Remote, Ecuador",
      details: [
        "I delivered performant web/mobile apps with React and Redux, reducing cross-platform bugs.",
        "I achieved 80%+ unit test coverage with Jest and SonarCloud for maintainable releases.",
      ],
    },
    {
      role: "Software Developer",
      company: "EdiLoja Cia. Ltda.",
      period: "Jan 2020 – Aug 2021 · Loja, Ecuador",
      details: [
        "I built internal full-stack platforms with clean architecture and user-centric interfaces.",
        "I collaborated with cross-functional teams to deliver reliable solutions.",
      ],
    },
  ];
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Experience
      </h2>
      <div className="mt-8 space-y-8">
        {jobs.map((job) => (
          <div
            key={job.role}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60"
          >
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              {job.role}
            </h3>
            <p className="text-sm text-zinc-500">
              {job.company} · {job.period}
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
              {job.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ========= EDUCATION ========= */
function Education() {
  const edu = [
    {
      school: "Masterschool",
      degree: "Software Engineering",
      period: "Jan 2025 – Present",
      desc: "Hands-on program building full-stack apps with JavaScript, React, Node.js, and SQL. Emphasis on OOP, TDD, and CI/CD.",
    },
    {
      school: "Universidad Técnica Particular de Loja",
      degree: "Bachelor’s in Computer Systems Engineering",
      period: "Sept 2013 – Dec 2019",
      desc: "Focused on algorithms, system architecture, and network applications with hardware-software integration.",
    },
  ];
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Education
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {edu.map((e) => (
          <div
            key={e.school}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-900/60"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {e.school}
            </h3>
            <p className="text-sm text-zinc-500">
              {e.degree} · {e.period}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ========= COURSES & CERTIFICATIONS ========= */
function Courses() {
  const courses = [
    {
      title: "Advanced React and Redux",
      provider: "Udemy",
      period: "2024",
      desc: "Deep dive into component composition, performance optimization, hooks, and advanced state management with Redux Toolkit.",
    },
    {
      title: "Node.js, Express & MongoDB Bootcamp",
      provider: "Udemy",
      period: "2023",
      desc: "Comprehensive backend development course focusing on REST APIs, authentication, and database modeling.",
    },
    {
      title: "TypeScript Masterclass",
      provider: "Udemy",
      period: "2023",
      desc: "Learned how to design robust, type-safe applications with advanced TypeScript generics and interfaces.",
    },
    {
      title: "React Native – The Practical Guide",
      provider: "Udemy",
      period: "2022",
      desc: "Developed and deployed mobile apps with React Native, focusing on navigation, state management, and native modules.",
    },
  ];

  return (
    <section id="courses" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Courses & Certifications
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-3xl">
        I regularly expand my technical knowledge through professional courses
        and certifications focused on modern JavaScript frameworks and backend
        development.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {courses.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-900/60"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {c.title}
            </h3>
            <p className="text-sm text-zinc-500">
              {c.provider} · {c.period}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ========= CELEBRATION EFFECT (CODE RAIN) ========= */
function useCelebrationRain() {
  const [active, setActive] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const cvs = canvasRef.current;
    const ctx = cvs.getContext("2d");
    let w = (cvs.width = window.innerWidth);
    let h = (cvs.height = window.innerHeight);

    const onResize = () => {
      w = cvs.width = window.innerWidth;
      h = cvs.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const glyphs = "{}[]()<>=+-*/&|!?:;#$%_0123456789abcdef";
    const columns = Math.floor(w / 16);
    const drops = new Array(columns).fill(0).map(() => Math.random() * -50);

    let raf = 0;
    const loop = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < columns; i++) {
        const x = i * 16 + 8;
        const y = drops[i] * 16;
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
        // rainbow-ish hue by column
        const hue = Math.floor((i / columns) * 360);
        ctx.fillStyle = `hsl(${hue}, 90%, 60%)`;
        ctx.font = "16px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillText(ch, x, y);
        drops[i] += 1 + Math.random() * 0.5;
        if (y > h + 100) drops[i] = Math.random() * -20;
      }
      raf = requestAnimationFrame(loop);
    };

    // clear background initially
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, w, h);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ctx.clearRect(0, 0, w, h);
    };
  }, [active]);

  const start = (ms = 3000) => {
    setActive(true);
    // tiny page pulse
    document.documentElement.classList.add(
      "animate-[pulse_0.8s_ease-in-out_3]"
    );
    const to = setTimeout(() => {
      setActive(false);
      document.documentElement.classList.remove(
        "animate-[pulse_0.8s_ease-in-out_3]"
      );
    }, ms);
    return () => clearTimeout(to);
  };

  const Overlay = active ? (
    <div className="fixed inset-0 z-[70] pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  ) : null;

  return { start, Overlay, active };
}

/* ========= SFX: lightweight WebAudio beeps (no files) ========= */
function useSFX() {
  const ctxRef = React.useRef(null);
  const [muted, setMuted] = React.useState(false);

  const ensureCtx = React.useCallback(() => {
    if (!ctxRef.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new Ctx();
    }
  }, []);

  // simple one-shot tone
  const tone = React.useCallback(
    (freq = 440, ms = 120, type = "sine", gain = 0.08) => {
      if (muted || !ctxRef.current) return;
      const ctx = ctxRef.current;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = gain;
      osc.connect(g);
      g.connect(ctx.destination);

      const t0 = ctx.currentTime;
      // quick fade in/out to avoid clicks
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(gain, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + ms / 1000);

      osc.start(t0);
      osc.stop(t0 + ms / 1000 + 0.02);
    },
    [muted]
  );

  // public SFX
  const hitSfx = React.useCallback(() => {
    // little upward “tick”
    tone(380, 70, "square", 0.06);
    setTimeout(() => tone(540, 70, "triangle", 0.05), 60);
  }, [tone]);

  const missSfx = React.useCallback(() => {
    if (muted || !ctxRef.current) return;
    const ctx = ctxRef.current;

    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.15);

    g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

    osc.connect(g);
    g.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  }, [muted]);

  const winSfx = React.useCallback(() => {
    // short arpeggio
    const notes = [440, 554, 659, 880];
    notes.forEach((f, i) =>
      setTimeout(() => tone(f, 110, "sine", 0.07), i * 110)
    );
  }, [tone]);

  // prime the context on user gesture
  const prime = React.useCallback(() => {
    ensureCtx();
    // iOS sometimes needs a silent “nudge”
    if (ctxRef.current && ctxRef.current.state === "suspended") {
      ctxRef.current.resume?.();
    }
  }, [ensureCtx]);

  return { prime, hitSfx, winSfx, muted, setMuted, missSfx };
}

/* ========= WHACK-A-BEAVER (FACTS) — table look + image preload + proper miss logic ========= */
function BeaverBopGame() {
  const GRID = 3; // 3x3 holes
  const MAX_POINTS = 5; // stop at 5 facts
  const BASE_SHOW_MS = 1100; // start visible time
  const MIN_SHOW_MS = 600;
  const SPEEDUP = 0.9; // multiplies after each hit
  const GRACE_MS = 140; // ✅ click grace AFTER it hides
  const BEAVER_IMG = "/beaver.png"; // put this file in /public/beaver.png

  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [slot, setSlot] = useState(-1); // 0..8 active, -1 none
  const [showMs, setShowMs] = useState(BASE_SHOW_MS);
  const [revealed, setRevealed] = useState([]);

  // image handling
  const [imgReady, setImgReady] = useState(false);
  const [imgError, setImgError] = useState(false);

  const [inPlayfield, setInPlayfield] = useState(false);

  const timerRef = useRef(null);
  const lockedRef = useRef(false); // debounce per appearance
  const lastVisibleRef = useRef({ slot: -1, until: 0 }); // timestamp in ms
  const { start: startRain, Overlay } = useCelebrationRain();

  const { prime, hitSfx, winSfx, muted, setMuted, missSfx } = useSFX();

  // Preload beaver image once
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImgReady(true);
    img.onerror = () => setImgError(true);
    img.src = BEAVER_IMG;
  }, []);

  const availableFacts = FACTS.slice(0, MAX_POINTS);

  const stopTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const pickNextSlot = (prev) => {
    const total = GRID * GRID;
    let next = Math.floor(Math.random() * total);
    if (next === prev)
      next = (next + 1 + Math.floor(Math.random() * (total - 1))) % total;
    return next;
  };

  // Schedules target pop-ups. NOTE: no "miss" increment on timeout anymore.
  const scheduleNext = (delay) => {
    stopTimers();
    timerRef.current = setTimeout(() => {
      lockedRef.current = false;
      setSlot((s) => {
        const next = pickNextSlot(s);
        // record when this one will stop being visible
        lastVisibleRef.current = {
          slot: next,
          until: performance.now() + showMs,
        };
        return next;
      });

      // hide after showMs, then queue the next
      stopTimers();
      timerRef.current = setTimeout(() => {
        lockedRef.current = true; // block late hits
        scheduleNext(80);
      }, showMs);
    }, delay);
  };

  const reset = () => {
    stopTimers();
    setScore(0);
    setMisses(0);
    setSlot(-1);
    setShowMs(BASE_SHOW_MS); // ✅ ensure speed reset
    setRevealed([]);
    lockedRef.current = false;
  };

  const startGame = () => {
    prime(); // ✅ unlock audio on Start/Restart click
    reset();
    setRunning(true);
    scheduleNext(300);
  };

  useEffect(() => stopTimers, []);

  // handle win
  useEffect(() => {
    if (!running) return;
    if (score >= MAX_POINTS) {
      setRunning(false);
      stopTimers();
      startRain(3200);
      winSfx();
      setSlot(-1);
    }
  }, [score, running, startRain]);

  const onHoleClick = (i) => {
    if (!running) return;

    const now = performance.now();
    const wasJustHere =
      lastVisibleRef.current.slot === i &&
      now <= lastVisibleRef.current.until + GRACE_MS;

    if (!lockedRef.current && i === slot) {
      // ✅ normal hit
      hitSfx();
    } else if (wasJustHere) {
      // ✅ grace hit: allow a tiny late click
      hitSfx();
    } else {
      // ❌ real miss
      missSfx();
      setMisses((m) => m + 1);
      return;
    }

    // shared hit handling
    lockedRef.current = true;

    setScore((s) => s + 1);

    const remaining = availableFacts.filter((f) => !revealed.includes(f));
    const fact =
      remaining[Math.floor(Math.random() * Math.max(1, remaining.length))];
    if (fact) setRevealed((r) => [fact, ...r]);

    setShowMs((ms) => Math.max(MIN_SHOW_MS, Math.floor(ms * SPEEDUP)));
    scheduleNext(140);
  };

  // --- Agujero redondo con CLIP y aro por encima (el castor sí se oculta) ---
  // Agujero redondo con clip; el click es sólo en el agujero
  const Cell = ({ i }) => {
    const active = i === slot && running && score < MAX_POINTS;

    // handler único del agujero
    const handleHoleClick = () => onHoleClick(i);

    return (
      <div
        className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 grid place-items-center select-none"
        aria-label={`Hole ${i + 1}`}
      >
        {/* WELL / POZO: click aquí = área exacta del agujero */}
        <div
          onClick={handleHoleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && handleHoleClick()
          }
          className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden
                   focus:outline-none ring-0 focus:ring-2 focus:ring-indigo-400/50"
        >
          {/* fondo sombreado del pozo */}
          <div
            className="absolute inset-0 rounded-full z-[1]
                        bg-[radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.85)_55%,rgba(0,0,0,0.55)_72%,rgba(0,0,0,0.3)_85%)]"
          />

          {/* castor (se recorta por overflow-hidden del pozo) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-0 z-[2]
                      transition-transform duration-150 will-change-transform
                      ${active ? "translate-y-[-12%]" : "translate-y-[48%]"}`}
          >
            {imgReady && !imgError ? (
              <img
                src={BEAVER_IMG}
                alt="Beaver"
                className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain
                         drop-shadow-[0_10px_14px_rgba(0,0,0,0.35)] pointer-events-none"
                draggable={false}
              />
            ) : (
              <div
                className="text-3xl md:text-4xl lg:text-5xl pointer-events-none
                            drop-shadow-[0_10px_14px_rgba(0,0,0,0.35)]"
              >
                🦫
              </div>
            )}
          </div>

          {/* aro superior */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full z-[3]
                        ring-1 ring-white/8 dark:ring-white/15
                        shadow-[inset_0_-18px_28px_rgba(0,0,0,0.55),inset_0_10px_14px_rgba(255,255,255,0.04)]"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="game" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      {Overlay}

      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
        Fun facts (Whack-a-Beaver)
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
        Golpea al castor cuando asome. Llega a 5 para desbloquear todos los
        facts — se acelera en cada acierto.
      </p>

      <div
        className="rounded-3xl border border-zinc-200 dark:border-zinc-800
                    bg-white/60 dark:bg-zinc-900/60 backdrop-blur
                    shadow-[0_10px_35px_-15px_rgba(0,0,0,0.45)] overflow-hidden"
      >
        <div
          className="rounded-3xl border border-zinc-200 dark:border-zinc-800
                bg-white/60 dark:bg-zinc-900/60 backdrop-blur
                shadow-[0_10px_35px_-15px_rgba(0,0,0,0.45)] overflow-hidden"
        >
          <div
            className="flex items-center justify-between px-4 py-3
                  border-b border-zinc-200 dark:border-zinc-800
                  bg-gradient-to-r from-indigo-500/10 via-transparent to-fuchsia-500/10"
          >
            <div className="text-sm font-semibold">
              Score: {score}/{MAX_POINTS} · Misses: {misses} · Speed:{" "}
              {Math.round(showMs)}ms
            </div>
            <div className="flex items-center gap-2">
              {!running && score >= MAX_POINTS && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400">
                  ¡Muy bien! Ya los tienes todos.
                </span>
              )}
              <button
                onClick={startGame}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500
                   dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-[0_6px_20px_-8px_rgba(79,70,229,0.6)] text-sm"
              >
                {running ? "Restart" : score > 0 ? "Play again" : "Start"}
              </button>
              <button
                onClick={() => setMuted((m) => !m)}
                title={muted ? "Unmute" : "Mute"}
                className="px-2 py-1 rounded-lg border border-zinc-300/40 dark:border-zinc-700/50 text-xs hover:bg-zinc-100/50 dark:hover:bg-zinc-800/60"
              >
                {muted ? "🔇" : "🔊"}
              </button>
            </div>
          </div>

          {/* tablero: noche con estrellas, coherente con tu tema */}
          {/* tablero: aplica cursor martillo cuando el mouse entra */}
          <div
            className={`relative p-5 md:p-6 bg-stars ${
              inPlayfield ? "cursor-hammer" : ""
            }`}
            onMouseEnter={() => setInPlayfield(true)}
            onMouseLeave={() => setInPlayfield(false)}
          >
            <div className="relative w-full max-w-[22rem] md:max-w-[26rem] lg:max-w-[30rem] mx-auto">
              <div className="grid grid-cols-3 gap-4 md:gap-5 justify-items-center">
                {Array.from({ length: GRID * GRID }).map((_, i) => (
                  <Cell key={i} i={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* facts */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 p-4">
          <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">
            Facts
          </div>
          {revealed.length === 0 ? (
            <div className="text-sm text-zinc-500">
              Golpea un castor para revelar un fact.
            </div>
          ) : (
            <ul className="space-y-2">
              {revealed.map((f, idx) => (
                <li
                  key={idx}
                  className="text-sm rounded-xl px-3 py-2
                             bg-white/70 dark:bg-zinc-800/60 backdrop-blur
                             border border-zinc-200/70 dark:border-zinc-700/50"
                >
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

/* ========= CONTACT ========= */
function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Get in touch
      </h2>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
        If you’re looking for a skilled software engineer experienced in React,
        React Native, and Node.js, I’d love to chat. I’m open to roles in
        Germany and remote across Europe.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
        <a
          href="https://github.com/danodine"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/davidnodine/"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          LinkedIn
        </a>
        <a
          href="/David-Nodine-CV.pdf"
          download
          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Download CV
        </a>
      </div>
      <footer className="pt-8 text-xs text-zinc-500">
        © {new Date().getFullYear()} David Nodine — Built with React & Tailwind
      </footer>
    </section>
  );
}

/* ========= ROOT ========= */
export default function PortfolioSite() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    // read what's currently on <html> (set by the head script)
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className="min-h-screen font-sans antialiased bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <div className="fixed right-4 bottom-4 z-50">
        <button
          onClick={() => setDark((d) => !d)}
          className="px-3 py-2 rounded-xl shadow border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-800/80 backdrop-blur"
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Courses />
      <BeaverBopGame />
      <Contact />
    </main>
  );
}
