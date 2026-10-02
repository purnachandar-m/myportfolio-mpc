import React, { useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Github,
  Heart,
  Linkedin,
  Mail,
  Menu,
  Quote,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";

const navigation = [
  ["Home", "home"],
  ["Education", "education"],
  ["Experience", "experience"],
  ["Certificates", "certificates"],
  ["Achievements", "achievements"],
  ["My shelf", "shelf"],
];

const education = [
  {
    period: "2021 — 2025",
    degree: "B.Tech · Information Technology",
    school: "CVR College of Engineering",
    result: "8.9 CGPA",
    detail:
      "Built a foundation across software engineering, databases, web technologies, and systems thinking.",
  },
  {
    period: "2019 — 2021",
    degree: "Intermediate · 12th grade",
    school: "SR Junior College",
    result: "932 marks",
    detail: "A focused start to my journey in technology and problem solving.",
  },
  {
    period: "2019",
    degree: "Secondary school · 10th grade",
    school: "Sri Chaitanya High School",
    result: "9.3 GPA",
    detail: "The early curiosity that grew into a career in engineering.",
  },
];

const projects = [
  {
    number: "01",
    title: "Bulk API Performance Test Framework",
    type: "JMeter · Groovy · Jenkins",
    detail:
      "Created dynamic data generators and a repeatable load suite that brought bulk API failures from over 90% to under 5%. Integrated into Jenkins for continuous regression.",
    icon: TerminalSquare,
  },
  {
    number: "02",
    title: "JMeter + Selenium integration",
    type: "JMeter · Selenium WebDriver",
    detail:
      "Built a proof of concept to collect browser-side performance metrics alongside server load data. Adopted by cross-functional teams for UI performance validation.",
    icon: Code2,
  },
  {
    number: "03",
    title: "AI-driven performance monitoring",
    type: "Splunk · Azure DevOps · AI",
    detail:
      "Automated log analysis, weekly defect creation, and stakeholder alerts, replacing a repetitive manual monitoring workflow.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "AgroAid · Agricultural Empowerment",
    type: "React · MongoDB",
    detail:
      "A farmer-support portal with weather updates, expert advice, and equipment directories. Presented at the national-level Ciencia conference.",
    icon: Cloud,
  },
];

const certificates = [
  "Core Java Certification · E-Box",
  "Web Technology Certification · E-Box",
  "Cyber Security · Coursera",
  "Python Workshop · CVR College of Engineering",
  "Salesforce Developer Virtual Internship",
  "AWS Learning Paths & DevOps Engineering · S&P Global",
];

const quoteCollections = {
  Motivation: [
    "Small steps still move you forward.",
    "Discipline is a promise you keep to your future self.",
    "Start before you feel ready; clarity grows while moving.",
    "A hard day can still be a useful day.",
    "Consistency makes quiet progress impossible to ignore.",
    "You do not need a perfect plan, just an honest next step.",
    "Turn the thing you keep postponing into the thing you begin.",
    "Your pace is allowed to be different from your ambition.",
    "Make the work a little better than you found it.",
    "Every expert has a first version they were brave enough to share.",
    "Keep showing up; results are often late, not absent.",
    "Curiosity can take you further than confidence.",
    "Progress is built in the ordinary hours.",
    "Learn the lesson, keep the courage.",
    "The next attempt gets to use everything the last one taught you.",
    "Focus on what you can improve today.",
    "A setback is information, not an identity.",
    "Give your goals the patience you give your growth.",
    "Build a little. Learn a little. Repeat.",
    "Be proud of the work nobody saw you do.",
  ],
  Love: [
    "Love is paying attention to the small things.",
    "The best conversations leave room for silence.",
    "Care is a verb you practice on ordinary days.",
    "Be someone’s calm, not another reason to rush.",
    "A kind word can stay with a person for years.",
    "Love grows where honesty feels safe.",
    "Listen to understand, not to prepare your reply.",
    "Good relationships make space for two whole people.",
    "Gentleness is strength with its hands open.",
    "A little patience can change the whole conversation.",
    "Say the kind thing while it can still be heard.",
    "Trust is built in moments too small to announce.",
    "Some of the deepest care is simply showing up.",
    "Choose understanding before assumption.",
    "Love is being glad that someone is becoming themselves.",
    "People remember how freely they could be themselves around you.",
    "Make room for both truth and tenderness.",
    "A home can be a person who listens.",
    "Appreciation turns the familiar into something precious.",
    "Leave people a little lighter than you found them.",
  ],
  Life: [
    "Life gets clearer when you give it your attention.",
    "You can change direction without calling the journey a failure.",
    "Rest is part of the rhythm, not a break from it.",
    "Not every season is meant to look productive.",
    "A meaningful life is made of ordinary moments noticed well.",
    "Let the lesson stay; let the weight go.",
    "You are allowed to outgrow an old version of the plan.",
    "Some answers only arrive after a little living.",
    "There is more than one good way forward.",
    "Make time for the people who make time feel generous.",
    "The present is a place to live, not just pass through.",
    "A slower afternoon can still be a good use of a day.",
    "Keep what brings you peace; question what only brings applause.",
    "Life is not late because it took a different route.",
    "Notice what is already going right.",
    "A new beginning can be quiet.",
    "You do not have to solve your whole life this week.",
    "Some of the best progress looks like letting go.",
    "Make a life that feels like yours from the inside.",
    "There is wisdom in knowing what deserves your energy.",
  ],
};

const skills = [
  [
    "Performance",
    "JMeter, K6, load / stress / scalability, baseline & regression testing",
  ],
  [
    "Quality & API",
    "Selenium WebDriver, Postman, Swagger, REST API testing, RCA",
  ],
  [
    "Observability",
    "Splunk dashboards & queries, CloudWatch, performance monitoring",
  ],
  [
    "Cloud & delivery",
    "AWS EC2 / ECS / S3, Azure DevOps, Jenkins, Octopus, Git",
  ],
  ["Code", "Groovy, Python, JavaScript, Java, SQL, C"],
  [
    "AI & automation",
    "AI-assisted scripting, automated ADO defect reporting, test generation",
  ],
];

function SectionHeading({ index, eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("Motivation");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const quotes = quoteCollections[activeCategory];

  const changeCategory = (category) => {
    setActiveCategory(category);
    setQuoteIndex(0);
  };

  const changeQuote = (direction) => {
    setQuoteIndex(
      (current) => (current + direction + quotes.length) % quotes.length,
    );
  };

  return (
    <>
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          aria-label="Motam Purnachandar, home"
        >
          <span className="wordmark-icon">MP</span>
          <span className="wordmark-name">
            MOTAM PURNACHANDAR<span>ENGINEER · BUILDER · LEARNER</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-art">
            <img
              className="portrait-photo"
              src="/purnachandar.png"
              alt="Motam Purnachandar seated in front of a MOVE AT YOUR PACE poster"
              width="1122"
              height="1402"
              fetchPriority="high"
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO WHAT&apos;S NEXT
            </p>
            <h1>
              Motam
              <br />
              <span>Purnachandar</span>
            </h1>
            <p className="hero-role">
              AI Performance Test Engineer <span>/</span> S&amp;P Global
            </p>
            <p className="hero-deck">
              I make complex systems easier to trust: through thoughtful
              performance engineering, observability, and automation.
            </p>
            <a className="text-link" href="#experience">
              Explore my work <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-index">
            <span>01 / 06</span>
            <span>PERFORMANCE · QUALITY · AUTOMATION</span>
          </div>
          <div className="hero-summary">
            <span className="summary-label">A LITTLE ABOUT ME</span>
            <p>
              Engineer with hands-on experience testing and improving enterprise
              platforms at S&amp;P Global. I work across JMeter, Selenium,
              Splunk, AWS, and AI-assisted automation to find issues early,
              understand their cause, and help teams ship with confidence.
            </p>
            <a href="#about" aria-label="Read about my approach">
              <ArrowDown size={18} />
            </a>
          </div>
        </section>

        <section className="intro-strip" id="about">
          <div className="strip-inner">
            <span>01—</span>
            <p>
              Curious about the details.
              <br />
              <strong>Serious about the outcome.</strong>
            </p>
            <span className="strip-mark">MP / 2025—26</span>
          </div>
        </section>

        <section className="section-wrap education-section" id="education">
          <SectionHeading
            index="01"
            eyebrow="THE FOUNDATION"
            title="Education"
            note="A steady curiosity for how things work, and how to make them work better."
          />
          <div className="education-list">
            {education.map((item) => (
              <article className="education-row" key={item.school}>
                <span className="mono education-period">{item.period}</span>
                <div className="education-main">
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <span>{item.detail}</span>
                </div>
                <strong className="education-result">{item.result}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap experience-inner">
            <SectionHeading
              index="02"
              eyebrow="IN THE FIELD"
              title="Experience"
              note="Performance engineering that connects test data to real product decisions."
            />
            <article className="role-card">
              <div className="role-topline">
                <span className="role-company">S&amp;P Global</span>
                <span className="role-date mono">JUL 2025 — PRESENT</span>
              </div>
              <h3>
                AI Performance Test Engineer <span>· Apprentice</span>
              </h3>
              <p className="role-team">IT · Application Development</p>
              <p className="role-summary">
                I help teams understand how their applications behave under
                pressure, how they perform in production, and how to make the
                feedback loop faster.
              </p>
              <div className="impact-grid">
                <div className="impact">
                  <strong>07</strong>
                  <span>applications performance-tested</span>
                </div>
                <div className="impact">
                  <strong>
                    150<span>+</span>
                  </strong>
                  <span>defects tracked through retest</span>
                </div>
                <div className="impact">
                  <strong>
                    &lt;5<span>%</span>
                  </strong>
                  <span>bulk API failures, down from 90%+</span>
                </div>
              </div>
              <div className="role-details">
                <div>
                  <span className="detail-mark">A</span>
                  <p>
                    Designed load, stress, scalability, and benchmark tests in
                    JMeter across Data Transfer, Entities, Cap Structures,
                    Benchmarks, FI-BOT, iLevel, and Excel Service Core. Built
                    baselines and daily regression suites for CI/CD.
                  </p>
                </div>
                <div>
                  <span className="detail-mark">B</span>
                  <p>
                    Owned weekly production monitoring in Splunk, tracking CPU,
                    memory, response times, and errors. Investigated anomalies,
                    performed RCA, verified fixes, and shared stakeholder
                    reports.
                  </p>
                </div>
                <div>
                  <span className="detail-mark">C</span>
                  <p>
                    Automated log analysis into weekly Azure DevOps defect
                    creation and email alerts. Used AWS EC2, ECS, S3, and
                    CloudWatch to connect test results with infrastructure
                    behavior.
                  </p>
                </div>
                <div>
                  <span className="detail-mark">D</span>
                  <p>
                    Built a JMeter–Selenium integration POC adopted by multiple
                    teams. Also contributed to K6 + MCP load testing and
                    AI-generated API/UI test scripting from work items and API
                    definitions.
                  </p>
                </div>
              </div>
              <div className="tool-row">
                <span>TOOLS IN PRACTICE</span>
                <p>
                  JMeter <i /> Splunk <i /> AWS <i /> Azure DevOps <i />{" "}
                  Selenium <i /> K6 <i /> Jenkins
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-wrap skills-section">
          <SectionHeading
            index="03"
            eyebrow="HOW I WORK"
            title="My toolkit"
            note="A broad toolkit, with performance and reliability at its core."
          />
          <div className="skills-grid">
            {skills.map(([title, detail], index) => (
              <article className="skill-item" key={title}>
                <span className="skill-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <SectionHeading
              index="04"
              eyebrow="SELECTED BUILDS"
              title="Projects & experiments"
              note="Small experiments. Useful outcomes. A few things I’m proud to have shipped."
            />
            <div className="project-list">
              {projects.map(({ number, title, type, detail, icon: Icon }) => (
                <article className="project-row" key={number}>
                  <span className="project-number mono">{number}</span>
                  <span className="project-icon">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>
                  <div className="project-copy">
                    <p className="eyebrow">{type}</p>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                  <ArrowUpRight className="project-arrow" size={18} />
                </article>
              ))}
            </div>
            <div className="side-projects">
              <span className="eyebrow">ON THE SIDE</span>
              <p>
                Music player · HTML, CSS &amp; JavaScript <i /> CodePen text
                editor · in progress
              </p>
            </div>
          </div>
        </section>

        <section className="section-wrap credentials-section" id="certificates">
          <SectionHeading
            index="05"
            eyebrow="ALWAYS LEARNING"
            title="Certificates"
          />
          <div className="credential-list">
            {certificates.map((certificate, index) => (
              <div className="credential-row" key={certificate}>
                <span className="credential-icon">
                  <Award size={16} />
                </span>
                <span>{certificate}</span>
                <span className="mono">0{index + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="recognition-section" id="achievements">
          <div className="section-wrap recognition-inner">
            <SectionHeading
              index="06"
              eyebrow="MILESTONES"
              title="Good work, recognized."
              note="The best recognition is when the work makes a measurable difference."
            />
            <div className="recognition-grid">
              <article className="recognition-feature">
                <span className="recognition-kicker">
                  <Award size={17} /> TEAM RECOGNITION
                </span>
                <h3>
                  Making iLevel
                  <br />
                  perform better.
                </h3>
                <p>
                  Recognized by the iLevel Product Team in a company-wide
                  S&amp;P Global announcement for helping improve platform
                  speed, stability, and scalability.
                </p>
                <span className="recognition-byline">
                  Acknowledged by the Principal Product Manager alongside senior
                  engineers.
                </span>
              </article>
              <div className="recognition-notes">
                <article>
                  <span className="recognition-count">150+</span>
                  <p>
                    Performance defects taken from identification through RCA,
                    retest, and sign-off.
                  </p>
                </article>
                <article>
                  <span className="recognition-count">4★</span>
                  <p>
                    Java coder on HackerRank; participant in inter-college
                    coding contests.
                  </p>
                </article>
                <article>
                  <span className="recognition-count">01</span>
                  <p>
                    Management Chairperson, Ingenuity Club. Presented at the
                    national-level Ciencia conference.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="shelf-section" id="shelf">
          <div className="section-wrap shelf-inner">
            <div className="shelf-heading">
              <div>
                <p className="eyebrow">
                  <BookOpen size={14} /> THE PERSONAL SHELF
                </p>
                <h2>
                  A thought to
                  <br />
                  <span>take with you.</span>
                </h2>
              </div>
              <p>
                Words I return to, collected across motivation, love, and life.
              </p>
            </div>
            <div className="quote-panel">
              <div className="quote-topline">
                <span>
                  <Quote size={17} /> NOTES TO SELF
                </span>
                <span className="mono">
                  {String(quoteIndex + 1).padStart(2, "0")} /{" "}
                  {String(quotes.length).padStart(2, "0")}
                </span>
              </div>
              <blockquote key={`${activeCategory}-${quoteIndex}`}>
                {quotes[quoteIndex]}
              </blockquote>
              <div className="quote-controls">
                <div className="category-tabs" aria-label="Quote category">
                  {Object.keys(quoteCollections).map((category) => (
                    <button
                      className={
                        activeCategory === category
                          ? "category-tab active"
                          : "category-tab"
                      }
                      type="button"
                      key={category}
                      onClick={() => changeCategory(category)}
                    >
                      {category === "Love" && <Heart size={13} />}
                      {category === "Motivation" && <Sparkles size={13} />}
                      {category === "Life" && <BookOpen size={13} />}
                      {category}
                    </button>
                  ))}
                </div>
                <div className="quote-arrows">
                  <button
                    type="button"
                    onClick={() => changeQuote(-1)}
                    aria-label="Previous quote"
                  >
                    <ArrowLeft size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={() => changeQuote(1)}
                    aria-label="Next quote"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </div>
            <span className="shelf-side-label mono">
              THOUGHTS, KEPT IN GOOD COMPANY
            </span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
              <h2>
                Let&apos;s make
                <br />
                <span>good things happen.</span>
              </h2>
              <p className="contact-copy">
                For a role, a collaboration, or a thoughtful conversation, my
                inbox is open.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="contact-email"
                href="mailto:motampurnachandhar@gmail.com"
              >
                <Mail size={18} /> motampurnachandhar@gmail.com{" "}
                <ArrowUpRight size={16} />
              </a>
              <a href="tel:+918688567162">
                +91 86885 67162 <ArrowUpRight size={15} />
              </a>
              <p className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/purnachandar-m"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <span />
                <a
                  href="https://github.com/purnachandar-m"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} /> GitHub
                </a>
              </p>
            </div>
            <div className="contact-footer">
              <span>© 2026 MOTAM PURNACHANDAR</span>
              <span>
                BUILT WITH CURIOSITY <Sparkles size={13} />
              </span>
              <a href="#home">BACK TO TOP ↑</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
