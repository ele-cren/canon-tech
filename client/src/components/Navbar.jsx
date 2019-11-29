import React, { useEffect, useState } from 'react'
import Logo from '../assets/pictures/techCanonLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Navbar = () => {
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    checkWindowSize()
    window.addEventListener('resize', checkWindowSize)
    return () => {
      window.removeEventListener('resize', checkWindowSize)
    }
  }, [])

  const checkWindowSize = () => {
    if (window.innerWidth <= 465) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  return (
    <>
      <div className="Navbar__container">
        <div className="Navbar__main-container">
          <img className="Navbar__logo" src={Logo} alt="Logo" />
          <nav className="Navbar__btn-container">
            <Link to="/register" className={classNames('Navbar__btn', 'Navbar__btn-blue1', { hidden: isMobile })}>Inscription</Link>
            <Link to="/login" className={classNames('Navbar__btn', 'Navbar__btn-blue2', { hidden: isMobile })}>Connexion</Link>
            <button className={classNames('Navbar__bars-btn', { hidden: !isMobile })}><FontAwesomeIcon icon={faBars} /></button>
          </nav>
        </div>
      </div>
      <nav className="Navbar__menu-mobile">
        <ul>
          <li>Inscription</li>
          <li>Connexion</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
