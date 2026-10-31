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
  const item = mod.default;

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
