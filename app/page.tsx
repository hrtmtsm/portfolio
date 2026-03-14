"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";

const RESUME_URL = "https://drive.google.com/file/d/1i8OwqQ0vUZw6DcAnaF9Klt2JmNesoaEB/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/hrtmtsm/";

const projects = [
  {
    id: "runbuddy",
    date: "Case Study • Spring 2025",
    title: "RunBuddy — Reducing the Friction of Finding Running Partners",
    description:
      "Researched why runners train alone even when they'd prefer company — then designed a compatibility-matching system that lowers the social friction of joining a group.",
    href: "/projects/runbuddy",
    media: { type: "video", src: "/images/runbuddy-feature-01.mp4" },
    mediaMaxWidth: "320px",
  },
  {
    id: "classcollab",
    date: "Case Study • Spring 2025",
    title: "ClassCollab: Better Team Formation for Better Academic Outcomes",
    description:
      "Investigated why student group projects fail before they start — then used Lean UX to design a team formation flow that matches students by goals, working style, and availability.",
    href: "/projects/classcollab",
    media: { type: "video", src: "/images/classcollab-walkthrough-v2.mp4" },
    mediaMaxWidth: "760px",
  },
  {
    id: "iowa",
    date: "Case Study • Summer 2024",
    title: "Improving Usability on the Iowa Cubs Website",
    description:
      "Enhanced the fan experience through heuristic evaluations and real-user testing to uncover and solve key usability issues.",
    href: "/projects/iowa",
    media: { type: "image", src: "/images/iowa-website-screenshot.png" },
    mediaMaxWidth: "760px",
  },
];

function FadeInProject({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(1rem)", transition: "opacity 0.4s ease, transform 0.4s ease" }}>
      {children}
    </div>
  );
}

const PAD = "clamp(1.5rem, 7vw, 7rem)";

export default function Home() {

  return (
    <>
    <style>{`
      @media (max-width: 48rem) {
        .lp-nav { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        .lp-hero { padding-left: 1.5rem !important; padding-right: 1.5rem !important; padding-top: 3rem !important; }
        .lp-hero-name { font-size: clamp(2rem, 8vw, 4.5rem) !important; }
        .lp-hero-role { font-size: clamp(2rem, 8vw, 4.5rem) !important; }
        .lp-info { flex-direction: column !important; gap: 2rem !important; padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        .lp-projects { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        .lp-footer { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
      }
    `}</style>

    <div className="page-enter" style={{ minHeight: "100vh" }}>

      {/* Top nav */}
      <nav className="lp-nav" style={{
        display: "flex", alignItems: "center",
        gap: "2rem",
        paddingTop: "1.25rem", paddingBottom: "1.25rem",
        paddingLeft: PAD, paddingRight: PAD,
        borderBottom: "1px solid #f0f0f0",
      }}>
        <a href="/" style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#141414" }}>Work</a>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.0625rem", color: "#aaa" }}>Resume</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.0625rem", color: "#aaa" }}>LinkedIn</a>
      </nav>

      {/* Hero */}
      <section className="lp-hero" style={{ paddingTop: "8rem", paddingBottom: "5rem", paddingLeft: PAD, paddingRight: PAD }}>
        <p className="lp-hero-name" style={{
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#d0d0d0",
          margin: 0,
        }}>
          Haruto Matsushima.
        </p>
        <p className="lp-hero-role" style={{
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#141414",
          margin: 0,
        }}>
          Product Designer.
        </p>
        <p style={{
          marginTop: "1.5rem",
          fontSize: "1.125rem",
          lineHeight: 1.7,
          color: "#888",
          fontWeight: 400,
        }}>
          Thinking in systems. Designing for real human behavior.
        </p>
      </section>

      {/* Info strip */}
      <div className="lp-info" style={{
        display: "flex", gap: "4rem",
        paddingTop: "2.5rem", paddingBottom: "2.5rem",
        paddingLeft: PAD, paddingRight: PAD,
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: "0.75rem" }}>Current</div>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#444" }}>
            Building <a href="https://www.trymutua.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "#141414" }}>Mutua</a> — where serious language partners meet
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: "0.75rem" }}>Past</div>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#444", margin: 0 }}>
            Interned at{" "}
            <a href="https://marketeqdigital.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "#141414" }}>Marketeq Digital</a>{" "}
            and{" "}
            <a href="https://biz.moneyforward.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "#141414" }}>MoneyForward</a>
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#444", marginTop: "0.25rem" }}>
            MS in HCI, DePaul University
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="lp-projects" style={{ paddingLeft: PAD, paddingRight: PAD }}>
        {projects.map((p) => (
          <FadeInProject key={p.id}>
            <div style={{ padding: "4rem 0", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ display: "block", fontSize: "0.9375rem", color: "#999", marginBottom: "1.25rem" }}>
                {p.date}
              </span>
              <a href={p.href} style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, color: "#141414", lineHeight: 1.3, marginBottom: "0.75rem", maxWidth: "600px" }}>
                {p.title} ↗
              </a>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#888", marginBottom: "2rem", maxWidth: "600px" }}>
                {p.description}
              </p>

              <div style={{ display: "flex", justifyContent: p.mediaMaxWidth ? "center" : "flex-start" }}>
              <div style={{ overflow: "hidden", borderRadius: "0.5rem", lineHeight: 0, maxWidth: p.mediaMaxWidth ?? "100%", width: "100%" }}>
                <a href={p.href} style={{ display: "block" }}>
                  {p.media.type === "video" ? (
                    <video autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }}>
                      <source src={p.media.src} type="video/mp4" />
                    </video>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.media.src} alt={p.title} style={{ width: "100%", height: "auto", display: "block" }} />
                  )}
                </a>
              </div>
              </div>
            </div>
          </FadeInProject>
        ))}
      </div>

      <div className="lp-footer" style={{ paddingLeft: PAD, paddingRight: PAD }}>
        <Footer />
      </div>

    </div>
    </>
  );
}
