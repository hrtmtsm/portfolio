"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RESUME_URL = "https://drive.google.com/file/d/1shUSDNHZXIo7zMpuYC60qpxJTx2MXX_Q/view?usp=drive_link";
const LINKEDIN_URL = "https://www.linkedin.com/in/hrtmtsm/";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Scroll-hide / scroll-show
  useEffect(() => {
    let lastY = window.pageYOffset;
    let ticking = false;
    const THRESHOLD = 8;
    const TOP_PIN = 40;

    const onScroll = () => {
      const y = window.pageYOffset;
      const delta = y - lastY;
      const nav = navRef.current;
      if (!nav) return;

      if (Math.abs(delta) >= THRESHOLD) {
        if (!menuOpen) {
          if (y > lastY && y > TOP_PIN) {
            nav.classList.add("nav-hidden");
          } else {
            nav.classList.remove("nav-hidden");
          }
        } else {
          nav.classList.remove("nav-hidden");
        }
        lastY = Math.max(0, y);
      }
      ticking = false;
    };

    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav ref={navRef} className="portfolio-nav">
        <ul className="nav-links">
          <li><Link href="/" onClick={closeMenu}>Work</Link></li>
          <li><a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <Link href="/" className="nav-logo">HARUTO</Link>
      </nav>

      {/* Slide-down mobile menu */}
      <div className={`slide-menu${menuOpen ? " show" : ""}`}>
        <div className="slide-menu-content">
          <Link href="/" onClick={closeMenu}>WORK</Link>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>RESUME</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>LINKEDIN</a>
        </div>
      </div>
      {menuOpen && <div className="menu-overlay show" onClick={closeMenu} />}
    </>
  );
}
