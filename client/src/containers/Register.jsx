import React from 'react'
import OAuthForm from '../components/OAuthForm'
import FormSeparator from '../components/FormSeparator'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div className="Register__container">
      <h2 className="Register__title font-roboto">Devenez membre de TechCanon</h2>
      <OAuthForm isRegister={true} />
      <FormSeparator />
      <RegisterForm />
    </div>
  )
}

export default Register