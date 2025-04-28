// import React, { useEffect } from 'react';
// import './Carpet.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Import images
// import heroImage from "./img/skirting/heroImg2.jpg";
// import Carpet50mm from "./img/carpet/app1-500x500.webp";
// import Carpet75mm from "./img/carpet/luxury-carpets-500x500.webp";
// import Carpet100mm from "./img/carpet/trump-carpet-500x500.webp";
// import product1 from "./img/carpet/carpets-for-media-room-500x500.webp";
// import product2 from "./img/carpet/carpet-rolls-foam-for-theater-auditorium-500x500.webp";
// import product3 from "./img/carpet/cut-pile-carpet-500x500.webp";
// import product4 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
// import product5 from "./img/carpet/welspun-carpet-tiles-1000x1000.webp";
// import product6 from "./img/carpet/cumaru-solid-exotic-wood-flooring-250x250.webp";
// import product7 from "./img/carpet/herinbong-laminate-flooring-250x250.webp";
// import product8 from "./img/carpet/tigerwood-engineered-flooring-250x250.webp";
// import viewAllImage from "./img/carpet/plain-nylon-carpet-250x250.webp";

// // ========== Constants for Category List ==========
// const categories = [
//   { title: "Wall to Wall carpet", img: Carpet50mm, link: "/skirting-50mm" },
//   { title: "Wall To Wall Floor Carpets", img: Carpet75mm, link: "/skirting-75mm" },
//   { title: "Hotel carpet", img: product3, link: "/hotel-carpet" },
//   { title: "Hand Tuffted Carpet", img: Carpet100mm, link: "/hand-tuffted-carpet" },
// ];

// // ========== Constants for Products ==========
// const mainProducts = [
//   {
//     img: product1,
//     title: "Carpets For Media Room",
//     link: "/classic-white-skirting",
//     price: "₹120",
//     height: "50mm",
//     material: "MDF",
//     finish: "Glossy",
//   },
//   {
//     img: product2,
//     title: "Wall To Wall Floor Carpets",
//     link: "/wooden-oak-skirting",
//     price: "₹150",
//     height: "75mm",
//     material: "Solid Oak",
//     finish: "Matte",
//   },
// ];

// const otherProducts = [
//   {
//     img: product3,
//     title: "Cut Pile Carpet",
//     link: "/modern-grey-skirting",
//     price: "₹110",
//     height: "50mm",
//     material: "PVC",
//     finish: "Matte",
//   },
//   {
//     img: product4,
//     title: "Stone Nylon Matte Carpet Tiles",
//     link: "/aluminum-skirting",
//     price: "₹180",
//     height: "100mm",
//     material: "Aluminum",
//     finish: "Brushed",
//   },
//   {
//     img: product5,
//     title: "Raven Matte Nylon Carpet Tiles",
//     link: "/flexible-pvc-skirting",
//     price: "₹95",
//     height: "50mm",
//     material: "PVC",
//     finish: "Glossy",
//   },
//   {
//     img: product6,
//     title: "Exotic Wood Flooring",
//     link: "/heritage-skirting",
//     price: "₹200",
//     height: "100mm",
//     material: "Hardwood",
//     finish: "Polished",
//   },
//   {
//     img: product7,
//     title: "Polished Nylon Carpet Tiles",
//     link: "/minimalist-skirting",
//     price: "₹85",
//     height: "40mm",
//     material: "MDF",
//     finish: "Matte",
//   },
//   {
//     img: product8,
//     title: "Floor Profiles",
//     link: "/contemporary-skirting",
//     price: "₹160",
//     height: "75mm",
//     material: "Wood Composite",
//     finish: "Satin",
//   },
//   {
//     img: product1,
//     title: "Polished Engineered Flooring",
//     link: "/classic-white-skirting",
//     price: "₹120",
//     height: "50mm",
//     material: "MDF",
//     finish: "Glossy",
//   },
//   {
//     img: product2,
//     title: "Carpet Roll Foam",
//     link: "/wooden-oak-skirting",
//     price: "₹150",
//     height: "75mm",
//     material: "Solid Oak",
//     finish: "Matte",
//   },
// ];

// const Carpet = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
//   }, []);

