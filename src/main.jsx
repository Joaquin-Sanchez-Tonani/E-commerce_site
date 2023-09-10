import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserValidation from './Login/login.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/userValidation" element={<UserValidation />} />
    </Routes>
  </Router>
  
)

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
