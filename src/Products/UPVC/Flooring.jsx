




// import React, { useEffect } from 'react';             // Import React and useEffect for component lifecycle
// import './Flooring.css';                              // Import component-specific CSS
// import AOS from 'aos';                                 // Import AOS library for scroll animations
// import 'aos/dist/aos.css';                            // Import AOS CSS for animations

// // Import images for hero, categories, products, and view-all card
// import heroImage from "./img/skirting/heroImg2.jpg";
// import Category1 from "./img/flooring/african-mahogany-engineered-wood-flooring-500x500.webp";
// import Category2 from "./img/flooring/aluminium-acoustic-slim-glass-partition-for-office-500x500.webp";
// import Category3 from "./img/flooring/aluminum-slim-glass-partition-500x500.webp";
// import Category4 from "./img/flooring/nordic-oak-wood-500x500.webp";
// import Category5 from "./img/flooring/oak-wood-flooring-500x500.webp";
// import Category6 from "./img/flooring/plain-wooden-flooring-500x500.webp";
// import Category7 from "./img/flooring/slimline-glass-partition-500x500.webp";

// import product1 from "./img/flooring/american-red-oak-flooring-1000x1000.webp";
// import product2 from "./img/flooring/american-walnut-engineered-flooring-500x500.webp";
// import product3 from "./img/flooring/bamboo-hardwood-flooring-1000x1000.webp";
// import product4 from "./img/flooring/canadian-maple-engineered-flooring-500x500.webp";
// import product5 from "./img/flooring/flooring card.webp";
// import product6 from "./img/flooring/jason-hafso-YypTXBPF5S4-unsplash.jpg";
// import product7 from "./img/flooring/jatoba-engineered-wood-laminate-flooring-500x500.webp";
// import product8 from "./img/flooring/mahagony-engineered-wood-flooring-500x500.webp";
// import product9 from "./img/flooring/mahagony-engineered-wood-flooring-500x500.webp";
// import product10 from "./img/flooring/mahagony-engineered-wood-flooring-500x500.webp";

// import viewAllImage from "./img/flooring/mahagony-solid-hardwood-flooring-500x500.webp"; // Thumbnail for "View All" card

// // Category data array for mapping category cards
// const categories = [
//   { link: "/skirting-50mm", image: Category1, title: "Laminate Flooring" },
//   { link: "/hotel-carpet", image: Category2, title: "SPC Flooring" },
//   { link: "/hand-tuffted-carpet", image: Category3, title: "Engineered Flooring" },
//   { link: "/hotel-carpet", image: Category4, title: "Hardwood Flooring" },
//   { link: "/hotel-carpet", image: Category5, title: "Bamboo Flooring" },
//   { link: "/hotel-carpet", image: Category6, title: "Decking Wood" },
//   { link: "/hotel-carpet", image: Category7, title: "ThermoPineg" },
// ];

// // Product data array for mapping product showcase cards
// const products = [
//   { link: "/classic-white-skirting", image: product1, title: "Carpets For Media Room", price: "₹120", height: "50mm", material: "MDF", finish: "Glossy" },
//   { link: "/wooden-oak-skirting", image: product2, title: "Wall To Wall Floor Carpets", price: "₹150", height: "75mm", material: "Solid Oak", finish: "Matte" },
//   { link: "/modern-grey-skirting", image: product3, title: "Cut Pile Carpet", price: "₹110", height: "50mm", material: "PVC", finish: "Matte" },
//   { link: "/aluminum-skirting", image: product4, title: "Stone Nylon Matte Carpet Tiles", price: "₹180", height: "100mm", material: "Aluminum", finish: "Brushed" },
//   { link: "/flexible-pvc-skirting", image: product5, title: "Raven Matte Nylon Carpet Tiles", price: "₹95", height: "50mm", material: "PVC", finish: "Glossy" },
//   { link: "/heritage-skirting", image: product6, title: "Exotic Wood Flooring", price: "₹200", height: "100mm", material: "Hardwood", finish: "Polished" },
//   { link: "/minimalist-skirting", image: product7, title: "Polished Nylon Carpet Tiles", price: "₹85", height: "40mm", material: "MDF", finish: "Matte" },
//   { link: "/contemporary-skirting", image: product8, title: "Floor Profiles", price: "₹160", height: "75mm", material: "Wood Composite", finish: "Satin" },
//   { link: "/contemporary-skirting", image: product9, title: "Floor Profiles", price: "₹160", height: "75mm", material: "Wood Composite", finish: "Satin" },
//   { link: "/contemporary-skirting", image: product10, title: "Floor Profiles", price: "₹160", height: "75mm", material: "Wood Composite", finish: "Satin" },
// ];

