import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const texts = require('../../localization/messages.json')

const RegisterForm = (props) => {
  return (
    <>
      <form className="RegisterForm__form" onSubmit={props.register} >
        <label className="RegisterForm__label" htmlFor="email">Email</label>
        <input className="RegisterForm__input" type="email" name="email" />
        <span className="RegisterForm__error-message">{texts[props.errors.email]}</span>
        <label className="RegisterForm__label" htmlFor="username">Pseudo</label>
        <input className="RegisterForm__input" type="text" name="username" />
        <span className="RegisterForm__error-message">{texts[props.errors.username]}</span>
        <label className="RegisterForm__label" htmlFor="password">Mot de passe</label>
        <input className="RegisterForm__input" type="password" name="password" />
        <span className="RegisterForm__error-message">{texts[props.errors.password]}</span>
        <label className="RegisterForm__label" htmlFor="confirm">Confirmation</label>
        <input className="RegisterForm__input" type="password" name="confirm" />
        <span className="RegisterForm__error-message">{texts[props.errors.confirm]}</span>
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

const mapStateToProps = state => {
  return {
    errors: state.errors.errors
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
