import React from 'react'
import OAuthForm from '../../components/Auth/OAuthForm'
import FormSeparator from '../../components/Auth/FormSeparator'
import LoginForm from '../../components/Auth/LoginForm'

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