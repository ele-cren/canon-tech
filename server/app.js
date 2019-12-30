import Server from './server'
import Api from './api/Api'
require('dotenv').config()
import mongoose from 'mongoose'

const DB_URL = process.env.DB_URL
const server = new Server()

server.start(process.env.PORT)

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log('Error database connection ' + err)
  } else {
    console.log('Successfully connected to the database')
    //API
    const api = new Api(server.app)
    api.setRoutes()
  }
})

process.on('SIGINT', () => {
  server.stop()
  process.exit(0)
})