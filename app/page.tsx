import Image from "next/image";

const experience = [
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    description: "Security + Vulnerability Management",
    date: "06/2026 — 09/2026",
    tone: "sun",
  },
  {
    title: "Software Engineer",
    company: "Fidelity Investments",
    description: "Part time work as a full time student",
    date: "09/2025 — 05/2026",
    tone: "dusk",
  },
  {
    title: "Software Engineering Intern",
    company: "Fidelity Investments",
    description: "Infrastructure as a Service (IaaS)",
    date: "06/2025 — 08/2025",
    tone: "fern",
  },
  {
    title: "Software Development Co-op",
    company: "Nokia",
    description: "5G Banshee BCC",
    date: "01/2025 — 05/2025",
    tone: "mist",
  },
];

const projects = [
  {
    name: "charge_box",
    description: "Arduino script for E-match ignitor box",
    language: "C++",
    href: "https://github.com/kae-chi/charge_box",
  },
  {
    name: "Fake_MOTE",
    description: "Hardware simulator and testing framework for BURPG Web GUI",
    language: "Python",
    href: "https://github.com/kae-chi/Fake_MOTE",
  },
  {
    name: "Hybrid-Intro-Project",
    description: "Arduino script written to fire a Paraffin/GOX engine",
    language: "C++",
    href: "https://github.com/kae-chi/Hybrid-Intro-Project",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="top-rule" />
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <div className="social-links">
            <a
              href="mailto:katelynechi@gmail.com"
              aria-label="Email Kae"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 4h19A2.5 2.5 0 0 1 24 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 0 17.5v-11A2.5 2.5 0 0 1 2.5 4Zm0 2a.5.5 0 0 0-.3.1L12 13.7l9.8-7.6a.5.5 0 0 0-.3-.1h-19ZM22 17.5V8.6l-9.4 7.3a1 1 0 0 1-1.2 0L2 8.6v8.9c0 .3.2.5.5.5h19c.3 0 .5-.2.5-.5Z" />
              </svg>
            </a>
            <a
              href="https://github.com/kae-chi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kae-chi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.2 3.5a2.3 2.3 0 1 1-4.6 0 2.3 2.3 0 0 1 4.6 0ZM.9 8h4.5v14.5H.9V8Zm7.3 0h4.3v2h.1c.6-1.1 2-2.4 4.2-2.4 4.5 0 5.3 3 5.3 6.9v8h-4.5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.9-2.7 3.8v7.2H8.2V8Z" />
              </svg>
            </a>
          </div>
        </nav>
        <div className="hero-copy">
          <span className="star">✦</span>
          <h1>Katelyn <em>Kae</em> Chi</h1>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>

        <figure className="portrait">
          <Image
            src="/images/Screenshot 2026-09-23 at 10.11.25 PM.png"
            alt=""
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
          <figcaption>
            <span />
            <span />
            <span />
          </figcaption>
        </figure>

      </section>

      <section className="bio" id="about">
        <div className="bio-orbit bio-orbit-one" aria-hidden="true" />
        <div className="bio-orbit bio-orbit-two" aria-hidden="true" />
        <span className="bio-star bio-star-one" aria-hidden="true">✦</span>
        <div className="bio-content">
          <h2>Hi! My name is <span>Kae.</span></h2>
          <div className="bio-copy">
            <p>
              I am a 4th year student double majoring in computer science and
              philosophy at Boston University.
            </p>
            <p>
              I have experience with large-scale security systems,
              data-intensive software, observability tools, cloud
              infrastructure, and aerospace projects.
            </p>
            <p>
              My technical interests are in computer security, big data,
              observability, cloud computing, and aerospace.
            </p>
            <p>
              My philosophical interests lie in applied ethics, value theory,
              and phenomenology.
            </p>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <div className="education-top">
          <h2>Education</h2>
          <span className="index">✦</span>
        </div>

        <div className="education-roles">
          <h3 className="education-school">Boston University</h3>
          <div className="education-degrees">
            <article className="education-role">
              <h2>BA in Computer Science</h2>
              <time>2022 — 2026</time>
            </article>
            <article className="education-role">
              <h2>BA in Philosophy</h2>
              <time>2022 — 2026</time>
            </article>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-top">
          <h2>Experience</h2>
          <span className="index">✦</span>
        </div>

        <div className="roles">
          {experience.map((role, index) => (
            <article className={`role role-${index + 1}`} key={role.title}>
              <div className={`role-glow ${role.tone}`} aria-hidden="true" />
              <h2>{role.title}</h2>
              <h3>{role.company}</h3>
              <p>{role.description}</p>
              <time>{role.date}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-top">
          <h2>Projects</h2>
          <span className="index">✦</span>
        </div>
        <p className="projects-note">
          A few things I&apos;ve built and explored.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              key={project.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-card-top">
                <h3>{project.name}</h3>
                <span aria-hidden="true">↗</span>
              </div>
              <p>{project.description}</p>
              <span className={`project-language ${project.language === "Python" ? "python" : "cpp"}`}>
                {project.language}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-image gallery-image-left">
          <Image
            src="/images/kae-hike-sun.jpg"
            alt=""
            fill
            sizes="(max-width: 760px) 88vw, 30vw"
          />
        </div>
        <div className="gallery-center">
          <div className="gallery-connect">
            <span>Let&apos;s connect!</span>
            <div>
              <a href="mailto:katelynechi@gmail.com">Email</a>
              <a href="https://github.com/kae-chi" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/kae-chi/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="gallery-image gallery-image-right">
          <Image
            src="/images/kae-graduation.jpg"
            alt=""
            fill
            sizes="(max-width: 760px) 88vw, 30vw"
          />
        </div>
      </section>

      <footer>
        <span>© 2026 Kae Chi. Made with Next.js, React, and CSS.</span>
      </footer>
    </main>
  );
}
