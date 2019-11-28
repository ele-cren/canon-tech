import React from 'react'
import Logo from '../assets/pictures/techCanonLogo.png'

const Navbar = () => {
  return (
    <div class="Navbar__container">
      <div class="Navbar__main-container">
        <img class="Navbar__logo" src={Logo} alt="Logo" />
        <div class="Navbar__btn-container">
          <button className="Navbar__btn Navbar__btn-blue1">Inscription</button>
          <button className='Navbar__btn Navbar__btn-blue2'>Connexion</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
