import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { site } from '../data/site'
import { grainSweep, plateStack, scrollReveal, forgeWipe } from '../lib/motion'
import styles from './Content.module.css'

const milestones = [
  {
    year: 'From Day One',
    title: 'Built on Craft, Not Shortcuts',
    text:
      'Zain Metal and Timber was founded with one principle: every piece of steel we weld and every plank of timber we shape must be done right. No rushed welds. No ill-fitting frames. No compromises on material quality.',
  },
  {
    year: 'Welding Mastery',
    title: 'Steel That Stands the Test of Time',
    text:
      'Over years of daily fabrication, our welding team has developed an instinct for metal. We read the grain of steel the way a carpenter reads wood - understanding how it moves, how it bears load, and how it ages. That knowledge does not come from a book.',
  },
  {
    year: 'Woodwork Heritage',
    title: 'Timber Worked With Patience',
    text:
      'Fine woodwork demands patience that machines cannot replace. Our craftsmen have spent years learning how timber breathes in the Lahore climate, how humidity affects joints, and which species hold polish better indoors versus outdoors.',
  },
  {
    year: 'Dual-Trade Edge',
    title: 'One Roof. Two Trades. Zero Gaps.',
    text:
      'What sets us apart is not just experience in welding or woodwork separately - it is the ability to run both trades on the same project. A gate meets a door. Steel stairs accept timber treads. Grill frames suit timber windows. All planned together.',
  },
]

const strengths = [
  {
    icon: '⚙️',
    title: 'Precision Fabrication',
    text: 'Every cut, weld, and joint is measured before it is made. We work from real dimensions, not estimates.',
  },
  {
    icon: '🪵',
    title: 'Material Knowledge',
    text: 'Years of working with mild steel, teak, ash, oak, and local hardwoods means we advise on the right material for every situation.',
  },
  {
    icon: '🏗️',
    title: 'Installation Included',
    text: 'We do not just fabricate and leave. Our team handles installation so fitment stays our responsibility from start to finish.',
  },
  {
    icon: '🔧',
    title: 'On-Site Problem Solving',
    text: 'Years on Lahore sites have taught us to handle uneven floors, soft masonry, tight access, and last-minute design changes without losing pace.',
  },
  {
    icon: '📐',
    title: 'Drawing to Delivery',
    text: 'We can work from architect CAD drawings, hand sketches, or a simple description. Our experience bridges the gap between idea and installed piece.',
  },
  {
    icon: '🤝',
    title: 'Honest Scoping',
    text: 'Experience means knowing when repair is smarter than replacement. We will always tell you the honest path - even if it is a smaller job for us.',
  },
]

export function Experience() {
  const intro = useRef<HTMLElement>(null)
  const cards = useRef<HTMLDivElement>(null)
  const strengthsRef = useRef<HTMLDivElement>(null)
  const cta = useRef<HTMLElement>(null)

  useEffect(() => {
    if (intro.current) {
      scrollReveal(intro.current, () =>
        grainSweep(intro.current!.querySelectorAll('[data-grain]'))
      )
    }
    if (cards.current) {
      scrollReveal(cards.current, () =>
        plateStack(cards.current!.querySelectorAll('[data-plate]'))
      )
    }
    if (strengthsRef.current) {
      scrollReveal(strengthsRef.current, () =>
        plateStack(strengthsRef.current!.querySelectorAll('[data-plate]'))
      )
    }
    if (cta.current) {
      scrollReveal(cta.current, () =>
        forgeWipe(cta.current!.querySelectorAll('[data-wipe]'))
      )
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Years of craft. Every joint shows it."
        lead={`${site.name} brings multiple years of hands-on experience in welding and woodwork to every project in Lahore and beyond.`}
        image="/images/08-weld-structural.jpg"
      />

      {/* Intro Statement */}
      <section className={styles.section} ref={intro}>
        <div className="container">
          <p className="eyebrow" style={{ textAlign: 'center' }}>Our Story</p>
          <h2
            className="section-title"
            style={{ marginBottom: '1.5rem' }}
          >
            We Have Multiple Years of Experience
          </h2>
          <p
            className="section-lead"
            style={{ maxWidth: '44rem', margin: '0 auto 1.25rem', textAlign: 'center' }}
            data-grain
          >
            At {site.name}, experience is not a number on a banner - it is visible in every clean
            weld, every square cabinet, every gate that swings true on day one and still swings
            true years later. Our team has worked through hundreds of residential and commercial
            projects across Lahore, learning something new on every site.
          </p>
          <p
            style={{ maxWidth: '44rem', margin: '0 auto', textAlign: 'center', color: 'var(--ash-dim)' }}
            data-grain
          >
            We started with a simple belief: that the people of Lahore deserve metalwork and
            woodwork that is built to last, priced honestly, and installed without excuses. That
            belief has not changed. What has grown is our skill, our team, and the trust of the
            clients who keep coming back.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className={styles.band}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
            How Our Craft Grew
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
            ref={cards}
          >
            {milestones.map((m) => (
              <article
                key={m.year}
                data-plate
                style={{
                  background: 'var(--steel-2)',
                  border: '1px solid color-mix(in srgb, var(--brass) 25%, transparent)',
                  borderRadius: '4px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'var(--fs-xs)',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--ember)',
                  }}
                >
                  {m.year}
                </span>
                <h3 style={{ fontSize: 'var(--fs-xl)', color: 'var(--white)' }}>{m.title}</h3>
                <p style={{ color: 'var(--ash-dim)', fontSize: 'var(--fs-md)', maxWidth: 'none' }}>
                  {m.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className={styles.section}>
        <div className="container">
          <p className="eyebrow" style={{ textAlign: 'center' }}>What Experience Looks Like</p>
          <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem' }}>
            Skills Sharpened Over Years
          </h2>
          <div
            ref={strengthsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {strengths.map((s) => (
              <article
                key={s.title}
                data-plate
                style={{
                  background: 'var(--steel-3)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  border: '1px solid color-mix(in srgb, var(--brass) 18%, transparent)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <span style={{ fontSize: '1.75rem' }}>{s.icon}</span>
                <h3 style={{ fontSize: 'var(--fs-lg)', color: 'var(--white)' }}>{s.title}</h3>
                <p style={{ color: 'var(--ash-dim)', fontSize: 'var(--fs-base)', maxWidth: 'none' }}>
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Trust Statement */}
      <section
        style={{
          background: 'var(--steel-2)',
          borderTop: '1px solid color-mix(in srgb, var(--brass) 20%, transparent)',
          borderBottom: '1px solid color-mix(in srgb, var(--brass) 20%, transparent)',
          padding: '4rem 0',
        }}
        ref={cta}
      >
        <div
          className="container"
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <p className="eyebrow" data-wipe>
            Trusted in Lahore
          </p>
          <h2
            style={{ fontSize: 'var(--fs-3xl)', maxWidth: '32rem', lineHeight: 1.2 }}
            data-wipe
          >
            "Experience is the difference between a gate that fits and one that does not."
          </h2>
          <p
            style={{ color: 'var(--ash-dim)', maxWidth: '34rem' }}
            data-wipe
          >
            Every project we take on carries the weight of every project we have done before. That
            accumulated knowledge - of materials, of sites, of how clients actually use what we
            build - is what we bring to your home or business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }} data-wipe>
            <Link to="/contact" className="btn btn-ember">
              Start Your Project
            </Link>
            <Link to="/process" className="btn btn-outline">
              See How We Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
