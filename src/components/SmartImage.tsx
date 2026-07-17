import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'
import { img, PREFER_LOCAL, remoteImages } from '../data/images'
import styles from './SmartImage.module.css'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  aspect?: '16/9' | '4/3' | '1/1' | '3/4'
  tone?: 'steel' | 'wood' | 'ember'
}

export function SmartImage({
  src = '',
  alt,
  aspect = '16/9',
  tone = 'steel',
  className = '',
  ...rest
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(() => img(src))
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const triedFallback = useRef(false)
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setCurrentSrc(img(src))
    setFailed(false)
    setLoaded(false)
    triedFallback.current = false
  }, [src])

  useEffect(() => {
    const el = ref.current
    if (el?.complete && el.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [currentSrc])

  function handleError() {
    if (triedFallback.current) {
      setFailed(true)
      return
    }
    triedFallback.current = true
    const remote = remoteImages[src]
    if (PREFER_LOCAL && remote && currentSrc !== remote) {
      setCurrentSrc(remote)
      setLoaded(false)
      return
    }
    if (!PREFER_LOCAL && src && currentSrc !== src) {
      setCurrentSrc(src)
      setLoaded(false)
      return
    }
    setFailed(true)
  }

  return (
    <div
      className={`${styles.wrap} ${styles[tone]} ${className}`}
      style={{ aspectRatio: aspect }}
      data-loaded={loaded || failed ? undefined : undefined}
    >
      {!failed && currentSrc ? (
        <img
          ref={ref}
          src={currentSrc}
          alt={alt}
          className={`${styles.img} ${loaded ? styles.imgVisible : styles.imgPending}`}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          decoding="async"
          {...rest}
        />
      ) : null}
      {!loaded && !failed ? <div className={styles.skeleton} aria-hidden /> : null}
      {failed ? (
        <div className={styles.fallback}>
          <span className={styles.mark} />
          <span className={styles.caption}>{alt || 'Forge & Timber'}</span>
        </div>
      ) : null}
    </div>
  )
}
