// components/Footer.tsx
'use client';

import { useEffect, useState } from 'react';

function ordinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function Footer() {
  const [visit, setVisit] = useState<number | null>(null);

  useEffect(() => {
    try {
      const key = 'haruto:visitCount';
      const next = (parseInt(localStorage.getItem(key) || '0', 10) || 0) + 1;
      localStorage.setItem(key, String(next));
      setVisit(next);
    } catch {/* no-op */}
  }, []);

  return (
    <footer style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ fontSize: "0.9375rem", color: "#bbb", textAlign: "right" }}>
          <p>Designed &amp; coded by Haruto</p>
          {visit && <p style={{ marginTop: "0.25rem" }}>You&apos;re the {ordinal(visit)} visitor</p>}
        </div>
      </div>
    </footer>
  );
}
