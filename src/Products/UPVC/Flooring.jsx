




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










// import React, { useState, useEffect } from 'react';
// import './Flooring.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import images for hero, categories, products, and view-all card
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

// import viewAllImage from "./img/flooring/plain-wooden-flooring-500x500.webp"; // Thumbnail for "View All" card

// // Category data array for mapping category cards
// const categories = [
//   { link: "/skirting-50mm", image: Category1, title: "Laminate Flooring" },
//   { link: "/hotel-carpet", image: Category2, title: "SPC Flooring" },
//   { link: "/hand-tuffted-carpet", image: Category3, title: "Engineered Flooring" },
//   { link: "/hotel-carpet", image: Category4, title: "Hardwood Flooring" },
//   { link: "/hotel-carpet", image: Category5, title: "Bamboo Flooring" },
//   { link: "/hotel-carpet", image: Category6, title: "Decking Wood" },
//   { link: "/hotel-carpet", image: Category7, title: "Thermo Pine" },
// ];

// // Product data array for mapping product showcase cards
// const products = [
//   {
//     id: 'p1',
//     link: "/classic-white-skirting",
//     image: product1,
//     title: "Oak Silver Pearl Wooden Flooring",
//     price: "₹120",
//     height: "50mm",
//     material: "MDF",
//     finish: "Glossy",
//     details: [
//       { label: "Height", value: "50mm" },
//       { label: "Material", value: "MDF" },
//       { label: "Finish", value: "Glossy" }
//     ]
//   },
//   {
//     id: 'p2',
//     link: "/wooden-oak-skirting",
//     image: product2,
//     title: "American Red Oak Flooring",
//     price: "₹150",
//     height: "75mm",
//     material: "Solid Oak",
//     finish: "Matte",
//     details: [
//       { label: "Height", value: "75mm" },
//       { label: "Material", value: "Solid Oak" },
//       { label: "Finish", value: "Matte" }
//     ]
//   },
//   {
//     id: 'p3',
//     link: "/modern-grey-skirting",
//     image: product3,
//     title: "Oak Wood Flooring",
//     price: "₹110",
//     height: "50mm",
//     material: "PVC",
//     finish: "Matte",
//     details: [
//       { label: "Height", value: "50mm" },
//       { label: "Material", value: "PVC" },
//       { label: "Finish", value: "Matte" }
//     ]
//   },
//   {
//     id: 'p4',
//     link: "/aluminum-skirting",
//     image: product4,
//     title: "Hardwood Flooring",
//     price: "₹180",
//     height: "100mm",
//     material: "Aluminum",
//     finish: "Brushed",
//     details: [
//       { label: "Height", value: "100mm" },
//       { label: "Material", value: "Aluminum" },
//       { label: "Finish", value: "Brushed" }
//     ]
//   },
//   {
//     id: 'p5',
//     link: "/flexible-pvc-skirting",
//     image: product5,
//     title: "Linoleum Flooring",
//     price: "₹95",
//     height: "50mm",
//     material: "PVC",
//     finish: "Glossy",
//     details: [
//       { label: "Height", value: "50mm" },
//       { label: "Material", value: "PVC" },
//       { label: "Finish", value: "Glossy" }
//     ]
//   },
//   {
//     id: 'p6',
//     link: "/heritage-skirting",
//     image: product6,
//     title: "Cumaru Glossy Engineered Flooring",
//     price: "₹200",
//     height: "100mm",
//     material: "Hardwood",
//     finish: "Polished",
//     details: [
//       { label: "Height", value: "100mm" },
//       { label: "Material", value: "Hardwood" },
//       { label: "Finish", value: "Polished" }
//     ]
//   },
//   {
//     id: 'p7',
//     link: "/minimalist-skirting",
//     image: product7,
//     title: "Canadian Maple Glossy Engineered Flooring",
//     price: "₹85",
//     height: "40mm",
//     material: "MDF",
//     finish: "Matte",
//     details: [
//       { label: "Height", value: "40mm" },
//       { label: "Material", value: "MDF" },
//       { label: "Finish", value: "Matte" }
//     ]
//   },
//   {
//     id: 'p8',
//     link: "/contemporary-skirting",
//     image: product8,
//     title: "Rich Oak Wooden Flooring",
//     price: "₹160",
//     height: "75mm",
//     material: "Wood Composite",
//     finish: "Satin",
//     details: [
//       { label: "Height", value: "75mm" },
//       { label: "Material", value: "Wood Composite" },
//       { label: "Finish", value: "Satin" }
//     ]
//   },
//   {
//     id: 'p9',
//     link: "/contemporary-skirting",
//     image: product9,
//     title: "Weathered Oak Wooden Flooring",
//     price: "₹160",
//     height: "75mm",
//     material: "Wood Composite",
//     finish: "Satin",
//     details: [
//       { label: "Height", value: "75mm" },
//       { label: "Material", value: "Wood Composite" },
//       { label: "Finish", value: "Satin" }
//     ]
//   },
//   {
//     id: 'p10',
//     link: "/contemporary-skirting",
//     image: product10,
//     title: "American Oak Wooden Flooring",
//     price: "₹160",
//     height: "75mm",
//     material: "Wood Composite",
//     finish: "Satin",
//     details: [
//       { label: "Height", value: "75mm" },
//       { label: "Material", value: "Wood Composite" },
//       { label: "Finish", value: "Satin" }
//     ]
//   }
// ];


