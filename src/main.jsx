import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Theme from './context/theme.provider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Theme>
    <Router>
      <App />
    </Router>
  </Theme>
)
