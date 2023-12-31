// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'

import {BrowserRouter as Router, 
  useNavigate, 
  Routes, 
  Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>,
)