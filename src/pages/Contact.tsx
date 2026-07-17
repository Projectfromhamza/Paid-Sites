import { useEffect, useRef } from 'react'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'
import { site } from '../data/site'
import { ledgerRise, scrollReveal } from '../lib/motion'
import styles from './Content.module.css'

export function Contact() {
  const panel = useRef<HTMLElement>(null)

  useEffect(() => {
    if (panel.current) {
      scrollReveal(panel.current, () => {
        ledgerRise(panel.current!.querySelectorAll('[data-rise]'))
      })
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote or book a measure"
        lead="Tell us what you need fabricated or repaired. Include sizes or invite us to the site-accuracy starts the job well."
        image="/images/01-hero.jpg"
        compact
      />

      <section className={styles.section} ref={panel}>
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.contactInfo} data-rise>
            <p className="eyebrow">Workshop</p>
            <h2>Visit or write</h2>
            <ul className={styles.metaList}>
              <li>
                <span>Contact</span>
                <strong>{site.contactName}</strong>
              </li>
              <li>
                <span>Address</span>
                <strong>{site.address}</strong>
              </li>
              <li>
                <span>Phone</span>
                <strong>
                  <a href={site.phoneHref}>{site.phone}</a>
                </strong>
              </li>
              <li>
                <span>WhatsApp</span>
                <strong>
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">{site.phone}</a>
                </strong>
              </li>
              <li>
                <span>City</span>
                <strong>{site.city}</strong>
              </li>

              <li>
                <span>Hours</span>
                <strong>
                  {site.hours.weekdays}
                  <br />
                  {site.hours.sunday}
                </strong>
              </li>
            </ul>
            <div className={styles.map} data-rise>
              <iframe
                title="Workshop map"
                src="https://maps.google.com/maps?q=Pakistan&t=&z=6&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className={styles.contactForm} data-rise>
            <h2>Send details</h2>
            <p>
              Prefer WhatsApp? Use the button under the form. For complex jobs, a site measure is
              the fastest path to a firm quote.
            </p>
            <QuoteForm animate={false} />
          </div>
        </div>
      </section>
    </>
  )
}
