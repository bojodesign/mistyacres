import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactForm from './contact-form';

const root = ReactDOM.createRoot(document.getElementById('contactForm'));
root.render(
  <React.StrictMode>
    <ContactForm />
  </React.StrictMode>
);