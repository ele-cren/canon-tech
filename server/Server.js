import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cookieSession  from 'cookie-session'
import passport from 'passport'
import User from './models/user'
//import path from 'path'
import LocalLogin from './passport/local-login'
import LocalRegister from './passport/local-register'
import cors from 'cors'
require('dotenv').config()
import path from 'path'

const PUBLIC_ASSETS = path.join(__dirname, '../client/build')

class Server {
  constructor () {
    this.configure()
  }

  configure () {
    this.app = express()
    this.app.use(express.static(PUBLIC_ASSETS))
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({
      extended: true,
      limit: '10mb'
    }))
    this.app.use(bodyParser.json({
      limit: '10mb'
    }))
    this.app.use(cookieParser(process.env.SESSION_SECRET))
    this.app.use(bodyParser.json())
    this.app.use(cookieSession({
      name: 'session',
      secret: process.env.SESSION_SECRET
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