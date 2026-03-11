import Link from "next/link";
import Footer from "@/components/Footer";

const projects = [
  {
    id: "runbuddy",
    href: "/projects/runbuddy",
    media: { type: "video", src: "/images/runbuddy-feature-01.mp4" },
    bg: "#f5f3ef",
  },
  {
    id: "classcollab",
    href: "/projects/classcollab",
    media: { type: "image", src: "/images/classcollab-cover.png" },
    bg: "#1a1a1a",
  },
  {
    id: "iowa",
    href: "/projects/iowa",
    media: { type: "image", src: "/images/Iowa-cover.png" },
    bg: "#e8eff7",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="lp-hero">
        {/* Left: big serif text */}
        <div className="lp-hero-left">
          <h1 className="lp-hero-text">
            Haruto is a{" "}
            <span className="lp-star">✦</span>{" "}
            <em>product designer</em>
            {" "}who engineers, bridging
            Japan and the U.S.
          </h1>
        </div>

        {/* Right: two info columns */}
        <div className="lp-hero-right">
          <div className="lp-info-col">
            <p className="lp-col-label">Currently</p>
            <p className="lp-col-italic">Software Engineering Intern</p>
            <p className="lp-col-company">Bloomberg</p>

            <p className="lp-col-label lp-col-label--gap">Previously</p>
            <p className="lp-col-italic">Product Design Intern</p>
            <p className="lp-col-company">1Password</p>
          </div>

          <div className="lp-info-col">
            <p className="lp-col-label">Select Experience</p>
            <p className="lp-col-company">Bloomberg</p>
            <p className="lp-col-company">1Password</p>
            <p className="lp-col-company">Royal Bank of Canada</p>
            <p className="lp-col-company">Onova</p>
          </div>
        </div>
      </section>

      {/* ── Project grid ─────────────────────────────── */}
      <section className="lp-grid">
        {projects.map((p) => (
          <Link key={p.id} href={p.href} className="lp-cell" style={{ background: p.bg }}>
            {p.media.type === "video" ? (
              <video autoPlay loop muted playsInline className="lp-media">
                <source src={p.media.src} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.media.src} alt={p.id} className="lp-media" />
            )}
          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
}
