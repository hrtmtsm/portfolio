"use client";

import Link from "next/link";

const RESUME_URL = "https://drive.google.com/file/d/1shUSDNHZXIo7zMpuYC60qpxJTx2MXX_Q/view?usp=drive_link";
const LINKEDIN_URL = "https://www.linkedin.com/in/hrtmtsm/";

export default function Nav() {
  return (
    <header className="lp-nav">
      <Link href="/" className="lp-nav-name">Haruto</Link>
      <nav className="lp-nav-links">
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </header>
  );
}