// // Flooring component: displays hero, categories, and product showcase with animations
// const Flooring = () => {
//   // State for modal visibility and current product
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
  

// // Loading state
//   const [isSubmitting, setIsSubmitting] = useState(false);


//   // ------------------------------------------------------------------------
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


//   // ---------------------------------------------------------------------
  
//     useEffect(() => {
//       if (isModalOpen && currentProduct) {
//         myFormik.setFieldValue("name", currentProduct.name);
//         myFormik.setFieldValue("price", currentProduct.price);
  
//         const heightDetail = currentProduct.details.find(d => d.label === "Height");
//         const materialDetail = currentProduct.details.find(d => d.label === "Material");
//         const finishDetail = currentProduct.details.find(d => d.label === "Finish");
  
//         myFormik.setFieldValue("height", heightDetail ? heightDetail.value : "");
//         myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
//         myFormik.setFieldValue("finish", finishDetail ? finishDetail.value : "");
//       }
//     }, [isModalOpen, currentProduct]);
  


//   // Initialize AOS on mount for scroll animations
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: 'ease-in', once: true });
//   }, []);

//   // Function to open modal with product details
//   const openModal = (productId) => {
//     const product = products.find(p => p.id === productId);
//     setCurrentProduct(product);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = 'auto'; // Re-enable scrolling
//   };

 

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
//             <h1 data-aos="fade-up">Premium Flooring</h1>
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
//                           <button 
//                             className="ps-btn ps-btn--warning get-q-btn"
//                             onClick={() => openModal(prod.id)}
//                           >
//                             Get Quote
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right: view all products card (span 3/12) */}
//               <div className="col-md-3">
//                 <div className="jk-banner-right">
//                   <a href="/productPage" className="view-all-link">
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
//                       <button 
//                         className="ps-btn ps-btn--warning get-q-btn"
//                         onClick={() => openModal(prod.id)}
//                       >
//                         Get Quote
//                       </button>
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
//                       <button 
//                         className="ps-btn ps-btn--warning get-q-btn"
//                         onClick={() => openModal(prod.id)}
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

