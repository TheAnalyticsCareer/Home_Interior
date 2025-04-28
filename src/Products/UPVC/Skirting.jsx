// import React from 'react';
// import './Skirting.css';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Import images
// import heroImage from "./img/skirting/heroImg2.jpg";
// import skirting50mm from "./img/skirting/skirtingIcon-1.jpg";
// import skirting75mm from "./img/skirting/skirtingIcon-2.jpg";
// import skirting100mm from "./img/skirting/skirtingIcon-3.webp";
// import product1 from "./img/skirting/product1.webp";
// import product2 from "./img/skirting/product2.webp";
// import product3 from "./img/skirting/product3.webp";
// import product4 from "./img/skirting/product4.webp";
// import product5 from "./img/skirting/product5.webp";
// import product6 from "./img/skirting/prodcut6.webp";
// import product7 from "./img/skirting/product7.webp";
// import product8 from "./img/skirting/product8.webp";
// import viewAllImage from "./img/skirting/product1.webp";

// const Skirting = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true
//     });
//   }, []);

//   return (
//     <div className="skirting-page">
//       {/* Hero Banner Section */}
//       <section className="hero-section">
//         <img 
//           src={heroImage} 
//           alt="Premium Skirting Solutions" 
//           className="hero-image"
//         />
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1 data-aos="fade-up">Premium Skirting Profiles</h1>
//           </div>
//         </div>
//       </section>

//       {/* Category List Section */}
//       <section className="category-section">
//         <div className="container">
//           <div className="category-grid">
//             <a href="/skirting-50mm" className="category-item" data-aos="fade-up">
//               <div className="category-image-wrapper">
//                 <img src={skirting50mm} alt="50MM Skirting" className="category-image"/>
//               </div>
//               <div className="category-content">
//                 <h3>50MM Skirting</h3>
//               </div>
//             </a>
            
//             <a href="/skirting-75mm" className="category-item" data-aos="fade-up" data-aos-delay="100">
//               <div className="category-image-wrapper">
//                 <img src={skirting75mm} alt="75MM Skirting" className="category-image"/>
//               </div>
//               <div className="category-content">
//                 <h3>75MM Skirting</h3>
//               </div>
//             </a>
            
//             <a href="/skirting-100mm" className="category-item" data-aos="fade-up" data-aos-delay="200">
//               <div className="category-image-wrapper">
//                 <img src={skirting100mm} alt="100MM Skirting" className="category-image"/>
//               </div>
//               <div className="category-content">
//                 <h3>100MM Skirting</h3>
//               </div>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Product Showcase Section */}
//       <section className="product-showcase-section">
//         <div className="container">
//           <div className="ps-section__carousel">
//             {/* First Row with 2 main products and view all */}
//             <div className="row" data-aos="fade-up">
//               <div className="col-md-9">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="jk-banner-product-wrapper">
//                       <a href="/classic-white-skirting" className="jk_bnr_prd_img">
//                         <img src={product1} alt="Classic White Skirting"/>
//                       </a>
//                       <div className="jk-banner-product-content">
//                         <h2><a href="/classic-white-skirting">Classic White Skirting</a></h2>
//                         <div className="jk-price">₹120<span>/sq ft</span></div>
//                         <div className="jk-list-info">
//                           <ul>
//                             <li><span>Height:</span> 50mm</li>
//                             <li><span>Material:</span> MDF</li>
//                             <li><span>Finish:</span> Glossy</li>
//                           </ul>
//                         </div>
//                         <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="jk-banner-product-wrapper">
//                       <a href="/wooden-oak-skirting" className="jk_bnr_prd_img">
//                         <img src={product2} alt="Wooden Oak Skirting"/>
//                       </a>
//                       <div className="jk-banner-product-content">
//                         <h2><a href="/wooden-oak-skirting">Wooden Oak Skirting</a></h2>
//                         <div className="jk-price">₹150<span>/sq ft</span></div>
//                         <div className="jk-list-info">
//                           <ul>
//                             <li><span>Height:</span> 75mm</li>
//                             <li><span>Material:</span> Solid Oak</li>
//                             <li><span>Finish:</span> Matte</li>
//                           </ul>
//                         </div>
//                         <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="jk-banner-right">
//                   <a href="/all-products" className="view-all-link">
//                     <div className="tp_bnr_vm_img">
//                       <img src={viewAllImage} alt="View All Products"/>
//                     </div>
//                     <div className="view-all-text">
//                       <h2>View Complete Range of Products</h2>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                         <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white"></path>
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Second Row with 4 products */}
//             <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/modern-grey-skirting" className="jk_bnr_prd_img">
//                     <img src={product3} alt="Modern Grey Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/modern-grey-skirting">Modern Grey Skirting</a></h2>
//                     <div className="jk-price">₹110<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 50mm</li>
//                         <li><span>Material:</span> PVC</li>
//                         <li><span>Finish:</span> Matte</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/aluminum-skirting" className="jk_bnr_prd_img">
//                     <img src={product4} alt="Aluminum Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/aluminum-skirting">Aluminum Skirting</a></h2>
//                     <div className="jk-price">₹180<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 100mm</li>
//                         <li><span>Material:</span> Aluminum</li>
//                         <li><span>Finish:</span> Brushed</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/flexible-pvc-skirting" className="jk_bnr_prd_img">
//                     <img src={product5} alt="Flexible PVC Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/flexible-pvc-skirting">Flexible PVC Skirting</a></h2>
//                     <div className="jk-price">₹95<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 50mm</li>
//                         <li><span>Material:</span> PVC</li>
//                         <li><span>Finish:</span> Glossy</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/heritage-skirting" className="jk_bnr_prd_img">
//                     <img src={product6} alt="Heritage Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/heritage-skirting">Heritage Skirting</a></h2>
//                     <div className="jk-price">₹200<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 100mm</li>
//                         <li><span>Material:</span> Hardwood</li>
//                         <li><span>Finish:</span> Polished</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Third Row with 4 products */}
//             <div className="row home_boxes" data-aos="fade-up" data-aos-delay="200">
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/minimalist-skirting" className="jk_bnr_prd_img">
//                     <img src={product7} alt="Minimalist Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/minimalist-skirting">Minimalist Skirting</a></h2>
//                     <div className="jk-price">₹85<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 40mm</li>
//                         <li><span>Material:</span> MDF</li>
//                         <li><span>Finish:</span> Matte</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/contemporary-skirting" className="jk_bnr_prd_img">
//                     <img src={product8} alt="Contemporary Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/contemporary-skirting">Contemporary Skirting</a></h2>
//                     <div className="jk-price">₹160<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 75mm</li>
//                         <li><span>Material:</span> Wood Composite</li>
//                         <li><span>Finish:</span> Satin</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/classic-white-skirting" className="jk_bnr_prd_img">
//                     <img src={product1} alt="Classic White Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/classic-white-skirting">Classic White Skirting</a></h2>
//                     <div className="jk-price">₹120<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 50mm</li>
//                         <li><span>Material:</span> MDF</li>
//                         <li><span>Finish:</span> Glossy</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/wooden-oak-skirting" className="jk_bnr_prd_img">
//                     <img src={product2} alt="Wooden Oak Skirting"/>
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2><a href="/wooden-oak-skirting">Wooden Oak Skirting</a></h2>
//                     <div className="jk-price">₹150<span>/sq ft</span></div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li><span>Height:</span> 75mm</li>
//                         <li><span>Material:</span> Solid Oak</li>
//                         <li><span>Finish:</span> Matte</li>
//                       </ul>
//                     </div>
//                     <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skirting;















