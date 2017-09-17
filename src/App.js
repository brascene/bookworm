import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'
import SignupPage from './components/pages/SignupPage'
import PropTypes from 'prop-types'

const App = ({ location }) => <div className="ui container">
  <Route location={location} path="/" exact component={HomePage} />
  <GuestRoute location={location} path="/login" exact component={Login} />
  <GuestRoute location={location} path="/signup" exact component={SignupPage} />
  <UserRoute location={location} path="/dashboard" exact component={Dashboard} />
</div>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
