import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import Footer from "@/components/Footer";

const RESUME_URL = "https://drive.google.com/file/d/1shUSDNHZXIo7zMpuYC60qpxJTx2MXX_Q/view?usp=drive_link";
const LINKEDIN_URL = "https://www.linkedin.com/in/hrtmtsm/";

const projects = [
  {
    id: "runbuddy",
    label: "RunBuddy",
    title: "More Than Miles: Run With People Who Match Your Vibe",
    description:
      "Helping runners find their people by surfacing compatibility, because long-term motivation comes from connection.",
    tags: ["UX Research", "Community Design", "Human-Centered Design", "Mobile Design"],
    href: "/projects/runbuddy",
    media: { type: "video", src: "/images/runbuddy-feature-01.mp4" },
  },
  {
    id: "classcollab",
    label: "ClassCollab",
    title: "Forming Compatible Student Teams for Better Outcomes",
    description:
      "Solving the problem of team mismatch in academic group projects through research-backed design and iterative prototyping.",
    tags: ["Design for Startups", "Lean UX", "UX Research", "Web Design"],
    href: "/projects/classcollab",
    media: { type: "video", src: "/images/classcollab-walkthrough-v2.mp4" },
  },
  {
    id: "iowa",
    label: "Iowa Cubs",
    title: "Improving Usability on the Iowa Cubs Website",
    description:
      "Enhanced the fan experience through heuristic evaluations and real-user testing to uncover and solve key usability issues.",
    tags: ["UX Research", "Usability Testing", "Redesign"],
    href: "/projects/iowa",
    media: { type: "image", src: "/images/Iowa-cover.png" },
  },
];

export default function Home() {
  return (
    <div className="lp-page">
      {/* Left sidebar */}
      <aside className="lp-sidebar">
        <Link href="/" className="lp-sidebar-brand">Haruto</Link>
        <nav className="lp-sidebar-nav">
          <Link href="/">Work</Link>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="lp-main">
        {/* Intro */}
        <section className="lp-intro">
          <h1 className="lp-heading">Haruto Matsushima</h1>
          <p className="lp-bio">
            Product designer and engineer. I design bilingual experiences bridging Japan and the
            U.S. — grounded in research, shaped by empathy, and built to work.
          </p>
        </section>

        {/* Projects */}
        <div className="lp-projects">
          {projects.map((p) => (
            <FadeUp key={p.id}>
              <div className="lp-project" id={p.id}>
                <div className="lp-project-header">
                  <span className="lp-project-label">{p.label}</span>
                  <a href={p.href} className="lp-project-title">{p.title} ↗</a>
                  <p className="lp-project-desc">{p.description}</p>
                  <div className="lp-project-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="lp-project-media">
                  <a href={p.href}>
                    {p.media.type === "video" ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video autoPlay loop muted playsInline>
                        <source src={p.media.src} type="video/mp4" />
                      </video>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.media.src} alt={p.title} />
                    )}
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
