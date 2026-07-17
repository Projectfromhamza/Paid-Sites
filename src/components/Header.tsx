import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site'
import styles from './Header.module.css'

type NavItem = { to: string; label: string; end?: boolean }

const leftLinks: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/welding', label: 'Welding' },
  { to: '/woodwork', label: 'Woodwork' },
]

const rightLinks: NavItem[] = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const drawerLinks: NavItem[] = [
  ...leftLinks,
  ...rightLinks,
  { to: '/reviews', label: 'Reviews' },
  { to: '/process', label: 'Process' },
  { to: '/faq', label: 'FAQ' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
      <div className={styles.shell}>
        <a href={site.phoneHref} className={styles.callDesktop}>
          Call us · {site.phone}
        </a>

        <div className={styles.bar}>
          <nav className={styles.left} aria-label="Primary left">
            {leftLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
            <img
              src="/images/04-logo.svg"
              alt=""
              className={styles.logoImg}
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <span className={styles.brandText}>
              <span className={styles.brandName}>{site.name}</span>
              <span className={styles.brandTag}>{site.tagline}</span>
            </span>
          </Link>

          <nav className={styles.right} aria-label="Primary right">
            {rightLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.mobileActions}>
            <a href={site.phoneHref} className={styles.callMobile} aria-label="Call us">
              Call
            </a>
            <button
              type="button"
              className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <a href={site.phoneHref} className={styles.drawerCall}>
          {site.phone}
        </a>
        <nav className={styles.drawerNav}>
          {drawerLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
