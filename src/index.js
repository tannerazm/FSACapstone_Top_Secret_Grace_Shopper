import React from 'react';
import { App } from './components';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
import './style/index.css';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
