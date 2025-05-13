// import React, { useState, useEffect } from 'react';
// import './Flooring.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiX, FiArrowRight } from "react-icons/fi";

// // Import images
// import heroImage from "./img/skirting/heroImg2.jpg";
// import Category1 from "./img/flooring/Red-laminate-floor-color-example-apr19.jpg";
// import Category2 from "./img/flooring/Remarkable-Features-of-SPC-Flooring.webp";
// import Category3 from "./img/flooring/Best-Engineered-Hardwood-Flooring-Brand-Reviews-Comparison-UK.jpg";
// import Category4 from "./img/flooring/hardwood-coswick-herringbone-collection-1.webp";
// import Category5 from "./img/flooring/bamboo -flooring.jpg";
// import Category6 from "./img/flooring/decking-wood.jpg";
// import Category7 from "./img/flooring/thermopine.jpg";

// import product1 from "./img/flooring/oak-silver-pearl-wooden-flooring-500x500.webp";
// import product2 from "./img/flooring/american-red-oak-flooring-500x500.webp";
// import product3 from "./img/flooring/oak-wood-flooring-500x500.webp";
// import product4 from "./img/flooring/Arch2O-7-best-flooring-types-for-an-impressive-interior-3-700x525.jpg";
// import product5 from "./img/flooring/Linoleum Flooring.jpg";
// import product6 from "./img/flooring/cumaru-500x500.webp";
// import product7 from "./img/flooring/canadian-maple-engineered-flooring-500x500.webp";
// import product8 from "./img/flooring/rich-wood-collection-250x250.webp";
// import product9 from "./img/flooring/weathered-oak-wooden-flooring-250x250.webp";
// import product10 from "./img/flooring/american-walnut-wooden-flooring-250x250.webp";

// // Categories data
// const categories = [
//   { link: "/laminate-flooring", image: Category1, title: "Laminate Flooring" },
//   { link: "/spc-flooring", image: Category2, title: "SPC Flooring" },
//   { link: "/engineered-flooring", image: Category3, title: "Engineered Flooring" },
//   { link: "/hardwood-flooring", image: Category4, title: "Hardwood Flooring" },
//   { link: "/bamboo-flooring", image: Category5, title: "Bamboo Flooring" },
//   { link: "/decking-wood", image: Category6, title: "Decking Wood" },
//   { link: "/thermo-pine", image: Category7, title: "Thermo Pine" },
// ];

