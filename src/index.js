import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavBar } from './Components/NavBar/NavBar.js'
import { Footer } from './Components/Footer/Footer.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer></Footer>
  </React.StrictMode>
);
