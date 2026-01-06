import type { Metadata } from "next";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Desenvolvedor Full Stack",
  description:
    "Abner é desenvolvedor Full Stack com foco em React, Next.js e Node.js. Veja projetos e experiências.",
};
export default function Home() {
  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 py-20 bg-slate-900">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Olá, eu sou Abner 👋
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-400 mb-6">
            Desenvolvedor Full Stack em formação
          </h2>

          <p className="text-slate-300 mb-8 leading-relaxed">
            Estudante de Sistemas de Informação focado em desenvolvimento web,
            APIs e soluções práticas com React, Node.js e Python.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projetos"
              className="px-6 py-3 bg-blue-600 rounded-md font-medium hover:bg-blue-700 transition text-center"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="px-6 py-3 border border-slate-700 rounded-md hover:border-blue-400 transition text-center"
            >
              Contato
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <About />

      {/* TECNOLOGIAS */}
      <Skills />

      {/* PROJETOS */}
      <Projects />

      {/* CONTATO */}
      <Contact />

    </main>

  );
}
