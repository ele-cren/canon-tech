import React from 'react'
import OAuthForm from '../components/Login/OAuthForm'
import FormSeparator from '../components/Login/FormSeparator'
import Navbar from "../components/Navbar"

const Login = (props) => {
  return (
    <>
      <Navbar path={props.location.pathname} />
      <div className="Login__container">
        <h2 className="Login__title font-roboto">Connectez-vous sur TechCanon</h2>
        <OAuthForm />
        <FormSeparator />
      </div>
    </>
  )
}

export default Login