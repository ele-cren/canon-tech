import { API_URL } from '../../utils/utils'
import { showErrors, cleanErrors } from '../errorsActions/errorsActions'
import axios from 'axios'
import { FETCHING, FETCHED } from './userConsts'

export const registerUser = (data, cb) => {
  return async dispatch => {
    dispatch({ type: FETCHING })
    const response = await axios.post(API_URL + '/auth/register', {
      email: data.email,
      username: data.username,
      password: data.password,
      confirm: data.confirm
    })
    if (response.data.errors) {
      dispatch(showErrors(response.data.errors))
    } else {
      dispatch(cleanErrors())
      cb()
    }
    dispatch({ type: FETCHED })
  }
}