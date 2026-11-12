import Header from "@/components/Header";

const marqueeItems = ["TECHNICAL SEO", "CONTENT STRATEGY", "ORGANIC GROWTH", "KEYWORD RESEARCH", "SEARCH EXPERIENCE"];

const skills = [
  { title: "SEO Strategy & Research", text: "Keyword research, search intent analysis, keyword mapping and actionable organic growth planning." },
  { title: "Technical SEO", text: "Website audits, crawl analysis, indexing, canonical checks, structured data and Core Web Vitals reviews." },
  { title: "On-page & Content SEO", text: "Page structure, metadata, headings, internal linking and content optimisation around real user questions." },
  { title: "International & Local SEO", text: "Search visibility planning for location-focused businesses and brands targeting international markets." },
  { title: "Digital Marketing", text: "Content creation, brand awareness and social media optimisation, supported by a wider digital marketing perspective." },
];

const projects = [
  {
    href: "https://granitogres.com/",
    type: "SEO · TILE MANUFACTURING",
    name: "Granitogres",
    title: "Growing search presence for a tile brand",
    tags: "Keyword strategy · On-page SEO · Technical SEO · Content",
    bg: "bg-[#d9e4d2]",
    letter: "G",
    letterClass: "font-serif italic text-[240px] right-[17%] top-[4%] text-[#29483c] opacity-90",
    shapeClass: "size-[280px] right-[8%] top-[14%] shadow-[0_0_0_25px_#ffffff20,0_0_0_50px_#ffffff15]",
  },
  {
    href: "https://europolyplast.com/",
    type: "SEO · PACKAGING · UAE",
    name: "Euro Poly Plast",
    title: "Building organic visibility in the UAE market",
    tags: "Keyword mapping · Technical SEO · Content optimisation",
    bg: "bg-[#e6bca8]",
    letter: "EP",
    letterClass: "font-sans font-extrabold text-[150px] tracking-[-0.12em] right-[8%] top-[24%] text-[#7b3828]",
    shapeClass: "size-[210px] right-[15%] top-[17%] border-[22px] border-[#ffffff65]",
  },
  {
    href: "https://repprox-live.vercel.app/",
    type: "SEO · SAAS · FIELD FORCE",
    name: "RepProx",
    title: "SEO foundations for a field force automation platform",
    tags: "SEO planning · Keyword research · Website structure",
    bg: "bg-[#d4d9e9]",
    letter: "R",
    letterClass: "font-serif italic text-[260px] right-[18%] top-0 text-[#34446f]",
    shapeClass: "w-[300px] h-[150px] right-[8%] top-[24%] -rotate-[28deg] border-2",
  },
  {
    href: "https://www.smikteck.com.au/",
    type: "SEO · IT SERVICES · AUSTRALIA",
    name: "Smikteck",
    title: "Search strategy for an IT services business",
    tags: "Local SEO · Keyword research · Technical recommendations",
    bg: "bg-[#e6d99e]",
    letter: "S",
    letterClass: "font-serif italic text-[250px] right-[17%] top-[2%] text-[#5d5426]",
    shapeClass: "size-[190px] right-[12%] top-[18%] border-[20px] border-[#ffffff55]",
  },
];

const jobs = [
  { date: "AUG 2025 — PRESENT", company: "Fegno Technologies", place: "Kerala, India", role: "SEO Analyst" },
  { date: "NOV 2024 — MAY 2025", company: "XTAPPS Software Solutions", place: "Kochi, Kerala, India", role: "SEO Analyst" },
  { date: "JUN 2023 — NOV 2024", company: "Dinero Tech Labs Pvt Ltd", place: "Kochi, Kerala, India", role: "SEO Analyst" },
  { date: "MAY 2023 — AUG 2023", company: "Mayday Internet", place: "Kerala, India", role: "Digital Marketing Executive" },
  { date: "FEB 2023 — APR 2023", company: "Peraka Media", place: "Branding · Digital Marketing · Advertising Films", role: "Digital Marketing Intern" },
];

