// lib/cases.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registry: Record<string, () => Promise<{ default: any }>> = {
  runbuddy: () => import("@/content/projects/runbuddy/case"),
  classcollab: () => import("@/content/projects/classcollab/case"),
  iowa: () => import("@/content/projects/iowa/case"),
};

// Used by generateStaticParams
export const slugs = Object.keys(registry);
