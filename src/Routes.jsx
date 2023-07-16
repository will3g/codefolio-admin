import React from 'react';
import { Routes, Route } from 'react-router';

import FormTestPage from './Pages/Megadraft/PageFormTest';

import Articles from './Pages/Dashboard/List/Articles/Index';
import Portfolios from './Pages/Dashboard/List/Portfolios/Index';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={
        <ul>
          <li><a href="/article">Article</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/megadraft">Megadraft</a></li>
        </ul>
      } />
      <Route exact path="/article" element={<Articles />} />
      <Route path="/portfolio" element={<Portfolios />} />
      <Route path="/megadraft" element={<FormTestPage />} />
    </Routes>
  );
};

export default Router;