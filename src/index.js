import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App.js';
import { Counter } from './Components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </React.StrictMode>
  </HashRouter>,
);
