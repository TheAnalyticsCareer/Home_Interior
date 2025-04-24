import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './Home/Home';
import HomeInterior from './Products/HomeInterior/HomeInterior';
import AboutUs from './About/AboutUs';
import UPVCDoorsWindows from './Products/UPVC/UPVCDoorsWindows';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home-interior' element={<HomeInterior />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='upvc-door-and-window' element={<UPVCDoorsWindows />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);