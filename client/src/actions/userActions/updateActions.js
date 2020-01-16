// import axios from 'axios'
// import { API_URL } from '../../utils/utils'
import { UPDATE } from './userConsts'

export const updateInfos = (infos) => {
  return dispatch => {
    dispatch({ type: UPDATE, payload: infos })
  }
}