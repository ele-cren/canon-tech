import React from 'react'
import Logo from '../assets/pictures/techCanonLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div class="Navbar__container">
      <div class="Navbar__main-container">
        <img class="Navbar__logo" src={Logo} alt="Logo" />
        <div class="Navbar__btn-container">
          <button className="hidden Navbar__btn Navbar__btn-blue1">Inscription</button>
          <button className='hidden Navbar__btn Navbar__btn-blue2'>Connexion</button>
          <button className="Navbar__bars-btn" ><FontAwesomeIcon icon={faBars} /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
