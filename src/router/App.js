import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// components
import Home from '../components/Home'
import Navbar from '../components/Navbar'
// contexts
import {TodosProvider} from '../contexts/TodosProvider'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <TodosProvider>
            <Home />
          </TodosProvider>
        </Route>
      </Switch>
    </Router>
  )
}
