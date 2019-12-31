import express from 'express'
import Validator from 'validatorjs'
import passport from 'passport'
require('dotenv').config()

const router = express.Router()

const loginValidation = (payload) => {
  const userData = {
    email: payload.email,
    password: payload.password
  }
  const rules = {
    email: 'required|email',
    password: 'required'
  }
  const errorMessages = {
    required: 'Required' + ':atribute',
    email: 'InvalidEmail'
  }
  const validation = new Validator(userData, rules, errorMessages)
  return {
    message: validation.passes() ? '' : 'ErrorLogin',
    errors: validation.errors
  }
} 

router.post('/login', (req, res, next) => {
  const validation = loginValidation(req.body)
  if (validation.errors) {
    return res.status(400).json(validation)
  }
  return passport.authenticate('local-login', (err, user) => {
    if (err) {
      return res.status(400).json(err)
    }
    return req.login(user, err => {
      if (err) {
        return res.status(400).json(err)
      }
      return res.status(200).json({
        message: 'LoginOk',
        user: user
      })
    })
  })(req, res, next)
})

export default router