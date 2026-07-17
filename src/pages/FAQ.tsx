import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { faqs } from '../data/site'
import { plateStack, scrollReveal } from '../lib/motion'
import styles from './Content.module.css'

const moreFaqs = [
  ...faqs,
  {
    q: 'Do you provide drawings for approval?',
    a: 'For custom pieces we share dimensioned sketches or marked drawings. Complex architectural work can follow your consultant’s sheets with our fabrication notes.',
  },
  {
    q: 'Can you match powder-coat colours?',
    a: 'Where batch size allows, yes-RAL or sample-matched. Small one-offs may use high-quality enamel systems instead.',
  },
  {
    q: 'Is on-site welding always possible?',
    a: 'Most ferrous repairs yes, subject to access, ventilation, and fire safety. We assess before confirming.',
  },
  {
    q: 'Do you offer maintenance after install?',
    a: 'We advise on care. Follow-up adjustments for hinges, latches, or doors that settle are available on request.',
  },
]

export function FAQ() {
  const list = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (list.current) {
      scrollReveal(list.current, () => plateStack(list.current!.querySelectorAll('[data-plate]')))
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you book"
        lead="Timelines, materials, dual-trade coordination, and how quoting works-collected in one place."
        image="/images/02-texture-steel.jpg"
        compact
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.faqList} ref={list}>
            {moreFaqs.map((f) => (
              <details key={f.q} className={styles.faqItem} data-plate>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-ember">
              Still have a question?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
