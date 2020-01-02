export const API_URL = '/api'

export const isObjectEmpty = (object) => {
  return Object.getOwnPropertyNames(object).length === 0
}