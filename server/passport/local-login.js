import { Strategy } from 'passport-local'
import User from '../models/user'

const localLogin = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
}, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    const errorLogin = {
      message: 'ErrorLogin',
      errors: {}
    }
    if (err) {
      return done(errorLogin)
    }
    if (!user) {
      errorLogin.errors.email = 'NoAccount'
      return done(errorLogin)
    }
    return user.comparePasswords(password, (err, isMatch) => {
      if (err) {
        return done(errorLogin)
      }
      if (!isMatch) {
        errorLogin.errors.password = 'InvalidPassword'
        return done (errorLogin)
      }
      return done(null, user)
    })
  })
})

export default localLogin