

// import React, { useState, useEffect } from 'react';
// import './Aluminium_glass.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // ====== Import images ======
// import heroImage from "./img/skirting/heroImg2.jpg";
// import Carpet1 from "./img/aluminium_glass/curved-glass-partition-1000x1000.webp";
// import Carpet2 from "./img/aluminium_glass/aluminum-slim-glass-partition-1000x1000.webp";
// import Carpet3 from "./img/aluminium_glass/aluminium-acoustic-slim-glass-partition-for-office-1000x1000.webp";
// import product9 from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-1000x1000.webp";
// import product2 from "./img/aluminium_glass/slim-line.webp";
// import product10 from "./img/aluminium_glass/aluminium-grid-partition-500x500.webp";
// import viewAllImage from "./img/carpet/plain-nylon-carpet-250x250.webp";

// // ====== Constants for Category List ======
// const categories = [
//   { title: "Curved Glass Partition", img: Carpet1, link: "/skirting-50mm" },
//   { title: "Aluminum Slim Glass Partition", img: Carpet2, link: "/skirting-75mm" },
//   { title: "Aluminium Acoustic Slim Glass Partition, For Office", img: Carpet3, link: "/hotel-carpet" },
// ];

// // ====== Constants for Main Products ======
// const mainProducts = [
//   {
//     id: 'mp1',
//     img: product9,
//     title: "Transparent Laminated Glass Partition, For Office",
//     link: "/classic-white-skirting",
//     price: "₹120",
//     height: "50mm",
//     material: "MDF",
//     finish: "Glossy",
//   },
//   {
//     id: 'mp2',
//     img: product10,
//     title: "Aluminium Grid Partition",
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
//     id: 'op8',
//     img: product2,
//     title: "Slimline Glass Partition",
//     link: "/wooden-oak-skirting",
//     price: "₹150",
//     height: "75mm",
//     material: "Solid Oak",
//     finish: "Matte",
//   }
 
// ];

// const Aluminium_glass = () => {
//   // ====== State for Modal Management ======
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');

//   // ====== Initialize AOS Animation Library on Component Mount ======
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
//   }, []);

//   // ====== Modal Control Functions ======
//   const openModal = (productId) => {
//     // Find product in either mainProducts or otherProducts
//     const product = [...mainProducts, ...otherProducts].find(p => p.id === productId);
//     setCurrentProduct(product);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setPhoneNumber('');
//     document.body.style.overflow = 'auto'; // Re-enable scrolling
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Quote request for:', currentProduct.title, 'Phone:', phoneNumber);
//     // Close modal after submission
//     closeModal();
//     // You might want to show a success message here
//   };

//   return (
//     <div className="carpet-page">
      
//       {/* ====== Hero Section ====== */}
//       <section className="hero-section">
//         <img src={heroImage} alt="Premium Carpet Solutions" className="hero-image" />
//         <div className="hero-overlay">
//           <div className="hero-content">
//             <h1 data-aos="fade-up">Aluminium Modular Glass Partition</h1>
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
//                           <button 
//                             className="ps-btn ps-btn--warning get-q-btn"
//                             onClick={() => openModal(product.id)}
//                           >
//                             Get Quote
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ====== View All Button Section ====== */}
//               <div className="col-md-3">
//                 <div className="jk-banner-right">
//                   <a href="/productPage" className="view-all-link">
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
//                       <button 
//                         className="ps-btn ps-btn--warning get-q-btn"
//                         onClick={() => openModal(product.id)}
//                       >
//                         Get Quote
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ====== Quote Modal ====== */}
//       {isModalOpen && currentProduct && (
//         <div className="quote-modal-overlay">
//           <div className="quote-modal" data-aos="zoom-in">
//             {/* Close Button */}
//             <button className="close-modal" onClick={closeModal}>
//               <span className="material-symbols-outlined">close</span>
//             </button>

//             {/* Modal Content */}
//             <div className="modal-content">
//               {/* Product Information */}
//               <div className="product-info">
//                 <img
//                   src={currentProduct.img}
//                   alt={currentProduct.title}
//                   className="modal-product-image"
//                 />
//                 <div className="product-details">
//                   <h3>{currentProduct.title}</h3>
//                   <div className="modal-price">
//                     {currentProduct.price}
//                     <span>/sq ft</span>
//                   </div>
//                   <ul className="modal-specs">
//                     <li><span>Height:</span> {currentProduct.height}</li>
//                     <li><span>Material:</span> {currentProduct.material}</li>
//                     <li><span>Finish:</span> {currentProduct.finish}</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className="contact-form">
//                 <p className="contact-message">
//                   We'll contact you shortly with the quote details
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="phone">Phone Number</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       placeholder="Enter your phone number"
//                       required
//                       className="form-input"
//                     />
//                   </div>
//                   <button type="submit" className="submit-btn">
//                     Submit Request
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Aluminium_glass ;
























import React, { useState, useEffect } from 'react';
import './Aluminium_glass.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import images
import heroImage from "./img/skirting/heroImg2.jpg";
import Carpet1 from "./img/aluminium_glass/curved-glass-partition-1000x1000.webp";
import Carpet2 from "./img/aluminium_glass/aluminum-slim-glass-partition-1000x1000.webp";
import Carpet3 from "./img/aluminium_glass/aluminium-acoustic-slim-glass-partition-for-office-1000x1000.webp";
import product9 from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-1000x1000.webp";
import product2 from "./img/aluminium_glass/slim-line.webp";
import product10 from "./img/aluminium_glass/aluminium-grid-partition-500x500.webp";
import viewAllImage from "./img/carpet/plain-nylon-carpet-250x250.webp";