const certs = ["Google Search Ads", "Google Display Ads", "Semrush SEO Toolkit", "Digital Marketing"];

const sectionPad = "py-[75px] md:py-[108px]";
const h2Class = "mt-4 max-w-[650px] text-[clamp(42px,6vw,76px)] font-bold leading-[0.98] tracking-[-0.075em]";

function SectionHead({
  kicker,
  index,
  children,
  dark = false,
}: {
  kicker: string;
  index: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-[35px] flex items-start justify-between md:mb-[55px]">
      <div>
        <div className={`mono-label ${dark ? "text-lime" : "text-orange"}`}>{kicker}</div>
        <h2 className={h2Class}>{children}</h2>
      </div>
      <div className={`font-mono text-xs ${dark ? "text-[#9eaaa3]" : "text-muted"}`}>{index}</div>
    </div>
  );
}

const Em = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <em className={`font-serif font-normal ${className}`}>{children}</em>
);

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="wrap relative overflow-hidden py-[55px] md:pt-[78px] md:pb-[70px]">
          <div className="mb-[35px] flex items-start justify-between gap-5 md:items-center">
            <span className="mono-label text-orange">SEO ANALYST · DIGITAL MARKETING</span>
            <span className="mono-label flex items-center gap-[9px] text-muted">
              <i className="size-[7px] rounded-full bg-[#77a65b] shadow-[0_0_0_4px_#77a65b22]" /> KOCHI, KERALA, INDIA
            </span>
          </div>

          <div className="grid items-end gap-[35px] md:grid-cols-[1.2fr_0.8fr] md:gap-[42px]">
            <h1 className="m-0 text-[clamp(65px,17vw,110px)] font-bold leading-[0.88] tracking-[-0.09em] md:text-[clamp(62px,9.5vw,132px)]">
              Search.
              <br />
              <Em>Strategy.</Em>
              <br />
              Growth.
            </h1>
            <div className="ml-[5px] max-w-[380px] border-l border-line pb-2.5 pl-[22px] md:ml-0">
              <p className="mb-[27px] text-[17px] leading-[1.7] text-[#4e5954]">
                I’m Sreekumar — an SEO Analyst and Digital Marketing Specialist helping brands build stronger search
                visibility, reach the right audiences and grow organically.
              </p>
              <a href="#work" className="group inline-flex items-center gap-[13px] text-xs font-extrabold uppercase tracking-[0.08em]">
                EXPLORE MY WORK
                <b className="grid size-[35px] place-items-center rounded-full bg-orange text-[17px] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↘
                </b>
              </a>
            </div>
          </div>

          <div className="mt-[50px] flex items-end justify-between gap-5 border-t border-line pt-[18px] md:mt-[76px]">
            <p className="mono-label m-0 leading-[1.6] text-muted">
              A thoughtful mix of technical SEO,
              <br />
              content strategy & digital thinking.
            </p>
            <p className="m-0 text-right font-serif text-[15px] italic text-orange md:text-left">Make visibility meaningful.</p>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-ink bg-lime py-[15px]" aria-hidden="true">
          <div className="flex w-max animate-marquee gap-[26px] whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-[26px]">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em]">{item}</span>
                <i className="text-lg not-italic text-orange">✳</i>
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="about" className={`wrap ${sectionPad}`}>
          <SectionHead kicker="01 / A LITTLE ABOUT ME" index="ABOUT">
            Curious by nature.
            <br />
            <Em>Strategic by practice.</Em>
          </SectionHead>
          <div className="grid gap-[30px] md:grid-cols-[0.72fr_1.28fr] md:gap-[90px]">
            <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden bg-dark p-7 text-cream md:min-h-[330px]">
              <span className="pointer-events-none absolute -right-[100px] top-[35px] size-[290px] rounded-full border border-[#ffffff25]" />
              <span className="pointer-events-none absolute -right-[60px] top-[75px] size-[210px] rounded-full border border-[#ffffff25]" />
              <span className="mono-label relative">THE SEO MINDSET</span>
              <div className="relative z-[1] font-serif text-[clamp(60px,8vw,100px)] tracking-[-0.08em]">
                S<span className="text-orange">.</span>
              </div>
              <span className="relative z-[1] font-mono text-[11px] uppercase tracking-[0.12em] text-[#c5d0c9]">
                Search · Understand · Optimise
              </span>
            </div>
            <div>
              <p className="mb-7 text-[clamp(22px,2.5vw,31px)] leading-[1.45] tracking-[-0.04em]">
                I work at the intersection of search behaviour, useful content and technical performance.
              </p>
              <p className="my-4 max-w-[650px] text-[15px] leading-[1.9] text-[#58625d]">
                My work focuses on understanding how people search, identifying opportunities for brands and turning those
                insights into practical SEO strategies. I have worked with international clients across different industries,
                covering website optimisation, keyword research, content planning and technical SEO.
              </p>
              <p className="my-4 max-w-[650px] text-[15px] leading-[1.9] text-[#58625d]">
                With a B.Com in Computer Applications, I bring a blend of marketing perspective and technical understanding to
                digital projects.
              </p>
              <div className="mt-[38px] grid grid-cols-2 gap-[15px] border-t border-line pt-[25px] md:gap-[22px]">
                {[
                  ["BASED IN", "Kochi, Kerala, India"],
                  ["CURRENT ROLE", "SEO Analyst · Fegno Technologies"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mono-label mb-[9px] text-muted">{label}</div>
                    <div className="text-sm font-bold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className={`bg-dark text-cream ${sectionPad}`}>
          <div className="wrap">
            <SectionHead kicker="02 / WHAT I WORK ON" index="EXPERTISE" dark>
              Turning search intent
              <br />
              into <Em className="text-lime">real impact.</Em>
            </SectionHead>
            <div className="border-t border-[#ffffff35]">
              {skills.map((s, i) => (
                <div
                  key={s.title}
                  className="grid grid-cols-[35px_1fr] items-center gap-3 border-b border-[#ffffff35] py-[25px] md:grid-cols-[70px_1fr_1fr] md:gap-5"
                >
                  <span className="font-mono text-[11px] text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="m-0 text-[clamp(20px,2.4vw,29px)] font-medium tracking-[-0.05em]">{s.title}</h3>
                  <p className="col-start-2 m-0 max-w-[390px] text-[13px] leading-[1.7] text-[#aebbb3] md:col-start-auto">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className={`wrap ${sectionPad}`}>
          <SectionHead kicker="03 / SELECTED PROJECTS" index="PORTFOLIO">
            Some work.
            <br />
            <Em>Some outcomes.</Em>
          </SectionHead>
          <div className="grid gap-[35px] md:grid-cols-2 md:gap-[22px]">
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`group block min-w-0 ${i % 2 === 1 ? "md:mt-[90px]" : ""}`}
              >
                <div
                  className={`relative flex h-[280px] items-end overflow-hidden p-[25px] transition-transform duration-[350ms] group-hover:-translate-y-[5px] md:h-[330px] ${p.bg}`}
                >
                  <span className="absolute left-[25px] top-6 z-[2] font-mono text-[10px] uppercase tracking-[0.1em]">{p.type}</span>
                  <i className={`absolute rounded-full border border-[#17232155] ${p.shapeClass}`} />
                  <span aria-hidden="true" className={`absolute leading-none ${p.letterClass}`}>
                    {p.letter}
                  </span>
                  <div className="relative z-[2] flex w-full items-end justify-between">
                    <strong className="text-[30px] tracking-[-0.07em]">{p.name}</strong>
                    <span className="font-mono text-[11px]">
                      0{i + 1} / 0{projects.length}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between gap-5 px-0.5 pt-[17px]">
                  <div>
                    <h3 className="mb-1.5 text-lg font-bold tracking-[-0.04em]">{p.title}</h3>
                    <p className="m-0 text-xs text-muted">{p.tags}</p>
                  </div>
                  <span className="grid size-[34px] flex-none place-items-center rounded-full border border-line">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`bg-[#e7e4dc] ${sectionPad}`}>
          <div className="wrap">
            <SectionHead kicker="04 / THE JOURNEY SO FAR" index="CAREER">
              Experience that
              <br />
              <Em>keeps evolving.</Em>
            </SectionHead>
            <div className="border-t border-[#c8c8bd]">
              {jobs.map((j) => (
                <div
                  key={j.company}
                  className="grid grid-cols-[1fr_auto] items-start gap-x-[18px] gap-y-2 border-b border-[#c8c8bd] py-[26px] md:grid-cols-[170px_1fr_200px] md:gap-[25px]"
                >
                  <div className="col-span-full font-mono text-[11px] leading-[1.6] text-muted md:col-span-1">{j.date}</div>
                  <div>
                    <h3 className="mb-[5px] text-xl font-bold tracking-[-0.05em] md:text-[22px]">{j.company}</h3>
                    <p className="m-0 text-[13px] text-muted">{j.place}</p>
                  </div>
                  <div className="col-start-2 row-start-2 text-right text-xs font-bold md:col-start-auto md:row-start-auto">{j.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section id="credentials" className={`wrap ${sectionPad}`}>
          <SectionHead kicker="05 / LEARNING & CREDENTIALS" index="EDUCATION">
            Grounded in learning.
            <br />
            <Em>Built through doing.</Em>
          </SectionHead>
          <div className="grid gap-[35px] md:grid-cols-2 md:gap-[50px]">
            <div className="border-t border-line pt-5">
              <div className="mono-label text-orange">EDUCATION</div>
              <h3 className="mb-2 mt-4 text-[22px] font-bold tracking-[-0.05em]">Mahatma Gandhi University</h3>
              <p className="m-0 text-[13px] leading-[1.7] text-muted">
                Bachelor of Commerce — Computer Applications
                <br />
                June 2018 – March 2020
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <div className="mono-label text-orange">CERTIFICATIONS</div>
              <div className="mt-5 flex flex-wrap gap-[9px]">
                {certs.map((c) => (
                  <span key={c} className="rounded-[30px] border border-line px-[13px] py-2.5 text-[11px] text-[#4f5a54]">
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-[18px] text-[13px] leading-[1.7] text-muted">Certifications listed in my professional profile.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-orange pb-[35px] pt-[75px] text-white md:pt-[95px]">
          <div className="wrap">
            <div className="mono-label text-[#ffe0d4]">06 / HAVE A PROJECT IN MIND?</div>
            <h2 className="mb-[45px] mt-[18px] max-w-[900px] text-[clamp(55px,9vw,112px)] font-bold leading-[0.9] tracking-[-0.09em]">
              Let&apos;s make
              <br />
              search <Em>work.</Em>
            </h2>
            <div className="flex flex-col items-start justify-between gap-[30px] border-t border-[#ffffff65] pt-[25px] md:flex-row md:items-end">
              <a href="mailto:pssreekumar1999@gmail.com" className="text-[clamp(17px,2vw,24px)] tracking-[-0.04em]">
                pssreekumar1999@gmail.com ↗
              </a>
              <div className="flex flex-wrap gap-5 font-mono text-[11px] uppercase">
                <a href="https://www.linkedin.com/in/sreekumar-ps-/" target="_blank" rel="noreferrer" className="border-b border-[#ffffff80] pb-[5px]">
                  LinkedIn ↗
                </a>
                <a href="#top" className="border-b border-[#ffffff80] pb-[5px]">
                  Back to top ↑
                </a>
              </div>
            </div>
            <footer className="mt-[65px] flex flex-wrap justify-between gap-[15px] border-t border-[#ffffff65] pt-[18px] font-mono text-[10px] uppercase text-[#ffe0d4] md:mt-[90px] md:flex-nowrap">
              <span>© {new Date().getFullYear()} Sreekumar P.S.</span>
              <span>SEO · DIGITAL MARKETING · ORGANIC GROWTH</span>
              <span>KOCHI, INDIA</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
