import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <>
      <form className="LoginForm__form">
        <label className="LoginForm__label" htmlFor="email">Email</label>
        <input className="LoginForm__input" type="email" name="email" />
        <label className="LoginForm__label" htmlFor="password">Mot de passe</label>
        <input className="LoginForm__input" type="password" name="password" />
        <div className="LoginForm__forgot-container">
          <Link to="/" className="LoginForm__forgot-text font-montserrat">Mot de passe oublié ?</Link>
        </div>
        <div className="LoginForm__btn-container">
          <input className="LoginForm__connect-btn" type="submit" value="Connexion" />
        </div>
      </form>
      <div className="LoginForm__register-container font-montserrat">
        <div>Pas encore inscrit ? <Link to="/register" className="LoginForm__register-txt">Inscrivez-vous</Link></div>
      </div>
    </>
  )
}

export default LoginForm