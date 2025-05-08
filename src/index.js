import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Home/Home";
// import HomeInterior from './Products/HomeInterior/HomeInterior';
import AboutUs from "./About/AboutUs";
import UPVCDoorsWindows from "./Products/UPVC/UPVCDoorsWindows";
import Skirting from "./Products/UPVC/Skirting";
import SkirtingProfile from "./Products/SkirtingProfile";
import LocateUs from "./LocateUs/LocateUs";
import Dealer from "./Dealer/Dealer";
import Carpet from "./Products/UPVC/Carpet";
import Aluminium_glass from "./Products/UPVC/Aluminium_glass";
import Flooring from "./Products/UPVC/Flooring";
import Blogs from "./Blog/Blogs";
import BlogDetail from "./Blog/BlogDetail";
import BlogSlider from "./Home/BlogSlider";
import BlogDetails from "./Home/BlogDetails";
import ContactFormPopup from "./POPUP/ContactFormPopup";
import BlogList from "./StaticBLog/BlogList";
import Detail from "./StaticBLog/Detail";
import Conditions from "./Term&condition/Conditions";
import Policy from "./Policy/Policy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='home-interior' element={<HomeInterior />} /> */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="productPage" element={<UPVCDoorsWindows />} />
          <Route path="skirtingProfile">
            <Route index element={<SkirtingProfile />} />
            <Route path="/skirtingProfile/skirting" element={<Skirting />} />
          </Route>
          <Route path="locateUs" element={<LocateUs />} />
          <Route path="dealer" element={<Dealer />} />
          <Route path="carpet" element={<Carpet />} />
          <Route path="flooring" element={<Flooring />} />
          <Route path="Aluminium_glass" element={<Aluminium_glass />} />
          <Route path="Conditions" element={<Conditions />} />
          <Route path="Policy" element={<Policy />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogDetails/:blogId" element={<BlogDetail />} />

          <Route path="blogSlider" element={<BlogSlider />} />
          <Route path="/static-blog/:id" element={<BlogDetails />} />

          <Route path="contact" element={<ContactFormPopup />} />
          <Route path="static-blog" element={<BlogList />} />
          <Route path="/static-blog/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
