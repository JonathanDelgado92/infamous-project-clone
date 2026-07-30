'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { referenceImages } from '@/lib/store-data'

const SWIPE_DISTANCE = 48
const SWIPE_VELOCITY = 350
// 2.4s keeps the editorial rhythm alive without rushing the image transition.
const AUTOPLAY_DELAY = 2400

function circularDistance(index: number, activeIndex: number, total: number) {
  let distance = index - activeIndex
  if (distance > total / 2) distance -= total
  if (distance < -total / 2) distance += total
  return distance
}

export function StoppableVideos() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [stageWidth, setStageWidth] = useState(360)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const reducedMotion = useReducedMotion()
  const total = referenceImages.length

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const updateWidth = () => setStageWidth(stage.clientWidth || 360)
    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.35 })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  const goTo = (index: number) => setActiveIndex((index + total) % total)
  const move = useCallback((direction: -1 | 1) => {
    setActiveIndex((index) => (index + direction + total) % total)
  }, [total])

  const isAutoPlaying = isInView && !isHovered && !isInteracting && !reducedMotion

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = window.setInterval(() => move(1), AUTOPLAY_DELAY)
    return () => window.clearInterval(timer)
  }, [isAutoPlaying, move])

  const compact = stageWidth < 620
  const activeWidth = Math.min(stageWidth * (compact ? 0.58 : 0.54), 660)
  const inactiveWidth = compact ? Math.max(42, Math.min(62, activeWidth * 0.3)) : 120
  const activeHeight = compact ? 270 : 390
  const inactiveHeight = compact ? 238 : 318
  const transition = reducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 260, damping: 30, mass: 0.75 }

  return (
    <section className="media-stories section-padding scroll-trigger animate--slide-in" aria-labelledby="movement-title">
      <div className="section-heading">
        <h2 id="movement-title">MOVEMENT IN FORM</h2>
        <p>FASHION ISN&apos;T STATIC - IT MOVES, FLOWS, AND COMMANDS ATTENTION. WATCH SONDER IN MOTION - BOLD SILHOUETTES, STRUCTURED DRAPING, AND EFFORTLESS POWER, CAPTURED IN EVERY FRAME.</p>
      </div>

      <div className="coverflow-carousel">
        <motion.div
          ref={stageRef}
          className="coverflow-carousel__stage"
          role="region"
          aria-roledescription="carousel"
          aria-label="STORY 001 image carousel"
          tabIndex={0}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsInteracting(true)}
          onBlurCapture={() => setIsInteracting(false)}
          onDragStart={() => setIsInteracting(true)}
          onDragEnd={(_, info) => {
            if (info.offset.x <= -SWIPE_DISTANCE || info.velocity.x <= -SWIPE_VELOCITY) move(1)
            if (info.offset.x >= SWIPE_DISTANCE || info.velocity.x >= SWIPE_VELOCITY) move(-1)
            setIsInteracting(false)
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault()
              move(-1)
            }
            if (event.key === 'ArrowRight') {
              event.preventDefault()
              move(1)
            }
          }}
        >
          {referenceImages.map((image, index) => {
            const distance = circularDistance(index, activeIndex, total)
            const absoluteDistance = Math.abs(distance)
            const isActive = distance === 0
            const isRight = distance > 0
            const width = isActive ? activeWidth : inactiveWidth
            const height = isActive ? activeHeight : inactiveHeight
            const offset = isActive
              ? -activeWidth / 2
              : isRight
                ? activeWidth / 2 + 18 + (absoluteDistance - 1) * (inactiveWidth + 12)
                : -activeWidth / 2 - 18 - inactiveWidth - (absoluteDistance - 1) * (inactiveWidth + 12)

            return (
              <motion.button
                key={image}
                className="coverflow-carousel__slide"
                type="button"
                aria-label={`Show STORY 001 image ${index + 1} of ${total}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => goTo(index)}
                animate={{
                  x: offset,
                  y: -height / 2,
                  width,
                  height,
                  opacity: isActive ? 1 : absoluteDistance === 1 ? 0.62 : 0.3,
                  scale: isActive ? 1 : absoluteDistance === 1 ? 0.94 : 0.88,
                  filter: isActive ? 'brightness(1)' : 'brightness(0.58)',
                }}
                transition={transition}
                style={{ zIndex: total - absoluteDistance }}
              >
                <img src={image} alt={`STORY 001 editorial look ${index + 1}`} draggable="false" />
              </motion.button>
            )
          })}
        </motion.div>

        <div className="coverflow-carousel__controls">
          <button className="coverflow-carousel__arrow" type="button" aria-label="Previous image" onClick={() => move(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7" /></svg>
          </button>
          <p className="coverflow-carousel__counter" aria-live={isAutoPlaying ? 'off' : 'polite'}>
            <span className="visually-hidden">Image </span>{String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
          <button className="coverflow-carousel__arrow" type="button" aria-label="Next image" onClick={() => move(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 7 7-7 7" /></svg>
          </button>
        </div>
        <p className="coverflow-carousel__hint">{isAutoPlaying ? 'AUTO-PLAYING · DRAG OR SWIPE TO EXPLORE' : 'DRAG OR SWIPE TO EXPLORE'}</p>
      </div>
    </section>
  )
}
