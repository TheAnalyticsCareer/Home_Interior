
// import React, { useEffect } from 'react';
// import './Carpet.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // ====== Import images ======
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

// // ====== Constants for Category List ======
// const categories = [
//   { title: "Wall to Wall carpet", img: Carpet50mm, link: "/skirting-50mm" },
//   { title: "Wall To Wall Floor Carpets", img: Carpet75mm, link: "/skirting-75mm" },
//   { title: "Hotel carpet", img: product3, link: "/hotel-carpet" },
//   { title: "Hand Tuffted Carpet", img: Carpet100mm, link: "/hand-tuffted-carpet" },
// ];

// // ====== Constants for Main Products ======
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

// // ====== Constants for Other Products ======
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
//   // ====== Initialize AOS Animation Library on Component Mount ======
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
//   }, []);

//   return (
//     <div className="carpet-page">
      
//       {/* ====== Hero Section ====== */}
//       <section className="hero-section">
//         <img src={heroImage} alt="Premium Carpet Solutions" className="hero-image" />
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1 data-aos="fade-up">Premium Carpet Profiles</h1>
//           </div>
//         </div>
//       </section>

//       {/* ====== Category Section ====== */}
//       <section className="category-section">
//         <div className="container">
//           <div className="category-grid">
//             {categories.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.link}
//                 className="category-item"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
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

//       {/* ====== Product Showcase Section ====== */}
//       <section className="product-showcase-section">
//         <div className="container">
//           <div className="ps-section__carousel">
            
//             {/* ====== Main Products Row ====== */}
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
//                           {/* Get Quote Button */}
//                           <button className="ps-btn ps-btn--warning get-q-btn">Get Quote</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ====== View All Button Section ====== */}
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

//             {/* ====== Other Products Row ====== */}
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
//                       {/* Get Quote Button */}
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













import React, { useState, useEffect } from 'react';
import './Carpet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ====== Import images ======
import heroImage from "./img/skirting/heroImg2.jpg";
import Carpet50mm from "./img/carpet/app1-500x500.webp";
import Carpet75mm from "./img/carpet/luxury-carpets-500x500.webp";
import Carpet100mm from "./img/carpet/trump-carpet-500x500.webp";
import product1 from "./img/carpet/carpets-for-media-room-500x500.webp";
import product2 from "./img/carpet/carpet-rolls-foam-for-theater-auditorium-500x500.webp";
import product3 from "./img/carpet/cut-pile-carpet-500x500.webp";
import product4 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
import product5 from "./img/carpet/welspun-carpet-tiles-1000x1000.webp";
import product6 from "./img/carpet/cumaru-solid-exotic-wood-flooring-250x250.webp";
import product7 from "./img/carpet/herinbong-laminate-flooring-250x250.webp";
import product8 from "./img/carpet/tigerwood-engineered-flooring-250x250.webp";
import viewAllImage from "./img/carpet/plain-nylon-carpet-250x250.webp";

// ====== Constants for Category List ======
const categories = [
  { title: "Wall to Wall carpet", img: Carpet50mm, link: "/skirting-50mm" },
  { title: "Wall To Wall Floor Carpets", img: Carpet75mm, link: "/skirting-75mm" },
  { title: "Hotel carpet", img: product3, link: "/hotel-carpet" },
  { title: "Hand Tuffted Carpet", img: Carpet100mm, link: "/hand-tuffted-carpet" },
];

// ====== Constants for Main Products ======
const mainProducts = [
  {
    id: 'mp1',
    img: product1,
    title: "Carpets For Media Room",
    link: "/classic-white-skirting",
    price: "₹120",
    height: "50mm",
    material: "MDF",
    finish: "Glossy",
  },
  {
    id: 'mp2',
    img: product2,
    title: "Wall To Wall Floor Carpets",
    link: "/wooden-oak-skirting",
    price: "₹150",
    height: "75mm",
    material: "Solid Oak",
    finish: "Matte",
  },
];

