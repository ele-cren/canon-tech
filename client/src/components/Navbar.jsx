import React, { useEffect, useState } from 'react'
import Logo from '../assets/pictures/techCanonLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Navbar = () => {
  const [isMobile, setMobile] = useState(false)
  const [isMenuOpened, setMenu] = useState(false)
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    updateWidth()
    window.addEventListener('resize', () => updateWidth())
    return () => {
      window.removeEventListener('resize', () => updateWidth())
    }
  }, [])

  useEffect(() => {
    if (width <= 465) {
      if (!isMobile) {
        setMobile(true)
      }
    } else {
      if (isMobile) {
        setMobile(false)
      }
      if (isMenuOpened) {
        setMenu(false)
      }
    }
  })

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  return (
    <>
      <div className="Navbar__container">
        <div className="Navbar__main-container">
          <img className="Navbar__logo" src={Logo} alt="Logo" />
          <nav className="Navbar__btn-container">
            <Link to="/register" className={classNames('Navbar__btn', 'Navbar__btn-blue1', { hidden: isMobile })}>Inscription</Link>
            <Link to="/login" className={classNames('Navbar__btn', 'Navbar__btn-blue2', { hidden: isMobile })}>Connexion</Link>
            <button onClick={() => setMenu(!isMenuOpened)} className={classNames('Navbar__bars-btn', { hidden: !isMobile })}><FontAwesomeIcon icon={faBars} /></button>
          </nav>
        </div>
      </div>
      <nav className={classNames('Navbar__menu-mobile', { hidden: !isMenuOpened })}>
        <ul>
          <li><Link onClick={() => setMenu(false)} className="Navbar__menu-link" to="/register">Inscription</Link></li>
          <li><Link onClick={() => setMenu(false)} className="Navbar__menu-link" to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