//   return (
//     <div className="carpet-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <img src={heroImage} alt="Premium Carpet Solutions" className="hero-image" />
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1 data-aos="fade-up">Premium Carpet Profiles</h1>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="category-section">
//         <div className="container">
//           <div className="category-grid">
//             {categories.map((item, index) => (
//               <a key={index} href={item.link} className="category-item" data-aos="fade-up" data-aos-delay={index * 100}>
//                 <div className="category-image-wrapper">
//                   <img src={item.img} alt={item.title} className="category-image" />
//                 </div>
//                 <div className="category-content">
//                   <h3>{item.title}</h3>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products */}
//       <section className="product-showcase-section">
//         <div className="container">
//           <div className="ps-section__carousel">
//             {/* Main Products */}
//             <div className="row" data-aos="fade-up">
//               <div className="col-md-9">
//                 <div className="row">
//                   {mainProducts.map((product, idx) => (
//                     <div key={idx} className="col-md-6">
//                       <div className="jk-banner-product-wrapper">
//                         <a href={product.link} className="jk_bnr_prd_img">
//                           <img src={product.img} alt={product.title} />
//                         </a>
//                         <div className="jk-banner-product-content">
//                           <h2><a href={product.link}>{product.title}</a></h2>
//                           <div className="jk-price">{product.price}<span>/sq ft</span></div>
//                           <div className="jk-list-info">
//                             <ul>
//                               <li><span>Height:</span> {product.height}</li>
//                               <li><span>Material:</span> {product.material}</li>
//                               <li><span>Finish:</span> {product.finish}</li>
//                             </ul>
//                           </div>
//                           <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* View All */}
//               <div className="col-md-3">
//                 <div className="jk-banner-right">
//                   <a href="/all-products" className="view-all-link">
//                     <div className="tp_bnr_vm_img">
//                       <img src={viewAllImage} alt="View All Products" />
//                     </div>
//                     <div className="view-all-text">
//                       <h2>View Complete Range of Products</h2>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                         <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Other Products */}
//             <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
//               {otherProducts.map((product, idx) => (
//                 <div key={idx} className="col-md-3">
//                   <div className="jk-banner-product-wrapper">
//                     <a href={product.link} className="jk_bnr_prd_img">
//                       <img src={product.img} alt={product.title} />
//                     </a>
//                     <div className="jk-banner-product-content">
//                       <h2><a href={product.link}>{product.title}</a></h2>
//                       <div className="jk-price">{product.price}<span>/sq ft</span></div>
//                       <div className="jk-list-info">
//                         <ul>
//                           <li><span>Height:</span> {product.height}</li>
//                           <li><span>Material:</span> {product.material}</li>
//                           <li><span>Finish:</span> {product.finish}</li>
//                         </ul>
//                       </div>
//                       <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Carpet;












import React, { useEffect } from 'react';
import './Carpet.css';
import AOS from 'aos'; // Animation on scroll library
import 'aos/dist/aos.css'; // AOS styles

// ========== Image Imports ==========
// Hero section image
import heroImage from "./img/skirting/heroImg2.jpg";
// Category images
import Carpet50mm from "./img/carpet/app1-500x500.webp";
import Carpet75mm from "./img/carpet/luxury-carpets-500x500.webp";
import Carpet100mm from "./img/carpet/trump-carpet-500x500.webp";
// Product images
import product1 from "./img/carpet/carpets-for-media-room-500x500.webp";
import product2 from "./img/carpet/carpet-rolls-foam-for-theater-auditorium-500x500.webp";
import product3 from "./img/carpet/cut-pile-carpet-500x500.webp";
import product4 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
import product5 from "./img/carpet/welspun-carpet-tiles-1000x1000.webp";
import product6 from "./img/carpet/cumaru-solid-exotic-wood-flooring-250x250.webp";
import product7 from "./img/carpet/herinbong-laminate-flooring-250x250.webp";
import product8 from "./img/carpet/tigerwood-engineered-flooring-250x250.webp";
// View all products image
import viewAllImage from "./img/carpet/plain-nylon-carpet-250x250.webp";

// ========== Category Data ==========
// Array defining the carpet categories with title, image and link
const categories = [
  { title: "Wall to Wall carpet", img: Carpet50mm, link: "/skirting-50mm" },
  { title: "Wall To Wall Floor Carpets", img: Carpet75mm, link: "/skirting-75mm" },
  { title: "Hotel carpet", img: product3, link: "/hotel-carpet" },
  { title: "Hand Tuffted Carpet", img: Carpet100mm, link: "/hand-tuffted-carpet" },
];

// ========== Product Data ==========
// Featured/main products array with detailed information
const mainProducts = [
  {
    img: product1,
    title: "Carpets For Media Room",
    link: "/classic-white-skirting",
    price: "₹120",
    height: "50mm",
    material: "MDF",
    finish: "Glossy",
  },
  // ...other main products
];

