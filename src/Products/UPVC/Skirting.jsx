



// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiX, FiArrowRight } from "react-icons/fi";
// import "./Skirting.css";

// // Image Imports
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

// const Skirting = () => {
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
//         myFormik.resetForm();
//         toast.success(" Request Submitted Successfully");
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
//       myFormik.setFieldValue("name", currentProduct.name);
//       myFormik.setFieldValue("price", currentProduct.price);

//       const heightDetail = currentProduct.details.find(
//         (d) => d.label === "Height"
//       );
//       const materialDetail = currentProduct.details.find(
//         (d) => d.label === "Material"
//       );
//       const finishDetail = currentProduct.details.find(
//         (d) => d.label === "Finish"
//       );

//       myFormik.setFieldValue("height", heightDetail ? heightDetail.value : "");
//       myFormik.setFieldValue(
//         "material",
//         materialDetail ? materialDetail.value : ""
//       );
//       myFormik.setFieldValue("finish", finishDetail ? finishDetail.value : "");
//     }
//   }, [isModalOpen, currentProduct]);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in",
//       once: true,
//     });
//   }, []);

//   const products = {
//     product1: {
//       id: 1,
//       name: "Classic White Skirting",
//       price: "₹120",
//       image: product1,
//       details: [
//         { label: "Height", value: "50mm" },
//         { label: "Material", value: "MDF" },
//         { label: "Finish", value: "Glossy" },
//       ],
//     },
//     product2: {
//       id: 2,
//       name: "Wooden Oak Skirting",
//       price: "₹150",
//       image: product2,
//       details: [
//         { label: "Height", value: "75mm" },
//         { label: "Material", value: "Solid Oak" },
//         { label: "Finish", value: "Matte" },
//       ],
//     },
//     product3: {
//       id: 3,
//       name: "Modern Grey Skirting",
//       price: "₹110",
//       image: product3,
//       details: [
//         { label: "Height", value: "50mm" },
//         { label: "Material", value: "PVC" },
//         { label: "Finish", value: "Matte" },
//       ],
//     },
//     product4: {
//       id: 4,
//       name: "Aluminum Skirting",
//       price: "₹180",
//       image: product4,
//       details: [
//         { label: "Height", value: "100mm" },
//         { label: "Material", value: "Aluminum" },
//         { label: "Finish", value: "Brushed" },
//       ],
//     },
//     product5: {
//       id: 5,
//       name: "Flexible PVC Skirting",
//       price: "₹95",
//       image: product5,
//       details: [
//         { label: "Height", value: "50mm" },
//         { label: "Material", value: "PVC" },
//         { label: "Finish", value: "Glossy" },
//       ],
//     },
//     product6: {
//       id: 6,
//       name: "Heritage Skirting",
//       price: "₹200",
//       image: product6,
//       details: [
//         { label: "Height", value: "100mm" },
//         { label: "Material", value: "Hardwood" },
//         { label: "Finish", value: "Polished" },
//       ],
//     },
//     product7: {
//       id: 7,
//       name: "Minimalist Skirting",
//       price: "₹85",
//       image: product7,
//       details: [
//         { label: "Height", value: "40mm" },
//         { label: "Material", value: "MDF" },
//         { label: "Finish", value: "Matte" },
//       ],
//     },
//     product8: {
//       id: 8,
//       name: "Contemporary Skirting",
//       price: "₹160",
//       image: product8,
//       details: [
//         { label: "Height", value: "75mm" },
//         { label: "Material", value: "Wood Composite" },
//         { label: "Finish", value: "Satin" },
//       ],
//     },
//   };

