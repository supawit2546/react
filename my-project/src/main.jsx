import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './component/navbar'
import Step1 from './component/step1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Step1 />
  </React.StrictMode>,
)
