import { useEffect, useRef, useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { ledgerRise } from '../lib/motion'
import styles from './QuoteForm.module.css'

export function QuoteForm({ animate = true }: { animate?: boolean }) {
  const [sent, setSent] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate || !root.current) return
    const fields = root.current.querySelectorAll('[data-ledger]')
    ledgerRise(fields, { delay: 0.35 })
  }, [animate])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const message = String(data.get('message') || '')
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(site.name + ' — Contact')}&body=${body}`
    setSent(true)
  }

  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello ' + site.name + ', I would like to get in touch.')}`

  return (
    <div className={styles.panel} ref={root}>
      <div className={styles.head}>
        <p className={styles.headTitle}>Contact</p>
        <p className={styles.headSub}>Tell us what you need — we reply with next steps.</p>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.field} data-ledger>
          <span className={styles.icon} aria-hidden />
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label className={styles.field} data-ledger>
          <span className={styles.icon} aria-hidden />
          <input name="email" type="email" required placeholder="Your email" autoComplete="email" />
        </label>
        <label className={styles.field} data-ledger>
          <span className={styles.icon} aria-hidden />
          <input name="phone" type="tel" placeholder="Your phone (optional)" autoComplete="tel" />
        </label>
        <label className={styles.area} data-ledger>
          <textarea
            name="message"
            rows={3}
            required
            placeholder="How can we help? Gate, door, railing, cabinets…"
          />
        </label>
        <button type="submit" className={`btn btn-ember ${styles.submit}`} data-ledger>
          Send message
        </button>
        {sent ? <p className={styles.note}>Opening your email client…</p> : null}
      </form>

      <a href={wa} className={`btn btn-walnut ${styles.secondary}`} target="_blank" rel="noreferrer">
        WhatsApp us
      </a>
    </div>
  )
}
