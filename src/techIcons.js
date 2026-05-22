/** Local tech icons — served from /public/icons (no CDN dependency) */
export const techIconMap = {
  C: { src: '/icons/c.svg', label: 'C', local: true },
  'C++': { src: '/icons/cplusplus.svg', label: 'C++', local: true },
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
}

export function getTechIconSources(name) {
  const src = techIconMap[name]?.src
  return src ? [src] : []
}

export function getTechIconUrl(name) {
  return getTechIconSources(name)[0] ?? null
}

export function getTechLabel(name) {
  return techIconMap[name]?.label ?? name
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
