import { Link } from 'react-router-dom'
import { site, weldingServices, woodServices } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.tag}>{site.tagline}</p>
          <p className={styles.blurb}>
            Dual-trade workshop: structural and architectural welding alongside doors, windows,
            cabinets, and custom joinery-measured, fabricated, and installed as one craft.
          </p>
        </div>

        <div>
          <p className={styles.head}>Welding</p>
          <ul className={styles.list}>
            {weldingServices.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/welding/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.head}>Woodwork</p>
          <ul className={styles.list}>
            {woodServices.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/woodwork/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.head}>Visit</p>
          <ul className={styles.meta}>
            <li>{site.address}</li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>{site.city}</li>

            <li>{site.hours.weekdays}</li>
            <li>{site.hours.sunday}</li>
          </ul>
          <div className={styles.links}>
            <Link to="/reviews">Reviews</Link>
            <Link to="/process">Process</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
