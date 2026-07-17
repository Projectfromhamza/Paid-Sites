import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'
import styles from './CustomCursor.module.css'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine || prefersReducedMotion()) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      setHover(!!t?.closest('a, button, input, textarea, summary, [data-cursor]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        className={`${styles.dot} ${hover ? styles.dotHover : ''}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
      <div
        className={`${styles.ring} ${hover ? styles.ringHover : ''}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </>
  )
}
