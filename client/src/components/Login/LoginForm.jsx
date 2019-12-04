import React from 'react'

const LoginForm = () => {
  return (
    <form className="LoginForm__form">
      <label className="LoginForm__label" htmlFor="login-email">Email</label>
      <input className="LoginForm__input" type="email" name="login-email" />
      <label className="LoginForm__label" htmlFor="login-password">Mot de passe</label>
      <input className="LoginForm__input" type="password" name="login-password" />
      <div className="LoginForm__btn-container">
        <input className="LoginForm__connect-btn" type="submit" value="Connexion" />
      </div>
    </form>
  )
}

export default LoginForm