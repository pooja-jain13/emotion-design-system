import React, { useEffect, useRef, useState } from 'react'
import './Carousel.css'

type SlideItem = {
  image: string
  title?: string
  caption?: string
}

type Props = {
  images?: string[]
  items?: SlideItem[]
  autoPlay?: boolean
  interval?: number
}

export default function Carousel({ images = [], items = [], autoPlay = false, interval = 4000 }: Props) {
  const slides: SlideItem[] = (items && items.length > 0) ? items : images.map((src) => ({ image: src }))
  const [index, setIndex] = useState(0)
  const len = slides.length
  const timer = useRef<number | null>(null)
  const paused = useRef(false)

  useEffect(() => {
    if (!autoPlay || len <= 1) return
    function tick() {
      setIndex((i) => (i + 1) % len)
    }
    timer.current = window.setInterval(() => { if (!paused.current) tick() }, interval)
    return () => { if (timer.current) window.clearInterval(timer.current) }
  }, [autoPlay, interval, len])

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(len - 1, i)))

  return (
    <div className="carousel" onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
      <div className="carousel__viewport">
        <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div className="carousel__slide" key={i} aria-hidden={i !== index}>
              <div className="carousel__card">
                <div className="carousel__figure">
                  <img src={slide.image} alt={slide.title ?? `Slide ${i + 1}`} className="carousel__image" />
                </div>
                {(slide.title || slide.caption) && (
                  <div className="carousel__content">
                    {slide.title && <h4 className="carousel__title">{slide.title}</h4>}
                    {slide.caption && <p className="carousel__caption">{slide.caption}</p>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel__dots" role="tablist" aria-label="Carousel navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}
