

// import React, { useState, useEffect } from "react";
// import "./Skirting.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

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
// import viewAllImage from "./img/skirting/product1.webp";

// const Skirting = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState("");

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   // Product data
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
//     setPhoneNumber("");
//     document.body.style.overflow = "auto";
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log(
//       "Quote request for:",
//       currentProduct.name,
//       "Phone:",
//       phoneNumber
//     );
//     // Close modal after submission
//     closeModal();
//     // You might want to show a success message here
//   };

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
//             <a
//               href="/skirting-50mm"
//               className="category-item"
//               data-aos="fade-up"
//             >
//               <div className="category-image-wrapper">
//                 <img
//                   src={skirting50mm}
//                   alt="50MM Skirting"
//                   className="category-image"
//                 />
//               </div>
//               <div className="category-content">
//                 <h3>50MM Skirting</h3>
//               </div>
//             </a>

//             <a
//               href="/skirting-75mm"
//               className="category-item"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <div className="category-image-wrapper">
//                 <img
//                   src={skirting75mm}
//                   alt="75MM Skirting"
//                   className="category-image"
//                 />
//               </div>
//               <div className="category-content">
//                 <h3>75MM Skirting</h3>
//               </div>
//             </a>

//             <a
//               href="/skirting-100mm"
//               className="category-item"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="category-image-wrapper">
//                 <img
//                   src={skirting100mm}
//                   alt="100MM Skirting"
//                   className="category-image"
//                 />
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
//             {/* First Row */}
//             <div className="row" data-aos="fade-up">
//               <div className="col-md-9">
//                 <div className="row">
//                   {/* First Featured Product */}
//                   <div className="col-md-6">
//                     <div className="jk-banner-product-wrapper">
//                       <a
//                         href="/classic-white-skirting"
//                         className="jk_bnr_prd_img"
//                       >
//                         <img src={product1} alt="Classic White Skirting" />
//                       </a>
//                       <div className="jk-banner-product-content">
//                         <h2>
//                           <a href="/classic-white-skirting">
//                            {products.product1.name}
//                           </a>
//                         </h2>
//                         <div className="jk-price">
//                         {products.product1.price}
//                         </div>
//                         <div className="jk-list-info">
//                           <ul>
//                             <li>
//                               {products.product1.details.label}
//                             </li>
//                             <li>
//                               <span>Material:</span> MDF
//                             </li>
//                             <li>
//                               <span>Finish:</span> Glossy
//                             </li>
//                           </ul>
//                         </div>
//                         <button
//                           className="ps-btn ps-btn--warning get-q-btn"
//                           onClick={() => openModal("product1")}
//                         >
//                           Get Quote
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Second Featured Product */}
//                   <div className="col-md-6">
//                     <div className="jk-banner-product-wrapper">
//                       <a href="/wooden-oak-skirting" className="jk_bnr_prd_img">
//                         <img src={product2} alt="Wooden Oak Skirting" />
//                       </a>
//                       <div className="jk-banner-product-content">
//                         <h2>
//                           <a href="/wooden-oak-skirting">Wooden Oak Skirting</a>
//                         </h2>
//                         <div className="jk-price">
//                           ₹150<span>/sq ft</span>
//                         </div>
//                         <div className="jk-list-info">
//                           <ul>
//                             <li>
//                               <span>Height:</span> 75mm
//                             </li>
//                             <li>
//                               <span>Material:</span> Solid Oak
//                             </li>
//                             <li>
//                               <span>Finish:</span> Matte
//                             </li>
//                           </ul>
//                         </div>
//                         <button
//                           className="ps-btn ps-btn--warning get-q-btn"
//                           onClick={() => openModal("product2")}
//                         >
//                           Get Quote
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* View All Section */}
//               <div className="col-md-3">
//                 <div className="jk-banner-right">
//                   <a href="/all-products" className="view-all-link">
//                     <div className="tp_bnr_vm_img">
//                       <img src={viewAllImage} alt="View All Products" />
//                     </div>
//                     <div className="view-all-text">
//                       <h2>View Complete Range of Products</h2>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                       >
//                         <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white"></path>
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Second Row */}
//             <div
//               className="row home_boxes"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/modern-grey-skirting" className="jk_bnr_prd_img">
//                     <img src={product3} alt="Modern Grey Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/modern-grey-skirting">Modern Grey Skirting</a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹110<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 50mm
//                         </li>
//                         <li>
//                           <span>Material:</span> PVC
//                         </li>
//                         <li>
//                           <span>Finish:</span> Matte
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product3")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/aluminum-skirting" className="jk_bnr_prd_img">
//                     <img src={product4} alt="Aluminum Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/aluminum-skirting">Aluminum Skirting</a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹180<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 100mm
//                         </li>
//                         <li>
//                           <span>Material:</span> Aluminum
//                         </li>
//                         <li>
//                           <span>Finish:</span> Brushed
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product4")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/flexible-pvc-skirting" className="jk_bnr_prd_img">
//                     <img src={product5} alt="Flexible PVC Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/flexible-pvc-skirting">Flexible PVC Skirting</a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹95<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 50mm
//                         </li>
//                         <li>
//                           <span>Material:</span> PVC
//                         </li>
//                         <li>
//                           <span>Finish:</span> Glossy
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product5")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/heritage-skirting" className="jk_bnr_prd_img">
//                     <img src={product6} alt="Heritage Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/heritage-skirting">Heritage Skirting</a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹200<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 100mm
//                         </li>
//                         <li>
//                           <span>Material:</span> Hardwood
//                         </li>
//                         <li>
//                           <span>Finish:</span> Polished
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product6")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Third Row */}
//             <div
//               className="row home_boxes"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/minimalist-skirting" className="jk_bnr_prd_img">
//                     <img src={product7} alt="Minimalist Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/minimalist-skirting">Minimalist Skirting</a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹85<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 40mm
//                         </li>
//                         <li>
//                           <span>Material:</span> MDF
//                         </li>
//                         <li>
//                           <span>Finish:</span> Matte
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product7")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/contemporary-skirting" className="jk_bnr_prd_img">
//                     <img src={product8} alt="Contemporary Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/contemporary-skirting">Contemporary Skirting</a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹160<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 75mm
//                         </li>
//                         <li>
//                           <span>Material:</span> Wood Composite
//                         </li>
//                         <li>
//                           <span>Finish:</span> Satin
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product8")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/classic-white-skirting" className="jk_bnr_prd_img">
//                     <img src={product1} alt="Classic White Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/classic-white-skirting">
//                         Classic White Skirting
//                       </a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹120<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 50mm
//                         </li>
//                         <li>
//                           <span>Material:</span> MDF
//                         </li>
//                         <li>
//                           <span>Finish:</span> Glossy
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product1")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3">
//                 <div className="jk-banner-product-wrapper">
//                   <a href="/wooden-oak-skirting" className="jk_bnr_prd_img">
//                     <img src={product2} alt="Wooden Oak Skirting" />
//                   </a>
//                   <div className="jk-banner-product-content">
//                     <h2>
//                       <a href="/wooden-oak-skirting">Wooden Oak Skirting</a>
//                     </h2>
//                     <div className="jk-price">
//                       ₹150<span>/sq ft</span>
//                     </div>
//                     <div className="jk-list-info">
//                       <ul>
//                         <li>
//                           <span>Height:</span> 75mm
//                         </li>
//                         <li>
//                           <span>Material:</span> Solid Oak
//                         </li>
//                         <li>
//                           <span>Finish:</span> Matte
//                         </li>
//                       </ul>
//                     </div>
//                     <button
//                       className="ps-btn ps-btn--warning get-q-btn"
//                       onClick={() => openModal("product2")}
//                     >
//                       Get Quote
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="quote-modal-overlay">
//           <div className="quote-modal" data-aos="zoom-in">
//             <button className="close-modal" onClick={closeModal}>
//               <span class="material-symbols-outlined">close</span>
//             </button>

