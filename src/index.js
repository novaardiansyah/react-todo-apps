import React from 'react'
import ReactDOM from 'react-dom'
import App from './router/App'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// global style
import './assets/scss/colors.scss'
import './assets/scss/app.scss'

ReactDOM.render(<App />, document.getElementById('root'))
