import axios from 'axios'
import { API_URL } from '../../utils/utils'
import { UPDATE } from './userConsts'

export const updateInfos = (infos) => {
  return dispatch => {
    axios.patch(API_URL + '/user/update', { userInfos: JSON.stringify(infos) }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    delete infos.password
    dispatch({ type: UPDATE, payload: infos })
  }
}