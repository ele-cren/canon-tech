import React from 'react'
import Navbar from '../components/Navbar'

const Register = (props) => {
  return (
    <>
      <Navbar path={props.location.pathname} />
      <h1>Register Page</h1>
    </>
  )
}

export default Register