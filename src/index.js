import React from 'react'
import ReactDOM from 'react-dom'
import SuperProvider from './components/SuperProvider'
import './index.css'
import App from './App/index.js'

ReactDOM.render(
  <React.StrictMode>
    <SuperProvider>
      <App />
    </SuperProvider>
  </React.StrictMode>,
  document.getElementById('root')
)