//   const openModal = (productKey) => {
//     setCurrentProduct(products[productKey]);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const renderProductCard = (productKey) => {
//     const product = products[productKey];
//     return (
//       <div className="skirting-product-card" data-aos="fade-up">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="skirting-product-image"
//         />
//         <div className="skirting-product-content">
//           <h3>{product.name}</h3>
//           <div className="skirting-product-price">
//             {product.price}
//             <span>/sq ft</span>
//           </div>
//           <ul className="skirting-product-details">
//             {product.details.map((detail, index) => (
//               <li key={index}>
//                 <span>{detail.label}:</span> {detail.value}
//               </li>
//             ))}
//           </ul>
//           <button
//             className="skirting-quote-button"
//             onClick={() => openModal(productKey)}
//           >
//             Get Quote
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="skirting-component">
//       {/* Hero Banner Section */}
//       <section className="skirting-hero-section">
//         <img
//           src={heroImage}
//           alt="Premium Skirting Solutions"
//           className="skirting-hero-image"
//         />
//         <div className="skirting-hero-overlay">
//           <div className="skirting-hero-content">
//             <h1 data-aos="fade-up">Aluminium Skirting & Profiles</h1>
//           </div>
//         </div>
//       </section>

//       {/* Category List Section */}
//       <div className="skirting-container">
//         <h2 className="skirting-section-title" data-aos="fade-up">
//           Explore Our Skirting Range
//         </h2>
//         <div className="skirting-category-grid">
//           <a
//             href="/skirting-50mm"
//             className="skirting-category-item"
//             data-aos="fade-up"
//           >
//             <div className="skirting-category-image-wrapper">
//               <img
//                 src={skirting50mm}
//                 alt="50MM Skirting"
//                 className="skirting-category-image"
//               />
//             </div>
//             <div className="skirting-category-content">
//               <h3>50MM Skirting</h3>
//             </div>
//           </a>

//           <a
//             href="/skirting-75mm"
//             className="skirting-category-item"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <div className="skirting-category-image-wrapper">
//               <img
//                 src={skirting75mm}
//                 alt="75MM Skirting"
//                 className="skirting-category-image"
//               />
//             </div>
//             <div className="skirting-category-content">
//               <h3>75MM Skirting</h3>
//             </div>
//           </a>

//           <a
//             href="/skirting-100mm"
//             className="skirting-category-item"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="skirting-category-image-wrapper">
//               <img
//                 src={skirting100mm}
//                 alt="100MM Skirting"
//                 className="skirting-category-image"
//               />
//             </div>
//             <div className="skirting-category-content">
//               <h3>100MM Skirting</h3>
//             </div>
//           </a>
//         </div>
//       </div>

//       {/* Product Showcase Section */}
//       <section className="skirting-product-showcase">
//         <div className="skirting-container">
//           <h2 className="skirting-section-title" data-aos="fade-up">
//             Featured Products
//           </h2>
//           <div className="skirting-product-grid">
//             {renderProductCard("product1")}
//             {renderProductCard("product2")}
//             {renderProductCard("product3")}
//             {renderProductCard("product4")}
//             {renderProductCard("product5")}
//             {renderProductCard("product6")}
//             {renderProductCard("product7")}
//             {renderProductCard("product8")}
//           </div>
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="skirting-modal-overlay">
//           <div className="skirting-modal-content">
//             <button className="skirting-modal-close" onClick={closeModal}>
//               <FiX />
//             </button>
//             <div className="skirting-product-info">
//               <img
//                 src={currentProduct.image}
//                 alt={currentProduct.name}
//                 className="skirting-modal-product-image"
//               />
//               <h3>{currentProduct.name}</h3>
//               <div className="skirting-modal-price">
//                 {currentProduct.price}
//                 <span>/sq ft</span>
//               </div>
//               <ul className="skirting-modal-specs">
//                 {currentProduct.details.map((detail, index) => (
//                   <li key={index}>
//                     <span>{detail.label}:</span> {detail.value}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="skirting-contact-form">
//               <p className="skirting-contact-message">
//                 We'll contact you shortly with the quote details
//               </p>
//               <form onSubmit={myFormik.handleSubmit}>
//                 <div className="skirting-form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={myFormik.values.phone}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="Phone no."
//                     className="skirting-form-input"
//                   />
//                 </div>
//                 <div className="skirting-form-group">
//                   <label htmlFor="user-email">Email</label>
//                   <input
//                     type="email"
//                     id="user-email"
//                     name="email"
//                     value={myFormik.values.email}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="example@gmail.com"
//                     className="skirting-form-input"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="skirting-submit-button"
//                   disabled={isSubmitting}
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

