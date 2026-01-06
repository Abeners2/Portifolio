import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// 🔥 SEO DINÂMICO
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projetos/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">
      <a
        href="/projetos"
        className="inline-block mb-8 text-slate-400 hover:text-blue-400 transition"
      >
        ← Voltar para projetos
      </a>

      <h1 className="text-4xl font-bold mb-2">
        {project.title}
      </h1>

      <p className="text-slate-300 mb-10 leading-relaxed">
        {project.fullDescription}
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Tecnologias
      </h2>

      <ul className="flex flex-wrap gap-3 mb-10">
        {project.techs.map((tech) => (
          <li
            key={tech}
            className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Ver Projeto →
        </a>
      ) : (
        <span className="text-sm text-slate-500">
          Projeto não público
        </span>
      )}
    </main>
  );
}
