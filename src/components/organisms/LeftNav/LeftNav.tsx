// This component is an Organism because it composes navigation items (molecules/atoms)
// into a left-side navigation panel that structures page-level navigation.
import './LeftNav.css'

type NavItem = {
  id: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'buttons', label: 'Buttons' },
  { id: 'cards', label: 'Cards' },
  { id: 'pills', label: 'Pills' },
  { id: 'slider', label: 'Slider' },
  { id: 'notification', label: 'Notification' },
]

type Props = {
  active?: string
  onSelect?: (id: string) => void
}

export default function LeftNav({ active = 'buttons', onSelect }: Props) {
  return (
    <nav className="left-nav__root" aria-label="Primary navigation">
      <ul className="left-nav__list" role="tablist">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="left-nav__item">
            <button
              role="tab"
              aria-selected={item.id === active}
              className={`left-nav__link ${item.id === active ? 'left-nav__link--active' : ''}`}
              onClick={() => onSelect?.(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
