import { useEffect, useRef } from 'react'
import './LiveBackground.css'

const lerp = (current, target, amount) => current + (target - current) * amount

export default function LiveBackground() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let targetX = window.innerWidth * 0.5
    let targetY = window.innerHeight * 0.38
    let currentX = targetX
    let currentY = targetY
    let scrollTarget = 0
    let scrollCurrent = 0
    let rafId = 0

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollTarget = max > 0 ? window.scrollY / max : 0
    }

    const tick = () => {
      const ease = reducedMotion ? 1 : 0.035
      const scrollEase = reducedMotion ? 1 : 0.04

      currentX = lerp(currentX, targetX, ease)
      currentY = lerp(currentY, targetY, ease)
      scrollCurrent = lerp(scrollCurrent, scrollTarget, scrollEase)

      const spotlight = spotlightRef.current
      if (spotlight) {
        spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }

      root.style.setProperty('--scroll-progress', String(scrollCurrent))
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="live-bg" aria-hidden="true">
      <div className="live-bg__base" />
      <div className="live-bg__orb live-bg__orb--1" />
      <div className="live-bg__orb live-bg__orb--2" />
      <div className="live-bg__orb live-bg__orb--3" />
      <div ref={spotlightRef} className="live-bg__spotlight" />
    </div>
  )
}
