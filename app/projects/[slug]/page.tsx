// app/projects/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import { cases } from "../_cases";
// import { CaseLayout } from "@/components/case/CaseStudyLayout";

// export default function CasePage({ params }: { params: { slug: string } }) {
//   const item = cases[params.slug];
//   if (!item) return notFound();

//   return (
//     <CaseLayout
//       title={item.title}
//       subtitle={item.subtitle}
//       date={item.date}
//       hero={item.hero}
//       stats={item.stats}
//       toc={item.toc}
//     >
//       {item.body}
//     </CaseLayout>
//   );
// }

// (optional) SSG
// export async function generateStaticParams() {
//   return Object.keys(cases).map((slug) => ({ slug }));
// }


// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CaseLayout } from "@/components/case/CaseStudyLayout";
import { registry, slugs } from "@/lib/cases";

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

const nextProjectMap: Record<string, { title: string; href: string; date?: string }> = {
  runbuddy: {
    title: "ClassCollab: Better Team Formation for Better Academic Outcomes",
    href: "/projects/classcollab",
    date: "Case Study • Spring 2025",
  },
  classcollab: {
    title: "Improving Usability on the Iowa Cubs Website",
    href: "/projects/iowa",
    date: "Case Study • Summer 2024",
  },
  iowa: {
    title: "RunBuddy: A Compatibility-First Running App",
    href: "/projects/runbuddy",
    date: "Case Study • Spring 2025",
  },
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const load = registry[slug];
  if (!load) return notFound();

  const mod = await load();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const item: any = mod.default;

  return (
    <CaseLayout
      title={item.title}
      subtitle={item.subtitle}
      date={item.date}
      hero={item.hero}
      meta={item.meta}
      stats={item.stats}
      toc={item.toc}
      nextProject={nextProjectMap[slug]}
    >
      {item.body}
    </CaseLayout>
  );
}
