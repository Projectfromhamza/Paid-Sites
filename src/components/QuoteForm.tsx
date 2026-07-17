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
    const phone = String(data.get('phone') || '')
    const message = String(data.get('message') || '')
    const text = encodeURIComponent(
      `Hello ${site.name}!\n\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    )
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, '_blank')
    setSent(true)
  }

  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello ' + site.name + ', I would like to get in touch.')}`

  return (
    <div className={styles.panel} ref={root}>
      <div className={styles.head}>
        <p className={styles.headTitle}>Contact</p>
        <p className={styles.headSub}>Tell us what you need - we reply with next steps.</p>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.field} data-ledger>
          <span className={styles.icon} aria-hidden />
          <input name="name" required placeholder="Your name" autoComplete="name" />
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
          Send via WhatsApp
        </button>
        {sent ? <p className={styles.note}>Opening WhatsApp…</p> : null}
      </form>

      <a href={wa} className={`btn btn-walnut ${styles.secondary}`} target="_blank" rel="noreferrer">
        WhatsApp us directly
      </a>
    </div>
  )
}
