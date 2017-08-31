import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../forms/LoginForm'

class Login extends React.Component {
  submit = data => {
    console.log(data)
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

export default Login