import { Strategy } from 'passport-local'
import User from '../models/user'

const localLogin = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
}, (email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return done(err)
    }
    if (!user) {
      const error = new Error('Adresse email invalide')
      error.name = 'IncorrectCredential'
      return done(error)
    }
    return user.comparePasswords(password, (err, isMatch) => {
      if (err) {
        return done(err)
      }
      if (!isMatch) {
        const error = new Error('Mot de passe incorrect')
        error.name = 'IncorrectCredential'
        return done (error)
      }
      return done(null, user)
    })
  })
})

export default localLogin