// // Flooring component: displays hero, categories, and product showcase with animations
// const Flooring = () => {
//   // Initialize AOS on mount for scroll animations
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
//   }, []);

//   return (
//     // Wrapper for the entire flooring page
//     <div className="carpet-page">

//       {/* Hero Section: large banner with overlay text */}
//       <section className="hero-section">
//         {/* Hero image */}
//         <img src={heroImage} alt="Premium Carpet Solutions" className="hero-image" />
//         {/* Overlay container for hero heading */}
//         <div className="hero-overlay">
//           <div className="hero-content">
//             {/* Animated hero title */}
//             <h1 data-aos="fade-up">Premium Carpet Profiles</h1>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section: grid of clickable category cards */}
//       <section className="category-section">
//         {/* Centered container */}
//         <div className="container">
//           {/* Grid wrapper */}
//           <div className="category-grid">
//             {categories.map((cat, index) => (
//               // Single category card
//               <a href={cat.link} className="category-item" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
//                 {/* Image wrapper */}
//                 <div className="category-image-wrapper">
//                   <img src={cat.image} alt={cat.title} className="category-image" />
//                 </div>
//                 {/* Text content */}
//                 <div className="category-content">
//                   <h3>{cat.title}</h3>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Section: showcase products in rows */}
//       <section className="product-showcase-section">
//         <div className="container">
//           <div className="ps-section__carousel">

//             {/* First Row: two main products + view-all card */}
//             <div className="row" data-aos="fade-up">
//               {/* Left: first two products (span 9/12) */}
//               <div className="col-md-9">
//                 <div className="row">
//                   {products.slice(0, 2).map((prod, idx) => (
//                     <div className="col-md-6" key={idx}>
//                       <div className="jk-banner-product-wrapper">
//                         {/* Product image link */}
//                         <a href={prod.link} className="jk_bnr_prd_img">
//                           <img src={prod.image} alt={prod.title} />
//                         </a>
//                         {/* Product details */}
//                         <div className="jk-banner-product-content">
//                           <h2><a href={prod.link}>{prod.title}</a></h2>
//                           <div className="jk-price">{prod.price}<span>/sq ft</span></div>
//                           <div className="jk-list-info">
//                             <ul>
//                               <li><span>Height:</span> {prod.height}</li>
//                               <li><span>Material:</span> {prod.material}</li>
//                               <li><span>Finish:</span> {prod.finish}</li>
//                             </ul>
//                           </div>
//                           <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right: view all products card (span 3/12) */}
//               <div className="col-md-3">
//                 <div className="jk-banner-right">
//                   <a href="/all-products" className="view-all-link">
//                     {/* Thumbnail image */}
//                     <div className="tp_bnr_vm_img">
//                       <img src={viewAllImage} alt="View All Products" />
//                     </div>
//                     {/* Text and arrow icon */}
//                     <div className="view-all-text">
//                       <h2>View Complete Range of Products</h2>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
//                         <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Next 4 Products Row */}
//             <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
//               {products.slice(2, 6).map((prod, idx) => (
//                 <div className="col-md-3" key={idx}>
//                   <div className="jk-banner-product-wrapper">
//                     <a href={prod.link} className="jk_bnr_prd_img">
//                       <img src={prod.image} alt={prod.title} />
//                     </a>
//                     <div className="jk-banner-product-content">
//                       <h2><a href={prod.link}>{prod.title}</a></h2>
//                       <div className="jk-price">{prod.price}<span>/sq ft</span></div>
//                       <div className="jk-list-info">
//                         <ul>
//                           <li><span>Height:</span> {prod.height}</li>
//                           <li><span>Material:</span> {prod.material}</li>
//                           <li><span>Finish:</span> {prod.finish}</li>
//                         </ul>
//                       </div>
//                       <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Remaining Products Row */}
//             <div className="row home_boxes" data-aos="fade-up" data-aos-delay="200">
//               {products.slice(6).map((prod, idx) => (
//                 <div className="col-md-3" key={idx}>
//                   <div className="jk-banner-product-wrapper">
//                     <a href={prod.link} className="jk_bnr_prd_img">
//                       <img src={prod.image} alt={prod.title} />
//                     </a>
//                     <div className="jk-banner-product-content">
//                       <h2><a href={prod.link}>{prod.title}</a></h2>
//                       <div className="jk-price">{prod.price}<span>/sq ft</span></div>
//                       <div className="jk-list-info">
//                         <ul>
//                           <li><span>Height:</span> {prod.height}</li>
//                           <li><span>Material:</span> {prod.material}</li>
//                           <li><span>Finish:</span> {prod.finish}</li>
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

