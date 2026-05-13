import React from 'react'
import './Notification.css'

type Props = {
  title: string
  message: string
  variant?: 'success' | 'default' | 'error' | 'warning'
  onClose?: () => void
}

export default function Notification({ title, message, variant = 'success', onClose }: Props) {
  return (
    <div className={`notification notification--${variant}`}>
      <div className="notification__icon">
        {variant === 'success' ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : variant === 'error' || variant === 'warning' ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4.5V7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="7" cy="9.5" r="0.8" fill="currentColor"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        )}
      </div>
      <div className="notification__body">
        <p className="notification__title">{title}</p>
        <p className="notification__message">{message}</p>
      </div>
      {onClose && (
        <button className="notification__close" onClick={onClose} aria-label="Dismiss">
          ×
        </button>
      )}
    </div>
  )
}
