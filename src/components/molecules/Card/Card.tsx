import React from 'react'
import './Card.css'

type Props = {
  title?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export default function Card({ title, children, footer }: Props) {
  return (
    <article className={`card ${typeof (arguments[0]) === 'object' && (arguments[0] as any).className ? (arguments[0] as any).className : ''}`}>
      {title && (
        <header className="card__header">
          <h3>{title}</h3>
        </header>
      )}

      <div className="card__body">{children}</div>

      {footer && <footer className="card__footer">{footer}</footer>}
    </article>
  )
}
