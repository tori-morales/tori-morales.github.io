import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState("");
  return (
    <div className="wrapper">
      <OrbitSystem isLeft={open} />
      <Intro isHidden={!open} />
      <Menu open={open} setOpen={setOpen}></Menu>
      <ClipShow open={open} />
      <DataPanel open={open} />
      <Resume open={open}></Resume>
      <Credit open={open} isOpen={!open}></Credit>
    </div>
  );
}

function Resume({ open }) {
  return (
    <div className={`resume panel ${open === "Resume" ? "active" : "hidden"}`}>
      <div className="resume-section">
        <h3>Experience</h3>
        <div className="details">
          <div className="item">
            <h4>Washington Square News - Jan. 2022 - Present</h4>
            <em>
              Editor at Large | Deputy Managing Editor | News Editor | Copy
              Editor
            </em>
            <ul>
              <li>
                Made coverage decisions to create timely, relevant articles for
                a New York City audience
              </li>
              <li>Managed a team of 4-5 to ensure smooth production flow</li>
              <li>
                Edited copy from all desks for readability, AP style and
                correctness
              </li>
              <li>
                Supervised newsroom operations, including coordination between
                desks, daily update meetings and special issue production
              </li>
              <li>
                Currently creating data-driven visualizations to support news
                and features content
              </li>
            </ul>
          </div>
          <div className="item">
            <h4>ADDitude Magazine - June - Aug. 2022</h4>
            <em>Editorial Intern</em>
            <ul>
              <li>
                Created articles about ADHD, autism and other
                neurodivergence-related issues based on scientific publications,
                user-generated content and original reporting
              </li>
              <li>Produced articles in WordPress for publication</li>
              <li>
                Managed Twitter and Facebook accounts to reach a wider audience
              </li>
              <li>
                Created downloadable content that served the needs of readers
              </li>
              <li>Optimized articles for search engine discovery</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-section">
        <h3>Education</h3>
        <div className="details">
          <div className="item">
            <h4>B.A. in Journalism and Politics</h4>
            <em>New York University, May 2025</em>
          </div>
          <div className="item">
            <h4>POLITICO Journalism Institute</h4>
            <em>POLITICO, May 2023</em>
          </div>
        </div>
      </div>
      <div className="resume-section">
        <h3>Skills</h3>
        <div className="details">
          <div className="item">
            <h4>Languages</h4>
            <ul>
              <li>Spanish</li>
              <li>German</li>
            </ul>
          </div>
          <div className="item">
            <h4>Programming</h4>
            <ul>
              <li>HTML/CSS/SCSS</li>
              <li>Javascript: React, D3</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataPanel({ open }) {
  return (
    <div
      className={`dataPanel panel ${
        open === "Data Work" ? "active" : "hidden"
      }`}
    >
      <DataItem
        commentary={
          "These visualizations were created as part of POLITICO's Journalism Institute alongside fellow student Olivia Gyapong and data editor Sean McMinn. The initial idea came from an article I had read about areas lacking maternal care providers, and we were interested in exploring how this shortage intersected with rising rates of abortion deserts in the  wake of Dobbs v. Jackson Women's Health Clinic."
        }
        tech={[
          { name: "Tableau", color: "#b36681" },
          { name: "Python", color: "#7478c2" },
          { name: "Excel", color: "#48ab62" },
          { name: "Datawrapper", color: "#7a7a7a" },
        ]}
      >
        <a href="https://subscriber.politicopro.com/analysis/00000188-b601-d5bd-a9ea-be97b4210000">
          <p>
            POLITICO Pro: Where OB-GYN deserts and abortion restrictions meet
          </p>
        </a>
      </DataItem>
      <DataItem
        commentary={
          "This visualiztion was a final project for a data journalism class, and required me to write Python code to scrape names and ages of state senators. I then cleaned and analyzed the data, and created a chart using Excel. I was inspired by similar projects on the average age of the United States Senate and House of Representatives, and realized there was no similar analysis of state senates."
        }
        tech={[
          { name: "Python", color: "#7478c2" },
          { name: "Datawrapper", color: "#7a7a7a" },
          { name: "Excel", color: "#48ab62" },
        ]}
        techClass="vertical"
      >
        <iframe
          title="Ages of State Senates"
          aria-label="Map"
          id="datawrapper-chart-YQFj8"
          src="https://datawrapper.dwcdn.net/YQFj8/3/"
          style={{ border: "none" }}
          data-external="1"
        ></iframe>
      </DataItem>
      <DataItem
        commentary={
          "This early-stage visualization shows buildings owned by NYU, as found in New York City's Primary Land Use Tax Lot Output and combined with city-level building footprint data for visualization. This data was obtained using the Sodapy module for Python and New York City's Open Data Portal API. The visualization was made using MapboxGL JS, a library for creating for 3D interactive vector maps. I am working on adding historical data for comparison as well as the footprint of other local universities."
        }
        tech={[
          { name: "Python", color: "#7478c2" },
          { name: "MapboxJS", color: "#D79743" },
          { name: "HTML/CSS/JS", color: "#ad42f5" },
        ]}
        techClass="vertical"
      >
        <div>
          <iframe
            title="NYU Buildings Demo"
            src="https://5m6xxs-8080.csb.app/"
            style={{
              border: "none",
              overflow: "hide",
              margin: "0",
              padding: "0",
            }}
            data-external="1"
          ></iframe>
          <p style={{ fontSize: ".7rem" }}>
            Visualization code available{" "}
            <a
              style={{ fontSize: ".7rem" }}
              href="https://codesandbox.io/p/sandbox/nyubuildings-demo-v1-5m6xxs?file=%2Fsrc%2Findex.html%3A1%2C1"
              target="blank_"
            >
              here
            </a>
            .
          </p>
        </div>
      </DataItem>
    </div>
  );
}

function DataItem({ children, tech, commentary, techClass = "" }) {
  return (
    <div className={`item ${techClass}`}>
      {children}
      <div className={`info ${techClass}`}>
        <ul className={`skills ${techClass}`}>
          {tech.map((item) => {
            return (
              <li
                className="tech"
                key={item.name}
                style={{ backgroundColor: `${item.color}` }}
              >
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
        <p className={`about ${techClass}`}>{commentary}</p>
      </div>
    </div>
  );
}

const articles = [
  {
    name: "Washington Square News",
    articles: [
      {
        title:
          "NYC nail salon advocates frustrated by state gov’t safety delays",
        link: "https://nyunews.com/news/2022/05/03/safety-delays-frustrate-nail-technicians/",
      },
      {
        title: "Hochul and Zeldin face off in governor’s debate",
        link: "https://nyunews.com/news/2022/10/26/hochul-zeldin-governors-debate-race/",
      },
      {
        title: "New School cuts pay for part-time faculty on strike",
        link: "https://nyunews.com/news/2022/12/07/new-school-begins-cutting-wages/",
      },
    ],
  },
  {
    name: "The New York Daily News",
    articles: [
      {
        title:
          "Families of missing New Yorkers turn to Medical Examiner to find long-lost loved ones",
        link: "https://www.nydailynews.com/new-york/ny-missing-persons-day-chief-medical-examiner-dna-database-lost-family-members-20230624-6ldaygwogje3lfgjhqaniau44y-story.html",
      },
      {
        title:
          "Mom of 14-year-old boy killed subway surfing in Brooklyn says friends goaded son into deadly stunt",
        link: "https://www.nydailynews.com/new-york/nyc-crime/ny-subway-surfer-briyan-crespo-mother-speaks-20230626-quewvhusdnexlpfsv5y2fns4ru-story.html",
      },
    ],
  },
  {
    name: "ADDitude Magazine",
    articles: [
      {
        title:
          "Nearly One-Quarter of U.S. Children with ADHD Don’t Receive Treatment",
        link: "https://www.additudemag.com/adhd-treatment-for-children-lacking-in-us/",
      },
      {
        title: "AAP Recommends Mental Health Screening for All U.S. Youth",
        link: "https://www.additudemag.com/mental-health-screening-aap-anxiety-depression-youth/",
      },
    ],
  },
];
function ClipShow({ open }) {
  return (
    <div
      className={`clipList panel ${
        open === "Featured Clips" ? "active" : "hidden"
      }`}
    >
      {articles.map((pub) => (
        <PubRow key={pub.name} articles={pub.articles}>
          {pub.name}
        </PubRow>
      ))}
    </div>
  );
}

function PubRow({ articles, children }) {
  return (
    <div className="pubRow">
      <div className="title">{children}</div>
      <div className="articles">
        {articles.map((article) => (
          <p>
            <a
              className="article"
              href={article.link}
              target="_blank"
              rel="noreferrer"
            >
              {article.title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

function Menu({ open, setOpen }) {
  return (
    <ul className={open ? "menu leftMenu" : "menu regular"}>
      {open ? (
        <MenuItem isOpen={!open} setOpen={setOpen}>
          Back
        </MenuItem>
      ) : (
        <></>
      )}
      <MenuItem isOpen={open === "Featured Clips"} setOpen={setOpen}>
        Featured Clips
      </MenuItem>
      <MenuItem isOpen={open === "Data Work"} setOpen={setOpen}>
        Data Work
      </MenuItem>
      <MenuItem isOpen={open === "Resume"} setOpen={setOpen}>
        Resume
      </MenuItem>
    </ul>
  );
}

function MenuItem({ isOpen, setOpen, children }) {
  return (
    <li className={`menuItem`}>
      <button
        className={`item ${isOpen ? "selected" : "notSelected"}`}
        onClick={() => setOpen(children === "Back" ? "" : children)}
      >
        {children}
      </button>
    </li>
  );
}

function Credit({ isOpen }) {
  return (
    <div className={`${isOpen ? "credit active" : "credit hidden"}`}>
      <p>
        Created by Tori Morales. Code available{" "}
        <a
          href="https://github.com/tori-morales/tori-morales.github.io"
          target="_blank"
          rel="noreferrer"
        >
          here.
        </a>
        <br />
        Design by{" "}
        <a
          href="https://www.figma.com/community/file/1109160961935802705"
          target="_blank"
          rel="noreferrer"
        >
          Damir Basic.
        </a>
      </p>
    </div>
  );
}

function Intro({ isHidden }) {
  return (
    <div className={`${isHidden ? "intro active" : "intro hidden"}`}>
      <p id="hi">Hello!</p>
      <p id="myName">
        My name is{" "}
        <u>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tori-morales/"
            rel="noreferrer"
          >
            Tori Morales.
          </a>
        </u>
      </p>
      <p id="bio">
        I'm a journalist and front-end programmer creating innovative
        visualizations and news content. I'm a current junior at{" "}
        <span id="NYU">New York University </span>and have previously been
        published in POLITICO, the New York Daily News, ADDitude Magazine and
        Washington Square News.
      </p>
    </div>
  );
}

function OrbitSystem({ isLeft }) {
  return (
    <div className={isLeft ? "orbitSystem leftOrbit" : "orbitSystem"}>
      <Stationary />
      <Orbiters />
    </div>
  );
}

function Orbiters() {
  return (
    <div className="orbiters">
      <div className="orbiters2">
        <Planet id={"p1"} />
        <Planet id={"p2"} />
        <Planet id={"p3"} />
        <div className="movingLine">
          <svg
            width="60"
            height="356"
            viewBox="0 0 60 356"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7166 356C46.1687 301.523 61.7946 239.351 59.8362 176.477C57.8777 113.603 38.4127 52.5235 3.63112 0.109899L0.814809 1.9788C35.2486 53.8682 54.5189 114.337 56.4578 176.582C58.3966 238.827 42.927 300.378 11.7894 354.31L14.7166 356Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Planet({ id }) {
  return (
    <svg
      id={id}
      width="50"
      height="49"
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.1065"
        cy="24.1065"
        r="24.1065"
        transform="matrix(0.707107 0.707107 0.707107 -0.707107 -9 24.1836)"
        fill="url(#paint0_linear_1_24)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_24"
          x1="24.0744"
          y1="0"
          x2="24.0744"
          y2="48.2131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#90BE6D" />
          <stop offset="1" stopColor="#277DA1" stopOpacity="0.25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Stationary() {
  return (
    <svg
      width="676"
      height="676"
      viewBox="0 0 676 676"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="338" cy="338" r="337.5" stroke="url(#paint0_linear_0_1)" />
      <circle
        cx="339.35"
        cy="336.65"
        r="192.628"
        fill="url(#paint1_linear_0_1)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="676"
          y1="337.55"
          x2="0"
          y2="337.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.995243" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="339.094"
          y1="144.021"
          x2="339.094"
          y2="529.278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F9C74F" />
          <stop offset="1" stop-color="#F94144" stop-opacity="0.25" />
        </linearGradient>
      </defs>
    </svg>
  );
}
