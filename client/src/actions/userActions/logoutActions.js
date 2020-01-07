import { LOGOUT } from './userConsts'
import axios from 'axios'
import { API_URL } from '../../utils/utils'

export const logOutUser = () => {
  return dispatch => {
    axios.delete(API_URL + '/auth/logout')
    dispatch({ type: LOGOUT })
  }
}