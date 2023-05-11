import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>

  </>

)
