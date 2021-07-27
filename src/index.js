import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

