import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './Home/Home';
// import HomeInterior from './Products/HomeInterior/HomeInterior';
import AboutUs from './About/AboutUs';
import UPVCDoorsWindows from './Products/UPVC/UPVCDoorsWindows';
import Skirting from './Products/UPVC/Skirting';
import LocateUs from './LocateUs/LocateUs';
import Dealer from './Dealer/Dealer';
import Carpet from './Products/UPVC/Carpet';
import Flooring from './Products/UPVC/Flooring';
import Blogs from './Blog/Blogs';
import BlogDetail from './Blog/BlogDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='home-interior' element={<HomeInterior />} /> */}
          <Route path='about-us' element={<AboutUs />} />
          <Route path='productPage' element={<UPVCDoorsWindows />} />
          <Route path="skirting" element={<Skirting />} />
          <Route path='locateUs' element={<LocateUs />} />
          <Route path='dealer' element={<Dealer />} />
          <Route path='carpet' element={<Carpet />} />
          <Route path='flooring' element={<Flooring />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path="blogDetails/:blogId" element={<BlogDetail />} />

        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);