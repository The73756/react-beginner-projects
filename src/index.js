import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App.js';
import { Counter } from './Modules/Counter';
import { Modal } from './Modules/Modal';
import { Quiz } from './Modules/Quiz';
import { Users } from './Modules/Users';
import { СurrencyConvertor } from './Modules/CurrencyConvertor';
import { Photos } from './Modules/Photos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/users' element={<Users />} />
        <Route path='/currencyConvertor' element={<СurrencyConvertor />} />
        <Route path='/photos' element={<Photos />} />
      </Routes>
    </React.StrictMode>
  </HashRouter>,
);
