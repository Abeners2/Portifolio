import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Abner | Desenvolvedor Full Stack",
    template: "%s | Abner",
  },
  description:
    "Portfólio de Abner, desenvolvedor Full Stack focado em aplicações web modernas com React, Next.js e Node.js.",
  metadataBase: new URL("https://seudominio.com"), // depois você ajusta
  openGraph: {
    title: "Abner | Desenvolvedor Full Stack",
    description:
      "Projetos, estudos e experiências em desenvolvimento web moderno.",
    siteName: "Abner",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-slate-900 text-slate-100 antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
