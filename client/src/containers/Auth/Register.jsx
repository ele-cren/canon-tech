import React, { useState } from 'react'
import OAuthForm from '../../components/Auth/OAuthForm'
import FormSeparator from '../../components/Auth/FormSeparator'
import RegisterForm from '../../components/Auth/RegisterForm'
import { registerUser } from '../../actions/userActions/registerActions.js'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import texts from '../../localization/messages.js'

const Register = (props) => {
const [redirect, setRedirect] = useState(false)
const [message, setMessage] = useState('')

const redirectCallback = () => {
  setMessage('LoginOk')
  setTimeout(() => {
    setRedirect(true)
  }, 2000);
}

const register = (e) => {
  e.preventDefault()
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
    confirm: e.target.confirm.value,
    username: e.target.username.value
  }
  props.registerUser(data, redirectCallback)
}

  return redirect ? <Redirect to="/login" /> : (
    <div className="Register__container">
      <h2 className="Register__title font-roboto">Devenez membre de TechCanon</h2>
      <OAuthForm isRegister={true} />
      <FormSeparator />
      <span className="Register__success-message">{texts[message]}</span>
      <RegisterForm message={message} register={register} />
    </div>
  )
}

 const mapStateToProps = state => state

 const mapDispatchToProps = {
   registerUser: registerUser
 }

export default connect(mapStateToProps, mapDispatchToProps)(Register)
