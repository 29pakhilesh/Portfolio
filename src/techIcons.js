import { assetUrl } from './assetUrl'

/** Local tech icons — served from /public/icons (no CDN dependency) */
export const techIconMap = {
  C: { src: '/icons/c.svg', label: 'C', local: true },
  'C++': { src: '/icons/cplusplus.svg', label: 'C++', local: true, monochrome: true },
  Python: { src: '/icons/python.svg', label: 'Python', local: true },
  JavaScript: { src: '/icons/javascript.svg', label: 'JavaScript', local: true },
  React: { src: '/icons/react.svg', label: 'React', local: true },
  'Node.js': { src: '/icons/nodejs.svg', label: 'Node.js', local: true },
  Express: { src: '/icons/express.svg', label: 'Express', local: true, dark: true },
  'Next.js': { src: '/icons/nextjs.svg', label: 'Next.js', local: true },
  HTML: { src: '/icons/html5.svg', label: 'HTML', local: true },
  CSS: { src: '/icons/css3.svg', label: 'CSS', local: true },
  PostgreSQL: { src: '/icons/postgresql.svg', label: 'PostgreSQL', local: true },
  MySQL: { src: '/icons/mysql.svg', label: 'MySQL', local: true },
  Git: { src: '/icons/git.svg', label: 'Git', local: true },
  'VS Code': { src: '/icons/vscode.svg', label: 'VS Code', local: true },
  Linux: { src: '/icons/linux.svg', label: 'Linux', local: true },
  AWS: { src: '/icons/aws.png', label: 'AWS', local: true },
  TypeScript: { src: '/icons/typescript.svg', label: 'TypeScript', local: true, monochrome: true },
  FastAPI: { src: '/icons/fastapi.svg', label: 'FastAPI', local: true, monochrome: true },
  PyTorch: { src: '/icons/pytorch.svg', label: 'PyTorch', local: true, monochrome: true },
  SQLite: { src: '/icons/sqlite.svg', label: 'SQLite', local: true, monochrome: true },
  PyPDF2: { src: '/icons/pypdf2.svg', label: 'PyPDF2', local: true },
  Auth: { src: '/icons/auth0.svg', label: 'Auth', local: true, dark: true },
  'MCQ Engine': { src: '/icons/googleforms.svg', label: 'MCQ Engine', local: true },
  Sustainability: { src: '/icons/sustainability.svg', label: 'Sustainability', local: true },
  'Data Viz': { src: '/icons/chartdotjs.svg', label: 'Data Viz', local: true, monochrome: true },
  LocalStorage: { src: '/icons/localstorage.svg', label: 'LocalStorage', local: true },
  'File I/O': { src: '/icons/filedotio.svg', label: 'File I/O', local: true, monochrome: true },
  Billing: { src: '/icons/stripe.svg', label: 'Billing', local: true, monochrome: true },
  Automation: { src: '/icons/githubactions.svg', label: 'Automation', local: true, monochrome: true },
  'Deep Learning': { src: '/icons/tensorflow.svg', label: 'Deep Learning', local: true, monochrome: true },
}

export function getTechIconSources(name) {
  const src = techIconMap[name]?.src
  return src ? [assetUrl(src)] : []
}

export function getTechIconUrl(name) {
  return getTechIconSources(name)[0] ?? null
}

export function getTechLabel(name) {
  return techIconMap[name]?.label ?? name
}

/** Map project tags to an icon name when the tag label differs */
const tagIconAliases = {
  Web: 'HTML',
}

export function resolveTechIconName(tag) {
  if (techIconMap[tag]) return tag
  if (tagIconAliases[tag] && techIconMap[tagIconAliases[tag]]) return tagIconAliases[tag]
  return tag
}

export function preloadTechIcons(names) {
  const seen = new Set()
  for (const name of names) {
    const src = getTechIconUrl(name)
    if (!src || seen.has(src)) continue
    seen.add(src)
    const img = new Image()
    img.src = src
  }
}
