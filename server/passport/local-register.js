import { Strategy } from 'passport-local'
import User from '../models/user'

const localRegister = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
}, (email, password, done) => {
  User.findOne({ email: email}, (err, user) => {
    const errorRegister = {
      message: 'ErrorRegister',
      errors: {}
    }
    if (err) {
      return done(errorRegister)
    }
    if (user) {
      errorRegister.errors.email = 'UserAlreadyExists'
      return done(errorRegister)
    }
    const newUser = new User()
    newUser.email = email
    newUser.password = newUser.generateHash(password)
    newUser.save(err => {
      if (err) {
        return done(errorRegister)
      }
      return done(null, newUser)
    })
  })
})

export default localRegister