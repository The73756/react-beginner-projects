import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App.js';
import { Counter } from './Components/Counter';
import { Modal } from './Components/Modal';
import { Quiz } from './Components/Quiz/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </React.StrictMode>
  </HashRouter>,
);
