import type { ReactNode } from "react";

export type TocItem = { id: string; label: string };

export type CaseDef = {
  slug: string;
  title: string;
  subtitle?: string;
  date?: string;
  hero?: ReactNode;
  meta?: ReactNode;
  stats?: Array<{ label: string; value: string }>;
  toc?: TocItem[];
  body?: ReactNode;
};
