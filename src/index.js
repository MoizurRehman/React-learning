import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router }  from "react-router-dom";
import {AppProvider} from './context/conxtext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </Router>
);
