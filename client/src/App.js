import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import PostsList from './containers/PostsList'
import Post from './containers/Post'
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard/Dashboard'
import './styles/main.scss'

const App = () => {
  return (
    <div className="TechCanon">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post" component={Post} />
          <Route path="/postsList" component={PostsList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
