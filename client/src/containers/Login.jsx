import React from 'react'
import OAuthForm from '../components/Login/OAuthForm'
import FormSeparator from '../components/FormSeparator'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
  return (
    <div className="Login__container">
      <h2 className="Login__title font-roboto">Connectez-vous sur TechCanon</h2>
      <OAuthForm />
      <FormSeparator />
      <LoginForm />
    </div>
  )
}

export default Login