import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

import './style.css'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(
<Auth0Provider
  domain="dev-livmhl2jv2b876yd.us.auth0.com"
  clientId="Pg3GuFWPK0eHXs2D2sE8GBRHYVKMToBc"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
><App />
</Auth0Provider>, document.getElementById('app'))