import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Header from './Header/Header'
import Home from './Home/Home'
// import Login from './Login/Login'
// import Register from './Register/Register'
// import Data from './Data/Data'

// import { AUTH_REGISTER_URL, AUTH_LOGIN_URL, AUTH_CHECKJWT_URL } from '../constants/routes'
// import { LOCAL_STORAGE_KEY } from '../constants/auth'

import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div id="App">

          <Header

          />
          <div className="content">
            <Switch>

              <Route exact path="/" component={Home} />

              <Redirect from="*" to="/" />

            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
