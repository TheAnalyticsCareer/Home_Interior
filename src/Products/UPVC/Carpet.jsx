

// import React, { useState, useEffect } from 'react';
// import './Carpet.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import images
// import heroImage from "./img/skirting/heroImg2.jpg";
// import Carpet1 from "./img/carpet/wall-to-wall-gold-patterned-carpet-blue-wall.jpg";
// import Carpet2 from "./img/carpet/Wall-to-Wall-Carpets-9-1024x1024.jpg";
// import Carpet3 from "./img/carpet/hotel carpet.jpg";
// import Carpet4 from "./img/carpet/hand-tuffed.jpg";
// import product1 from "./img/carpet/pewter.webp";
// import product2 from "./img/carpet/loop-pile-carpet-500x500.webp";
// import product3 from "./img/carpet/cut-pile-carpet-500x500.webp";
// import product4 from "./img/carpet/auditorium-carpet-500x500.webp";
// import product5 from "./img/carpet/harmony-carpet-500x500.webp";
// import product6 from "./img/carpet/banquet-carpets-500x500.webp";
// import product7 from "./img/carpet/wall-covering-500x500.webp";
// import product8 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
// import product9 from "./img/carpet/mediaroom -carpet.jpg";
// import product10 from "./img/carpet/carpetforhall.jpg";
// import viewAllImage from "./img/carpet/plain-nylon-carpet-250x250.webp";

// // Categories data
// const categories = [
//   { title: "Wall to Wall carpet", img: Carpet1, link: "/skirting-50mm" },
//   { title: "Wall To Wall Floor Carpets", img: Carpet2, link: "/skirting-75mm" },
//   { title: "Hotel carpet", img: Carpet3, link: "/hotel-carpet" },
//   { title: "Hand Tuffted Carpet", img: Carpet4, link: "/hand-tuffted-carpet" },
// ];

// // Products data
// const products = {
//   mainProducts: [
//     {
//       id: 'mp1',
//       img: product9,
//       name: "Carpets For Media Room",
//       link: "/classic-white-skirting",
//       price: "₹120",
//       details: [
//         { label: "Height", value: "50mm" },
//         { label: "Material", value: "MDF" },
//         { label: "Finish", value: "Glossy" }
//       ]
//     },
//     {
//       id: 'mp2',
//       img: product10,
//       name: "Modern design banquet hall carpet",
//       link: "/wooden-oak-skirting",
//       price: "₹150",
//       details: [
//         { label: "Height", value: "75mm" },
//         { label: "Material", value: "Solid Oak" },
//         { label: "Finish", value: "Matte" }
//       ]
//     }
//   ],
//   otherProducts: [
//     {
//       id: 'op1',
//       img: product3,
//       name: "Red Cut Pile",
//       link: "/modern-grey-skirting",
//       price: "₹110",
//       details: [
//         { label: "Height", value: "50mm" },
//         { label: "Material", value: "PVC" },
//         { label: "Finish", value: "Matte" }
//       ]
//     },
//     {
//       id: 'op2',
//       img: product4,
//       name: "Polyester Multicolor Auditorium Carpet Flooring",
//       link: "/aluminum-skirting",
//       price: "₹180",
//       details: [
//         { label: "Height", value: "100mm" },
//         { label: "Material", value: "Aluminum" },
//         { label: "Finish", value: "Brushed" }
//       ]
//     },
//     {
//       id: 'op3',
//       img: product5,
//       name: "Polyester Harmony Carpet",
//       link: "/flexible-pvc-skirting",
//       price: "₹95",
//       details: [
//         { label: "Height", value: "50mm" },
//         { label: "Material", value: "PVC" },
//         { label: "Finish", value: "Glossy" }
//       ]
//     },
//     {
//       id: 'op4',
//       img: product6,
//       name: "Banquet Carpets",
//       link: "/heritage-skirting",
//       price: "₹200",
//       details: [
//         { label: "Height", value: "100mm" },
//         { label: "Material", value: "Hardwood" },
//         { label: "Finish", value: "Polished" }
//       ]
//     },
//     {
//       id: 'op5',
//       img: product7,
//       name: "Wall To Wall Carpets",
//       link: "/minimalist-skirting",
//       price: "₹85",
//       details: [
//         { label: "Height", value: "40mm" },
//         { label: "Material", value: "MDF" },
//         { label: "Finish", value: "Matte" }
//       ]
//     },
//     {
//       id: 'op6',
//       img: product8,
//       name: "Arabica Matte Nylon Carpet Tiles",
//       link: "/contemporary-skirting",
//       price: "₹160",
//       details: [
//         { label: "Height", value: "75mm" },
//         { label: "Material", value: "Wood Composite" },
//         { label: "Finish", value: "Satin" }
//       ]
//     },
//     {
//       id: 'op7',
//       img: product1,
//       name: "Pewter Matte Nylon Carpet Tiles",
//       link: "/classic-white-skirting",
//       price: "₹120",
//       details: [
//         { label: "Height", value: "50mm" },
//         { label: "Material", value: "MDF" },
//         { label: "Finish", value: "Glossy" }
//       ]
//     },
//     {
//       id: 'op8',
//       img: product2,
//       name: "Loop Pile Carpet",
//       link: "/wooden-oak-skirting",
//       price: "₹150",
//       details: [
//         { label: "Height", value: "75mm" },
//         { label: "Material", value: "Solid Oak" },
//         { label: "Finish", value: "Matte" }
//       ]
//     }
//   ]
// };

