import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { reviews } from '../data/site'
import { plateStack, scrollReveal } from '../lib/motion'
import styles from './Content.module.css'

function Stars({ n }: { n: number }) {
  return (
    <span className={styles.stars} aria-label={`${n} out of 5`}>
      {'★'.repeat(n)}
      <span className={styles.starsEmpty}>{'★'.repeat(5 - n)}</span>
    </span>
  )
}

export function Reviews() {
  const grid = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (grid.current) {
      scrollReveal(grid.current, () => plateStack(grid.current!.querySelectorAll('[data-plate]')))
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What clients notice after install"
        lead="Fit, finish, and how the two trades talk to each other—straight feedback from homes, shops, and site teams."
        image="/images/18-project-1.jpg"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.reviewGrid} ref={grid}>
            {reviews.map((r) => (
              <article key={r.name} className={styles.reviewCard} data-plate data-cursor>
                <Stars n={r.rating} />
                <p className={styles.reviewText}>“{r.text}”</p>
                <div className={styles.reviewMeta}>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-ember">
              Become a client story
            </Link>
            <Link to="/faq" className="btn btn-outline">
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
