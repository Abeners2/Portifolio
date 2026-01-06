# Este é o meu portfólio pessoal, desenvolvido com **Next.js (App Router)** e **Tailwind CSS**, com foco em performance, SEO e boas práticas modernas de desenvolvimento frontend.

O projeto foi pensado para ser simples, rápido e profissional, servindo como vitrine dos meus projetos, habilidades e experiência como desenvolvedor.

---

## 🚀 Tecnologias Utilizadas

* **Next.js 14+** — Framework React com App Router
* **React** — Biblioteca para interfaces de usuário
* **TypeScript** — JavaScript com tipagem estática
* **Tailwind CSS** — Framework CSS utilitário
* **next-themes** — Gerenciamento de tema (Dark / Light)
* **Vercel** — Deploy e hospedagem

---

## ✨ Características

* 🎨 Tema **Dark / Light** com suporte ao tema do sistema
* 📱 Design totalmente responsivo
* 🚀 Navegação rápida com App Router
* 🧩 Rotas dinâmicas para projetos (`/projetos/[slug]`)
* 🔍 SEO dinâmico por página (`generateMetadata`)
* ⏳ Skeleton loading para melhor UX
* 🧭 Header fixo e transparente com active link
* ⚡ Otimizado para produção

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/Abeners2/Portifolio
```


Instale as dependências:

```bash
npm install
```

Execute em modo de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:3000
```

---

## 🧪 Scripts Disponíveis

* `npm run dev` — Inicia o servidor de desenvolvimento
* `npm run build` — Gera a build de produção
* `npm run start` — Executa a aplicação em modo produção
* `npm run lint` — Analisa o código com ESLint

---

## 🎨 Personalização

### Conteúdo

Os dados dos projetos estão centralizados em:

```
src/data/projects.ts
```

Cada projeto possui:

* título
* slug
* descrição
* tecnologias
* link para repositório ou site

---

### Estilos

* Paleta e estilos globais em `globals.css`
* Componentes estilizados com Tailwind CSS
* Suporte a tema claro e escuro via `next-themes`

---

## 🌐 Deploy

O projeto está preparado para deploy na **Vercel**.

### Passos básicos:

```bash
npm run build
```

Depois, basta importar o repositório na Vercel e realizar o deploy.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
Sinta-se à vontade para usar como base, mas não se esqueça de adaptar para seu próprio conteúdo 😉

---

Built with ❤️ using **Next.js + TypeScript + Tailwind CSS**
