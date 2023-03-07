import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '../styles/login.scss';
import '../styles/navbar.scss';
import '../styles/profile.scss'

import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);