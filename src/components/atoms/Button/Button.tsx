// This component is an Atom because it is a single, reusable UI element (a button).
import React from 'react'
import './Button.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary'
  startIcon?: React.ReactNode
}

export default function Button({ variant = 'primary', startIcon, children, ...rest }: Props) {
  const mod = variant === 'primary' ? 'button__root--primary' : variant === 'secondary' ? 'button__root--secondary' : 'button__root--tertiary'
  return (
    <button className={`button__root ${mod}`} {...rest}>
      {startIcon ? <span className="button__icon" aria-hidden>{startIcon}</span> : null}
      <span className="button__label">{children}</span>
    </button>
  )
}
