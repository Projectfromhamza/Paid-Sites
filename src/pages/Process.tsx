import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SmartImage } from '../components/SmartImage'
import { processSteps } from '../data/site'
import { plateStack, scrollReveal, grainSweep } from '../lib/motion'
import styles from './Content.module.css'

export function Process() {
  const steps = useRef<HTMLDivElement>(null)
  const extra = useRef<HTMLElement>(null)

  useEffect(() => {
    if (steps.current) {
      scrollReveal(steps.current, () => plateStack(steps.current!.querySelectorAll('[data-plate]')))
    }
    if (extra.current) {
      scrollReveal(extra.current, () => grainSweep(extra.current!.querySelectorAll('[data-grain]')))
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Process"
        title="From opening to handover"
        lead="A clear sequence keeps welding and woodwork aligned—especially when both materials share one site."
        image="/images/23-process-fabricate.jpg"
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.processList} ref={steps}>
            {processSteps.map((step, i) => (
              <article key={step.title} className={styles.processItem} data-plate>
                <SmartImage
                  src={step.image}
                  alt={step.title}
                  aspect="1/1"
                  tone={i % 2 ? 'wood' : 'steel'}
                />
                <div>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                  <ul className={styles.bullets}>
                    {i === 0 && (
                      <>
                        <li>Opening widths, heights, and diagonals</li>
                        <li>Wall type, levels, and access for install</li>
                        <li>Photos for remote estimate when needed</li>
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <li>Material and finish recommendations</li>
                        <li>Hardware and automation notes if required</li>
                        <li>Written quote before cutting begins</li>
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <li>Cut lists and weld schedules</li>
                        <li>Joinery and finish curing time</li>
                        <li>QC check before leaving the bay</li>
                      </>
                    )}
                    {i === 3 && (
                      <>
                        <li>Fixing, alignment, and swing tests</li>
                        <li>Touch-up and care guidance</li>
                        <li>Handover with remaining snags listed</li>
                      </>
                    )}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.band} ref={extra}>
        <div className={`container ${styles.twoCol}`}>
          <div>
            <p className="eyebrow">Dual-trade jobs</p>
            <h2 data-grain>When steel and timber share a deadline</h2>
            <p data-grain>
              Shared measures mean shared calendars. We sequence welding and woodwork so installs
              do not block each other—gate frames before door hanging, stair steel before tread
              fitting, grill interfaces before final window finish.
            </p>
          </div>
          <div>
            <p className="eyebrow">What you provide</p>
            <h2 data-grain>Simple inputs. Precise outputs.</h2>
            <p data-grain>
              Photos, rough sizes, architect drawings, or a site visit—any of these start the
              process. The more accurate the opening data, the tighter the fabrication and the
              cleaner the install day.
            </p>
            <Link to="/contact" className="btn btn-ember" style={{ marginTop: '1.25rem' }}>
              Begin with a measure
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
