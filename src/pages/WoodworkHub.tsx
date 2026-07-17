import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { ServicePlate } from '../components/ServicePlate'
import { woodServices } from '../data/site'
import { plateStack, scrollReveal, grainSweep } from '../lib/motion'
import styles from './Hub.module.css'

export function WoodworkHub() {
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
        eyebrow="Woodwork"
        title="Timber shaped for daily rooms"
        lead="Doors that swing free, windows that seal, cabinets that stay square—joinery planned for climate, hardware, and how you actually use the space."
        image="/images/12-wood-doors.jpg"
      />

      <section className={styles.intro} ref={intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <p className="eyebrow">On the benches</p>
            <h2 data-grain>Every type of wooden work—done properly.</h2>
            <p data-grain>
              We build and install doors, windows, frames, cabinets, wardrobes, furniture, paneling,
              partitions, and custom joinery. Solid hardwood where it matters; engineered cores
              where stability beats solid face grain.
            </p>
            <p data-grain>
              Steel from our welding bay can reinforce long spans, stair structures, and furniture
              bases—so large timber pieces do not rely on hope alone.
            </p>
          </div>
          <aside className={styles.aside}>
            <h3>What we typically deliver</h3>
            <ul>
              <li>Site measure before cutting</li>
              <li>Door + frame packages</li>
              <li>Kitchen and wardrobe carcasses</li>
              <li>Repair and refinish of sound timber</li>
            </ul>
            <Link to="/contact" className="btn btn-ember">
              Request a woodwork quote
            </Link>
          </aside>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          <h2 className="section-title">Woodwork services</h2>
          <p className="section-lead">Nine categories covering openings, storage, furniture, and repair.</p>
          <div className={styles.rack} ref={rack}>
            {woodServices.map((s, i) => (
              <ServicePlate
                key={s.slug}
                to={`/woodwork/${s.slug}`}
                title={s.title}
                short={s.short}
                image={s.image}
                index={i}
                tone="wood"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
