"use client";

import { useEffect, useRef } from "react";

const TYPE_TEXT =
  "Haruto is a human-centered designer who brings clarity to complex systems through empathy and structure, with a background in Human-Computer Interaction from DePaul.";

export default function HeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const sizeLabelRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const tlRef = useRef<HTMLSpanElement>(null);
  const trRef = useRef<HTMLSpanElement>(null);
  const blRef = useRef<HTMLSpanElement>(null);
  const brRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const heroCard = cardRef.current;
    const sizeLabel = sizeLabelRef.current;
    const dragTag = tagRef.current;
    const container = containerRef.current;
    const p = textRef.current;
    if (!heroCard || !sizeLabel || !dragTag || !container || !p) return;

    const corners = [tlRef.current, trRef.current, blRef.current, brRef.current];

    function updateCorners() {
      const rect = heroCard!.getBoundingClientRect();
      const cont = container!.getBoundingClientRect();
      const square = 10;
      const border = 2;
      const offset = square / 2;
      const visible = rect.width > 20 && rect.height > 20;
      corners.forEach((c) => c?.classList.toggle("visible", visible));

      const left = rect.left - cont.left - offset + border / 2;
      const right = rect.right - cont.left - offset - border / 2;
      const top = rect.top - cont.top - offset + border / 2;
      const bottom = rect.bottom - cont.top - offset - border / 2;

      if (tlRef.current) { tlRef.current.style.left = left + "px"; tlRef.current.style.top = top + "px"; }
      if (trRef.current) { trRef.current.style.left = right + "px"; trRef.current.style.top = top + "px"; }
      if (blRef.current) { blRef.current.style.left = left + "px"; blRef.current.style.top = bottom + "px"; }
      if (brRef.current) { brRef.current.style.left = right + "px"; brRef.current.style.top = bottom + "px"; }

      dragTag!.style.left = rect.right - cont.left + 32 + "px";
      dragTag!.style.top = rect.bottom - cont.top + 32 + "px";
    }

    // Set initial card size and position
    const w = 640, h = 248;
    heroCard.style.width = w + "px";
    heroCard.style.height = h + "px";
    heroCard.style.left = `calc(50% - ${w / 2}px)`;
    heroCard.style.top = `calc(-4vh - ${h / 2}px)`;
    heroCard.style.padding = "2.5rem 3rem";

    // Show text and label immediately
    p.textContent = TYPE_TEXT;
    sizeLabel.style.opacity = "1";
    dragTag.classList.add("nudge");
    updateCorners();

    window.addEventListener("resize", updateCorners);
    window.addEventListener("scroll", updateCorners);
    const ro = new ResizeObserver(updateCorners);
    ro.observe(heroCard);

    // Cursor enters hero area → typing cursor mode
    container.addEventListener("mouseenter", () => {
      const cursor = document.getElementById("custom-cursor");
      cursor?.classList.add("cursor-type-mode");
      const label = cursor?.querySelector(".cursor-label") as HTMLElement | null;
      if (label) label.textContent = "✍";
    });
    container.addEventListener("mouseleave", () => {
      const cursor = document.getElementById("custom-cursor");
      cursor?.classList.remove("cursor-type-mode");
      const label = cursor?.querySelector(".cursor-label") as HTMLElement | null;
      if (label) label.textContent = "↗";
    });

    // Click to re-type
    function typeIt() {
      let i = 0;
      p!.textContent = "";
      sizeLabel!.style.opacity = "0";
      p!.classList.remove("typing-hover");
      dragTag!.style.animationPlayState = "paused";

      const typer = setInterval(() => {
        p!.textContent += TYPE_TEXT[i++];
        updateCorners();
        if (i === TYPE_TEXT.length) {
          clearInterval(typer);
          sizeLabel!.style.transition = "opacity .4s";
          sizeLabel!.style.opacity = "1";
          dragTag!.style.animationPlayState = "running";
          p!.classList.add("typing-hover");
        }
      }, 30);
    }

    p.addEventListener("click", typeIt);

    return () => {
      window.removeEventListener("resize", updateCorners);
      window.removeEventListener("scroll", updateCorners);
      ro.disconnect();
      p.removeEventListener("click", typeIt);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-content px-3">
      <div ref={cardRef} id="heroCard">
        <div ref={sizeLabelRef} id="sizeLabel">
          Design = Empathy × Logistic
        </div>
        <p
          ref={textRef}
          className="typing-hover"
          style={{ margin: 0, fontSize: "1.6rem", lineHeight: 1.55, cursor: "pointer" }}
        />
      </div>
      <span ref={tlRef} className="corner tl" />
      <span ref={trRef} className="corner tr" />
      <span ref={blRef} className="corner bl" />
      <span ref={brRef} className="corner br" />
      <div ref={tagRef} className="haruto-tag">
        <div className="haruto-box">
          Haruto
          <svg className="haruto-svg" viewBox="0 0 10 10">
            <polygon points="0,5 10,0 8,5 10,10" fill="#1e90ff" />
          </svg>
        </div>
      </div>
    </div>
  );
}
