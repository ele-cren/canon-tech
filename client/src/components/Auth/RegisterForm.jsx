import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <>
      <form className="RegisterForm__form">
        <label className="RegisterForm__label" htmlFor="Register-email">Email</label>
        <input className="RegisterForm__input" type="email" name="Register-email" />
        <label className="RegisterForm__label" htmlFor="Register-pseudo">Pseudo</label>
        <input className="RegisterForm__input" type="text" name="Register-pseudo" />
        <label className="RegisterForm__label" htmlFor="Register-password">Mot de passe</label>
        <input className="RegisterForm__input" type="password" name="Register-password" />
        <label className="RegisterForm__label" htmlFor="Register-password-confirm">Confirmation</label>
        <input className="RegisterForm__input" type="password" name="Register-password-confirm" />
        <div className="RegisterForm__btn-container">
          <input className="RegisterForm__register-btn" type="submit" value="Inscription" />
        </div>
      </form>
      <div className="RegisterForm__login-container font-montserrat">
        <div>Déjà inscrit ? <Link to="/login" className="RegisterForm__login-txt">Connectez-vous</Link></div>
      </div>
    </>
  )
}

export default RegisterForm