import React from 'react'
import DownloadButton from './DownloadButton'
import './DownloadButton.css'

export default function DownloadButtonExamples() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 24 }}>
      <DownloadButton href="/assets/hero.png" filename="hero.png" variant="primary">
        Primary
      </DownloadButton>

      <DownloadButton href="/assets/hero.png" filename="hero.png" variant="secondary">
        Secondary
      </DownloadButton>

      <DownloadButton href="/assets/hero.png" filename="hero.png" variant="ghost">
        Ghost
      </DownloadButton>
    </div>
  )
}
