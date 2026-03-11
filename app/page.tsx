import HeroCard from "@/components/HeroCard";
import FadeUp from "@/components/FadeUp";
import Footer from "@/components/Footer";

const projects = [
  {
    id: "runbuddy",
    label: "Runbuddy",
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
      "Solving the problem of team mismatch in academic group projects through research-backed design, behavior-driven validation, and iterative prototyping.",
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
    <>
      {/* Hero */}
      <section id="hero-bg">
        <HeroCard />
      </section>

      {/* Projects */}
      {projects.map((project, i) => (
        <FadeUp key={project.id}>
          <section id={project.id} className="project-slide">
            <div className="project-wrapper">
              <div className="project-info">
                <p className="project-label">{project.label}</p>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <a href={project.href} className="btn-case">View Case Study</a>
              </div>

              <div className="project-media-wrap">
                <a href={project.href}>
                  {project.media.type === "video" ? (
                    <video
                      className={`project-media${i === 0 ? " small-video" : ""}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.media.src}
                      className="project-media"
                      alt={project.title}
                    />
                  )}
                </a>
              </div>
            </div>
          </section>
        </FadeUp>
      ))}

      <Footer />
    </>
  );
}