// // Products data
// const products = [
//   {
//     id: 'p1',
//     name: "Oak Silver Pearl Wooden Flooring",
//     image: product1,
//     price: "₹120",
//     details: [
//       { label: "Thickness", value: "12mm" },
//       { label: "Material", value: "Oak Wood" },
//       { label: "Finish", value: "Glossy" }
//     ]
//   },
//   {
//     id: 'p2',
//     name: "American Red Oak Flooring",
//     image: product2,
//     price: "₹150",
//     details: [
//       { label: "Thickness", value: "15mm" },
//       { label: "Material", value: "Red Oak" },
//       { label: "Finish", value: "Matte" }
//     ]
//   },
//   {
//     id: 'p3',
//     name: "Oak Wood Flooring",
//     image: product3,
//     price: "₹110",
//     details: [
//       { label: "Thickness", value: "10mm" },
//       { label: "Material", value: "Oak" },
//       { label: "Finish", value: "Matte" }
//     ]
//   },
//   {
//     id: 'p4',
//     name: "Hardwood Flooring",
//     image: product4,
//     price: "₹180",
//     details: [
//       { label: "Thickness", value: "18mm" },
//       { label: "Material", value: "Hardwood" },
//       { label: "Finish", value: "Brushed" }
//     ]
//   },
//   {
//     id: 'p5',
//     name: "Linoleum Flooring",
//     image: product5,
//     price: "₹95",
//     details: [
//       { label: "Thickness", value: "5mm" },
//       { label: "Material", value: "Linoleum" },
//       { label: "Finish", value: "Glossy" }
//     ]
//   },
//   {
//     id: 'p6',
//     name: "Cumaru Glossy Engineered Flooring",
//     image: product6,
//     price: "₹200",
//     details: [
//       { label: "Thickness", value: "14mm" },
//       { label: "Material", value: "Cumaru Wood" },
//       { label: "Finish", value: "Polished" }
//     ]
//   },
//   {
//     id: 'p7',
//     name: "Canadian Maple Engineered Flooring",
//     image: product7,
//     price: "₹85",
//     details: [
//       { label: "Thickness", value: "8mm" },
//       { label: "Material", value: "Maple" },
//       { label: "Finish", value: "Matte" }
//     ]
//   },
//   {
//     id: 'p8',
//     name: "Rich Oak Wooden Flooring",
//     image: product8,
//     price: "₹160",
//     details: [
//       { label: "Thickness", value: "12mm" },
//       { label: "Material", value: "Oak Composite" },
//       { label: "Finish", value: "Satin" }
//     ]
//   },
//   {
//     id: 'p9',
//     name: "Weathered Oak Wooden Flooring",
//     image: product9,
//     price: "₹160",
//     details: [
//       { label: "Thickness", value: "12mm" },
//       { label: "Material", value: "Oak" },
//       { label: "Finish", value: "Weathered" }
//     ]
//   },
//   {
//     id: 'p10',
//     name: "American Walnut Wooden Flooring",
//     image: product10,
//     price: "₹160",
//     details: [
//       { label: "Thickness", value: "12mm" },
//       { label: "Material", value: "Walnut" },
//       { label: "Finish", value: "Satin" }
//     ]
//   }
// ];

// const Flooring = () => {
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
//         thickness: currentProduct.details.find(d => d.label === "Thickness")?.value || "",
//         material: currentProduct.details.find(d => d.label === "Material")?.value || "",
//         finish: currentProduct.details.find(d => d.label === "Finish")?.value || "",
//         phone: "",
//         email: ""
//       });
//     }
//   }, [isModalOpen, currentProduct]);

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in', once: true });
//   }, []);

//   const openModal = (productId) => {
//     const product = products.find(p => p.id === productId);
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
//       <li key={index} className="flooring-product-detail-item">
//         <span>{detail.label}:</span> {detail.value}
//       </li>
//     ));
//   };

//   const renderProductCard = (product) => {
//     return (
//       <div className="flooring-product-card" data-aos="fade-up">
//         <img src={product.image} alt={product.name} className="flooring-product-image" />
//         <div className="flooring-product-content">
//           <h3>{product.name}</h3>
//           <div className="flooring-product-price">
//             {product.price}<span>/sq ft</span>
//           </div>
//           <ul className="flooring-product-details">
//             {renderProductDetails(product.details)}
//           </ul>
          
//         </div>
//         <button 
//             className="flooring-quote-button" 
//             onClick={() => openModal(product.id)}
//           >
//             Get Quote
//           </button>
//       </div>
//     );
//   };

