



// import React, { useState, useEffect } from 'react';
// import './Carpet.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiX, FiArrowRight } from "react-icons/fi";

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
// import { height } from '@mui/system';

// // Categories data
// const categories = [
//   { title: "Wall to Wall Carpet", img: Carpet1, link: "/wall-to-wall-carpet" },
//   { title: "Carpet Tile", img: Carpet2, link: "/floor-carpets" },
 
// ];

// // Products data
// const products = {
//   featuredProducts: [
//     {
//       id: 'fp1',
//       img: product9,
//       name: "Media Room Carpets",
//       price: "₹120",
//       details: [
//         { label: "Pile Height", value: "8mm" },
//         { label: "Material", value: "Nylon" },
//         { label: "Style", value: "Plush" }
//       ]
//     },
//     {
//       id: 'fp2',
//       img: product10,
//       name: "Banquet Hall Carpet",
//       price: "₹150",
//       details: [
//         { label: "Pile Height", value: "10mm" },
//         { label: "Material", value: "Wool Blend" },
//         { label: "Style", value: "Patterned" }
//       ]
//     }
//   ],
//   regularProducts: [
//     {
//       id: 'rp1',
//       img: product3,
//       name: "Red Cut Pile Carpet",
//       price: "₹110",
//       details: [
//         { label: "Pile Height", value: "6mm" },
//         { label: "Material", value: "Polyester" },
//         { label: "Style", value: "Textured" }
//       ]
//     },
//     {
//       id: 'rp2',
//       img: product4,
//       name: "Auditorium Carpet",
//       price: "₹180",
//       details: [
//         { label: "Pile Height", value: "12mm" },
//         { label: "Material", value: "Olefin" },
//         { label: "Style", value: "Commercial" }
//       ]
//     },
//     {
//       id: 'rp3',
//       img: product5,
//       name: "Harmony Carpet",
//       price: "₹95",
//       details: [
//         { label: "Pile Height", value: "5mm" },
//         { label: "Material", value: "Polypropylene" },
//         { label: "Style", value: "Solid" }
//       ]
//     },
//     {
//       id: 'rp4',
//       img: product6,
//       name: "Banquet Carpets",
//       price: "₹200",
//       details: [
//         { label: "Pile Height", value: "15mm" },
//         { label: "Material", value: "Wool" },
//         { label: "Style", value: "Floral" }
//       ]
//     },
//     {
//       id: 'rp5',
//       img: product7,
//       name: "Wall To Wall Carpets",
//       price: "₹85",
//       details: [
//         { label: "Pile Height", value: "4mm" },
//         { label: "Material", value: "Acrylic" },
//         { label: "Style", value: "Geometric" }
//       ]
//     },
//     {
//       id: 'rp6',
//       img: product8,
//       name: "Nylon Carpet Tiles",
//       price: "₹160",
//       details: [
//         { label: "Pile Height", value: "7mm" },
//         { label: "Material", value: "Nylon" },
//         { label: "Style", value: "Modular" }
//       ]
//     },
//     {
//       id: 'rp7',
//       img: product1,
//       name: "Pewter Carpet Tiles",
//       price: "₹120",
//       details: [
//         { label: "Pile Height", value: "5mm" },
//         { label: "Material", value: "Nylon" },
//         { label: "Style", value: "Matte" }
//       ]
//     },
//     {
//       id: 'rp8',
//       img: product2,
//       name: "Loop Pile Carpet",
//       price: "₹150",
//       details: [
//         { label: "Pile Height", value: "9mm" },
//         { label: "Material", value: "Polyester" },
//         { label: "Style", value: "Berber" }
//       ]
//     }
//   ]
// };

// const Carpet = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

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

//   useEffect(() => {
//     if (isModalOpen && currentProduct) {
//       myFormik.setValues({
//         ...myFormik.values,
//         name: currentProduct.name,
//         price: currentProduct.price,
//         pileHeight: currentProduct.details.find(d => d.label === "Pile Height")?.value || "",
//         material: currentProduct.details.find(d => d.label === "Material")?.value || "",
//         style: currentProduct.details.find(d => d.label === "Style")?.value || "",
//         phone: "",
//         email: ""
//       });
//     }
//   }, [isModalOpen, currentProduct]);

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in', once: true });
//   }, []);

