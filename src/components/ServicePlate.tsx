import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { SmartImage } from './SmartImage'
import styles from './ServicePlate.module.css'

type Props = {
  to: string
  title: string
  short: string
  image: string
  index?: number
  tone?: 'steel' | 'wood'
}

export function ServicePlate({ to, title, short, image, index = 0, tone = 'steel' }: Props) {
  return (
    <Link to={to} className={styles.plate} data-plate style={{ '--i': index } as CSSProperties}>
      <div className={styles.media}>
        <SmartImage src={image} alt={title} aspect="4/3" tone={tone} />
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{short}</p>
        <span className={styles.more}>Explore</span>
      </div>
    </Link>
  )
}
