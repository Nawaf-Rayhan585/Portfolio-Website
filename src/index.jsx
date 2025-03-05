import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import toast, { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Toaster 
    
    toastOptions={{
      // Define default options
      className: '',
      duration: 1000,
      removeDelay: 1000,
      style: {
        background: '#363636',
        color: '#fff',
      },
  
      // Default options for specific types
      success: {
        duration: 3000,
        iconTheme: {
          primary: 'green',
          secondary: 'white',
        },
      },
    }}
    />
  </React.StrictMode>
);