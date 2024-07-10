import Timeline from "./Timeline.jsx";
import Icon from "../Icon.jsx";

const workData = [
  {
    title: "Backend Developer at NeoDev",
    date: "february 2024 - present",
    description: (
      <>
        <p>
          I designed the database schema and developed the server for Kenti, a
          B2B platform that allows small businesses to receive payments from
          their customers from multiple banks.
        </p>
      </>
    ),
  },
  {
    title: "Frontend Developer at AccountTECH",
    date: "may 2022 - january 2024",
    description: (
      <>
        <p>
          I contributed to the development of Darwin Cloud software, a tool used
          by real state companies in the USA.
        </p>
        <p>
          I developed a versatile UI component library that enhanced the
          platform's functionality and user experience. Additionally, I
          addressed issues in the build system, standardized form handling
          processes, and corrected style inconsistencies.
        </p>
      </>
    ),
  },

  {
    title: "Programmer Analyst at Bantotal",
    date: "may 2021 - april 2022",
    description: (
      <>
        <p>
          I contributed to the development of multiple mobile banking
          applications, specifically tailored to meet the diverse requirements
          of clients in Latin America.
        </p>
        <p>
          My responsibilities included bug fixing, feature implementation, and
          deployment.
        </p>
      </>
    ),
  },
];

const sideProjectsData = [
  {
    title: "Music Player",
    date: "january 2022 - july 2023",
    description: (
      <>
        <p>
          A desktop music player featuring seamless playback, advanced library
          organization, MusicBrainz API integration for accurate indexing, and
          global search functionality.
        </p>
      </>
    ),
  },
];

export default function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#about-me">
            <Icon name="brackets-square-fill"></Icon>
          </a>
          <div class="sections-links">
            <a href="#work-experience">career</a>
            <a href="#side-projects">relevant experience</a>
            <a href="#languages">languages</a>
            <a href="#technologies">technologies</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="about-me" class="about-me">
          <img
            class="about-me__image"
            src="profile.jpg"
            alt="profile"
            loading="lazy"
          />

          <div class="about-me__info">
            <h1>Luis Angel Prado Postigo</h1>

            <div class="about-me__title">Software Developer</div>

            <a href="mailto:lpradopostigo@gmail.com">
              <Icon name="envelope-simple-regular" size="24"></Icon>
              <span class="only-print">lpradopostigo@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-angel-prado-postigo-813916231"
              target="_blank"
            >
              <Icon name="linkedin-logo-regular" size="24"></Icon>
              <span class="only-print">linkedin</span>
            </a>

            <a href="https://github.com/lpradopostigo" target="_blank">
              <Icon name="github-logo-regular" size="24"></Icon>
              <span class="only-print">github</span>
            </a>
          </div>

          <p>
            I worked in different projects for different companies as frontend
            developer and backend developer for more than 3 years.
          </p>

          <p>
            As a person, I constantly trying to learn from my mistakes, not to
            be perfect but to avoid being too flawed. In my free time, I enjoy
            creating tools to solve my own problems, and also composing music.
          </p>
        </section>

        <section id="work-experience" class="work-experience">
          <h2>Career</h2>
          <Timeline data={workData}></Timeline>
        </section>

        <section id="side-projects" class="side-projects">
          <h2>Relevant Experience</h2>

          <Timeline data={sideProjectsData}></Timeline>
        </section>

        <section id="languages" class="languages">
          <h2>Languages</h2>
          English (C1), Spanish (Native)
        </section>

        <section id="technologies" class="technologies">
          <h2>Technologies</h2>

          <p>
            JavaScript, TypeScript, React, Node.js, Go, Docker, PostgreSQL,
            MySQL, Git, GitLab, Rust, C, C++, MariaDB, SQLite, SolidJS, Vue,
            CSS, HTML, SASS, Webpack, Vite, Astro, Jest, Linux, Rollup, Postman,
            Figma, AdobeXD
          </p>
        </section>

        <footer>
          <p>
            Made by Luis Angel Prado Postigo <br />
            <a
              href="https://github.com/lpradopostigo/portfolio"
              target="_blank"
            >
              Source code
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
