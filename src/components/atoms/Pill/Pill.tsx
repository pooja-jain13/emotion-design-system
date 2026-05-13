import React from 'react'
import './Pill.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'hover' | 'disabled'
}

export default function Pill({ variant = 'primary', children, ...rest }: Props) {
  return (
    <button className={`pill__root pill__root--${variant}`} {...rest}>
      {children}
    </button>
  )
}
