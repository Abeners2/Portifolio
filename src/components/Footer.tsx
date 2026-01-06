import Link from "next/link";


export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* IDENTIDADE */}
          <div>
            <p className="text-lg font-semibold">
              Abner
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Desenvolvedor Full Stack focado em aplicações web modernas,
              performance e boas práticas.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:underline">
                  Projetos
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:abnerlucassantoss2@gmail.com"
                  className="hover:underline"
                >
                  abnerlucassantoss2@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abner-nogueira-8581b8314/"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Abeners2"
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Abner. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
