import express from 'express'
import passport from 'passport'
import Validator from 'validatorjs'

const router = express.Router()

const registerValidation = (payload) => {
  const userData = {
    email: payload.email,
    username: payload.username,
    password: payload.password,
    password_confirmation: payload.confirm,
    firsrName: payload.firstName,
    lastName: payload.lastName
  }
  const rules = {
    email: 'required|email',
    password: 'required|between: 8,24|confirmed',
    username: 'required|between: 3,16|alpha_dash',
    firstName: 'required|string',
    lastName: 'required|string'
  }
  const errorMessages = {
    required: 'Required' + ':atribute',
    email: 'InvalidEmail',
    'alpha_dash': 'UserChars',
    'between': 'UserBetween'
  }
  const validation = new Validator(userData, rules, errorMessages)
  return {
    errors: validation.errors,
    message: validation.passes() ? '' : 'ErrorRegister'
  }
}

router.post('/register', (req, res, next) => {
  const formValidation = registerValidation(req.body)
  if (formValidation.errors) {
    return res.status(400).json(formValidation)
  }
  return passport.authenticate('local-register', (err) => {
    if (err) {
      return res.status(400).json(err)
    }
    return res.status(200).json({
      message: 'RegisterOK'
    })
  })(req, res, next)
})

export default router