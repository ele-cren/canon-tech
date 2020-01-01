export const API_URL = 'http://localhost:5000/api'

export const isObjectEmpty = (object) => {
  return Object.getOwnPropertyNames(object).length === 0
}