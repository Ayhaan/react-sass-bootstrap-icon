import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/////react comprend directement qu'il doit allez chercher dans node_modules
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap js
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//icon
import '@fortawesome/fontawesome-free/css/all.min.css'

// your style
import './sass/app.sass'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


