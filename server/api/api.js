import RegisterRoutes from './routes/register-routes'
import LoginRoutes from './routes/login-routes'
import DocumentRoutes from './routes/document-routes'
import UserRoutes from './routes/user-routes'
import express from 'express'
import path from 'path'

class Api {
  constructor (app) {
    this.app = app
  }


  setRoutes () {
    const imagesPath = path.join(path.dirname(require.main.filename), 'images')

    this.app.use('/api/auth', RegisterRoutes)
    this.app.use('/api/auth', LoginRoutes)
    this.app.use('/api', DocumentRoutes)
    this.app.use('/api/user', UserRoutes)
    this.app.use('/images', express.static(imagesPath))
  }
}

export default Api