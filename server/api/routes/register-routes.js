import express from 'express'
import passport from 'passport'
import Validator from 'validatorjs'

const router = express.Router()

const registerValidation = (payload) => {
  let isFormValid = false
  const userData = {
    email: payload.email,
    username: payload.username,
    password: payload.password,
    password_confirmation: payload.confirm
  }
  const rules = {
    email: 'required|email',
    password: 'required|between: 8,24|confirmed',
    username: 'required|between: 3,16|alpha_dash'
  }
  const errorMessages = {
    required: 'Required' + ':attribute',
    email: 'InvalidEmail',
    'alpha_dash': 'UserChars',
    'between': 'UserBetween:min:max',
    'confirmed': 'PasswordsNotMatch'
  }
  const validation = new Validator(userData, rules, errorMessages)
  isFormValid = validation.passes()
  return {
    isValid: isFormValid,
    errors: validation.errors.errors,
    message: isFormValid ? '' : 'ErrorRegister'
  }
}

router.post('/register', (req, res, next) => {
  const formValidation = registerValidation(req.body)
  if (!formValidation.isValid) {
    return res.json(formValidation)
  }
  return passport.authenticate('local-register', (err) => {
    if (err) {
      return res.json(err)
    }
    return res.json({
      message: 'RegisterOK'
    })
  })(req, res, next)
})

export default router