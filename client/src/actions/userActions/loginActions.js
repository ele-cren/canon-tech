import { LOGIN, FETCHED, FETCHING, LOGOUT, CHECKED } from './userConsts'
import { showErrors, cleanErrors } from '../errorsActions/errorsActions'
import axios from 'axios'
import { API_URL } from '../../utils/utils'

export const tryLogin = (data) => {
  return async dispatch => {
    dispatch({ type: FETCHING })
    const response = await axios.post(API_URL + '/auth/login', {
      email: data.email,
      password: data.password
    })
    if (response.data.errors) {
      dispatch(showErrors(response.data.errors))
    } else {
      dispatch(logIn(response.data.user))
      dispatch(cleanErrors())
    }
    dispatch({ type: FETCHED })
  }
}

export const checkLogged = () => {
  return async dispatch => {
    dispatch({ type: FETCHING })
    const response = await axios.get(API_URL + '/auth/isAuthenticated')
    if (response.data.user) {
      dispatch(logIn(response.data.user))
    }
    dispatch({ type: FETCHED })
    dispatch({ type: CHECKED })
  }
}

export const logOut = () => {
  return async dispatch => {
    dispatch({ type: FETCHING })
    await axios.get(API_URL + '/auth/logout')
    dispatch({ type: LOGOUT })
    dispatch({ type: FETCHED })
  }
}

export const logIn = (user) => {
  return {
    type: LOGIN,
    payload: user
  }
}