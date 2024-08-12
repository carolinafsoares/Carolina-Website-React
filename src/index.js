import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Podcast from './views/podcast'
import PhD from './views/ph-d'
import CV from './views/cv'
import Projects from './views/projects'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Podcast} exact path="/podcast" />
        <Route component={PhD} exact path="/ph-d" />
        <Route component={CV} exact path="/cv" />
        <Route component={Projects} exact path="/projects" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
