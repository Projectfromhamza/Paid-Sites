import { useEffect, useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { QuoteForm } from '../components/QuoteForm'
import { OrbitCarousel } from '../components/OrbitCarousel'
import { ServicePlate } from '../components/ServicePlate'
import { SmartImage } from '../components/SmartImage'
import { ReviewsStrip } from '../components/ReviewsStrip'
import { img } from '../data/images'
import {
  processSteps,
  projects,
  site,
  weldingServices,
  woodServices,
} from '../data/site'
import {
  forgeWipe,
  grainSweep,
  plateStack,
  scrollReveal,
  sparksLine,
} from '../lib/motion'
import styles from './Home.module.css'

const carouselSlides = [
  { src: '/images/27-carousel-1.jpg', caption: 'Ornate steel gate' },
  { src: '/images/28-carousel-2.jpg', caption: 'Hardwood double doors' },
  { src: '/images/29-carousel-3.jpg', caption: 'Steel staircase frame' },
  { src: '/images/30-carousel-4.jpg', caption: 'Custom wardrobe joinery' },
]

export function Home() {
  const hero = useRef<HTMLElement>(null)
  const featured = useRef<HTMLElement>(null)
  const dual = useRef<HTMLElement>(null)
  const process = useRef<HTMLElement>(null)
  const trust = useRef<HTMLElement>(null)

  useEffect(() => {
    const h = hero.current
    if (h) {
      forgeWipe(h.querySelectorAll('[data-wipe]'), { delay: 0.2 })
      grainSweep(h.querySelectorAll('[data-grain]'), { delay: 0.45 })
      const line = h.querySelector('[data-spark]')
      if (line) sparksLine(line, { delay: 0.55 })
    }

    if (featured.current) {
      scrollReveal(featured.current, () => {
        plateStack(featured.current!.querySelectorAll('[data-plate]'))
      })
    }
    if (dual.current) {
      scrollReveal(dual.current, () => {
        grainSweep(dual.current!.querySelectorAll('[data-grain]'))
        plateStack(dual.current!.querySelectorAll('[data-plate]'), { stagger: 0.15 })
      })
    }
    if (process.current) {
      scrollReveal(process.current, () => {
        plateStack(process.current!.querySelectorAll('[data-step]'), { stagger: 0.1 })
      })
    }
    if (trust.current) {
      scrollReveal(trust.current, () => {
        forgeWipe(trust.current!.querySelectorAll('[data-wipe]'))
      })
    }
  }, [])

  const featuredWelding = weldingServices.slice(0, 3)
  const featuredWood = woodServices.slice(0, 3)

  return (
    <>
      <section className={styles.hero} ref={hero}>
        <div className={styles.heroBg}>
          <SmartImage src="/images/01-hero.jpg" alt="Workshop atmosphere" aspect="16/9" tone="ember" className={styles.heroImg} />
          <div className={styles.heroVeil} />
        </div>

        <div className={`container-wide ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow" data-wipe>
              {site.name}
            </p>
            <p className={styles.script} data-wipe>
              Strength in steel. Warmth in wood.
            </p>
            <h1 data-wipe>
              Welding & wooden work
              <span>crafted as one trade</span>
            </h1>
            <svg className={styles.heroRule} viewBox="0 0 240 2" preserveAspectRatio="none" aria-hidden>
              <line data-spark x1="0" y1="1" x2="240" y2="1" stroke="currentColor" strokeWidth="1" />
            </svg>
            <p className={styles.heroLead} data-grain>
              {site.subline} Gates, grills, railings, doors, windows, cabinets, and custom joinery—
              measured, fabricated, and installed under one workshop.
            </p>
          </div>

          <div className={styles.heroForm}>
            <QuoteForm />
            <Link to="/contact" className={`btn btn-walnut ${styles.listCta}`}>
              Book a site measure
            </Link>
          </div>
        </div>

        <div className={styles.carouselBridge}>
          <OrbitCarousel slides={carouselSlides} />
        </div>
      </section>

      <section
        className={styles.band}
        ref={dual}
        style={{ '--band-texture': `url(${img('/images/02-texture-steel.jpg')})` } as CSSProperties}
      >
        <div className={`container ${styles.dual}`}>
          <article className={styles.dualCard} data-plate>
            <SmartImage src="/images/06-weld-gates.jpg" alt="Welding" aspect="16/9" tone="steel" />
            <div className={styles.dualBody}>
              <p className="eyebrow">Trade one</p>
              <h2 data-grain>Welding</h2>
              <p data-grain>
                Architectural and structural steel—gates that hang true, grills that keep light,
                railings and staircases built for daily load. Repair and on-site welding when the
                right fix is reinforcement, not replacement.
              </p>
              <Link to="/welding" className="btn btn-outline">
                All welding services
              </Link>
            </div>
          </article>
          <article className={styles.dualCard} data-plate>
            <SmartImage src="/images/12-wood-doors.jpg" alt="Woodwork" aspect="16/9" tone="wood" />
            <div className={styles.dualBody}>
              <p className="eyebrow">Trade two</p>
              <h2 data-grain>Wooden work</h2>
              <p data-grain>
                Doors, windows, frames, cabinets, furniture, paneling, and custom joinery. Timber
                selected for the job, milled square, finished for the climate it will live in.
              </p>
              <Link to="/woodwork" className="btn btn-outline">
                All woodwork services
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.featured} ref={featured}>
        <div className="container">
          <h2 className="section-title">Featured craft</h2>
          <p className="section-lead">
            Six openings into the work—three from the welding bay, three from the timber benches.
          </p>
          <div className={styles.rack}>
            {featuredWelding.map((s, i) => (
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
            {featuredWood.map((s, i) => (
              <ServicePlate
                key={s.slug}
                to={`/woodwork/${s.slug}`}
                title={s.title}
                short={s.short}
                image={s.image}
                index={i + 3}
                tone="wood"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.process}
        ref={process}
        style={{ '--process-texture': `url(${img('/images/03-texture-wood.jpg')})` } as CSSProperties}
      >
        <div className="container">
          <h2 className="section-title">How a job moves</h2>
          <p className="section-lead">
            Measure, design, fabricate, install—same sequence whether the material is steel, wood,
            or both.
          </p>
          <div className={styles.steps}>
            {processSteps.map((step, i) => (
              <article key={step.title} className={styles.step} data-step>
                <SmartImage src={step.image} alt={step.title} aspect="1/1" tone={i % 2 ? 'wood' : 'steel'} />
                <div>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.centerCta}>
            <Link to="/process" className="btn btn-ember">
              Full process
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2 className="section-title">Recent lines of work</h2>
          <p className="section-lead">Selected projects that show how steel and timber share a site.</p>
          <div className={styles.projectGrid}>
            {projects.map((p) => (
              <article key={p.title} className={styles.project}>
                <SmartImage src={p.image} alt={p.title} aspect="16/9" tone="ember" />
                <div className={styles.projectBody}>
                  <p className="eyebrow">{p.trade}</p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.centerCta}>
            <Link to="/projects" className="btn btn-outline">
              View projects
            </Link>
          </div>
        </div>
      </section>

      <ReviewsStrip />

      <section className={styles.trust} ref={trust}>
        <div className={`container ${styles.trustInner}`}>
          <div>
            <p className="eyebrow" data-wipe>
              Workshop standard
            </p>
            <h2 data-wipe>One measure. Two trades. No handoff gaps.</h2>
            <p>
              When a gate meets a wooden door, or a steel stair needs hardwood treads, both pieces
              are planned together—so clearances, finishes, and install days align.
            </p>
          </div>
          <ul className={styles.trustList}>
            <li data-wipe>
              <strong>Fabrication + install</strong>
              <span>Fitment stays under workshop control</span>
            </li>
            <li data-wipe>
              <strong>Site measures</strong>
              <span>Quotes rooted in real openings</span>
            </li>
            <li data-wipe>
              <strong>Finish advice</strong>
              <span>Indoor vs outdoor systems explained</span>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.closing}>
        <div className="container">
          <h2 className="section-title">Start with a conversation</h2>
          <p className="section-lead">
            Send opening sizes, a photo, or request a site visit. We reply with scope, timing, and a
            clear next step.
          </p>
          <div className={styles.closingActions}>
            <Link to="/contact" className="btn btn-ember">
              {site.ctaPrimary}
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
