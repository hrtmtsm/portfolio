"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    };

    const onEnter = () => cursor.classList.add("view-mode");
    const onLeave = () => cursor.classList.remove("view-mode");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-label">↗</span>
    </div>
  );
}
