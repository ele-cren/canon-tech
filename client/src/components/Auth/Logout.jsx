import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { logOut } from '../../actions/userActions/loginActions.js'
import { connect } from 'react-redux'

const Logout = (props) => {
  useEffect(() => {
    props.logout()
  }, [props])
  return <Redirect to="/login" />
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout: logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