// ====== Constants for Other Products ======
const otherProducts = [
  {
    id: 'op1',
    img: product3,
    title: "Cut Pile Carpet",
    link: "/modern-grey-skirting",
    price: "₹110",
    height: "50mm",
    material: "PVC",
    finish: "Matte",
  },
  {
    id: 'op2',
    img: product4,
    title: "Stone Nylon Matte Carpet Tiles",
    link: "/aluminum-skirting",
    price: "₹180",
    height: "100mm",
    material: "Aluminum",
    finish: "Brushed",
  },
  {
    id: 'op3',
    img: product5,
    title: "Raven Matte Nylon Carpet Tiles",
    link: "/flexible-pvc-skirting",
    price: "₹95",
    height: "50mm",
    material: "PVC",
    finish: "Glossy",
  },
  {
    id: 'op4',
    img: product6,
    title: "Exotic Wood Flooring",
    link: "/heritage-skirting",
    price: "₹200",
    height: "100mm",
    material: "Hardwood",
    finish: "Polished",
  },
  {
    id: 'op5',
    img: product7,
    title: "Polished Nylon Carpet Tiles",
    link: "/minimalist-skirting",
    price: "₹85",
    height: "40mm",
    material: "MDF",
    finish: "Matte",
  },
  {
    id: 'op6',
    img: product8,
    title: "Floor Profiles",
    link: "/contemporary-skirting",
    price: "₹160",
    height: "75mm",
    material: "Wood Composite",
    finish: "Satin",
  },
  {
    id: 'op7',
    img: product1,
    title: "Polished Engineered Flooring",
    link: "/classic-white-skirting",
    price: "₹120",
    height: "50mm",
    material: "MDF",
    finish: "Glossy",
  },
  {
    id: 'op8',
    img: product2,
    title: "Carpet Roll Foam",
    link: "/wooden-oak-skirting",
    price: "₹150",
    height: "75mm",
    material: "Solid Oak",
    finish: "Matte",
  },
];

const Carpet = () => {
  // ====== State for Modal Management ======
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  // ====== Initialize AOS Animation Library on Component Mount ======
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  // ====== Modal Control Functions ======
  const openModal = (productId) => {
    // Find product in either mainProducts or otherProducts
    const product = [...mainProducts, ...otherProducts].find(p => p.id === productId);
    setCurrentProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPhoneNumber('');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Quote request for:', currentProduct.title, 'Phone:', phoneNumber);
    // Close modal after submission
    closeModal();
    // You might want to show a success message here
  };

  return (
    <div className="carpet-page">
      
      {/* ====== Hero Section ====== */}
      <section className="hero-section">
        <img src={heroImage} alt="Premium Carpet Solutions" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 data-aos="fade-up">Premium Carpet Profiles</h1>
          </div>
        </div>
      </section>

      {/* ====== Category Section ====== */}
      <section className="category-section">
        <div className="container">
          <div className="category-grid">
            {categories.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="category-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="category-image-wrapper">
                  <img src={item.img} alt={item.title} className="category-image" />
                </div>
                <div className="category-content">
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Product Showcase Section ====== */}
      <section className="product-showcase-section">
        <div className="container">
          <div className="ps-section__carousel">
            
            {/* ====== Main Products Row ====== */}
            <div className="row" data-aos="fade-up">
              <div className="col-md-9">
                <div className="row">
                  {mainProducts.map((product, idx) => (
                    <div key={idx} className="col-md-6">
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
                          {/* Get Quote Button */}
                          <button 
                            className="ps-btn ps-btn--warning get-q-btn"
                            onClick={() => openModal(product.id)}
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ====== View All Button Section ====== */}
              <div className="col-md-3">
                <div className="jk-banner-right">
                  <a href="/all-products" className="view-all-link">
                    <div className="tp_bnr_vm_img">
                      <img src={viewAllImage} alt="View All Products" />
                    </div>
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

            {/* ====== Other Products Row ====== */}
            <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
              {otherProducts.map((product, idx) => (
                <div key={idx} className="col-md-3">
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
                      {/* Get Quote Button */}
                      <button 
                        className="ps-btn ps-btn--warning get-q-btn"
                        onClick={() => openModal(product.id)}
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

      {/* ====== Quote Modal ====== */}
      {isModalOpen && currentProduct && (
        <div className="quote-modal-overlay">
          <div className="quote-modal" data-aos="zoom-in">
            {/* Close Button */}
            <button className="close-modal" onClick={closeModal}>
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Modal Content */}
            <div className="modal-content">
              {/* Product Information */}
              <div className="product-info">
                <img
                  src={currentProduct.img}
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

              {/* Contact Form */}
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

export default Carpet;