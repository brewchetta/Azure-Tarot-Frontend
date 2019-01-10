import React from 'react'
import { fetchCreateUser, fetchGetUserByName } from './FetchUser'

export default class UserSignUp extends React.Component {

  state = {
    username: '',
    password: '',
    login_username: '',
    login_password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitSignUp = (event) => {
    event.preventDefault()

    fetchCreateUser(this.state)
    .then(response => {
      if (response.errors) {
        console.log('Error: ', response.errors)
      } else if (response.user) {
        console.log('Response was: ', response)
        window.localStorage.setItem('jwt', response.jwt)
        window.localStorage.setItem('currentUser', response.user)
        console.log('localStorage jwt: ', window.localStorage.getItem('jwt'))
        console.log('localStorage currentUser: ', window.localStorage.getItem('currentUser'))
      }
    })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()
    //
    // fetchGetUserByName(this.state.login_username)
    // .then(response => {
    //   if (response.errors) {
    //     console.log('Error: ', response.errors)
    //   } else if (response.user) {
    //     console.log('Response was: ', response)
    //     this.props.loginUser(response.user)
    //   }
    // })
  }

  render() {
    return(
      <div>
      <p>Sign Up!</p>
      <form name='signup'
      onSubmit={this.handleSubmitSignUp}>

        <label name='username'>Name</label>
        <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>

        <br/>

        <label name='password'>Password</label>
        <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/>

        <br/>

        <input type='submit' />

      </form>

      {/* ----------------- */}

      <p>Log In!</p>
      <form name='login' onSubmit={this.handleSubmitLogin}>
      <label name='login_username'>Name</label>
      <input type='text' name='login_username' value={this.state.login_username} onChange={this.handleChange}/>

      <br/>

      <label name='login_password'>Password</label>
      <input type='text' name='login_password' value={this.state.login_password} onChange={this.handleChange}/>

      <br/>

      <input type='submit' />
      </form>

      </div>
    )
  // } else {
    // this.props.history.push(`/profile/${localUser.id}`)
    // return (<p>Redirecting</p>)
  // }
  }
}
