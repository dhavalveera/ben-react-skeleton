// React
import React from 'react'

// React DOM
import ReactDOM from 'react-dom/client'

// React Router DOM
import { BrowserRouter } from 'react-router-dom'

// App.jsx
import App from './App.jsx'

// Layout
import Layout from './layout'

// CSS
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
