import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SmartImage } from '../components/SmartImage'
import { site } from '../data/site'
import { grainSweep, scrollReveal, plateStack } from '../lib/motion'
import styles from './Content.module.css'

export function About() {
  const story = useRef<HTMLElement>(null)
  const values = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (story.current) {
      scrollReveal(story.current, () => grainSweep(story.current!.querySelectorAll('[data-grain]')))
    }
    if (values.current) {
      scrollReveal(values.current, () => plateStack(values.current!.querySelectorAll('[data-plate]')))
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${site.name} workshop`}
        lead="A dual-trade bay where sparks and sawdust share one roof—built for clients who want steel and timber handled by people who talk to each other."
        image="/images/25-about-workshop.jpg"
      />

      <section className={styles.section} ref={story}>
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <p className="eyebrow">Why dual trade</p>
            <h2 data-grain>The gap between trades is where projects go wrong.</h2>
            <p data-grain>
              Too often a gate is welded without knowing the door thickness, or a wooden window is
              finished before grill fixings are planned. {site.name} exists to close that gap:
              one measure, one schedule, one standard of fit.
            </p>
            <p data-grain>
              We are a workshop-first practice. Drawings matter. So do site realities—uneven
              floors, soft masonry, humidity, and the way a hinge actually carries weight after a
              year of use.
            </p>
            <p data-grain>
              Whether you need a single repair weld or a full entrance package of steel and timber,
              the approach stays the same: understand the opening, agree the finish, fabricate with
              care, install until it works.
            </p>
          </div>
          <div className={styles.aboutMedia}>
            <SmartImage
              src="/images/26-about-detail.jpg"
              alt="Weld meeting wood"
              aspect="4/3"
              tone="ember"
            />
            <SmartImage
              src="/images/20-project-3.jpg"
              alt="Workshop panorama"
              aspect="16/9"
              tone="steel"
            />
          </div>
        </div>
      </section>

      <section className={styles.band}>
        <div className="container">
          <h2 className="section-title">What we stand on</h2>
          <div className={styles.valueGrid} ref={values}>
            {[
              {
                t: 'Measure twice',
                d: 'Quotes and cut lists follow real dimensions—not catalogue guesses.',
              },
              {
                t: 'Finish for climate',
                d: 'Outdoor steel and exterior timber get systems chosen for exposure.',
              },
              {
                t: 'Install ownership',
                d: 'We prefer to hang what we build so fitment stays accountable.',
              },
              {
                t: 'Honest scope',
                d: 'If repair is smarter than replace, we say so—and price accordingly.',
              },
            ].map((v) => (
              <article key={v.t} className={styles.value} data-plate>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </article>
            ))}
          </div>
          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-ember">
              Work with us
            </Link>
            <Link to="/process" className="btn btn-outline">
              See the process
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