//   return (
//     <div className="flooring-component">
//       {/* Hero Section */}
//       <section className="flooring-hero-section">
//         <img
//           src={heroImage}
//           alt="Premium Flooring Solutions"
//           className="flooring-hero-image"
//         />
//         <div className="flooring-hero-overlay">
//           <div className="flooring-hero-content">
//             <h1 data-aos="fade-up">Premium Flooring Solutions</h1>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <div className="flooring-container">
//         <h2 className="flooring-section-title" data-aos="fade-up">Explore Our Flooring Range</h2>
//         <div className="flooring-category-grid">
//           {categories.map((category, index) => (
//             <a 
//               href={category.link} 
//               className="flooring-category-item" 
//               data-aos="fade-up" 
//               data-aos-delay={index * 100} 
//               key={index}
//             >
//               <div className="flooring-category-image-wrapper">
//                 <img src={category.image} alt={category.title} className="flooring-category-image" />
//               </div>
//               <div className="flooring-category-content">
//                 <h3>{category.title}</h3>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Products Section */}
//       <section className="flooring-product-showcase">
//         <div className="flooring-container">
//           <h2 className="flooring-section-title" data-aos="fade-up">Featured Flooring Products</h2>
//           <div className="flooring-product-grid">
//             {products.map((product) => renderProductCard(product))}
//           </div>
          
         
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="flooring-modal-overlay">
//           <div className="flooring-modal-content">
//             <button className="flooring-modal-close" onClick={closeModal}>
//               <FiX />
//             </button>
//             <div className="flooring-product-info">
//               <img 
//                 src={currentProduct.image} 
//                 alt={currentProduct.name} 
//                 className="flooring-modal-product-image" 
//               />
//               <h3>{currentProduct.name}</h3>
//               <div className="flooring-modal-price">
//                 {currentProduct.price}<span>/sq ft</span>
//               </div>
//               <ul className="flooring-modal-specs">
//                 {renderProductDetails(currentProduct.details)}
//               </ul>
//             </div>
//             <div className="flooring-contact-form">
//               <p className="flooring-contact-message">We'll contact you shortly with the quote details</p>
//               <form onSubmit={myFormik.handleSubmit}>
//                 <div className="flooring-form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={myFormik.values.phone}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="Phone no."
//                     className="flooring-form-input"
//                   />
//                 </div>
//                 <div className="flooring-form-group">
//                   <label htmlFor="user-email">Email</label>
//                   <input
//                     type="email"
//                     id="user-email"
//                     name="email"
//                     value={myFormik.values.email}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="example@gmail.com"
//                     className="flooring-form-input"
//                   />
//                 </div>
//                 <button 
//                   type="submit" 
//                   className="flooring-submit-button" 
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

// export default Flooring;















import React, { useState, useEffect, useRef } from "react";
import "./Flooring.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiDownload } from "react-icons/fi";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import laminateImage from "./img/flooring/Red-laminate-floor-color-example-apr19.jpg";
import spcImage from "./img/flooring/Remarkable-Features-of-SPC-Flooring.webp";
import engineeredImage from "./img/flooring/Best-Engineered-Hardwood-Flooring-Brand-Reviews-Comparison-UK.jpg";
import hardwoodImage from "./img/flooring/hardwood-coswick-herringbone-collection-1.webp";
import bambooImage from "./img/flooring/bamboo -flooring.jpg";
import deckingImage from "./img/flooring/decking-wood.jpg";
import thermoPineImage from "./img/flooring/thermopine.jpg";

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