// Categories data
const categories = [
  { title: "Curved Glass Partition", img: Carpet1, link: "/skirting-50mm" },
  { title: "Aluminum Slim Glass Partition", img: Carpet2, link: "/skirting-75mm" },
  { title: "Aluminium Acoustic Slim Glass Partition, For Office", img: Carpet3, link: "/hotel-carpet" },
];

// Products data
const products = {
  mainProducts: [
    {
      id: 'mp1',
      img: product9,
      name: "Transparent Laminated Glass Partition, For Office",
      link: "/classic-white-skirting",
      price: "₹120",
      details: [
        { label: "Height", value: "50mm" },
        { label: "Material", value: "MDF" },
        { label: "Finish", value: "Glossy" }
      ]
    },
    {
      id: 'mp2',
      img: product10,
      name: "Aluminium Grid Partition",
      link: "/wooden-oak-skirting",
      price: "₹150",
      details: [
        { label: "Height", value: "75mm" },
        { label: "Material", value: "Solid Oak" },
        { label: "Finish", value: "Matte" }
      ]
    }
  ],
  otherProducts: [
    {
      id: 'op8',
      img: product2,
      name: "Slimline Glass Partition",
      link: "/wooden-oak-skirting",
      price: "₹150",
      details: [
        { label: "Height", value: "75mm" },
        { label: "Material", value: "Solid Oak" },
        { label: "Finish", value: "Matte" }
      ]
    }
  ]
};

const Aluminium_glass = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formik configuration
  const myFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      price: "",
      height: "",
      material: "",
      finish: "",
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await axios.post(`http://localhost:5588/submit-quote`, values);
        toast.success("Request Submitted Successfully");
        closeModal();
      } catch (err) {
        toast.error("Error While Submitting Request");
        console.error("Submission error:", err);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // Set product details when modal opens
  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setValues({
        ...myFormik.values,
        name: currentProduct.name,
        price: currentProduct.price,
        height: currentProduct.details.find(d => d.label === "Height")?.value || "",
        material: currentProduct.details.find(d => d.label === "Material")?.value || "",
        finish: currentProduct.details.find(d => d.label === "Finish")?.value || "",
        phone: "",
        email: ""
      });
    }
  }, [isModalOpen, currentProduct]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in', once: true });
  }, []);

  const openModal = (productId) => {
    // Find product in either mainProducts or otherProducts
    const product = [...products.mainProducts, ...products.otherProducts].find(p => p.id === productId);
    setCurrentProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    myFormik.resetForm();
  };

  // Helper function to render product details
  const renderProductDetails = (details) => {
    return details.map((detail, index) => (
      <li key={index}>
        <span>{detail.label}:</span> {detail.value}
      </li>
    ));
  };

  // Helper function to render product cards
  const renderProductCard = (product) => {
    return (
      <div className="jk-banner-product-wrapper">
        <a href={product.link} className="jk_bnr_prd_img">
          <img src={product.img} alt={product.name} />
        </a>
        <div className="jk-banner-product-content">
          <h2><a href={product.link}>{product.name}</a></h2>
          <div className="jk-price">{product.price}<span>/sq ft</span></div>
          <div className="jk-list-info">
            <ul>
              {renderProductDetails(product.details)}
            </ul>
          </div>
          <button 
            className="ps-btn ps-btn--warning get-q-btn"
            onClick={() => openModal(product.id)}
          >
            Get Quote
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="carpet-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImage} alt="Premium Aluminium Glass Solutions" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 data-aos="fade-up">Aluminium Modular Glass Partition</h1>
          </div>
        </div>
      </section>

      {/* Categories Section */}
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

      {/* Products Section */}
      <section className="product-showcase-section">
        <div className="container">
          <div className="ps-section__carousel">
            {/* First Row */}
            <div className="row" data-aos="fade-up">
              <div className="col-md-9">
                <div className="row">
                  {products.mainProducts.map((product, idx) => (
                    <div key={idx} className="col-md-6">
                      {renderProductCard(product)}
                    </div>
                  ))}
                </div>
              </div>

              {/* View All Section */}
              <div className="col-md-3">
                <div className="jk-banner-right">
                  <a href="/productPage" className="view-all-link">
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

            {/* Other Products Row */}
            <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
              {products.otherProducts.map((product, idx) => (
                <div key={idx} className="col-md-3">
                  {renderProductCard(product)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="quote-modal-overlay">
          <div className="quote-modal" data-aos="zoom-in">
            <button className="close-modal" onClick={closeModal}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="modal-content">
              <div className="product-info">
                <img src={currentProduct.img} alt={currentProduct.name} className="modal-product-image" />
                <div className="product-details">
                  <h3>{currentProduct.name}</h3>
                  <div className="modal-price">{currentProduct.price}<span>/sq ft</span></div>
                  <ul className="modal-specs">
                    {renderProductDetails(currentProduct.details)}
                  </ul>
                </div>
              </div>
              <div className="contact-form">
                <p className="contact-message">We'll contact you shortly with the quote details</p>
                <form onSubmit={myFormik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={myFormik.values.phone}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Phone no."
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user-email">Email</label>
                    <input
                      type="email"
                      id="user-email"
                      name="email"
                      value={myFormik.values.email}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="example@gmail.com"
                      className="form-input"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="submit-btn" 
                    disabled={isSubmitting || !myFormik.values.phone || !myFormik.values.email}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Aluminium_glass;