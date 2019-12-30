import { Strategy } from 'passport-local'
import User from '../models/user'

const localRegister = new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
}, (email, password, done) => {
  User.findOne({ email: email}, (err, user) => {
    if (err) {
      return done(err)
    }
    if (user) {
      const error = new Error('Un compte existe déjà avec cette adresse')
      error.name = 'UserAlreadyExists'
      return done(error)
    }
    const newUser = new User()
    newUser.email = email
    newUser.password = newUser.generateHash(password)
    newUser.save(err => {
      if (err) {
        return done(err)
      }
      return done(null, newUser)
    })
  })
})

export default localRegister