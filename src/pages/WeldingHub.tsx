import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { ServicePlate } from '../components/ServicePlate'
import { weldingServices } from '../data/site'
import { plateStack, scrollReveal, grainSweep } from '../lib/motion'
import styles from './Hub.module.css'

export function WeldingHub() {
  const rack = useRef<HTMLDivElement>(null)
  const intro = useRef<HTMLElement>(null)

  useEffect(() => {
    if (intro.current) {
      scrollReveal(intro.current, () => grainSweep(intro.current!.querySelectorAll('[data-grain]')))
    }
    if (rack.current) {
      scrollReveal(rack.current, () => plateStack(rack.current!.querySelectorAll('[data-plate]')))
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Welding"
        title="Steelwork that holds line and load"
        lead="From compound gates to structural frames, every weld is planned for the opening it serves-then finished for the weather it will face."
        image="/images/08-weld-structural.jpg"
      />

      <section className={styles.intro} ref={intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <p className="eyebrow">In the bay</p>
            <h2 data-grain>Architectural presence. Structural honesty.</h2>
            <p data-grain>
              Our welding shop builds pieces you see every day-gates, grills, railings-and pieces
              you trust without noticing-brackets, stair stringers, canopy frames. Mild steel is
              our primary language; finishes are chosen for exposure, not fashion alone.
            </p>
            <p data-grain>
              When a project also needs timber doors, treads, or frames, the woodshop works from
              the same measure so metal and wood meet without forced gaps.
            </p>
          </div>
          <aside className={styles.aside}>
            <h3>What we typically deliver</h3>
            <ul>
              <li>Custom fabrication from sketch or drawing</li>
              <li>On-site repair and reinforcement</li>
              <li>Primer, enamel, and powder-coat options</li>
              <li>Install with alignment and hardware checks</li>
            </ul>
            <Link to="/contact" className="btn btn-ember">
              Request a welding quote
            </Link>
          </aside>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          <h2 className="section-title">Welding services</h2>
          <p className="section-lead">Nine disciplined categories-open any for materials, scope, and answers.</p>
          <div className={styles.rack} ref={rack}>
            {weldingServices.map((s, i) => (
              <ServicePlate
                key={s.slug}
                to={`/welding/${s.slug}`}
                title={s.title}
                short={s.short}
                image={s.image}
                index={i}
                tone="steel"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
