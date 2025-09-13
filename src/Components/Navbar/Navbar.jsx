import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <span className='navbar-title'>
        <AnchorLink className='anchor-link' offset={70} href='#home'>portfolio</AnchorLink>
      </span>

      {/* Hamburger icon (mobile only) */}
      <div
        className='navbar-hamburger'
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <rect y="7" width="32" height="3" rx="1.5" fill="#637d9b"/>
          <rect y="14" width="32" height="3" rx="1.5" fill="#637d9b"/>
          <rect y="21" width="32" height="3" rx="1.5" fill="#637d9b"/>
        </svg>
      </div>

      {/* Nav menu (always rendered) */}
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {/* Close button (mobile only) */}
        <div
          className='navbar-close'
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <line x1="8" y1="8" x2="24" y2="24" stroke="#637d9b" strokeWidth="3" strokeLinecap="round" />
            <line x1="24" y1="8" x2="8" y2="24" stroke="#637d9b" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <li><AnchorLink className='anchor-link' offset={70} href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={70} href='#skills'>Skills</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={68} href='#projects'>Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
      </ul>
    </div>
  )
}

export default Navbar
