const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Python",
    "API REST",
  ],
  BancoDeDados: [
    "MySQL",
    "MongoDB",
  ],
  Outros: [
    "Git",
    "GitHub",
    "Docker (básico)",
    "Linux",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-10">
          Tecnologias
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([categoria, itens]) => (
            <div
              key={categoria}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700"
            >
              <h4 className="text-xl font-semibold mb-4">
                {categoria}
              </h4>

              <ul className="flex flex-wrap gap-3">
                {itens.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 bg-slate-700 rounded-md text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
