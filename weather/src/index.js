import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/WeatherContext'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //wrapping App.js in Provider so App.js and all its children can use data passing through Provider
  <Provider>
    <App />
  </Provider>












);


