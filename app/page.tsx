"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { siteLinks } from "@/content/site";
import { projects } from "@/content/projects";

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
        display: "flex", alignItems: "center", flexWrap: "wrap",
        columnGap: "2rem", rowGap: "0.75rem",
        paddingTop: "1.25rem", paddingBottom: "1.25rem",
        paddingLeft: PAD, paddingRight: PAD,
        borderBottom: "1px solid #f0f0f0",
      }}>
        <Link href="/" style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#141414" }}>Work</Link>
        <a href={siteLinks.resume} download="Haruto-Matsushima-Resume-EN.pdf" hrefLang="en" style={{ fontSize: "1.0625rem", color: "#666" }}>Resume (EN)</a>
        <a href={siteLinks.resumeJapanese} download="Haruto-Matsushima-Resume-JA.pdf" hrefLang="ja" lang="ja" style={{ fontSize: "1.0625rem", color: "#666" }}>Resume (日本語)</a>
        <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.0625rem", color: "#aaa" }}>LinkedIn</a>
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
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#444", margin: 0 }}>
            Product Designer at{" "}
            <a href="https://biz.moneyforward.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "#141414" }}>Money Forward</a>
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#444", marginTop: "0.25rem" }}>
            Building{" "}
            <a href="https://waddle-lbnu.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "#141414" }}>Waddle</a>{" "}
            and{" "}
            <a href="https://www.trymutua.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "#141414" }}>Mutua</a>{" "}
            on the side.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: "0.75rem" }}>Previously</div>
          <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#444", margin: 0 }}>
            UX Research &amp; Design at{" "}
            <a href="https://marketeqdigital.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "#141414" }}>Marketeq Digital</a>
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
