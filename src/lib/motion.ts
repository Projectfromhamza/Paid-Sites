import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Clear SPA leftovers so content never stays dim/invisible after route change */
export function resetMotion() {
  ScrollTrigger.getAll().forEach((t) => t.kill())
  const sel =
    '[data-wipe],[data-grain],[data-plate],[data-step],[data-block],[data-ledger],[data-rise],[data-reveal],[data-page]'
  document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
    gsap.killTweensOf(el)
    gsap.set(el, {
      clearProps: 'all',
      opacity: 1,
      visibility: 'visible',
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: 'none',
      clipPath: 'none',
    })
  })
}

function finishVisible(targets: gsap.TweenTarget) {
  gsap.set(targets, {
    clearProps: 'clipPath,transform,filter,visibility',
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: 'none',
    visibility: 'visible',
  })
}

export function forgeWipe(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return
  if (prefersReducedMotion()) {
    finishVisible(els)
    return
  }
  return gsap.fromTo(
    els,
    { y: 22, opacity: 0.35 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.07,
      ease: 'power3.out',
      ...vars,
      onComplete: () => finishVisible(els),
    }
  )
}

export function plateStack(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return
  if (prefersReducedMotion()) {
    finishVisible(els)
    return
  }
  return gsap.fromTo(
    els,
    { y: 36, opacity: 0.4 },
    {
      y: 0,
      opacity: 1,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power3.out',
      ...vars,
      onComplete: () => finishVisible(els),
    }
  )
}

export function grainSweep(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return
  if (prefersReducedMotion()) {
    finishVisible(els)
    return
  }
  return gsap.fromTo(
    els,
    { y: 16, opacity: 0.4 },
    {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.05,
      ease: 'power2.out',
      ...vars,
      onComplete: () => finishVisible(els),
    }
  )
}

export function sparksLine(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  if (prefersReducedMotion()) return
  const els = gsap.utils.toArray(targets) as SVGGeometryElement[]
  els.forEach((el) => {
    const len = el.getTotalLength?.() ?? 200
    gsap.set(el, { strokeDasharray: len, strokeDashoffset: len })
  })
  return gsap.to(els, {
    strokeDashoffset: 0,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.1,
    ...vars,
  })
}

export function ledgerRise(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return
  if (prefersReducedMotion()) {
    finishVisible(els)
    return
  }
  return gsap.fromTo(
    els,
    { y: 18, opacity: 0.4 },
    {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.06,
      ease: 'power3.out',
      ...vars,
      onComplete: () => finishVisible(els),
    }
  )
}

export function scrollReveal(
  trigger: Element | string,
  animation: () => gsap.core.Tween | gsap.core.Timeline | void,
  start = 'top 90%'
) {
  const el = typeof trigger === 'string' ? document.querySelector(trigger) : trigger
  if (!el) return

  let ran = false
  const run = () => {
    if (ran) return
    ran = true
    animation()
  }

  if (prefersReducedMotion()) {
    run()
    return
  }

  const st = ScrollTrigger.create({
    trigger: el,
    start,
    once: true,
    onEnter: run,
  })

  requestAnimationFrame(() => {
    ScrollTrigger.refresh()
    const top = (el as Element).getBoundingClientRect().top
    if (top < window.innerHeight * 0.95) {
      run()
      st.kill()
    }
  })

  window.setTimeout(() => {
    run()
    const nodes = (el as Element).querySelectorAll<HTMLElement>(
      '[data-plate],[data-grain],[data-wipe],[data-step],[data-block],[data-reveal],[data-rise],[data-ledger]'
    )
    nodes.forEach((n) => finishVisible(n))
  }, 700)
}

export function pageEnter(container: Element | null) {
  if (!container) return
  if (prefersReducedMotion()) {
    gsap.set(container, { opacity: 1, y: 0, filter: 'none', clearProps: 'all' })
    return
  }
  gsap.fromTo(
    container,
    { opacity: 0.55, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => gsap.set(container, { clearProps: 'all', opacity: 1 }),
    }
  )
}

export { gsap, ScrollTrigger }
