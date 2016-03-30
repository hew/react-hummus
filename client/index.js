
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import React from 'react'

import App from './containers/App'
import Home from './components/Home'


render(
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
    </Router>,
  document.getElementById('root')
)