//   const openModal = (productId) => {
//     const product = [...products.featuredProducts, ...products.regularProducts].find(p => p.id === productId);
//     setCurrentProduct(product);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = 'auto';
//     myFormik.resetForm();
//   };

//   const renderProductDetails = (details) => {
//     return details.map((detail, index) => (
//       <li key={index} className="carpet-product-detail-item">
//         <span>{detail.label}:</span> {detail.value}
//       </li>
//     ));
//   };

//   const renderProductCard = (product) => {
//     return (
//       <div className="carpet-product-card" data-aos="fade-up">
//         <img src={product.img} alt={product.name} className="carpet-product-image" />
//         <div className="carpet-product-content">
//           <h3>{product.name}</h3>
//           <div className="carpet-product-price">
//             {product.price}<span>/sq ft</span>
//           </div>
//           <ul className="carpet-product-details">
//             {renderProductDetails(product.details)}
//           </ul>
//           <button 
//             className="carpet-quote-button" 
//             onClick={() => openModal(product.id)}
//           >
//             Get Quote
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="carpet-component">
//       {/* Hero Section */}
//       <section className="carpet-hero-section">
//         <img
//           src={heroImage}
//           alt="Premium Carpet Solutions"
//           className="carpet-hero-image"
//         />
//         <div className="carpet-hero-overlay">
//           <div className="carpet-hero-content">
//             <h1 data-aos="fade-up">Premium Carpet Collections</h1>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <div className="carpet-container">
//         <h2 className="carpet-section-title" data-aos="fade-up">Explore Carpet Types</h2>
//         <div className="carpet-category-grid">
//           {categories.map((category, index) => (
//             <a 
//               href={category.link} 
//               className="carpet-category-item" 
//               data-aos="fade-up" 
//               data-aos-delay={index * 100} 
//               key={index}
//             >
//               <div className="carpet-category-image-wrapper">
//                 <img src={category.img} alt={category.title} className="carpet-category-image" />
//               </div>
//               <div className="carpet-category-content">
//                 <h3>{category.title}</h3>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Featured Products Section */}
//       <section className="carpet-featured-products">
//         <div className="carpet-container">
//           <h2 className="carpet-section-title" data-aos="fade-up">Featured Carpets</h2>
//           <div className="carpet-featured-grid">
//             {products.featuredProducts.map((product) => renderProductCard(product))}
//           </div>
//         </div>
//       </section>

//       {/* Regular Products Section */}
//       <section className="carpet-product-showcase">
//         <div className="carpet-container">
//           <h2 className="carpet-section-title" data-aos="fade-up">Our Carpet Collection</h2>
//           <div className="carpet-product-grid">
//             {products.regularProducts.map((product) => renderProductCard(product))}
//           </div>
          
//           <div className="carpet-view-all-container" data-aos="fade-up">
//             <a href="/all-carpet-products" className="carpet-view-all-link">
//               View Complete Range <FiArrowRight />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="carpet-modal-overlay">
//           <div className="carpet-modal-content">
//             <button className="carpet-modal-close" onClick={closeModal}>
//               <FiX />
//             </button>
//             <div className="carpet-product-info">
//               <img 
//                 src={currentProduct.img} 
//                 alt={currentProduct.name} 
//                 className="carpet-modal-product-image" 
//               />
//               <h3>{currentProduct.name}</h3>
//               <div className="carpet-modal-price">
//                 {currentProduct.price}<span>/sq ft</span>
//               </div>
//               <ul className="carpet-modal-specs">
//                 {renderProductDetails(currentProduct.details)}
//               </ul>
//             </div>
//             <div className="carpet-contact-form">
//               <p className="carpet-contact-message">We'll contact you shortly with the quote details</p>
//               <form onSubmit={myFormik.handleSubmit}>
//                 <div className="carpet-form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={myFormik.values.phone}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="Phone no."
//                     className="carpet-form-input"
//                   />
//                 </div>
//                 <div className="carpet-form-group">
//                   <label htmlFor="user-email">Email</label>
//                   <input
//                     type="email"
//                     id="user-email"
//                     name="email"
//                     value={myFormik.values.email}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="example@gmail.com"
//                     className="carpet-form-input"
//                   />
//                 </div>
//                 <button 
//                   type="submit" 
//                   className="carpet-submit-button" 
//                   disabled={isSubmitting || !myFormik.values.phone || !myFormik.values.email}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Request"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
      
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default Carpet;



















