import React from 'react'
import OAuthForm from '../components/OAuthForm'
import FormSeparator from '../components/FormSeparator'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className="Login__container">
      <h2 className="Login__title font-roboto">Connectez-vous sur TechCanon</h2>
      <OAuthForm isRegister={false} />
      <FormSeparator />
      <LoginForm />
    </div>
  )
}

export default Login