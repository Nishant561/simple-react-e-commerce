import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Utils} from './components/index.js'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Utils>
<BrowserRouter>
  <App />
</BrowserRouter>

  </Utils>
  
)