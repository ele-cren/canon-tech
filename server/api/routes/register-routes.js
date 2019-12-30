import express from 'express'
import passport from 'passport'
import Validator from 'validatorjs'

const router = express.Router()

const registerValidation = (payload) => {
  l// data validation
}

router.post('/register', (req, res, next) => {
  const formValidation = registerValidation(req.body)
  if (!formValidation.success) {
    return res.status(400).json(formValidation)
  }
  // return passport authenticate local-register...
})

export default router