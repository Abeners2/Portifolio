export default function Contact() {
  return (
    <section
      id="contato"
      className="w-full px-6 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">
          Vamos conversar?
        </h3>

        <p className="text-slate-300 mb-10">
          Estou aberto a oportunidades, estágios e projetos.
          Se quiser conversar ou tirar dúvidas, é só me chamar.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:abnerlucassantoss2@gmail.com"
            className="px-6 py-3 bg-blue-600 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Email
          </a>

          <a
            href="https://github.com/Abeners2"
            target="_blank"
            className="px-6 py-3 border border-slate-700 rounded-md hover:border-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abner-nogueira-8581b8314/"
            target="_blank"
            className="px-6 py-3 border border-slate-700 rounded-md hover:border-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
