import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">Emotion</div>
        <nav className="nav__links" aria-label="Primary navigation">
          <a className="nav__link" href="#">Home</a>
          <a className="nav__link" href="#">Robots</a>
          <a className="nav__link" href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}
