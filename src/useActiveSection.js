import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const getNavOffset = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
      return parseInt(raw, 10) || 76
    }

    const update = () => {
      const offset = window.scrollY + getNavOffset() + 100
      let current = ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) current = id
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds.join('|')])

  return active
}
