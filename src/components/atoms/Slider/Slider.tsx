import React, { useState } from 'react'
import './Slider.css'

type Props = {
  value: number
  min?: number
  max?: number
  disabled?: boolean
  forceHover?: boolean
  forceFocus?: boolean
  onChange?: (value: number) => void
}

export default function Slider({ value, min = 0, max = 100, disabled = false, forceHover = false, forceFocus = false, onChange }: Props) {
  const [showTooltip, setShowTooltip] = useState(false)
  const pct = ((value - min) / (max - min)) * 100
  const tooltipVisible = (showTooltip || forceHover || forceFocus) && !disabled

  return (
    <div
      className="slider__root"
      style={{ '--pct': `${pct}%` } as React.CSSProperties}
    >
      {tooltipVisible && (
        <div className="slider__tooltip" style={{ left: `${pct}%` }}>
          {value}
        </div>
      )}
      <input
        type="range"
        className={`slider__input${forceHover ? ' slider__input--hovered' : ''}${forceFocus ? ' slider__input--focused' : ''}`}
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        onChange={e => onChange?.(Number(e.target.value))}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      />
    </div>
  )
}
