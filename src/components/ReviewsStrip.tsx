import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { reviews } from '../data/site'
import { plateStack, scrollReveal } from '../lib/motion'
import styles from './ReviewsStrip.module.css'

export function ReviewsStrip() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    if (root.current) {
      scrollReveal(root.current, () => plateStack(root.current!.querySelectorAll('[data-plate]')))
    }
  }, [])

  return (
    <section className={styles.strip} ref={root}>
      <div className="container">
        <h2 className="section-title">Client notes</h2>
        <p className="section-lead">A few words after the sparks cool and the doors hang true.</p>
        <div className={styles.track}>
          {reviews.slice(0, 3).map((r) => (
            <blockquote key={r.name} className={styles.card} data-plate data-cursor>
              <p>“{r.text}”</p>
              <footer>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className={styles.cta}>
          <Link to="/reviews" className="btn btn-outline">
            All reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
