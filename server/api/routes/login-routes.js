import express from 'express'
import Validator from 'validatorjs'
import passport from 'passport'
require('dotenv').config()

const router = express.Router()

const loginValidation = (payload) => {
  // data validation
} 

router.post('/login', (req, res, next) => {
  const validation = loginValidation(req.body)
  if (!validation.success) {
    return res.status(400).json(validation)
  }
  // return passport authenticate local-login...
})

export default router