//       {/* Quote Modal - Shows when Get Quote button is clicked */}
//       {isModalOpen && currentProduct && (
//               <div className="quote-modal-overlay">
//                 <div className="quote-modal" data-aos="zoom-in">
//                   <button className="close-modal" onClick={closeModal}>
//                     <span className="material-symbols-outlined">close</span>
//                   </button>
//                   <div className="modal-content">
//                     <div className="product-info">
//                       <img src={currentProduct.image} alt={currentProduct.name} className="modal-product-image" />
//                       <div className="product-details">
//                         <h3>{currentProduct.name}</h3>
//                         <div className="modal-price">{currentProduct.price}<span>/sq ft</span></div>
//                         <ul className="modal-specs">
//                           {currentProduct.details.map((detail, index) => (
//                             <li key={index}>
//                               <span>{detail.label}:</span> {detail.value}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="contact-form">
//                       <p className="contact-message">We'll contact you shortly with the quote details</p>
//                       <form onSubmit={myFormik.handleSubmit}>
//                         <div className="form-group">
//                           <label htmlFor="phone">Phone Number</label>
//                           <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             value={myFormik.values.phone}
//                             onChange={myFormik.handleChange}
//                             required
//                             placeholder="Phone no."
//                             className="form-input"
//                           />
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="user-email">Email</label>
//                           <input
//                             type="email"
//                             id="user-email"
//                             name="email"
//                             value={myFormik.values.email}
//                             onChange={myFormik.handleChange}
//                             required
//                             placeholder="example@gmail.com"
//                             className="form-input"
//                           />
//                         </div>
//                         <button type="submit" className="submit-btn" disabled={isSubmitting}>
//                           {isSubmitting ? "Submitting..." : "Submit Request"}
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default Flooring;










import React, { useState, useEffect } from 'react';
import './Flooring.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import images
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

import viewAllImage from "./img/flooring/plain-wooden-flooring-500x500.webp";

// Categories data
const categories = [
  { link: "/skirting-50mm", image: Category1, title: "Laminate Flooring" },
  { link: "/hotel-carpet", image: Category2, title: "SPC Flooring" },
  { link: "/hand-tuffted-carpet", image: Category3, title: "Engineered Flooring" },
  { link: "/hotel-carpet", image: Category4, title: "Hardwood Flooring" },
  { link: "/hotel-carpet", image: Category5, title: "Bamboo Flooring" },
  { link: "/hotel-carpet", image: Category6, title: "Decking Wood" },
  { link: "/hotel-carpet", image: Category7, title: "Thermo Pine" },
];

