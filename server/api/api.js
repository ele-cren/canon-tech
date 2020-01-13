import RegisterRoutes from './routes/register-routes'
import LoginRoutes from './routes/login-routes'
import DocumentRoutes from './routes/document-routes'

class Api {
  constructor (app) {
    this.app = app
  }

  setRoutes () {
    this.app.use('/api/auth', RegisterRoutes)
    this.app.use('/api/auth', LoginRoutes)
    this.app.use('/api/', DocumentRoutes)
  }
}

export default Api