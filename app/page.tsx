"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
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

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", padding: "3rem 2rem", gap: "3rem" }}>

      {/* Left sidebar */}
      <aside style={{ width: "160px", flexShrink: 0, position: "sticky", top: "3rem", height: "fit-content", alignSelf: "flex-start" }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link href="/" style={{ fontSize: "0.875rem", color: "#141414", opacity: 0.55 }}>Work</Link>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: "#141414", opacity: 0.55 }}>Resume</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: "#141414", opacity: 0.55 }}>LinkedIn</a>
        </nav>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0, maxWidth: "680px" }}>
        {/* Intro */}
        <section style={{ marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#141414", marginBottom: "1.25rem" }}>
            Haruto Matsushima
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555", maxWidth: "540px" }}>
            Product designer and engineer. I design bilingual experiences bridging Japan and the
            U.S. — grounded in research, shaped by empathy, and built to work.
          </p>
        </section>

        {/* Projects */}
        <div>
          {projects.map((p, i) => (
            <FadeInProject key={p.id}>
              <div style={{ padding: "3rem 0", borderTop: i === 0 ? "none" : "1px solid #e8e8e8" }}>
                <span style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#141414", opacity: 0.45, marginBottom: "0.5rem" }}>
                  {p.label}
                </span>
                <a href={p.href} style={{ display: "block", fontSize: "1.2rem", fontWeight: 600, color: "#141414", marginBottom: "0.75rem" }}>
                  {p.title} ↗
                </a>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#555", marginBottom: "1rem" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.5rem" }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ fontSize: "0.75rem", padding: "0.25rem 0.625rem", background: "#f0f0f0", borderRadius: "999px", color: "#555" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ overflow: "hidden", borderRadius: "0.5rem", lineHeight: 0, maxWidth: p.media.type === "video" ? "360px" : "100%" }}>
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
            </FadeInProject>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
