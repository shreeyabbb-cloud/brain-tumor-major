import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const navItems = [
  { path: '/', label: 'Overview' },
  { path: '/pipeline', label: 'Pipeline' },
  { path: '/analysis', label: 'Analysis' },
  { path: '/federated-learning', label: 'Federated Learning' },
  { path: '/privacy', label: 'Privacy' },
  { path: '/results', label: 'Results' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar" id="main-nav">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
              <circle cx="14" cy="14" r="2" fill="currentColor" />
              <path d="M14 2V8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <path d="M14 20V26" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <path d="M2 14H8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <path d="M20 14H26" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            </svg>
          </span>
          <div className="navbar-brand-text">
            <span className="navbar-title">NeuroFed</span>
            <span className="navbar-subtitle">Research Dashboard</span>
          </div>
        </NavLink>

        <button
          className={`navbar-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
