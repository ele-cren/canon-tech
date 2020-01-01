import express from 'express'
import bodyParser from 'body-parser'
import session  from 'express-session'
import passport from 'passport'
//import path from 'path'
import LocalLogin from './passport/local-login'
import LocalRegister from './passport/local-register'
import cors from 'cors'
require('dotenv').config()

//const PUBLIC_ASSETS = path.join(__dirname, '../client/build')

class Server {
  constructor () {
    this.configure()
  }

  configure () {
    this.app = express()
    //this.app.use(express.static(PUBLIC_ASSETS))
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({
      extended: true
    }))
    this.app.use(bodyParser.json())
    this.app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    }))
    this.configurePassport()
  }
  
  configurePassport () {
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    })
    passport.deserializeUser(function(id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      })
    })
    passport.use('local-login', LocalLogin)
    passport.use('local-register', LocalRegister)
    this.app.use(passport.initialize())
    this.app.use(passport.session())
  }

  start (port) {
    this.server = this.app.listen(port)
  }

  stop () {
    this.server.close()
  }
}

export default Server