// Products data
const products = [
  {
    id: 'p1',
    name: "Oak Silver Pearl Wooden Flooring",
    link: "/classic-white-skirting",
    image: product1,
    price: "₹120",
    details: [
      { label: "Height", value: "50mm" },
      { label: "Material", value: "MDF" },
      { label: "Finish", value: "Glossy" }
    ]
  },
  {
    id: 'p2',
    name: "American Red Oak Flooring",
    link: "/wooden-oak-skirting",
    image: product2,
    price: "₹150",
    details: [
      { label: "Height", value: "75mm" },
      { label: "Material", value: "Solid Oak" },
      { label: "Finish", value: "Matte" }
    ]
  },
  {
    id: 'p3',
    name: "Oak Wood Flooring",
    link: "/modern-grey-skirting",
    image: product3,
    price: "₹110",
    details: [
      { label: "Height", value: "50mm" },
      { label: "Material", value: "PVC" },
      { label: "Finish", value: "Matte" }
    ]
  },
  {
    id: 'p4',
    name: "Hardwood Flooring",
    link: "/aluminum-skirting",
    image: product4,
    price: "₹180",
    details: [
      { label: "Height", value: "100mm" },
      { label: "Material", value: "Aluminum" },
      { label: "Finish", value: "Brushed" }
    ]
  },
  {
    id: 'p5',
    name: "Linoleum Flooring",
    link: "/flexible-pvc-skirting",
    image: product5,
    price: "₹95",
    details: [
      { label: "Height", value: "50mm" },
      { label: "Material", value: "PVC" },
      { label: "Finish", value: "Glossy" }
    ]
  },
  {
    id: 'p6',
    name: "Cumaru Glossy Engineered Flooring",
    link: "/heritage-skirting",
    image: product6,
    price: "₹200",
    details: [
      { label: "Height", value: "100mm" },
      { label: "Material", value: "Hardwood" },
      { label: "Finish", value: "Polished" }
    ]
  },
  {
    id: 'p7',
    name: "Canadian Maple Glossy Engineered Flooring",
    link: "/minimalist-skirting",
    image: product7,
    price: "₹85",
    details: [
      { label: "Height", value: "40mm" },
      { label: "Material", value: "MDF" },
      { label: "Finish", value: "Matte" }
    ]
  },
  {
    id: 'p8',
    name: "Rich Oak Wooden Flooring",
    link: "/contemporary-skirting",
    image: product8,
    price: "₹160",
    details: [
      { label: "Height", value: "75mm" },
      { label: "Material", value: "Wood Composite" },
      { label: "Finish", value: "Satin" }
    ]
  },
  {
    id: 'p9',
    name: "Weathered Oak Wooden Flooring",
    link: "/contemporary-skirting",
    image: product9,
    price: "₹160",
    details: [
      { label: "Height", value: "75mm" },
      { label: "Material", value: "Wood Composite" },
      { label: "Finish", value: "Satin" }
    ]
  },
  {
    id: 'p10',
    name: "American Oak Wooden Flooring",
    link: "/contemporary-skirting",
    image: product10,
    price: "₹160",
    details: [
      { label: "Height", value: "75mm" },
      { label: "Material", value: "Wood Composite" },
      { label: "Finish", value: "Satin" }
    ]
  }
];

const Flooring = () => {
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
    const product = products.find(p => p.id === productId);
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

  return (
    <div className="carpet-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImage} alt="Premium Carpet Solutions" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 data-aos="fade-up">Premium Flooring</h1>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="category-section">
        <div className="container">
          <div className="category-grid">
            {categories.map((cat, index) => (
              <a href={cat.link} className="category-item" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                <div className="category-image-wrapper">
                  <img src={cat.image} alt={cat.title} className="category-image" />
                </div>
                <div className="category-content">
                  <h3>{cat.title}</h3>
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
                  {products.slice(0, 2).map((prod, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="jk-banner-product-wrapper">
                        <a href={prod.link} className="jk_bnr_prd_img">
                          <img src={prod.image} alt={prod.name} />
                        </a>
                        <div className="jk-banner-product-content">
                          <h2><a href={prod.link}>{prod.name}</a></h2>
                          <div className="jk-price">{prod.price}<span>/sq ft</span></div>
                          <div className="jk-list-info">
                            <ul>
                              {renderProductDetails(prod.details)}
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

              {/* View All Section */}
              <div className="col-md-3">
                <div className="jk-banner-right">
                  <a href="/productPage" className="view-all-link">
                    <div className="tp_bnr_vm_img">
                      <img src={viewAllImage} alt="View All Products" />
                    </div>
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

            {/* Next Rows */}
            {[products.slice(2, 6), products.slice(6)].map((rowProducts, rowIndex) => (
              <div 
                className="row home_boxes" 
                data-aos="fade-up" 
                data-aos-delay={`${(rowIndex + 1) * 100}`}
                key={rowIndex}
              >
                {rowProducts.map((prod, idx) => (
                  <div className="col-md-3" key={idx}>
                    <div className="jk-banner-product-wrapper">
                      <a href={prod.link} className="jk_bnr_prd_img">
                        <img src={prod.image} alt={prod.name} />
                      </a>
                      <div className="jk-banner-product-content">
                        <h2><a href={prod.link}>{prod.name}</a></h2>
                        <div className="jk-price">{prod.price}<span>/sq ft</span></div>
                        <div className="jk-list-info">
                          <ul>
                            {renderProductDetails(prod.details)}
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
            ))}
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

export default Flooring;