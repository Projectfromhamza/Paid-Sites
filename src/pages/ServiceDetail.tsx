import { useEffect, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SmartImage } from '../components/SmartImage'
import { weldingServices, woodServices, type ServiceItem } from '../data/site'
import { grainSweep, plateStack, scrollReveal } from '../lib/motion'
import styles from './ServiceDetail.module.css'

type Kind = 'welding' | 'woodwork'

export function ServiceDetail({ kind }: { kind: Kind }) {
  const { slug } = useParams()
  const list = kind === 'welding' ? weldingServices : woodServices
  const service = list.find((s) => s.slug === slug)
  const body = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!body.current) return
    scrollReveal(body.current, () => {
      grainSweep(body.current!.querySelectorAll('[data-grain]'))
      plateStack(body.current!.querySelectorAll('[data-block]'), { stagger: 0.1 })
    })
  }, [slug])

  if (!service) return <Navigate to={`/${kind}`} replace />

  const others = list.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={kind === 'welding' ? 'Welding' : 'Woodwork'}
        title={service.title}
        lead={service.short}
        image={service.image}
        compact
      />

      <section className={styles.detail} ref={body}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.main}>
            <div className={styles.media} data-block>
              <SmartImage
                src={service.image}
                alt={service.title}
                aspect="4/3"
                tone={kind === 'welding' ? 'steel' : 'wood'}
              />
            </div>
            {service.body.map((para) => (
              <p key={para.slice(0, 24)} data-grain>
                {para}
              </p>
            ))}

            <div className={styles.faq} data-block>
              <h3>Quick answers</h3>
              {service.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className={styles.side}>
            <div className={styles.card} data-block>
              <h3>Covers</h3>
              <ul>
                {service.covers.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className={styles.card} data-block>
              <h3>Materials & finish</h3>
              <ul>
                {service.materials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className={styles.card} data-block>
              <h3>Ideal for</h3>
              <ul>
                {service.idealFor.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className={`btn btn-ember ${styles.cta}`}>
              Request quote
            </Link>
            <Link to={`/${kind}`} className={styles.back}>
              ← All {kind === 'welding' ? 'welding' : 'woodwork'} services
            </Link>
          </aside>
        </div>

        <div className={`container ${styles.more}`}>
          <h2 className="section-title">Related</h2>
          <div className={styles.related}>
            {others.map((s: ServiceItem) => (
              <Link key={s.slug} to={`/${kind}/${s.slug}`} className={styles.relatedItem}>
                <SmartImage
                  src={s.image}
                  alt={s.title}
                  aspect="4/3"
                  tone={kind === 'welding' ? 'steel' : 'wood'}
                />
                <span>{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