// const Carpet = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Formik configuration
//   const myFormik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       email: "",
//       price: "",
//       height: "",
//       material: "",
//       finish: "",
//     },
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       try {
//         await axios.post(`http://localhost:5588/submit-quote`, values);
//         toast.success("Request Submitted Successfully");
//         closeModal();
//       } catch (err) {
//         toast.error("Error While Submitting Request");
//         console.error("Submission error:", err);
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//   });

//   // Set product details when modal opens
//   useEffect(() => {
//     if (isModalOpen && currentProduct) {
//       myFormik.setValues({
//         ...myFormik.values,
//         name: currentProduct.name,
//         price: currentProduct.price,
//         height: currentProduct.details.find(d => d.label === "Height")?.value || "",
//         material: currentProduct.details.find(d => d.label === "Material")?.value || "",
//         finish: currentProduct.details.find(d => d.label === "Finish")?.value || "",
//         phone: "",
//         email: ""
//       });
//     }
//   }, [isModalOpen, currentProduct]);

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in', once: true });
//   }, []);

//   const openModal = (productId) => {
//     // Find product in either mainProducts or otherProducts
//     const product = [...products.mainProducts, ...products.otherProducts].find(p => p.id === productId);
//     setCurrentProduct(product);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = 'auto';
//     myFormik.resetForm();
//   };

//   // Helper function to render product details
//   const renderProductDetails = (details) => {
//     return details.map((detail, index) => (
//       <li key={index}>
//         <span>{detail.label}:</span> {detail.value}
//       </li>
//     ));
//   };

//   // Helper function to render product cards
//   const renderProductCard = (product) => {
//     return (
//       <div className="jk-banner-product-wrapper">
//         <a href={product.link} className="jk_bnr_prd_img">
//           <img src={product.img} alt={product.name} />
//         </a>
//         <div className="jk-banner-product-content">
//           <h2><a href={product.link}>{product.name}</a></h2>
//           <div className="jk-price">{product.price}<span>/sq ft</span></div>
//           <div className="jk-list-info">
//             <ul>
//               {renderProductDetails(product.details)}
//             </ul>
//           </div>
//           <button 
//             className="ps-btn ps-btn--warning get-q-btn"
//             onClick={() => openModal(product.id)}
//           >
//             Get Quote
//           </button>
//         </div>
//       </div>
//     );
//   };

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

//       {/* Categories Section */}
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

//       {/* Products Section */}
//       <section className="product-showcase-section">
//         <div className="container">
//           <div className="ps-section__carousel">
//             {/* First Row */}
//             <div className="row" data-aos="fade-up">
//               <div className="col-md-9">
//                 <div className="row">
//                   {products.mainProducts.map((product, idx) => (
//                     <div key={idx} className="col-md-6">
//                       {renderProductCard(product)}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* View All Section */}
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

//             {/* Other Products Row */}
//             <div className="row home_boxes" data-aos="fade-up" data-aos-delay="100">
//               {products.otherProducts.map((product, idx) => (
//                 <div key={idx} className="col-md-3">
//                   {renderProductCard(product)}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="quote-modal-overlay">
//           <div className="quote-modal" data-aos="zoom-in">
//             <button className="close-modal" onClick={closeModal}>
//               <span className="material-symbols-outlined">close</span>
//             </button>
//             <div className="modal-content">
//               <div className="product-info">
//                 <img src={currentProduct.img} alt={currentProduct.name} className="modal-product-image" />
//                 <div className="product-details">
//                   <h3>{currentProduct.name}</h3>
//                   <div className="modal-price">{currentProduct.price}<span>/sq ft</span></div>
//                   <ul className="modal-specs">
//                     {renderProductDetails(currentProduct.details)}
//                   </ul>
//                 </div>
//               </div>
//               <div className="contact-form">
//                 <p className="contact-message">We'll contact you shortly with the quote details</p>
//                 <form onSubmit={myFormik.handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="phone">Phone Number</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={myFormik.values.phone}
//                       onChange={myFormik.handleChange}
//                       required
//                       placeholder="Phone no."
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="user-email">Email</label>
//                     <input
//                       type="email"
//                       id="user-email"
//                       name="email"
//                       value={myFormik.values.email}
//                       onChange={myFormik.handleChange}
//                       required
//                       placeholder="example@gmail.com"
//                       className="form-input"
//                     />
//                   </div>
//                   <button 
//                     type="submit" 
//                     className="submit-btn" 
//                     disabled={isSubmitting || !myFormik.values.phone || !myFormik.values.email}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit Request"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default Carpet;








import React, { useState, useEffect } from 'react';
import './Carpet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiArrowRight } from "react-icons/fi";

// Import images
import heroImage from "./img/skirting/heroImg2.jpg";
import Carpet1 from "./img/carpet/wall-to-wall-gold-patterned-carpet-blue-wall.jpg";
import Carpet2 from "./img/carpet/Wall-to-Wall-Carpets-9-1024x1024.jpg";
import Carpet3 from "./img/carpet/hotel carpet.jpg";
import Carpet4 from "./img/carpet/hand-tuffed.jpg";
import product1 from "./img/carpet/pewter.webp";
import product2 from "./img/carpet/loop-pile-carpet-500x500.webp";
import product3 from "./img/carpet/cut-pile-carpet-500x500.webp";
import product4 from "./img/carpet/auditorium-carpet-500x500.webp";
import product5 from "./img/carpet/harmony-carpet-500x500.webp";
import product6 from "./img/carpet/banquet-carpets-500x500.webp";
import product7 from "./img/carpet/wall-covering-500x500.webp";
import product8 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
import product9 from "./img/carpet/mediaroom -carpet.jpg";
import product10 from "./img/carpet/carpetforhall.jpg";
import { height } from '@mui/system';

// Categories data
const categories = [
  { title: "Wall to Wall Carpet", img: Carpet1, link: "/wall-to-wall-carpet" },
  { title: "Wall To Wall Floor Carpets", img: Carpet2, link: "/floor-carpets" },
  { title: "Hotel Carpet", img: Carpet3, link: "/hotel-carpet" },
  { title: "Hand Tufted Carpet", img: Carpet4, link: "/hand-tufted-carpet" },
];

// Products data
const products = {
  featuredProducts: [
    {
      id: 'fp1',
      img: product9,
      name: "Media Room Carpets",
      price: "₹120",
      details: [
        { label: "Pile Height", value: "8mm" },
        { label: "Material", value: "Nylon" },
        { label: "Style", value: "Plush" }
      ]
    },
    {
      id: 'fp2',
      img: product10,
      name: "Banquet Hall Carpet",
      price: "₹150",
      details: [
        { label: "Pile Height", value: "10mm" },
        { label: "Material", value: "Wool Blend" },
        { label: "Style", value: "Patterned" }
      ]
    }
  ],
  regularProducts: [
    {
      id: 'rp1',
      img: product3,
      name: "Red Cut Pile Carpet",
      price: "₹110",
      details: [
        { label: "Pile Height", value: "6mm" },
        { label: "Material", value: "Polyester" },
        { label: "Style", value: "Textured" }
      ]
    },
    {
      id: 'rp2',
      img: product4,
      name: "Auditorium Carpet",
      price: "₹180",
      details: [
        { label: "Pile Height", value: "12mm" },
        { label: "Material", value: "Olefin" },
        { label: "Style", value: "Commercial" }
      ]
    },
    {
      id: 'rp3',
      img: product5,
      name: "Harmony Carpet",
      price: "₹95",
      details: [
        { label: "Pile Height", value: "5mm" },
        { label: "Material", value: "Polypropylene" },
        { label: "Style", value: "Solid" }
      ]
    },
    {
      id: 'rp4',
      img: product6,
      name: "Banquet Carpets",
      price: "₹200",
      details: [
        { label: "Pile Height", value: "15mm" },
        { label: "Material", value: "Wool" },
        { label: "Style", value: "Floral" }
      ]
    },
    {
      id: 'rp5',
      img: product7,
      name: "Wall To Wall Carpets",
      price: "₹85",
      details: [
        { label: "Pile Height", value: "4mm" },
        { label: "Material", value: "Acrylic" },
        { label: "Style", value: "Geometric" }
      ]
    },
    {
      id: 'rp6',
      img: product8,
      name: "Nylon Carpet Tiles",
      price: "₹160",
      details: [
        { label: "Pile Height", value: "7mm" },
        { label: "Material", value: "Nylon" },
        { label: "Style", value: "Modular" }
      ]
    },
    {
      id: 'rp7',
      img: product1,
      name: "Pewter Carpet Tiles",
      price: "₹120",
      details: [
        { label: "Pile Height", value: "5mm" },
        { label: "Material", value: "Nylon" },
        { label: "Style", value: "Matte" }
      ]
    },
    {
      id: 'rp8',
      img: product2,
      name: "Loop Pile Carpet",
      price: "₹150",
      details: [
        { label: "Pile Height", value: "9mm" },
        { label: "Material", value: "Polyester" },
        { label: "Style", value: "Berber" }
      ]
    }
  ]
};

const Carpet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setValues({
        ...myFormik.values,
        name: currentProduct.name,
        price: currentProduct.price,
        pileHeight: currentProduct.details.find(d => d.label === "Pile Height")?.value || "",
        material: currentProduct.details.find(d => d.label === "Material")?.value || "",
        style: currentProduct.details.find(d => d.label === "Style")?.value || "",
        phone: "",
        email: ""
      });
    }
  }, [isModalOpen, currentProduct]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in', once: true });
  }, []);

  const openModal = (productId) => {
    const product = [...products.featuredProducts, ...products.regularProducts].find(p => p.id === productId);
    setCurrentProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    myFormik.resetForm();
  };

  const renderProductDetails = (details) => {
    return details.map((detail, index) => (
      <li key={index} className="carpet-product-detail-item">
        <span>{detail.label}:</span> {detail.value}
      </li>
    ));
  };

  const renderProductCard = (product) => {
    return (
      <div className="carpet-product-card" data-aos="fade-up">
        <img src={product.img} alt={product.name} className="carpet-product-image" />
        <div className="carpet-product-content">
          <h3>{product.name}</h3>
          <div className="carpet-product-price">
            {product.price}<span>/sq ft</span>
          </div>
          <ul className="carpet-product-details">
            {renderProductDetails(product.details)}
          </ul>
          <button 
            className="carpet-quote-button" 
            onClick={() => openModal(product.id)}
          >
            Get Quote
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="carpet-component">
      {/* Hero Section */}
      <section className="carpet-hero-section">
        <img
          src={heroImage}
          alt="Premium Carpet Solutions"
          className="carpet-hero-image"
        />
        <div className="carpet-hero-overlay">
          <div className="carpet-hero-content">
            <h1 data-aos="fade-up">Premium Carpet Collections</h1>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div className="carpet-container">
        <h2 className="carpet-section-title" data-aos="fade-up">Explore Carpet Types</h2>
        <div className="carpet-category-grid">
          {categories.map((category, index) => (
            <a 
              href={category.link} 
              className="carpet-category-item" 
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
              key={index}
            >
              <div className="carpet-category-image-wrapper">
                <img src={category.img} alt={category.title} className="carpet-category-image" />
              </div>
              <div className="carpet-category-content">
                <h3>{category.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="carpet-featured-products">
        <div className="carpet-container">
          <h2 className="carpet-section-title" data-aos="fade-up">Featured Carpets</h2>
          <div className="carpet-featured-grid">
            {products.featuredProducts.map((product) => renderProductCard(product))}
          </div>
        </div>
      </section>

      {/* Regular Products Section */}
      <section className="carpet-product-showcase">
        <div className="carpet-container">
          <h2 className="carpet-section-title" data-aos="fade-up">Our Carpet Collection</h2>
          <div className="carpet-product-grid">
            {products.regularProducts.map((product) => renderProductCard(product))}
          </div>
          
          <div className="carpet-view-all-container" data-aos="fade-up">
            <a href="/all-carpet-products" className="carpet-view-all-link">
              View Complete Range <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="carpet-modal-overlay">
          <div className="carpet-modal-content">
            <button className="carpet-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="carpet-product-info">
              <img 
                src={currentProduct.img} 
                alt={currentProduct.name} 
                className="carpet-modal-product-image" 
              />
              <h3>{currentProduct.name}</h3>
              <div className="carpet-modal-price">
                {currentProduct.price}<span>/sq ft</span>
              </div>
              <ul className="carpet-modal-specs">
                {renderProductDetails(currentProduct.details)}
              </ul>
            </div>
            <div className="carpet-contact-form">
              <p className="carpet-contact-message">We'll contact you shortly with the quote details</p>
              <form onSubmit={myFormik.handleSubmit}>
                <div className="carpet-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="Phone no."
                    className="carpet-form-input"
                  />
                </div>
                <div className="carpet-form-group">
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="carpet-form-input"
                  />
                </div>
                <button 
                  type="submit" 
                  className="carpet-submit-button" 
                  disabled={isSubmitting || !myFormik.values.phone || !myFormik.values.email}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Carpet;