import React from 'react'
import OAuthForm from '../../components/Auth/OAuthForm'
import FormSeparator from '../../components/Auth/FormSeparator'
import LoginForm from '../../components/Auth/LoginForm'
import { tryLogin } from '../../actions/userActions/loginActions'
import { connect } from 'react-redux'

const Login = (props) => {
  const logIn = (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    props.logIn(data)
  }
  return (
    <div className="Login__container">
      <h2 className="Login__title font-roboto">Connectez-vous sur TechCanon</h2>
      <OAuthForm isRegister={false} />
      <FormSeparator />
      <LoginForm logIn={ logIn } />
    </div>
  )
}

const mapStateToProps = state => state

const mapDispatchToProps = {
  logIn: tryLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)