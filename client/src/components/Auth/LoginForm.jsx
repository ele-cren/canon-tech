import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const texts = require('../../localization/messages.json')

const LoginForm = (props) => {
  return (
    <>
      <form className="LoginForm__form" onSubmit={ props.logIn } >
        <label className="LoginForm__label" htmlFor="email">Email</label>
        <input className="LoginForm__input" type="email" name="email" />
        <span className="LoginForm__error-message">{texts[props.errors.email]}</span>
        <label className="LoginForm__label" htmlFor="password">Mot de passe</label>
        <input className="LoginForm__input" type="password" name="password" />
        <span className="LoginForm__error-message">{texts[props.errors.password]}</span>
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

const mapStateToProps = state => {
  return {
    errors: state.errors.errors
  }
}

const mapDispathToProps = {}

export default connect(mapStateToProps, mapDispathToProps)(LoginForm)
