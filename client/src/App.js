import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { checkLogged } from './actions/userActions/loginActions'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import PostsList from './containers/PostsList'
import Post from './containers/Post'
import Navbar from './components/Navbar'
import Dashboard from './containers/Dashboard/Dashboard'
import './styles/main.scss'
import { connect } from 'react-redux'
import Logout from './components/Auth/Logout.jsx'

const App = (props) => {
  useEffect(() => {
    props.isAuthenticated()
  }, [props])
  return !props.user.checked ? 'Loading...' : (
    <div className="TechCanon">
      <Router>
        <Navbar logged={props.user.user._id} />
        <Switch>
          <Route exact path="/" component={PostsList} />
          <AlreadyLoggedRoute path="/login" component={Login} logged={ props.user.user._id } />
          <AlreadyLoggedRoute path="/register" component={Register} logged={ props.user.user._id } />
          <AlreadyLoggedRoute path="/logout" component={Logout} logged={props.user.user._id} />
          <PrivateRoute path="/dashboard" component={Dashboard} logged={ props.user.user._id } />
          <Route path="/post" component={Post} />
        </Switch>
      </Router>
    </div>
  )
}

const AlreadyLoggedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !rest.logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  isAuthenticated: checkLogged
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