// export default Flooring;  // Export Flooring component for routing or parent use






import React, { useState, useEffect } from 'react';
import './Flooring.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images for hero, categories, products, and view-all card
import heroImage from "./img/skirting/heroImg2.jpg";
import Category1 from "./img/flooring/Red-laminate-floor-color-example-apr19.jpg";
import Category2 from "./img/flooring/Remarkable-Features-of-SPC-Flooring.webp";
import Category3 from "./img/flooring/Best-Engineered-Hardwood-Flooring-Brand-Reviews-Comparison-UK.jpg";
import Category4 from "./img/flooring/hardwood-coswick-herringbone-collection-1.webp";
import Category5 from "./img/flooring/bamboo -flooring.jpg";
import Category6 from "./img/flooring/decking-wood.jpg";
import Category7 from "./img/flooring/thermopine.jpg";

import product1 from "./img/flooring/oak-silver-pearl-wooden-flooring-500x500.webp";
import product2 from "./img/flooring/american-red-oak-flooring-500x500.webp";
import product3 from "./img/flooring/oak-wood-flooring-500x500.webp";
import product4 from "./img/flooring/Arch2O-7-best-flooring-types-for-an-impressive-interior-3-700x525.jpg";
import product5 from "./img/flooring/Linoleum Flooring.jpg";
import product6 from "./img/flooring/cumaru-500x500.webp";
import product7 from "./img/flooring/canadian-maple-engineered-flooring-500x500.webp";
import product8 from "./img/flooring/rich-wood-collection-250x250.webp";
import product9 from "./img/flooring/weathered-oak-wooden-flooring-250x250.webp";
import product10 from "./img/flooring/american-walnut-wooden-flooring-250x250.webp";

import viewAllImage from "./img/flooring/plain-wooden-flooring-500x500.webp"; // Thumbnail for "View All" card

// Category data array for mapping category cards
const categories = [
  { link: "/skirting-50mm", image: Category1, title: "Laminate Flooring" },
  { link: "/hotel-carpet", image: Category2, title: "SPC Flooring" },
  { link: "/hand-tuffted-carpet", image: Category3, title: "Engineered Flooring" },
  { link: "/hotel-carpet", image: Category4, title: "Hardwood Flooring" },
  { link: "/hotel-carpet", image: Category5, title: "Bamboo Flooring" },
  { link: "/hotel-carpet", image: Category6, title: "Decking Wood" },
  { link: "/hotel-carpet", image: Category7, title: "Thermo Pine" },
];