//             <div className="modal-content">
//               <div className="product-info">
//                 <img
//                   src={currentProduct.image}
//                   alt={currentProduct.name}
//                   className="modal-product-image"
//                 />
//                 <div className="product-details">
//                   <h3>{currentProduct.name}</h3>
//                   <div className="modal-price">
//                     {currentProduct.price}
//                     <span>/sq ft</span>
//                   </div>
//                   <ul className="modal-specs">
//                     {currentProduct.details.map((detail, index) => (
//                       <li key={index}>
//                         <span>{detail.label}:</span> {detail.value}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

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

// export default Skirting;












import React, { useState, useEffect } from "react";
import "./Skirting.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
import viewAllImage from "./img/skirting/product1.webp";
import { height } from "@mui/system";

const Skirting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
 

// Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);


   // ------------------------------------------------------------------------
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

  // ---------------------------------------------------------------------

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



  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Product data
  const products = {
    product1: {
      id: 1,
      name: "Classic White Skirting",
      price: "₹120",
      image: product1,
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

  

  // Helper function to render product cards
  const renderProductCard = (productKey) => {
    const product = products[productKey];
    return (
      <div className="jk-banner-product-wrapper">
        <a href={`/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="jk_bnr_prd_img">
          <img src={product.image} alt={product.name} />
        </a>
        <div className="jk-banner-product-content">
          <h2>
            <a href={`/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
              {product.name}
            </a>
          </h2>
          <div className="jk-price">
            {product.price}<span>/sq ft</span>
          </div>
          <div className="jk-list-info">
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>
                  <span>{detail.label}:</span> {detail.value}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="ps-btn ps-btn--warning get-q-btn"
            onClick={() => openModal(productKey)}
          >
            Get Quote
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="skirting-page">
      {/* Hero Banner Section */}
      <section className="hero-section">
        <img
          src={heroImage}
          alt="Premium Skirting Solutions"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 data-aos="fade-up">Premium Skirting Profiles</h1>
          </div>
        </div>
      </section>

      {/* Category List Section */}
      <section className="category-section">
        <div className="container">
          <div className="category-grid">
            <a
              href="/skirting-50mm"
              className="category-item"
              data-aos="fade-up"
            >
              <div className="category-image-wrapper">
                <img
                  src={skirting50mm}
                  alt="50MM Skirting"
                  className="category-image"
                />
              </div>
              <div className="category-content">
                <h3>50MM Skirting</h3>
              </div>
            </a>

            <a
              href="/skirting-75mm"
              className="category-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="category-image-wrapper">
                <img
                  src={skirting75mm}
                  alt="75MM Skirting"
                  className="category-image"
                />
              </div>
              <div className="category-content">
                <h3>75MM Skirting</h3>
              </div>
            </a>

            <a
              href="/skirting-100mm"
              className="category-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="category-image-wrapper">
                <img
                  src={skirting100mm}
                  alt="100MM Skirting"
                  className="category-image"
                />
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
        <div className="container">
          <div className="ps-section__carousel">
            {/* First Row */}
            <div className="row" data-aos="fade-up">
              <div className="col-md-9">
                <div className="row">
                  {/* First Featured Product */}
                  <div className="col-md-6">
                    {renderProductCard("product1")}
                  </div>

                  {/* Second Featured Product */}
                  <div className="col-md-6">
                    {renderProductCard("product2")}
                  </div>
                </div>
              </div>

              {/* View All Section */}
              <div className="col-md-3">
                <div className="jk-banner-right">
                  <a href="/all-products" className="view-all-link">
                    <div className="tp_bnr_vm_img">
                      <img src={viewAllImage} alt="View All Products" />
                    </div>
                    <div className="view-all-text">
                      <h2>View Complete Range of Products</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d="M8 9H0V7H8V0L16 8L8 16V9Z" fill="white"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div
              className="row home_boxes"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-md-3">
                {renderProductCard("product3")}
              </div>
              <div className="col-md-3">
                {renderProductCard("product4")}
              </div>
              <div className="col-md-3">
                {renderProductCard("product5")}
              </div>
              <div className="col-md-3">
                {renderProductCard("product6")}
              </div>
            </div>

            {/* Third Row */}
            <div
              className="row home_boxes"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-md-3">
                {renderProductCard("product7")}
              </div>
              <div className="col-md-3">
                {renderProductCard("product8")}
              </div>
              <div className="col-md-3">
                {renderProductCard("product1")}
              </div>
              <div className="col-md-3">
                {renderProductCard("product2")}
              </div>
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
                <img src={currentProduct.image} alt={currentProduct.name} className="modal-product-image" />
                <div className="product-details">
                  <h3>{currentProduct.name}</h3>
                  <div className="modal-price">{currentProduct.price}<span>/sq ft</span></div>
                  <ul className="modal-specs">
                    {currentProduct.details.map((detail, index) => (
                      <li key={index}>
                        <span>{detail.label}:</span> {detail.value}
                      </li>
                    ))}
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
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
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

export default Skirting;