import React, { useEffect } from 'react';          // Import React and useEffect hook for lifecycle management
import AOS from 'aos';                               // Import AOS (Animate On Scroll) library
import 'aos/dist/aos.css';                          // Import AOS CSS for animations
import './Skirting.css';                            // Import component-specific CSS styles

// Import images used in the Skirting component
import heroImage from './img/skirting/heroImg2.jpg';
import skirting50mm from './img/skirting/skirtingIcon-1.jpg';
import skirting75mm from './img/skirting/skirtingIcon-2.jpg';
import skirting100mm from './img/skirting/skirtingIcon-3.webp';
import product1 from './img/skirting/product1.webp';
import product2 from './img/skirting/product2.webp';
import product3 from './img/skirting/product3.webp';
import product4 from './img/skirting/product4.webp';
import product5 from './img/skirting/product5.webp';
import product6 from './img/skirting/prodcut6.webp';
import product7 from './img/skirting/product7.webp';
import product8 from './img/skirting/product8.webp';
import viewAllImage from './img/skirting/product1.webp';

// Skirting component: showcases skirting profiles and product listings with animations
const Skirting = () => {
  // Initialize AOS animations when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,         // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for smooth animation
      once: true             // Run animation once per element
    });
  }, []);

  return (
    // Wrapper for the entire page content
    <div className="skirting-page">

      {/* Hero Banner Section */}
      <section className="hero-section">
        {/* Background image for the hero banner */}
        <img
          src={heroImage}
          alt="Premium Skirting Solutions"
          className="hero-image"
        />
        {/* Overlay layer for text contrast */}
        <div className="hero-overlay">
          <div className="hero-content">
            {/* Hero heading with fade-up animation */}
            <h1 data-aos="fade-up">Premium Skirting Profiles</h1>
          </div>
        </div>
      </section>

      {/* Category List Section */}
      <section className="category-section">
        {/* Container to center content */}
        <div className="container">
          {/* Grid layout for category items */}
          <div className="category-grid">
            {/* Category item: 50MM Skirting */}
            <a href="/skirting-50mm" className="category-item" data-aos="fade-up">
              <div className="category-image-wrapper">
                {/* Category icon image */}
                <img src={skirting50mm} alt="50MM Skirting" className="category-image" />
              </div>
              <div className="category-content">
                {/* Category title */}
                <h3>50MM Skirting</h3>
              </div>
            </a>

            {/* Category item: 75MM Skirting */}
            <a href="/skirting-75mm" className="category-item" data-aos="fade-up" data-aos-delay="100">
              <div className="category-image-wrapper">
                <img src={skirting75mm} alt="75MM Skirting" className="category-image" />
              </div>
              <div className="category-content">
                <h3>75MM Skirting</h3>
              </div>
            </a>

            {/* Category item: 100MM Skirting */}
            <a href="/skirting-100mm" className="category-item" data-aos="fade-up" data-aos-delay="200">
              <div className="category-image-wrapper">
                <img src={skirting100mm} alt="100MM Skirting" className="category-image" />
              </div>
              <div className="category-content">
                <h3>100MM Skirting</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="product-showcase-section">
        {/* Container to center and constrain width */}
        <div className="container">
          {/* Carousel wrapper for product rows */}
          <div className="ps-section__carousel">

            {/* First Row: two main products and a 'view all' card */}
            <div className="row" data-aos="fade-up">
              {/* Left side: two featured products (9/12 width) */}
              <div className="col-md-9">
                <div className="row">

                  {/* Product 1 card */}
                  <div className="col-md-6">
                    <div className="jk-banner-product-wrapper">
                      {/* Link wrapper for product image */}
                      <a href="/classic-white-skirting" className="jk_bnr_prd_img">
                        <img src={product1} alt="Classic White Skirting" />
                      </a>
                      {/* Product details content */}
                      <div className="jk-banner-product-content">
                        {/* Product title with link */}
                        <h2><a href="/classic-white-skirting">Classic White Skirting</a></h2>
                        {/* Price display */}
                        <div className="jk-price">₹120<span>/sq ft</span></div>
                        {/* Product attributes list */}
                        <div className="jk-list-info">
                          <ul>
                            <li><span>Height:</span> 50mm</li>
                            <li><span>Material:</span> MDF</li>
                            <li><span>Finish:</span> Glossy</li>
                          </ul>
                        </div>
                        {/* Get Quote button */}
                        <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
                      </div>
                    </div>
                  </div>

                  {/* Product 2 card */}
                  <div className="col-md-6">
                    <div className="jk-banner-product-wrapper">
                      <a href="/wooden-oak-skirting" className="jk_bnr_prd_img">
                        <img src={product2} alt="Wooden Oak Skirting" />
                      </a>
                      <div className="jk-banner-product-content">
                        <h2><a href="/wooden-oak-skirting">Wooden Oak Skirting</a></h2>
                        <div className="jk-price">₹150<span>/sq ft</span></div>
                        <div className="jk-list-info">
                          <ul>
                            <li><span>Height:</span> 75mm</li>
                            <li><span>Material:</span> Solid Oak</li>
                            <li><span>Finish:</span> Matte</li>
                          </ul>
                        </div>
                        <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right side: 'View All' card (3/12 width) */}
              <div className="col-md-3">
                <div className="jk-banner-right">
                  {/* Link to view all products */}
                  <a href="/all-products" className="view-all-link">
                    {/* Thumbnail image for view all */}
                    <div className="tp_bnr_vm_img">
                      <img src={viewAllImage} alt="View All Products" />
                    </div>
                    {/* View all text and icon */}
                    <div className="view-all-text">
                      <h2>View Complete Range of Products</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Row: four additional product cards */}
            <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
              {/* Repeat structure for products 3-6 */}
              {[product3, product4, product5, product6].map((prod, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="jk-banner-product-wrapper">
                    <a href="/" className="jk_bnr_prd_img">
                      <img src={prod} alt="Product Image" />
                    </a>
                    <div className="jk-banner-product-content">
                      <h2><a href="/">Product Title</a></h2>
                      <div className="jk-price">₹XXX<span>/sq ft</span></div>
                      <div className="jk-list-info"><ul><li>Specs...</li></ul></div>
                      <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row: four more product cards */}
            <div className="row home_boxes" data-aos="fade-up" data-aos-delay="200">
              {/* Repeat structure for products 7-8 and reuse first two */}
              {[product7, product8, product1, product2].map((prod, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="jk-banner-product-wrapper">
                    <a href="/" className="jk_bnr_prd_img">
                      <img src={prod} alt="Product Image" />
                    </a>
                    <div className="jk-banner-product-content">
                      <h2><a href="/">Product Title</a></h2>
                      <div className="jk-price">₹XXX<span>/sq ft</span></div>
                      <div className="jk-list-info"><ul><li>Specs...</li></ul></div>
                      <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div> {/* End of carousel wrapper */}
        </div>  {/* End of container */}
      </section>  {/* End of Product Showcase Section */}
    </div>  /* End of skirting-page wrapper */
  );
};

export default Skirting;  // Export Skirting component for use in routing or parent components