// Product data array for mapping product showcase cards
const products = [
  { id: 'p1', link: "/classic-white-skirting", image: product1, title: "Oak Silver Pearl Wooden Flooring", price: "₹120", height: "50mm", material: "MDF", finish: "Glossy" },
  { id: 'p2', link: "/wooden-oak-skirting", image: product2, title: "American Red Oak Flooring", price: "₹150", height: "75mm", material: "Solid Oak", finish: "Matte" },
  { id: 'p3', link: "/modern-grey-skirting", image: product3, title: "Oak Wood Flooring", price: "₹110", height: "50mm", material: "PVC", finish: "Matte" },
  { id: 'p4', link: "/aluminum-skirting", image: product4, title: "Hardwood Flooring", price: "₹180", height: "100mm", material: "Aluminum", finish: "Brushed" },
  { id: 'p5', link: "/flexible-pvc-skirting", image: product5, title: "Linoleum Flooring", price: "₹95", height: "50mm", material: "PVC", finish: "Glossy" },
  { id: 'p6', link: "/heritage-skirting", image: product6, title: "Cumaru Glossy Engineered Flooring", price: "₹200", height: "100mm", material: "Hardwood", finish: "Polished" },
  { id: 'p7', link: "/minimalist-skirting", image: product7, title: "Canadian Maple Glossy Engineered Flooring", price: "₹85", height: "40mm", material: "MDF", finish: "Matte" },
  { id: 'p8', link: "/contemporary-skirting", image: product8, title: "Rich Oak Wooden Flooring", price: "₹160", height: "75mm", material: "Wood Composite", finish: "Satin" },
  { id: 'p9', link: "/contemporary-skirting", image: product9, title: "Weathered Oak Wooden Flooring", price: "₹160", height: "75mm", material: "Wood Composite", finish: "Satin" },
  { id: 'p10', link: "/contemporary-skirting", image: product10, title: "American Oak Wooden Flooring", price: "₹160", height: "75mm", material: "Wood Composite", finish: "Satin" },
];

