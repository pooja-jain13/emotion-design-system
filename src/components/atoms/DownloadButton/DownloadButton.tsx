// This component is an Atom because it is a single, reusable UI element (a button).
import React from 'react'
import './DownloadButton.css'

type Props = {
  href: string
  filename?: string
  ariaLabel?: string
  children?: React.ReactNode
}

export default function DownloadButton({ href, filename, ariaLabel, children = 'Download' }: Props) {
  return (
    <a
      className="button__root button__root--download"
      href={href}
      download={filename}
      aria-label={ariaLabel || String(children)}
      rel="noopener noreferrer"
    >
      <span className="button__icon" aria-hidden="true">
        {/* simple download chevron */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
          <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="button__label">{children}</span>
    </a>
  )
}
