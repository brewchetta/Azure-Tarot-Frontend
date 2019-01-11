import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Stylesheet
import './App.css';
// Fetch Functions
import { fetchLoginUser } from './user/FetchUser'
// Components
import Navbar from './general/Navbar'
import UserSignUp from './user/UserSignUp'
import UserProfile from './user/UserProfile'
import CardCreate from './card/CardCreate'
import CardIndex from './card/CardIndex'

class App extends Component {

  state = {
    currentUser: null
  }

  // Checks if the JWT token has an associated user
  componentDidMount() {
    const jwt = localStorage.jwt
    console.log(jwt)
    fetchLoginUser(jwt).then(response => this.setState({ currentUser: response.user }))
  }

  // Sets the current user when logging in or signing up
  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }

  // Removes session information
  handleLogout = () => {
    this.setCurrentUser(null)
    localStorage.removeItem('jwt')
  }

  // Main Render
  render() {
    const currentUser = this.state.currentUser
    return (
      <Router>
      <>
        <h1>Tarot App</h1>
        <Navbar currentUser={this.state.currentUser} />

        {localStorage.jwt ? <button onClick={this.handleLogout}>Log Out</button> : null}

        <Route path='/' exact
        render={
          props => <UserSignUp {...props}
          setCurrentUser={this.setCurrentUser}
          currentUser={currentUser} />
        } />

        <Route path='/card-create' exact component={CardCreate} />

        <Route path='/profile/:user_id' exact render={
          props => <UserProfile {...props} currentUser={currentUser} />
        } />

        <Route path='/card-index' exact render={ props=> <CardIndex {...props} />} />

      </>
      </Router>
    );
  }
}

export default App;