// Flooring component: displays hero, categories, and product showcase with animations
const Flooring = () => {
  // State for modal visibility and current product
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Initialize AOS on mount for scroll animations
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  // Function to open modal with product details
  const openModal = (productId) => {
    const product = products.find(p => p.id === productId);
    setCurrentProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setPhoneNumber('');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Quote request for:', currentProduct.title, 'Phone:', phoneNumber);
    // Close modal after submission
    closeModal();
    // You might want to show a success message here
  };

  return (
    // Wrapper for the entire flooring page
    <div className="carpet-page">

      {/* Hero Section: large banner with overlay text */}
      <section className="hero-section">
        {/* Hero image */}
        <img src={heroImage} alt="Premium Carpet Solutions" className="hero-image" />
        {/* Overlay container for hero heading */}
        <div className="hero-overlay">
          <div className="hero-content">
            {/* Animated hero title */}
            <h1 data-aos="fade-up">Premium Flooring</h1>
          </div>
        </div>
      </section>

      {/* Categories Section: grid of clickable category cards */}
      <section className="category-section">
        {/* Centered container */}
        <div className="container">
          {/* Grid wrapper */}
          <div className="category-grid">
            {categories.map((cat, index) => (
              // Single category card
              <a href={cat.link} className="category-item" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                {/* Image wrapper */}
                <div className="category-image-wrapper">
                  <img src={cat.image} alt={cat.title} className="category-image" />
                </div>
                {/* Text content */}
                <div className="category-content">
                  <h3>{cat.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section: showcase products in rows */}
      <section className="product-showcase-section">
        <div className="container">
          <div className="ps-section__carousel">

            {/* First Row: two main products + view-all card */}
            <div className="row" data-aos="fade-up">
              {/* Left: first two products (span 9/12) */}
              <div className="col-md-9">
                <div className="row">
                  {products.slice(0, 2).map((prod, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="jk-banner-product-wrapper">
                        {/* Product image link */}
                        <a href={prod.link} className="jk_bnr_prd_img">
                          <img src={prod.image} alt={prod.title} />
                        </a>
                        {/* Product details */}
                        <div className="jk-banner-product-content">
                          <h2><a href={prod.link}>{prod.title}</a></h2>
                          <div className="jk-price">{prod.price}<span>/sq ft</span></div>
                          <div className="jk-list-info">
                            <ul>
                              <li><span>Height:</span> {prod.height}</li>
                              <li><span>Material:</span> {prod.material}</li>
                              <li><span>Finish:</span> {prod.finish}</li>
                            </ul>
                          </div>
                          <button 
                            className="ps-btn ps-btn--warning get-q-btn"
                            onClick={() => openModal(prod.id)}
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: view all products card (span 3/12) */}
              <div className="col-md-3">
                <div className="jk-banner-right">
                  <a href="/productPage" className="view-all-link">
                    {/* Thumbnail image */}
                    <div className="tp_bnr_vm_img">
                      <img src={viewAllImage} alt="View All Products" />
                    </div>
                    {/* Text and arrow icon */}
                    <div className="view-all-text">
                      <h2>View Complete Range of Products</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Next 4 Products Row */}
            <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
              {products.slice(2, 6).map((prod, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="jk-banner-product-wrapper">
                    <a href={prod.link} className="jk_bnr_prd_img">
                      <img src={prod.image} alt={prod.title} />
                    </a>
                    <div className="jk-banner-product-content">
                      <h2><a href={prod.link}>{prod.title}</a></h2>
                      <div className="jk-price">{prod.price}<span>/sq ft</span></div>
                      <div className="jk-list-info">
                        <ul>
                          <li><span>Height:</span> {prod.height}</li>
                          <li><span>Material:</span> {prod.material}</li>
                          <li><span>Finish:</span> {prod.finish}</li>
                        </ul>
                      </div>
                      <button 
                        className="ps-btn ps-btn--warning get-q-btn"
                        onClick={() => openModal(prod.id)}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining Products Row */}
            <div className="row home_boxes" data-aos="fade-up" data-aos-delay="200">
              {products.slice(6).map((prod, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="jk-banner-product-wrapper">
                    <a href={prod.link} className="jk_bnr_prd_img">
                      <img src={prod.image} alt={prod.title} />
                    </a>
                    <div className="jk-banner-product-content">
                      <h2><a href={prod.link}>{prod.title}</a></h2>
                      <div className="jk-price">{prod.price}<span>/sq ft</span></div>
                      <div className="jk-list-info">
                        <ul>
                          <li><span>Height:</span> {prod.height}</li>
                          <li><span>Material:</span> {prod.material}</li>
                          <li><span>Finish:</span> {prod.finish}</li>
                        </ul>
                      </div>
                      <button 
                        className="ps-btn ps-btn--warning get-q-btn"
                        onClick={() => openModal(prod.id)}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal - Shows when Get Quote button is clicked */}
      {isModalOpen && currentProduct && (
        <div className="quote-modal-overlay">
          <div className="quote-modal" data-aos="zoom-in">
            {/* Close button with large clickable area */}
            <button className="close-modal" onClick={closeModal}>
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Modal content container */}
            <div className="modal-content">
              {/* Product information section */}
              <div className="product-info">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="modal-product-image"
                />
                <div className="product-details">
                  <h3>{currentProduct.title}</h3>
                  <div className="modal-price">
                    {currentProduct.price}
                    <span>/sq ft</span>
                  </div>
                  <ul className="modal-specs">
                    <li><span>Height:</span> {currentProduct.height}</li>
                    <li><span>Material:</span> {currentProduct.material}</li>
                    <li><span>Finish:</span> {currentProduct.finish}</li>
                  </ul>
                </div>
              </div>

              {/* Contact form section */}
              <div className="contact-form">
                <p className="contact-message">
                  We'll contact you shortly with the quote details
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="form-input"
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flooring;