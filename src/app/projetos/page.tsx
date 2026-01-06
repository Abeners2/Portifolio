import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  alternates: {
    canonical: "/projetos",
  },
  description:
    "Confira os principais projetos desenvolvidos por Abner, incluindo aplicações Full Stack, IA e soluções web modernas.",
  openGraph: {
    title: "Projetos | Abner",
    description:
      "Aplicações Full Stack, projetos com IA e soluções web modernas desenvolvidas por Abner.",
    type: "website",
  },
};

export default function ProjetosPage() {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto">
      <section className="space-y-10">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">
            Projetos
          </h1>
          <p className="text-muted-foreground">
            Alguns dos projetos que desenvolvi ao longo dos estudos e experiências profissionais.
          </p>
        </header>

        {/* Lista de projetos */}
      </section>
        <section className="space-y-16 mb-32">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="border border-slate-800 rounded-xl p-8 bg-slate-900"
            >
              <h2 className="text-2xl font-bold mb-2">
                {project.title}
              </h2>

              <p className="text-slate-400 mb-4">
                {project.shortDescription}
              </p>

              <p className="text-slate-300 mb-6">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-md bg-slate-800 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={`/projetos/${project.slug}`}
                className="text-blue-400 hover:underline font-medium"
              >
                Ver detalhes →
              </a>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center border-t border-slate-800 pt-20">
          <h2 className="text-3xl font-bold mb-4">
            Gostou do que viu?
          </h2>

          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Estou aberto a oportunidades como desenvolvedor
            full stack, freelancer ou projetos interessantes
            onde eu possa agregar valor.
          </p>

          <a
            href="/#contato"
            className="inline-block px-8 py-4 bg-blue-600 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Entrar em contato
          </a>
        </section>
    </main>
  );
}
