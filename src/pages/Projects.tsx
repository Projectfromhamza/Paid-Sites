import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SmartImage } from '../components/SmartImage'
import { projects } from '../data/site'
import { plateStack, scrollReveal } from '../lib/motion'
import styles from './Content.module.css'

const extended = [
  ...projects,
  {
    title: 'Ornamental Gate Study',
    trade: 'Welding',
    summary:
      'Scrollwork driveway gate with matching latch detail—powder-coated for outdoor exposure and daily swing cycles.',
    image: '/images/27-carousel-1.jpg',
  },
  {
    title: 'Double Leaf Entrance',
    trade: 'Woodwork',
    summary:
      'Paired hardwood doors with consistent reveal lines, installed with a matching frame package.',
    image: '/images/28-carousel-2.jpg',
  },
  {
    title: 'Stair Core',
    trade: 'Welding',
    summary:
      'Open steel staircase stringers prepared for timber treads—rise and run checked before weld-out.',
    image: '/images/29-carousel-3.jpg',
  },
  {
    title: 'Built-in Wardrobe Run',
    trade: 'Woodwork',
    summary:
      'Full-height wardrobe carcasses with soft-close hardware and face finishes matched to the room palette.',
    image: '/images/30-carousel-4.jpg',
  },
]

export function Projects() {
  const grid = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (grid.current) {
      scrollReveal(grid.current, () => plateStack(grid.current!.querySelectorAll('[data-plate]')))
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that leaves the bay"
        lead="A selection of completed and documented jobs—gates beside doors, railings with timber caps, and storage that sits square on uneven floors."
        image="/images/18-project-1.jpg"
      />

      <section className={styles.section}>
        <div className="container">
          <p className={styles.prose}>
            Every project begins with a measure. Photos here represent the kind of dual-trade and
            single-trade work we deliver daily. When you send your openings, we map a similar path:
            design approval, fabrication, finish, install.
          </p>
          <div className={styles.projectGrid} ref={grid}>
            {extended.map((p, i) => (
              <article key={p.title} className={styles.projectCard} data-plate>
                <SmartImage src={p.image} alt={p.title} aspect="16/9" tone={i % 2 ? 'wood' : 'steel'} />
                <div className={styles.projectBody}>
                  <p className="eyebrow">{p.trade}</p>
                  <h2>{p.title}</h2>
                  <p>{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-ember">
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
