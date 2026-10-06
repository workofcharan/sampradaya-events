import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CustomerAuthProvider } from './context/CustomerAuthContext';
import { BookingWizardProvider } from './context/BookingWizardContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomerAuthProvider>
        <BookingWizardProvider>
          <App />
        </BookingWizardProvider>
      </CustomerAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
