import { useEffect, useRef } from 'react'
import { forgeWipe, grainSweep, sparksLine } from '../lib/motion'
import styles from './PageHero.module.css'
import { SmartImage } from './SmartImage'

type Props = {
  eyebrow: string
  title: string
  lead: string
  image?: string
  compact?: boolean
}

export function PageHero({ eyebrow, title, lead, image = '/images/02-texture-steel.jpg', compact }: Props) {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    forgeWipe(el.querySelectorAll('[data-wipe]'), { delay: 0.15 })
    grainSweep(el.querySelectorAll('[data-grain]'), { delay: 0.35 })
    const line = el.querySelector('[data-spark]')
    if (line) sparksLine(line, { delay: 0.5 })
  }, [])

  return (
    <section ref={root} className={`${styles.hero} ${compact ? styles.compact : ''}`}>
      <div className={styles.bg}>
        <SmartImage src={image} alt="" aspect="16/9" tone="steel" className={styles.bgImg} />
        <div className={styles.veil} />
      </div>
      <div className={`container ${styles.content}`}>
        <p className="eyebrow" data-wipe>
          {eyebrow}
        </p>
        <h1 data-wipe>{title}</h1>
        <svg className={styles.rule} viewBox="0 0 200 2" preserveAspectRatio="none" aria-hidden>
          <line data-spark x1="0" y1="1" x2="200" y2="1" stroke="currentColor" strokeWidth="1" />
        </svg>
        <p data-grain>{lead}</p>
      </div>
    </section>
  )
}
