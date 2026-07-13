import type { NextConfig } from "next";

// Nome do repositório no GitHub (usado como base path no GitHub Pages).
// Ex.: site publicado em https://<usuario>.github.io/ico-system-lp/
const repo = "ico-system-lp";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Gera o site como arquivos estáticos em `out/` (compatível com GitHub Pages).
  output: "export",
  images: { unoptimized: true },
  // Só aplica o prefixo do repositório no build do GitHub Pages;
  // no `npm run dev` local continua em "/".
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;
