import type { NextConfig } from "next";

// Nome do repositório no GitHub (usado como base path no GitHub Pages).
// Ex.: site publicado em https://<usuario>.github.io/ico-system-lp/
const repo = "ico-system-lp";
const isPages = process.env.GITHUB_PAGES === "true";

const basePath = isPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  // Gera o site como arquivos estáticos em `out/` (compatível com GitHub Pages).
  output: "export",
  images: { unoptimized: true },
  // Só aplica o prefixo do repositório no build do GitHub Pages;
  // no `npm run dev` local continua em "/".
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  // Exposto no bundle para prefixar os caminhos das imagens (ver src/lib/base-path.ts).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
