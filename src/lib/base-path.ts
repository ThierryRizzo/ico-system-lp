// Prefixo de base do site. No GitHub Pages fica "/ico-system-lp"; no dev local, "".
// Usado para montar o caminho das imagens (next/image não aplica o basePath
// automaticamente quando `unoptimized` + export estático).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
