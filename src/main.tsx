import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.min.css'; // core css

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