// export default Skirting;










import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiArrowRight, FiDownload } from "react-icons/fi";
import "./Skirting.css";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import skirting50mm from "./img/skirting/skirtingIcon-1.jpg";
import skirting75mm from "./img/skirting/skirtingIcon-2.jpg";
import skirting100mm from "./img/skirting/skirtingIcon-3.webp";
import product1 from "./img/skirting/product1.webp";
import product2 from "./img/skirting/product2.webp";
import product3 from "./img/skirting/product3.webp";
import product4 from "./img/skirting/product4.webp";
import product5 from "./img/skirting/product5.webp";
import product6 from "./img/skirting/prodcut6.webp";
import product7 from "./img/skirting/product7.webp";
import product8 from "./img/skirting/product8.webp";

const Skirting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryRefs = {
    all: useRef(null),
    50: useRef(null),
    75: useRef(null),
    100: useRef(null),
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
    // In a real app, this would download the actual brochure PDF
    console.log(`Downloading brochure for ${productName}`);
    toast.info(`Brochure download started for ${productName}`);
  };

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setFieldValue("name", currentProduct.name);
      myFormik.setFieldValue("price", currentProduct.price);

      const heightDetail = currentProduct.details.find(d => d.label === "Height");
      const materialDetail = currentProduct.details.find(d => d.label === "Material");
      const finishDetail = currentProduct.details.find(d => d.label === "Finish");

      myFormik.setFieldValue("height", heightDetail ? heightDetail.value : "");
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
    { id: "all", name: "All Products", image: skirting50mm },
    { id: "50", name: "50MM Skirting", image: skirting50mm },
    { id: "75", name: "75MM Skirting", image: skirting75mm },
    { id: "100", name: "100MM Skirting", image: skirting100mm },
  ];

  const products = {
    product1: {
      id: 1,
      name: "Classic White Skirting",
      price: "₹120",
      image: product1,
      category: "50",
      description: "Premium white skirting with glossy finish, perfect for modern interiors.",
      details: [
        { label: "Height", value: "50mm" },
        { label: "Material", value: "MDF" },
        { label: "Finish", value: "Glossy" },
      ],
    },
    product2: {
      id: 2,
      name: "Wooden Oak Skirting",
      price: "₹150",
      image: product2,
      category: "75",
      description: "Authentic oak wood skirting with natural matte finish.",
      details: [
        { label: "Height", value: "75mm" },
        { label: "Material", value: "Solid Oak" },
        { label: "Finish", value: "Matte" },
      ],
    },
    product3: {
      id: 3,
      name: "Modern Grey Skirting",
      price: "₹110",
      image: product3,
      category: "50",
      description: "Contemporary grey PVC skirting with durable matte texture.",
      details: [
        { label: "Height", value: "50mm" },
        { label: "Material", value: "PVC" },
        { label: "Finish", value: "Matte" },
      ],
    },
    product4: {
      id: 4,
      name: "Aluminum Skirting",
      price: "₹180",
      image: product4,
      category: "100",
      description: "Sleek aluminum skirting with brushed metal finish.",
      details: [
        { label: "Height", value: "100mm" },
        { label: "Material", value: "Aluminum" },
        { label: "Finish", value: "Brushed" },
      ],
    },
    product5: {
      id: 5,
      name: "Flexible PVC Skirting",
      price: "₹95",
      image: product5,
      category: "50",
      description: "Flexible PVC skirting ideal for curved walls and corners.",
      details: [
        { label: "Height", value: "50mm" },
        { label: "Material", value: "PVC" },
        { label: "Finish", value: "Glossy" },
      ],
    },
    product6: {
      id: 6,
      name: "Heritage Skirting",
      price: "₹200",
      image: product6,
      category: "100",
      description: "Traditional hardwood skirting with polished finish.",
      details: [
        { label: "Height", value: "100mm" },
        { label: "Material", value: "Hardwood" },
        { label: "Finish", value: "Polished" },
      ],
    },
    product7: {
      id: 7,
      name: "Minimalist Skirting",
      price: "₹85",
      image: product7,
      category: "50",
      description: "Ultra-thin minimalist skirting for modern aesthetics.",
      details: [
        { label: "Height", value: "40mm" },
        { label: "Material", value: "MDF" },
        { label: "Finish", value: "Matte" },
      ],
    },
    product8: {
      id: 8,
      name: "Contemporary Skirting",
      price: "₹160",
      image: product8,
      category: "75",
      description: "Modern wood composite skirting with satin finish.",
      details: [
        { label: "Height", value: "75mm" },
        { label: "Material", value: "Wood Composite" },
        { label: "Finish", value: "Satin" },
      ],
    },
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
      <div className="skirting-product-card" data-aos="fade-up">
        <img
          src={product.image}
          alt={product.name}
          className="skirting-product-image"
        />
        <div className="skirting-product-content">
          <h3>{product.name}</h3>
          <p className="skirting-product-description">{product.description}</p>
          <div className="skirting-product-price">
            {product.price}<span>/sq ft</span>
          </div>
          <ul className="skirting-product-details">
            {product.details.map((detail, index) => (
              <li key={index}>
                <span>{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
          <div className="skirting-product-actions">
            <button
              className="skirting-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote
            </button>
            <button
              className="skirting-brochure-button"
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
    <div className="skirting-component">
      {/* Hero Banner Section */}
      <section className="skirting-hero-section">
        <img
          src={heroImage}
          alt="Premium Skirting Solutions"
          className="skirting-hero-image"
        />
        <div className="skirting-hero-overlay">
          <div className="skirting-hero-content">
            <h1 data-aos="fade-up">Aluminium Skirting & Profiles</h1>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="skirting-container">
        <h2 className="skirting-section-title" data-aos="fade-up">
          Explore Our Skirting Range
        </h2>
        <div className="skirting-category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`skirting-category-item ${activeCategory === category.id ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => scrollToCategory(category.id)}
            >
              <div className="skirting-category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="skirting-category-image"
                />
              </div>
              <div className="skirting-category-content">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products Section */}
      <section className="skirting-product-section" ref={categoryRefs.all}>
        <div className="skirting-container">
          <h2 className="skirting-section-title" data-aos="fade-up">
            All Skirting Products
          </h2>
          <div className="skirting-product-grid">
            {Object.keys(products).map(productKey => renderProductCard(productKey))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.slice(1).map(category => (
        <section 
          key={category.id} 
          className="skirting-product-section" 
          ref={categoryRefs[category.id]}
        >
          <div className="skirting-container">
            <h2 className="skirting-section-title" data-aos="fade-up">
              {category.name}
            </h2>
            <div className="skirting-product-grid">
              {Object.keys(products)
                .filter(key => products[key].category === category.id)
                .map(productKey => renderProductCard(productKey))}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="skirting-modal-overlay">
          <div className="skirting-modal-content">
            <button className="skirting-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="skirting-product-info">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="skirting-modal-product-image"
              />
              <h3>{currentProduct.name}</h3>
              <p className="skirting-modal-description">{currentProduct.description}</p>
              <div className="skirting-modal-price">
                {currentProduct.price}<span>/sq ft</span>
              </div>
              <ul className="skirting-modal-specs">
                {currentProduct.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.label}:</span> {detail.value}
                  </li>
                ))}
              </ul>
              <button
                className="skirting-brochure-button"
                onClick={() => downloadBrochure(currentProduct.name)}
              >
                <FiDownload /> Download Brochure
              </button>
            </div>
            <div className="skirting-contact-form">
              <p className="skirting-contact-message">
                We'll contact you shortly with the quote details
              </p>
              <form onSubmit={myFormik.handleSubmit}>
                <div className="skirting-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="Phone no."
                    className="skirting-form-input"
                  />
                </div>
                <div className="skirting-form-group">
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="skirting-form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="skirting-submit-button"
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

export default Skirting;