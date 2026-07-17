import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageLoader } from './PageLoader'
import { CustomCursor } from './CustomCursor'
import { WhatsAppFab } from './WhatsAppFab'
import { resetMotion, pageEnter, ScrollTrigger } from '../lib/motion'
import styles from './Layout.module.css'

export function Layout() {
  const { pathname } = useLocation()
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    resetMotion()
    window.scrollTo(0, 0)

    const frame = window.requestAnimationFrame(() => {
      pageEnter(stageRef.current)
      ScrollTrigger.refresh()
    })

    const safety = window.setTimeout(() => {
      const root = stageRef.current
      if (root) {
        root.style.opacity = '1'
        root.style.filter = 'none'
        root.querySelectorAll<HTMLElement>('[data-plate],[data-grain],[data-wipe],[data-step],[data-block],[data-reveal],[data-rise]').forEach((el) => {
          el.style.opacity = '1'
          el.style.filter = 'none'
          el.style.transform = 'none'
        })
      }
      ScrollTrigger.refresh()
    }, 800)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(safety)
    }
  }, [pathname])

  return (
    <div className="page">
      <PageLoader />
      <CustomCursor />
      <WhatsAppFab />
      <Header />
      <main className={`page-main ${styles.main}`}>
        <div className={styles.stage} ref={stageRef} data-page key={pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
