import React, { useEffect } from 'react'
import Logo from '../assets/pictures/techCanonLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  useEffect(() => {
    //checkWindowSize()
    //window.addEventListener('resize', checkWindowSize)
    return () => {
      //window.removeEventListener('resize', checkWindowSize)
    }
  }, [])

  const updateLoginBtns = (display = true) => {
    [...document.getElementsByClassName('Navbar__btn')].forEach((btn) => {
      if (!btn.classList.contains('hidden') && !display) {
        btn.classList.add('hidden')
      } else if (btn.classList.contains('hidden') && display) {
        btn.classList.remove('hidden')
      }
    })
  }

  const updateBarsBtn = (display = true) => {
    [...document.getElementsByClassName('Navbar__bars-btn')].forEach((btn) => {
      if (!btn.classList.contains('hidden') && !display) {
        btn.classList.add('hidden')
      } else if (btn.classList.contains('hidden') && display) {
        btn.classList.remove('hidden')
      }
    })
  }

  const checkWindowSize = () => {
    if (window.innerWidth <= 465) {
      updateLoginBtns(false)
      updateBarsBtn(true)
    } else {
      updateBarsBtn(false)
      updateLoginBtns(true)
    }
  }

  return (
    <div className="Navbar__container">
      <div className="Navbar__main-container">
        <img className="Navbar__logo" src={Logo} alt="Logo" />
        <nav className="Navbar__btn-container">
          <Link to="/register" className="hidden Navbar__btn Navbar__btn-blue1">Inscription</Link>
          <Link to="/login" className='hidden Navbar__btn Navbar__btn-blue2'>Connexion</Link>
          <button className="Navbar__bars-btn" ><FontAwesomeIcon icon={faBars} /></button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
