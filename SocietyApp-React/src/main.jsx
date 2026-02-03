import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SocietyProvider } from './context/SocietyContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SocietyProvider>
    <App />
  </SocietyProvider>
);
