import { Strategy } from 'passport-local'
import User from '../models/user'

const localRegister = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({ email: email}, (err, user) => {
    const errorRegister = {
      message: 'ErrorRegister',
      errors: {}
    }
    if (err) {
      return done(errorRegister)
    }
    if (user) {
      errorRegister.errors.email = 'EmailExists'
      return done(errorRegister)
    }
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        return res.json(errorRegister)
      }
      if (user) {
        errorRegister.errors.username = 'UserExists'
        return done(errorRegister)
      }
      const newUser = new User()
      newUser.email = email
      newUser.password = newUser.hashPassword(password)
      newUser.username = req.body.username
      newUser.save(err => {
        if (err) {
          return done(errorRegister)
        }
        return done(null, newUser)
      })
    })
  })
})

export default localRegister