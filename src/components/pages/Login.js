import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginForm from '../forms/LoginForm'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

class Login extends React.Component {
  submit = data => {
    this.props.login(data).
    then(() => this.props.history.push('/'))
  }
  render() {
    return(
      <div> 
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
        <Link to="/">Back to home</Link>
      </div>
    )
  }
}

Login.PropTypes = {
  history: PropTypes.shape({
    push: PropTypes.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login)