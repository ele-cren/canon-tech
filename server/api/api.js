import RegisterRoutes from './routes/register-routes'
import LoginRoutes from './routes/login-routes'

class Api {
  constructor (app) {
    this.app = app
  }

  setRoutes () {
    this.app.use('/api/auth', RegisterRoutes)
    this.app.use('/api/auth', LoginRoutes)
  }
}

export default Api