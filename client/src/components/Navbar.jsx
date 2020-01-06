import React, { useEffect, useState } from 'react'
import Logo from '../assets/pictures/techCanonLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import Avatar from '../assets/pictures/women 5.png'

const Navbar = (props) => {
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
  }, [isMobile, isMenuOpened, width])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  const pathName = useLocation().pathname
  const isRegister = pathName === '/register'
  const isLogin = pathName === '/login'

  const notLoggedBtns = (
    <>
      {isLogin || (!isRegister && !isLogin) ? <Link to="/register" className={classNames('Navbar__btn', 'Navbar__btn-blue1', { hidden: isMobile })}>Inscription</Link> : ''}
      {isRegister || (!isLogin && !isRegister) ? <Link to="/login" className={classNames('Navbar__btn', 'Navbar__btn-blue2', { hidden: isMobile })}>Connexion</Link> : ''}
    </>
  )

  const loggedBtns = (
    <>
      <Link to="/dashboard" className={classNames({ hidden: isMobile })}><img className="Navbar__avatar-btn" src={Avatar} /></Link>
      <Link to="/logout" className={classNames({ hidden: isMobile })}><FontAwesomeIcon className="Navbar__logout-btn" icon={faSignOutAlt} /></Link>
    </>
  )

  return (
    <>
      <div className="Navbar__container">
        <div className="Navbar__main-container">
          <Link to="/"><img className="Navbar__logo" src={Logo} alt="Logo" /></Link>
          <nav className="Navbar__btn-container">
            {props.logged ? loggedBtns : notLoggedBtns}
            <button onClick={() => setMenu(!isMenuOpened)} className={classNames('Navbar__bars-btn', { hidden: !isMobile })}><FontAwesomeIcon icon={faBars} /></button>
          </nav>
        </div>
      </div>
      <nav className={classNames('Navbar__menu-mobile', { hidden: !isMenuOpened })}>
        <ul>
          {!props.logged ? (
            <>
              {isLogin || (!isLogin && !isRegister) ? <li><Link onClick={() => setMenu(false)} className="Navbar__menu-link" to="/register">Inscription</Link></li> : ''}
              {isRegister || (!isLogin && !isRegister) ? <li><Link onClick={() => setMenu(false)} className="Navbar__menu-link" to="/login">Connexion</Link></li> : ''}
            </>
          ) : (
            <>
              <li><Link onClick={() => setMenu(false)} className="Navbar__menu-link" to="/dashboard">Profil</Link></li>
              <li><Link onClick={() => setMenu(false)} className="Navbar__menu-link" to="/logout">Déconnexion</Link></li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