const Flooring = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryRefs = {
    all: useRef(null),
    laminate: useRef(null),
    spc: useRef(null),
    engineered: useRef(null),
    hardwood: useRef(null),
    bamboo: useRef(null),
    decking: useRef(null),
    thermoPine: useRef(null),
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

      const thicknessDetail = currentProduct.details.find(d => d.label === "Thickness");
      const materialDetail = currentProduct.details.find(d => d.label === "Material");
      const finishDetail = currentProduct.details.find(d => d.label === "Finish");

      myFormik.setFieldValue("thickness", thicknessDetail ? thicknessDetail.value : "");
      myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
      myFormik.setFieldValue("finish", finishDetail ? finishDetail.value : "");
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
    { id: "all", name: "All Flooring", image: hardwoodImage },
    { id: "laminate", name: "Laminate Flooring", image: laminateImage },
    { id: "spc", name: "SPC Flooring", image: spcImage },
    { id: "engineered", name: "Engineered Flooring", image: engineeredImage },
    { id: "hardwood", name: "Hardwood Flooring", image: hardwoodImage },
    { id: "bamboo", name: "Bamboo Flooring", image: bambooImage },
    { id: "decking", name: "Decking Wood", image: deckingImage },
    { id: "thermoPine", name: "Thermo Pine", image: thermoPineImage },
  ];

  const products = {
    product1: {
      id: 'p1',
      name: "Oak Silver Pearl Wooden Flooring",
      price: "₹120",
      image: product1,
      category: "hardwood",
      description: "Premium oak flooring with a unique silver pearl finish that adds elegance to any space.",
      details: [
        { label: "Thickness", value: "12mm" },
        { label: "Material", value: "Oak Wood" },
        { label: "Finish", value: "Glossy" }
      ]
    },
    product2: {
      id: 'p2',
      name: "American Red Oak Flooring",
      price: "₹150",
      image: product2,
      category: "hardwood",
      description: "Classic red oak flooring with rich grain patterns and natural warmth.",
      details: [
        { label: "Thickness", value: "15mm" },
        { label: "Material", value: "Red Oak" },
        { label: "Finish", value: "Matte" }
      ]
    },
    product3: {
      id: 'p3',
      name: "Oak Wood Flooring",
      price: "₹110",
      image: product3,
      category: "hardwood",
      description: "Traditional oak flooring with timeless appeal and durability.",
      details: [
        { label: "Thickness", value: "10mm" },
        { label: "Material", value: "Oak" },
        { label: "Finish", value: "Matte" }
      ]
    },
    product4: {
      id: 'p4',
      name: "Hardwood Flooring",
      price: "₹180",
      image: product4,
      category: "hardwood",
      description: "Premium hardwood flooring with a brushed finish for a sophisticated look.",
      details: [
        { label: "Thickness", value: "18mm" },
        { label: "Material", value: "Hardwood" },
        { label: "Finish", value: "Brushed" }
      ]
    },
    product5: {
      id: 'p5',
      name: "Linoleum Flooring",
      price: "₹95",
      image: product5,
      category: "laminate",
      description: "Eco-friendly linoleum flooring available in various colors and patterns.",
      details: [
        { label: "Thickness", value: "5mm" },
        { label: "Material", value: "Linoleum" },
        { label: "Finish", value: "Glossy" }
      ]
    },
    product6: {
      id: 'p6',
      name: "Cumaru Glossy Engineered Flooring",
      price: "₹200",
      image: product6,
      category: "engineered",
      description: "Exotic cumaru wood with a high-gloss finish for a luxurious appearance.",
      details: [
        { label: "Thickness", value: "14mm" },
        { label: "Material", value: "Cumaru Wood" },
        { label: "Finish", value: "Polished" }
      ]
    },
    product7: {
      id: 'p7',
      name: "Canadian Maple Engineered Flooring",
      price: "₹85",
      image: product7,
      category: "engineered",
      description: "Light-colored maple flooring with a smooth matte finish.",
      details: [
        { label: "Thickness", value: "8mm" },
        { label: "Material", value: "Maple" },
        { label: "Finish", value: "Matte" }
      ]
    },
    product8: {
      id: 'p8',
      name: "Rich Oak Wooden Flooring",
      price: "₹160",
      image: product8,
      category: "hardwood",
      description: "Rich oak flooring with a satin finish that enhances the natural wood grain.",
      details: [
        { label: "Thickness", value: "12mm" },
        { label: "Material", value: "Oak Composite" },
        { label: "Finish", value: "Satin" }
      ]
    },
    product9: {
      id: 'p9',
      name: "Weathered Oak Wooden Flooring",
      price: "₹160",
      image: product9,
      category: "hardwood",
      description: "Distressed oak flooring with a weathered finish for rustic charm.",
      details: [
        { label: "Thickness", value: "12mm" },
        { label: "Material", value: "Oak" },
        { label: "Finish", value: "Weathered" }
      ]
    },
    product10: {
      id: 'p10',
      name: "American Walnut Wooden Flooring",
      price: "₹160",
      image: product10,
      category: "hardwood",
      description: "Dark walnut flooring with a satin finish for a sophisticated look.",
      details: [
        { label: "Thickness", value: "12mm" },
        { label: "Material", value: "Walnut" },
        { label: "Finish", value: "Satin" }
      ]
    },
    product11: {
      id: 'p11',
      name: "SPC Luxury Vinyl Plank",
      price: "₹90",
      image: spcImage,
      category: "spc",
      description: "Waterproof SPC flooring with realistic wood visuals and durability.",
      details: [
        { label: "Thickness", value: "5.5mm" },
        { label: "Material", value: "Stone Polymer Composite" },
        { label: "Finish", value: "Textured" }
      ]
    },
    product12: {
      id: 'p12',
      name: "Bamboo Strand Flooring",
      price: "₹140",
      image: bambooImage,
      category: "bamboo",
      description: "Sustainable bamboo flooring with exceptional hardness and stability.",
      details: [
        { label: "Thickness", value: "12mm" },
        { label: "Material", value: "Strand Woven Bamboo" },
        { label: "Finish", value: "Carbonized" }
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
      <div className="flooring-product-card" data-aos="fade-up">
        <img
          src={product.image}
          alt={product.name}
          className="flooring-product-image"
        />
        <div className="flooring-product-content">
          <h3>{product.name}</h3>
          <p className="flooring-product-description">{product.description}</p>
          <div className="flooring-product-price">
            {product.price}<span>/sq ft</span>
          </div>
          <ul className="flooring-product-details">
            {product.details.map((detail, index) => (
              <li key={index}>
                <span>{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
          <div className="flooring-product-actions">
            <button
              className="flooring-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote
            </button>
            <button
              className="flooring-brochure-button"
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
    <div className="flooring-component">
      {/* Hero Banner Section */}
      <section className="flooring-hero-section">
        <img
          src={heroImage}
          alt="Premium Flooring Solutions"
          className="flooring-hero-image"
        />
        <div className="flooring-hero-overlay">
          <div className="flooring-hero-content">
            <h1 data-aos="fade-up">Premium Flooring Collections</h1>
          </div>
        </div>
      </section>

      {/* Category List Section */}
      <div className="flooring-container">
        <h2 className="flooring-section-title" data-aos="fade-up">
          Explore Our Flooring Range
        </h2>
        <div className="flooring-category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`flooring-category-item ${activeCategory === category.id ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => scrollToCategory(category.id)}
            >
              <div className="flooring-category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="flooring-category-image"
                />
              </div>
              <div className="flooring-category-content">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products Section */}
      <section className="flooring-product-section" ref={categoryRefs.all}>
        <div className="flooring-container">
          <h2 className="flooring-section-title" data-aos="fade-up">
            All Flooring Products
          </h2>
          <div className="flooring-product-grid">
            {Object.keys(products).map(productKey => renderProductCard(productKey))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.slice(1).map(category => (
        <section 
          key={category.id} 
          className="flooring-product-section" 
          ref={categoryRefs[category.id]}
        >
          <div className="flooring-container">
            <h2 className="flooring-section-title" data-aos="fade-up">
              {category.name}
            </h2>
            <div className="flooring-product-grid">
              {Object.keys(products)
                .filter(key => products[key].category === category.id)
                .map(productKey => renderProductCard(productKey))}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="flooring-modal-overlay">
          <div className="flooring-modal-content">
            <button className="flooring-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="flooring-product-info">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="flooring-modal-product-image"
              />
              <h3>{currentProduct.name}</h3>
              <p className="flooring-modal-description">{currentProduct.description}</p>
              <div className="flooring-modal-price">
                {currentProduct.price}<span>/sq ft</span>
              </div>
              <ul className="flooring-modal-specs">
                {currentProduct.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.label}:</span> {detail.value}
                  </li>
                ))}
              </ul>
              <button
                className="flooring-brochure-button"
                onClick={() => downloadBrochure(currentProduct.name)}
              >
                <FiDownload /> Download Brochure
              </button>
            </div>
            <div className="flooring-contact-form">
              <p className="flooring-contact-message">
                We'll contact you shortly with the quote details
              </p>
              <form onSubmit={myFormik.handleSubmit}>
                <div className="flooring-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="Phone no."
                    className="flooring-form-input"
                  />
                </div>
                <div className="flooring-form-group">
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="flooring-form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="flooring-submit-button"
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

export default Flooring;