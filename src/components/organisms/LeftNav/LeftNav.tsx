// This component is an Organism because it composes navigation items (molecules/atoms)
// into a left-side navigation panel that structures page-level navigation.
import React from 'react'
import './LeftNav.css'

type NavItem = {
  id: string
  label: string
  href?: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', href: '#' },
  { id: 'getting-started', label: 'Getting Started', href: '#' },
  { id: 'components', label: 'Components', href: '#' },
  { id: 'tokens', label: 'Design Tokens', href: '#' },
  { id: 'guidelines', label: 'Guidelines', href: '#' },
]

export default function LeftNav() {
  return (
    <nav className="left-nav__root" aria-label="Left navigation">
      <ul className="left-nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="left-nav__item">
            <a className={`left-nav__link ${item.id === 'overview' ? 'left-nav__link--active' : ''}`} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
