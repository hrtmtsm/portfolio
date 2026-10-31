// lib/cases.ts
import type { CaseDef } from "@/types/case";
export const registry: Record<string, () => Promise<{ default: CaseDef }>> = {
  runbuddy: () => import("@/content/projects/runbuddy/case"),
  classcollab: () => import("@/content/projects/classcollab/case"),
  iowa: () => import("@/content/projects/iowa/case"),
};

// Used by generateStaticParams
export const slugs = Object.keys(registry);
