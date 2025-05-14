



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
import product1 from "./img/skirting/aluminum-screw-on-skirting-1000x1000.webp";
import product2 from "./img/skirting/easy-fix-modular-skirting-500x500.webp";
import product3 from "./img/skirting/aluminium door.webp";
import product4 from "./img/skirting/aluminum-stuck-on-skirting-500x500.webp";
import product5 from "./img/skirting/profiles-for-floor-pvc-edge-profile-1000x1000.webp";
import product6 from "./img/skirting/aluminum-stair-edging-500x500.webp";
import product7 from "./img/skirting/anodized-aluminum-profile-500x500.webp";
import product8 from "./img/skirting/modular-aluminium-skirting-500x500.webp";
import product9 from "./img/skirting/glossy modular.webp";
import product10 from "./img/skirting/aluminum-t-profile-with-fixing-base-profile-bp-23-500x500.webp";


//pdf broshure

import p9  from "./img/skirting/modular-skirting-illusion-recessed.pdf"
import p10  from "./img/skirting/modular-skirting-illusion-recessed.pdf"








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
    // Find the product by name
    const productKey = Object.keys(products).find(
      key => products[key].name === productName
    );
    
    if (productKey && products[productKey].brochure) {
      // Open the PDF in a new tab
      window.open(products[productKey].brochure, '_blank');
    } else {
      // Fallback if no PDF is found
      toast.error("Brochure not available for this product");
    }
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
      name: "Aluminum Screw On Skirting",
      price: "₹120 / sq ft",
      image: product1, // Make sure 'product2' is imported or defined as the image path
      category: "50", // You can adjust this based on your actual category IDs
      description: "Flat-shaped aluminum skirting with anodised finish, ideal for interior construction use.",
      details: [
        { label: "Shape", value: "Flat" },
        { label: "Dimensions", value: "50mm, 75mm & 100mm" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Material", value: "Aluminum" },
        { label: "Finish", value: "Anodised" },
        { label: "Anodised", value: "Yes" },
        { label: "Position", value: "Interior" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Weight", value: "900 Gram" },
        { label: "Minimum Order Quantity", value: "20 sq ft" },
      ],
    },
    product2: {
      id: 2,
      name: "Easy Fix Modular Skirting",
      price: "₹1200 / Piece",
      image: product2, // Make sure to define or import this image
        brochure: p9,
      category: "50",
      description: "Designed to be installed on wall, gypsum and plywood partitions and on top of all kinds of flooring..",
      details: [
        { label: "Thickness", value: "12 mm" },
        { label: "Surface Finish", value: "Polish" },
        { label: "Finish", value: "Glossy" },
        { label: "Height", value: "50–150 mm" },
        { label: "Material", value: "PVC" },
        { label: "Length", value: "3048 mm" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product3: {
      id: 3,
      name: "Aluminium Door Profiles",
      price: "₹200 / sq ft",
      image: product3, // Replace or import the actual image reference
      category: "50", // You may use a separate category ID for door profiles
      description: "Durable aluminium door profiles with smooth surface treatment, suitable for both interior and exterior industrial applications.",
      details: [
        { label: "Usage/Application", value: "Industrial" },
        { label: "Shape", value: "Angle" },
        { label: "Position", value: "Interior, Exterior" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Color", value: "Multi Color" },
        { label: "Surface Treatment", value: "Smooth" },
      ],
    },
    product4: {
      id: 4,
      name: "Aluminum Stuck On Skirting",
      price: "₹350 / Piece",
      image: product4, // Replace with the actual image import or path
      category: "80",
      description: "AIDF Matt Silver Finish 80 mm Aluminum Skirting SK-80 is ideal to cover any types of wall base to protect from foot scratches and is also designed with a sit on toe to conceal any gaps between the joint of a wall and any type of floor covering thereby providing a neat finish on the joint. It is installed using a special adhesive for permanent and neat fixing.",
      details: [
        { label: "Shape", value: "T Slot Profile" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Material", value: "Aluminum" },
        { label: "Finish", value: "Matt Silver Finish" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Color", value: "Silver" },
        { label: "Length", value: "80 mm" },
        { label: "Application", value: "Furniture, Windows & Doors, Decorations" },
      ],
    },
    product5: {
      id: 5,
      name: "Profiles For Floor PVC Edge Profile",
      price: "₹150 / Kg",
      image: product5, // Replace with actual image import or path
      category: "50", // You can update this based on your category system
      description: "PVC Edge Profile to be used with floorings up to 5mm thick.",
      details: [
        { label: "Design", value: "Customized" },
        { label: "Material", value: "PVC" },
        { label: "Usage/Application", value: "Home, Office" },
        { label: "Thickness", value: "10 mm" },
        { label: "Length", value: "2800 mm" },
        { label: "Usage", value: "Household, Commercial" },
      ],
    },
    product6: {
      id: 6,
      name: "Aluminum Stair Nose",
      price: "₹120 / Piece",
      image: product6, // Replace with the actual image import or path
      category: "100", // Update based on your category system
      description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
      details: [
        { label: "Brand", value: "Annupurana" },
        { label: "Length", value: "2.44-3.0 m" },
        { label: "Material", value: "Aluminum" },
        { label: "Color", value: "Silver" },
        { label: "Finish", value: "Mill Finish Mat Silver" },
        { label: "Tensile Strength", value: "160 MPa" },
      ],
    },
    product7: {
      id: 7,
      name: "Anodized Aluminum Profile",
      price: "₹170 / Kg",
       brochure: p10,
      image: product7, // Replace with the actual image import or path
      category: "50", // Update based on your category system
      description: "This one-piece carpet profile is to make a smooth and safe transition between carpet and different types of hard floorings. The design of the profile secures and conceals the flooring thus providing a smooth finish and also protecting the edge of the floorings. The carpet is fitted into the profile and then the top is flattened to provide a secure fit. These trims are commonly used at door interfaces to provide a smooth and safe transition.",
      details: [
        { label: "Usage/Application", value: "Interiors" },
        { label: "Shape", value: "Flat" },
        { label: "Dimensions", value: "28mm" },
        { label: "Width", value: "28mm" },
        { label: "Surface Finishing", value: "Plain" },
        { label: "Position", value: "Interior" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Brand", value: "AIDF" },
        { label: "Material", value: "Aluminum" },
        { label: "Is It Anodised", value: "Anodised" },
        { label: "Minimum Order Quantity", value: "50 Kg" },
      ],
    },
    product8: {
      id: 8,
      name: "Modular Aluminium Skirting",
      price: "₹350 / Piece",
      image: product8, // Replace with the actual image import or path
      category: "100", // Update based on your category system
      description: "llusion fineline along with illusion recessed is an ideal combination of skirting for offices where dry wall partitions are created along the periphery on civil walls..",
      details: [
        { label: "Shape", value: "T Slot Profile" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Color", value: "Green, Black" },
        { label: "Wear Resistance", value: "Yes" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Finish", value: "Satin Matte" },
        { label: "Length", value: "3048 mm" },
        { label: "Height", value: "40–60 mm" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    product9: {
      id: 9,
      name: "Glossy Modular Skirting Profile",
      price: "₹350 / Piece",
      brochure: p9,
      image: product9, // Replace with the actual image import or path
      category: "75", // Update based on your category system
      description: "Gypsum although a idea| material for drywall partition is susceptible to water, illusion recessed is an ideal skirting for areas where wet mopping is done on regular basis.",
      details: [
        { label: "Shape", value: "T Profile" },
        { label: "Wood Flooring Type", value: "Oak Flooring" },
        { label: "Wear Resistance", value: "Yes" },
        { label: "Material", value: "PVC" },
        { label: "Thickness", value: "10–12 mm" },
        { label: "Length", value: "4 Feet" },
        { label: "Finishing", value: "Glossy" },
      ],
    },
    product10: {
      id: 10,
      name: "Interior Aluminium Profiles",
      price: "₹220 / Kg",
       brochure: p10,
      image: product10, // Replace with the actual image import or path
      category: "100", // Update based on your category system
      description: "This two-piece carpet profile forms a C shape with adjustable height which can be used to form a neat edge at the junction of the floor and wall. This profile can also be used on carpet skirting’s as capping to grip the carpet skirting and also giving a neat edge finish to the carpet skirting. The fixing base profile is screwed to the ground or the wall and the carpet edge covers the screwed part of fixing base profile. Further the L profile is plugged in the fixing base profile which covers the edges of the Scarpet while also securing and concealing the uneven edges or junctions thus providing a neat finish.",
      details: [
        { label: "Usage/Application", value: "Interior" },
        { label: "Dimension", value: "AIDF-16BP-23" },
        { label: "Height", value: "3048mm" },
        { label: "Alloy", value: "Is Alloy" },
        { label: "Finishing", value: "Silver/Matt" },
        { label: "Color", value: "Silver/Matt" },
        { label: "Temper", value: "18" },
        { label: "Features", value: "Protect for Edge Area Carpet, Vinyl & Laminate Flooring" },
        { label: "Brand", value: "AIDF" },
        { label: "Is It Anodised", value: "Anodised" },
        { label: "Minimum Order Quantity", value: "20 Kg" },
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