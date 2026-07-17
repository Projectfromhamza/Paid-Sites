import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { prefersReducedMotion } from '../lib/motion'
import styles from './PageLoader.module.css'

export function PageLoader() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)
  const [boot, setBoot] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(false)
      setBoot(false)
      return
    }
    setVisible(true)
    const t = window.setTimeout(() => setVisible(false), boot ? 900 : 420)
    setBoot(false)
    return () => window.clearTimeout(t)
  }, [pathname])

  if (!visible) return null

  return (
    <div className={`${styles.loader} ${boot ? styles.boot : styles.route}`} aria-hidden>
      <div className={styles.bar} />
      <div className={styles.mark}>
        <span className={styles.line} />
        <p>Forge & Timber</p>
      </div>
    </div>
  )
}
