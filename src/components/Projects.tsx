import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="w-full px-6 py-20 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-10">Projetos</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-slate-900 p-6 rounded-lg border border-slate-700 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  {project.title}
                </h4>

                <p className="text-slate-400 mb-3">
                  {project.shortDescription}
                </p>

                <p className="text-slate-300 mb-4">
                  {project.fullDescription}
                </p>
              </div>

              <a
                href={`/projetos/${project.slug}`}
                className="text-blue-400 hover:underline mt-4"
              >
                Ver detalhes →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
