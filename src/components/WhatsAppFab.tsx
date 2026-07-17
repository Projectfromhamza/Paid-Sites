import { site } from '../data/site'
import styles from './WhatsAppFab.module.css'

const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Hello ' + site.name + ', I would like to get a quote.'
)}`

export function WhatsAppFab() {
  return (
    <a
      href={wa}
      className={styles.fab}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      id="whatsapp-fab"
    >
      {/* WhatsApp SVG icon */}
      <svg
        className={styles.fabIcon}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.74 5.489 2.035 7.8L0 32l8.418-2.008A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.258 22.508c-.344.968-2.016 1.858-2.76 1.973-.707.11-1.594.156-2.57-.16--.593-.192-1.354-.448-2.33-.878-4.1-1.77-6.774-5.91-6.979-6.18-.205-.268-1.672-2.225-1.672-4.244 0-2.018 1.058-3.012 1.434-3.422.375-.41.819-.513 1.092-.513.273 0 .546.003.785.015.252.012.59-.096.924.705.344.82 1.168 2.84 1.27 3.044.103.205.172.445.034.718-.138.273-.206.444-.41.684-.205.24-.43.536-.615.72-.205.204-.418.425-.18.835.24.41 1.063 1.754 2.283 2.841 1.567 1.4 2.89 1.832 3.3 2.037.41.205.648.172.888-.103.24-.274 1.024-1.196 1.298-1.606.274-.41.547-.342.922-.205.376.137 2.386 1.126 2.796 1.33.41.205.683.307.785.478.103.172.103.993-.24 1.96z" />
      </svg>
      <span className={styles.fabLabel}>WhatsApp Us</span>
    </a>
  )
}