import React, { useState, useEffect, useRef } from "react";
import "./Carpet.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiDownload } from "react-icons/fi";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import wallToWallImage from "./img/carpet/wall-to-wall-gold-patterned-carpet-blue-wall.jpg";
import carpetTileImage from "./img/carpet/Wall-to-Wall-Carpets-9-1024x1024.jpg";
import product1 from "./img/carpet/pewter.webp";
import product2 from "./img/carpet/loop-pile-carpet-500x500.webp";
import product3 from "./img/carpet/cut-pile-carpet-500x500.webp";
import product4 from "./img/carpet/auditorium-carpet-500x500.webp";
import product5 from "./img/carpet/harmony-carpet-500x500.webp";
import product6 from "./img/carpet/banquet-carpets-500x500.webp";
import product7 from "./img/carpet/wall-covering-500x500.webp";
import product8 from "./img/carpet/welspun-carpet-tiles-500x500.webp";

const Carpet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryRefs = {
    all: useRef(null),
    wallToWall: useRef(null),
    carpetTile: useRef(null),
  };

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
        myFormik.resetForm();
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

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    categoryRefs[category].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const downloadBrochure = (productName) => {
    console.log(`Downloading brochure for ${productName}`);
    toast.info(`Brochure download started for ${productName}`);
  };

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setFieldValue("name", currentProduct.name);
      myFormik.setFieldValue("price", currentProduct.price);

      const pileHeightDetail = currentProduct.details.find(d => d.label === "Pile Height");
      const materialDetail = currentProduct.details.find(d => d.label === "Material");
      const styleDetail = currentProduct.details.find(d => d.label === "Style");

      myFormik.setFieldValue("pileHeight", pileHeightDetail ? pileHeightDetail.value : "");
      myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
      myFormik.setFieldValue("style", styleDetail ? styleDetail.value : "");
    }
  }, [isModalOpen, currentProduct]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      once: true,
    });
  }, []);

  const categories = [
    { id: "all", name: "All Carpets", image: wallToWallImage },
    { id: "wallToWall", name: "Wall to Wall", image: wallToWallImage },
    { id: "carpetTile", name: "Carpet Tiles", image: carpetTileImage },
  ];

  const products = {
    product1: {
      id: 'p1',
      name: "Red Cut Pile Carpet",
      price: "₹110",
      image: product3,
      category: "wallToWall",
      description: "Luxurious cut pile carpet with vibrant red color and soft texture.",
      details: [
        { label: "Pile Height", value: "6mm" },
        { label: "Material", value: "Polyester" },
        { label: "Style", value: "Textured" }
      ]
    },
    product2: {
      id: 'p2',
      name: "Auditorium Carpet",
      price: "₹180",
      image: product4,
      category: "wallToWall",
      description: "Durable carpet designed for high-traffic commercial spaces.",
      details: [
        { label: "Pile Height", value: "12mm" },
        { label: "Material", value: "Olefin" },
        { label: "Style", value: "Commercial" }
      ]
    },
    product3: {
      id: 'p3',
      name: "Harmony Carpet",
      price: "₹95",
      image: product5,
      category: "wallToWall",
      description: "Soft and resilient carpet with solid color options.",
      details: [
        { label: "Pile Height", value: "5mm" },
        { label: "Material", value: "Polypropylene" },
        { label: "Style", value: "Solid" }
      ]
    },
    product4: {
      id: 'p4',
      name: "Banquet Carpets",
      price: "₹200",
      image: product6,
      category: "wallToWall",
      description: "Elegant floral patterned carpets for formal settings.",
      details: [
        { label: "Pile Height", value: "15mm" },
        { label: "Material", value: "Wool" },
        { label: "Style", value: "Floral" }
      ]
    },
    product5: {
      id: 'p5',
      name: "Wall To Wall Carpets",
      price: "₹85",
      image: product7,
      category: "carpetTile",
      description: "Geometric patterned carpet tiles for modern interiors.",
      details: [
        { label: "Pile Height", value: "4mm" },
        { label: "Material", value: "Acrylic" },
        { label: "Style", value: "Geometric" }
      ]
    },
    product6: {
      id: 'p6',
      name: "Nylon Carpet Tiles",
      price: "₹160",
      image: product8,
      category: "carpetTile",
      description: "Durable nylon tiles with stain-resistant technology.",
      details: [
        { label: "Pile Height", value: "7mm" },
        { label: "Material", value: "Nylon" },
        { label: "Style", value: "Modular" }
      ]
    },
    product7: {
      id: 'p7',
      name: "Pewter Carpet Tiles",
      price: "₹120",
      image: product1,
      category: "carpetTile",
      description: "Sophisticated matte finish tiles in neutral tones.",
      details: [
        { label: "Pile Height", value: "5mm" },
        { label: "Material", value: "Nylon" },
        { label: "Style", value: "Matte" }
      ]
    },
    product8: {
      id: 'p8',
      name: "Loop Pile Carpet",
      price: "₹150",
      image: product2,
      category: "carpetTile",
      description: "Classic berber style loop pile carpet tiles.",
      details: [
        { label: "Pile Height", value: "9mm" },
        { label: "Material", value: "Polyester" },
        { label: "Style", value: "Berber" }
      ]
    }
  };

  const openModal = (productKey) => {
    setCurrentProduct(products[productKey]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const renderProductCard = (productKey) => {
    const product = products[productKey];
    return (
      <div className="carpet-product-card" data-aos="fade-up">
        <img
          src={product.image}
          alt={product.name}
          className="carpet-product-image"
        />
        <div className="carpet-product-content">
          <h3>{product.name}</h3>
          <p className="carpet-product-description">{product.description}</p>
          <div className="carpet-product-price">
            {product.price}<span>/sq ft</span>
          </div>
          <ul className="carpet-product-details">
            {product.details.map((detail, index) => (
              <li key={index}>
                <span>{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
          <div className="carpet-product-actions">
            <button
              className="carpet-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote
            </button>
            <button
              className="carpet-brochure-button"
              onClick={() => downloadBrochure(product.name)}
            >
              <FiDownload /> Brochure
            </button>
          </div>
        </div>
      </div>
    );
  };

  const filteredProducts = activeCategory === "all" 
    ? Object.keys(products) 
    : Object.keys(products).filter(key => products[key].category === activeCategory);

  return (
    <div className="carpet-component">
      {/* Hero Banner Section */}
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

      {/* Category List Section */}
      <div className="carpet-container">
        <h2 className="carpet-section-title" data-aos="fade-up">
          Explore Our Carpet Range
        </h2>
        <div className="carpet-category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`carpet-category-item ${activeCategory === category.id ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => scrollToCategory(category.id)}
            >
              <div className="carpet-category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="carpet-category-image"
                />
              </div>
              <div className="carpet-category-content">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products Section */}
      <section className="carpet-product-section" ref={categoryRefs.all}>
        <div className="carpet-container">
          <h2 className="carpet-section-title" data-aos="fade-up">
            All Carpet Products
          </h2>
          <div className="carpet-product-grid">
            {Object.keys(products).map(productKey => renderProductCard(productKey))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.slice(1).map(category => (
        <section 
          key={category.id} 
          className="carpet-product-section" 
          ref={categoryRefs[category.id]}
        >
          <div className="carpet-container">
            <h2 className="carpet-section-title" data-aos="fade-up">
              {category.name}
            </h2>
            <div className="carpet-product-grid">
              {Object.keys(products)
                .filter(key => products[key].category === category.id)
                .map(productKey => renderProductCard(productKey))}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="carpet-modal-overlay">
          <div className="carpet-modal-content">
            <button className="carpet-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="carpet-product-info">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="carpet-modal-product-image"
              />
              <h3>{currentProduct.name}</h3>
              <p className="carpet-modal-description">{currentProduct.description}</p>
              <div className="carpet-modal-price">
                {currentProduct.price}<span>/sq ft</span>
              </div>
              <ul className="carpet-modal-specs">
                {currentProduct.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.label}:</span> {detail.value}
                  </li>
                ))}
              </ul>
              <button
                className="carpet-brochure-button"
                onClick={() => downloadBrochure(currentProduct.name)}
              >
                <FiDownload /> Download Brochure
              </button>
            </div>
            <div className="carpet-contact-form">
              <p className="carpet-contact-message">
                We'll contact you shortly with the quote details
              </p>
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
                  disabled={isSubmitting}
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