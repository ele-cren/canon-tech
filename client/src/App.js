import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './containers/Login'
import Register from './containers/Register'
import PostList from './containers/PostList'
import Post from './containers/Post'
import Navbar from './components/Navbar'
import './styles/main.scss'

const App = () => {
  return (
    <div className="TechCanon">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route path='/login' component={ Login } />
          <Route path='/register' component={ Register } />
          <Route path='/post' component={ Post } />
          <Route path='/postList' component={ PostList } />
        </Switch>
      </Router>
    </div>
  )
}

export default App
