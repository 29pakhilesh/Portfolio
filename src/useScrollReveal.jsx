import { useEffect, useRef } from 'react'

function useBidirectionalReveal(ref, { threshold = 0.1, rootMargin = '0px 0px -8% 0px', mode = 'single' } = {}) {
  const prevTopRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isGroup = mode === 'group'
    const visibleClass = isGroup ? 'reveal-group--visible' : 'reveal--visible'
    const aboveClass = isGroup ? 'reveal-group--above' : 'reveal--above'

    const setState = (visible, slideFromAbove) => {
      el.classList.toggle(visibleClass, visible)
      el.classList.toggle(aboveClass, !visible && slideFromAbove)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const top = entry.boundingClientRect.top
        const scrollingUp = prevTopRef.current !== null && top > prevTopRef.current
        prevTopRef.current = top

        if (entry.isIntersecting) {
          setState(true, scrollingUp)
        } else {
          setState(false, !scrollingUp)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)

    const syncIfInView = () => {
      const rect = el.getBoundingClientRect()
      const navHeight =
        parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 64
      if (rect.top < window.innerHeight - navHeight * 0.25 && rect.bottom > navHeight * 0.25) {
        setState(true, false)
      }
    }

    syncIfInView()
    requestAnimationFrame(syncIfInView)

    return () => {
      observer.disconnect()
      prevTopRef.current = null
    }
  }, [threshold, rootMargin, mode])
}

export function useScrollReveal(options) {
  const ref = useRef(null)
  useBidirectionalReveal(ref, { ...options, mode: 'single' })
  return ref
}

/** One reveal animation for an entire section block */
export function SectionReveal({ children, className = '' }) {
  const ref = useRef(null)
  useBidirectionalReveal(ref, { threshold: 0.06, rootMargin: '0px 0px -6% 0px', mode: 'single' })

  return (
    <div ref={ref} className={`section-reveal reveal ${className}`.trim()}>
      {children}
    </div>
  )
}

/** Reveal each child on its own, all triggered together when the group enters view */
export function RevealGroup({ children, className = '' }) {
  const ref = useRef(null)
  useBidirectionalReveal(ref, { threshold: 0.08, rootMargin: '0px 0px -8% 0px', mode: 'group' })

  return (
    <div ref={ref} className={`reveal-group ${className}`.trim()}>
      {children}
    </div>
  )
}

export function RevealItem({ children, className = '' }) {
  return (
    <div className={`reveal-group__item ${className}`.trim()}>
      {children}
    </div>
  )
}
