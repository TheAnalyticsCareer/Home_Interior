import React, { useState, useEffect, useRef } from "react";
import "./Carpet.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiDownload } from "react-icons/fi";
import heroImage from "./img/vinyl-2.jpg";

import grass1 from "./img/more/grass1.jpg";
import grass2 from "./img/more/grass2.jpg";
import grass3 from "./img/more/grass3.jpg";
import grass4 from "./img/more/grass4.jpg";


const Moreproducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryRefs = {
    all: useRef(null),
    vinyl: useRef(null),
    artificial: useRef(null),
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
        toast.success("Request Submitted Successfully");
        myFormik.resetForm();
        closeModal();
      } catch (err) {
        toast.error("Error While Submitting Request");
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    if (categoryRefs[category]) {
      categoryRefs[category].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadBrochure = (productName) => {
    const product = Object.values(products).find(p => p.name === productName);
    if (product?.brochure) {
      window.open(product.brochure, '_blank');
    } else {
      toast.error("Brochure not available for this product");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in", once: true });
  }, []);

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      const { name, price, details = [] } = currentProduct;
      myFormik.setFieldValue("name", name);
      myFormik.setFieldValue("price", price);
      myFormik.setFieldValue("height", details.find(d => d.label === "Height")?.value || "");
      myFormik.setFieldValue("material", details.find(d => d.label === "Material")?.value || "");
      myFormik.setFieldValue("finish", details.find(d => d.label === "Finish")?.value || "");
    }
  }, [isModalOpen, currentProduct]);

  const categories = [
    { id: "vinyl", name: "Vinyl Flooring", image: heroImage },
    { id: "artificial", name: "Artificial Grass & Vertical Garden", image: grass1 },
  ];

  const products = {
    p1: { id: 'p1', name: "Vinyl Flooring", price: "₹85", image: heroImage, category: "vinyl", details: [] },
    p2: { id: 'p2', name: "Indoor Artificial Grass", price: "₹85", image: grass1, category: "artificial", details: [] },
    p3: { id: 'p3', name: "Balcony Grass", price: "₹85", image: grass2, category: "artificial", details: [] },
    p4: { id: 'p4', name: "Artificial Grass For Stairs", price: "₹85", image: grass3, category: "artificial", details: [] },
    p5: { id: 'p5', name: "Artificial Grass", price: "₹85", image: grass4, category: "artificial", details: [] },
  };

  const openModal = (key) => {
    setCurrentProduct(products[key]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const renderProductCard = (key) => {
    const product = products[key];
    return (
      <div className="carpet-product-card" key={key} data-aos="fade-up">
        <img src={product.image} alt={product.name} className="carpet-product-image" />
        <div className="carpet-product-content">
          <h3>{product.name}</h3>
          <div className="carpet-product-price">{product.price} <span>/sq ft</span></div>
          <ul className="carpet-product-details">
            {product.details?.map((d, i) => (
              <li key={i}><span>{d.label}:</span> {d.value}</li>
            ))}
          </ul>
          <div className="carpet-product-actions">
            <button onClick={() => openModal(key)} className="carpet-quote-button">Get Quote</button>
            <button onClick={() => downloadBrochure(product.name)} className="carpet-brochure-button">
              <FiDownload /> Brochure
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carpet-component">
      <section className="carpet-hero-section">
        <img src={heroImage} alt="Hero" className="carpet-hero-image" />
        <div className="carpet-hero-overlay">
          <div className="carpet-hero-content"><h1 data-aos="fade-up">More Products</h1></div>
        </div>
      </section>

      <div className="carpet-container">
        <h2 className="carpet-section-title" data-aos="fade-up">Explore Our More Products</h2>
        <div className="carpet-category-grid">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`carpet-category-item ${activeCategory === cat.id ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="carpet-category-image-wrapper">
                <img src={cat.image} alt={cat.name} className="carpet-category-image" />
              </div>
              <div className="carpet-category-content"><h3>{cat.name}</h3></div>
            </div>
          ))}
        </div>
      </div>

      <section className="carpet-product-section" ref={categoryRefs.all}>
        <div className="carpet-container">
          <h2 className="carpet-section-title" data-aos="fade-up">All Products</h2>
          <div className="carpet-product-grid">
            {Object.keys(products).map(renderProductCard)}
          </div>
        </div>
      </section>

      {categories.map(cat => (
        <section key={cat.id} className="carpet-product-section" ref={categoryRefs[cat.id]}>
          <div className="carpet-container">
            <h2 className="carpet-section-title" data-aos="fade-up">{cat.name}</h2>
            <div className="carpet-product-grid">
              {Object.keys(products)
                .filter(k => products[k].category === cat.id)
                .map(renderProductCard)}
            </div>
          </div>
        </section>
      ))}

      {isModalOpen && currentProduct && (
        <div className="carpet-modal-overlay">
          <div className="carpet-modal-content">
            <button className="carpet-modal-close" onClick={closeModal}><FiX /></button>
            <div className="carpet-product-info">
              <img src={currentProduct.image} alt={currentProduct.name} className="carpet-modal-product-image" />
              <h3>{currentProduct.name}</h3>
              <div className="carpet-modal-price">{currentProduct.price} <span>/sq ft</span></div>
              <ul className="carpet-modal-specs">
                {currentProduct.details.map((d, i) => (
                  <li key={i}><span>{d.label}:</span> {d.value}</li>
                ))}
              </ul>
              <button onClick={() => downloadBrochure(currentProduct.name)} className="carpet-brochure-button">
                <FiDownload /> Download Brochure
              </button>
            </div>
            <div className="carpet-contact-form">
              <p className="carpet-contact-message">We’ll contact you shortly with the quote details</p>
              <form onSubmit={myFormik.handleSubmit}>
                <input type="hidden" name="name" value={myFormik.values.name} />
                <input type="hidden" name="price" value={myFormik.values.price} />
                <div className="carpet-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    className="carpet-form-input"
                  />
                </div>
                <div className="carpet-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    className="carpet-form-input"
                  />
                </div>
                <button type="submit" className="carpet-submit-button" disabled={isSubmitting}>
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

export default Moreproducts;