// Secondary products array
const otherProducts = [
  {
    img: product3,
    title: "Cut Pile Carpet",
    link: "/modern-grey-skirting",
    price: "₹110",
    height: "50mm",
    material: "PVC",
    finish: "Matte",
  },
  // ...other secondary products
];

const Carpet = () => {
  // Initialize AOS (Animate On Scroll) library when component mounts
  useEffect(() => {
    AOS.init({ 
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="carpet-page">
      {/* ========== Hero Section ========== */}
      {/* Full-width hero banner with image and overlay text */}
      <section className="hero-section">
        {/* Background hero image */}
        <img 
          src={heroImage} 
          alt="Premium Carpet Solutions" 
          className="hero-image" 
        />
        {/* Dark overlay for better text contrast */}
        <div className="hero-overlay">
          {/* Centered hero text content */}
          <div className="hero-content">
            {/* Main heading with fade-up animation */}
            <h1 data-aos="fade-up">Premium Carpet Profiles</h1>
          </div>
        </div>
      </section>

      {/* ========== Categories Section ========== */}
      {/* Grid layout showing different carpet categories */}
      <section className="category-section">
        <div className="container">
          {/* Responsive grid for categories */}
          <div className="category-grid">
            {/* Map through categories array to render each category */}
            {categories.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                className="category-item" 
                data-aos="fade-up" 
                data-aos-delay={index * 100} // Staggered animation delay
              >
                {/* Category image container */}
                <div className="category-image-wrapper">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="category-image" 
                  />
                </div>
                {/* Category title */}
                <div className="category-content">
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Products Showcase Section ========== */}
      <section className="product-showcase-section">
        <div className="container">
          <div className="ps-section__carousel">
            {/* ===== Main Featured Products ===== */}
            <div className="row" data-aos="fade-up">
              {/* Main products take 9 columns (3/4 of row) */}
              <div className="col-md-9">
                <div className="row">
                  {/* Map through main products */}
                  {mainProducts.map((product, idx) => (
                    <div key={idx} className="col-md-6">
                      {/* Product card wrapper */}
                      <div className="jk-banner-product-wrapper">
                        {/* Product image link */}
                        <a href={product.link} className="jk_bnr_prd_img">
                          <img src={product.img} alt={product.title} />
                        </a>
                        {/* Product details */}
                        <div className="jk-banner-product-content">
                          {/* Product title */}
                          <h2><a href={product.link}>{product.title}</a></h2>
                          {/* Price display */}
                          <div className="jk-price">
                            {product.price}<span>/sq ft</span>
                          </div>
                          {/* Product specifications list */}
                          <div className="jk-list-info">
                            <ul>
                              <li><span>Height:</span> {product.height}</li>
                              <li><span>Material:</span> {product.material}</li>
                              <li><span>Finish:</span> {product.finish}</li>
                            </ul>
                          </div>
                          {/* Call-to-action button */}
                          <button className="ps-btn ps-btn--warning get-q-btn">
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== View All Products Section ===== */}
              {/* Takes 3 columns (1/4 of row) */}
              <div className="col-md-3">
                <div className="jk-banner-right">
                  {/* Link to view all products */}
                  <a href="/all-products" className="view-all-link">
                    {/* View all image */}
                    <div className="tp_bnr_vm_img">
                      <img src={viewAllImage} alt="View All Products" />
                    </div>
                    {/* View all text with arrow icon */}
                    <div className="view-all-text">
                      <h2>View Complete Range of Products</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== Secondary Products Grid ===== */}
            <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
              {/* Map through secondary products */}
              {otherProducts.map((product, idx) => (
                <div key={idx} className="col-md-3">
                  {/* Product card (same structure as main products) */}
                  <div className="jk-banner-product-wrapper">
                    <a href={product.link} className="jk_bnr_prd_img">
                      <img src={product.img} alt={product.title} />
                    </a>
                    <div className="jk-banner-product-content">
                      <h2><a href={product.link}>{product.title}</a></h2>
                      <div className="jk-price">{product.price}<span>/sq ft</span></div>
                      <div className="jk-list-info">
                        <ul>
                          <li><span>Height:</span> {product.height}</li>
                          <li><span>Material:</span> {product.material}</li>
                          <li><span>Finish:</span> {product.finish}</li>
                        </ul>
                      </div>
                      <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carpet;