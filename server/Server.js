import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import path from 'path'
import LocalLogin from './passport/local-login'
import LocalRegister from './passport/local-register'

const PUBLIC_ASSETS = path.join(__dirname, '../client/build')

class Server {
  constructor () {
    this.configure()
  }

  configure () {
    this.app = express()
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser())
    this.app.use(express.static(PUBLIC_ASSETS))

    this.configurePassport()
  }

  configurePassport () {
    this.app.use(passport.initialize())
    passport.use('local-login', LocalLogin)
    passport.use('local-register', LocalRegister)
  }

  start (port) {
    this.server = this.app.listen(port)
  }

  stop () {
    this.server.close()
  }
}

export default Server