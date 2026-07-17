import { useEffect, useRef, useState } from 'react'
import { SmartImage } from './SmartImage'
import { gsap, prefersReducedMotion } from '../lib/motion'
import styles from './OrbitCarousel.module.css'

type Slide = { src: string; caption: string }

export function OrbitCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0)
  const track = useRef<HTMLDivElement>(null)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!track.current || prefersReducedMotion()) return
    gsap.fromTo(
      track.current,
      { x: 28, opacity: 0.92 },
      {
        x: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
        onComplete: () => {
          if (track.current) gsap.set(track.current, { clearProps: 'all', opacity: 1 })
        },
      }
    )
  }, [index])

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5200)
    return () => window.clearInterval(id)
  }, [slides.length])

  function go(dir: -1 | 1) {
    setIndex((i) => (i + dir + slides.length) % slides.length)
  }

  return (
    <div className={styles.wrap} ref={root}>
      <button type="button" className={styles.arrow} onClick={() => go(-1)} aria-label="Previous">
        ‹
      </button>
      <div className={styles.viewport}>
        <div className={styles.track} ref={track} key={index}>
          <SmartImage src={slides[index].src} alt={slides[index].caption} aspect="16/9" tone="ember" />
          <p className={styles.caption}>{slides[index].caption}</p>
        </div>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? styles.dotActive : styles.dot}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      <button type="button" className={styles.arrow} onClick={() => go(1)} aria-label="Next">
        ›
      </button>
    </div>
  )
}
