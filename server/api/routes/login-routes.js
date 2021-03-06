import express from 'express'
import Validator from 'validatorjs'
import passport from 'passport'

const router = express.Router()

const loginValidation = (payload) => {
  let isFormValid = false
  const userData = {
    email: payload.email,
    password: payload.password
  }
  const rules = {
    email: 'required|email',
    password: 'required'
  }
  const errorMessages = {
    required: 'Required' + ':attribute',
    email: 'InvalidEmail'
  }
  const validation = new Validator(userData, rules, errorMessages)
  isFormValid = validation.passes()
  return {
    isValid: isFormValid,
    message: isFormValid ? '' : 'ErrorLogin',
    errors: validation.errors.errors
  }
} 

router.post('/login', (req, res, next) => {
  const validation = loginValidation(req.body)
  if (!validation.isValid) {
    return res.json(validation)
  }
  return passport.authenticate('local-login', (err, user) => {
    if (err) {
      return res.json(err)
    }
    return req.logIn(user, err => {
      if (err) {
        return res.json(err)
      }
      return res.json({
        message: 'LoginOk',
        user: user
      })
    })
  })(req, res, next)
})

router.get('/isAuthenticated', (req, res) => {
  return res.json({
    user: req.user
  })
})

router.delete('/logout', (req, res) => {
  req.logout()
  return res.json({
    user: {}
  })
})

export default router