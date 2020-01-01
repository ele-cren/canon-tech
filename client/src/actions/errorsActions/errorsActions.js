import { SHOW_ERRORS, CLEAN_ERRORS } from './errorsConsts'

export const showErrors = (errors) => {
  return {
    type: SHOW_ERRORS,
    payload: {
      errors: errors
    }
  }
}

export const cleanErrors = () => {
  return {
    type: CLEAN_ERRORS
  }
}