import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <header className="navbar__root">
      <div className="navbar__brand">
        <span className="navbar__logo">◆</span>
        <span className="navbar__name">Emotion Design System</span>
        <span className="navbar__version">v0.3.0</span>
      </div>
      <nav className="navbar__links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `navbar__link${isActive ? ' navbar__link--active' : ''}`
          }
        >
          Components
        </NavLink>
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            `navbar__link${isActive ? ' navbar__link--active' : ''}`
          }
        >
          Documentation
        </NavLink>
        <NavLink
          to="/releases"
          className={({ isActive }) =>
            `navbar__link${isActive ? ' navbar__link--active' : ''}`
          }
        >
          Releases
        </NavLink>
      </nav>
    </header>
  )
}
