import React from "react";
import "./HomeInterior.css";
import  { useEffect, useRef } from 'react';
import HeroImg from "./img/interiorHero.jpg"
import card_1 from "./img/card_1.png"
import card_2 from "./img/card_2.png"
import card_3 from "./img/card_3.png"
import card_4 from "./img/card_4.png"
import card_5 from "./img/card_5.png"
import whyImg from "./img/Why we use.jpg"
import Benifit_1 from "./img/Benefit section 1.jpg"
import Benifit_2 from "./img/Benefit section 3.jpg"
import Benifit_3 from "./img/Benefit section 4.jpg"
import Benifit_4 from "./img/Benefit section 6.jpg"
const HomeInterior = () => {

  const benefitSections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); 
          }
        });
      },
      { threshold: 0.1 }
    );

    benefitSections.current.forEach((section) => {
      if (section) observer.observe(section);
    });


    return () => {
      benefitSections.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);







  return (
    <div className="alu-home-interior-page">
      {/* Hero Section */}
      <section className="upvc-hero-section">
      <div className="interior-hero-container">
        <img
          src={HeroImg}
          alt="Alu Home Interior Banner"
          className="hero-banner"
        />
      </div>
    </section>

      {/* Product Categories Section */}
      <section className="product_hero_section_footer">
      <div className="product_hero_footer">
        <a className="product_category_link" href="/alu-home-interior/doors-and-window">
          <div className="accessories_container">
            <div className="seting_icon_container">
              <img
                src={card_1}
                alt="Doors & Window"
              />
            </div>
            <div className="category_name">Doors & Window</div>
          </div>
        </a>
        
        <a className="product_category_link" href="/alu-home-interior/Slim-Sliding-Doors">
          <div className="accessories_container">
            <div className="seting_icon_container">
              <img
                 src={card_2}
                alt="Slim Sliding Door"
              />
            </div>
            <div className="category_name">Slim Sliding Door</div>
          </div>
        </a>
        
        <a className="product_category_link" href="/alu-home-interior/shower-cubical">
          <div className="accessories_container">
            <div className="seting_icon_container">
              <img
                 src={card_3}
                alt="Shower Cubical"
              />
            </div>
            <div className="category_name">Shower Cubical</div>
          </div>
        </a>
        
        <a className="product_category_link" href="/alu-home-interior/railingsystem">
          <div className="accessories_container">
            <div className="seting_icon_container">
              <img
                 src={card_4}
                alt="Railing System"
              />
            </div>
            <div className="category_name">Railing System</div>
          </div>
        </a>
        
        <a className="product_category_link" href="/alu-home-interior/sky-light">
          <div className="accessories_container">
            <div className="seting_icon_container">
              <img
                 src={card_5}
                alt="Sky Light"
              />
            </div>
            <div className="category_name">Sky Light</div>
          </div>
        </a>
      </div>
    </section>

      {/* Why Choose Section */}
      <section className="upvc-window-section">
        <div className="upvc-window-container">
          <div className="upvc-window-rightcontainer">
            <h4>
              <span></span>
              Why we use alu home interior?
              <span></span> <span></span>
            </h4>
            <p>
              Alu Home interior design goes beyond simply creating a visually
              appealing environment. It's about designing a space that expresses
              your individuality, fits your lifestyle, and boosts your general
              wellbeing. Essentially, interior design for homes is about making
              a property into a place that uplifts your spirit and improves your
              quality of life. The interior design of Alu Home fulfills several
              practical as well as decorative objectives. Our goal is to make
              your home seem better. It's about designing inspirational and
              useful environments that improve our quality of life.
            </p>
          </div>
          <div className="upvc-window-leftcontainer">
            <div className="inner-upvc-window-leftcontainer">
              <img
                src={whyImg}
                alt="Why choose Alu Home Interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section Header */}
      <div className="benefits-header">
        <h1>
          <span></span> Benefits of ALU HOME INTERIOR
          <div></div>
        </h1>
      </div>

      {/* Benefits Sections */}
      <section 
        className="right-image-text-product mobile-right-image-text-product"
        ref={(el) => (benefitSections.current[0] = el)}
      >
        <div className="product-text-image-left-container">
          <h3>
            <span className="highlight">Stylish</span> - Aluminum
            <div></div>
          </h3>
          <div className="product-text-image-content">
            <p>
              Modern, elegant metal designs may transform your area while
              improving its functionality and appearance. Our products provide
              the ideal balance of durability and style for any interior design.
            </p>
          </div>
        </div>
        <div className="product-text-image-right-container">
          <div className="product-text-image">
            <img
              src={Benifit_1}
              alt="Stylish Aluminum"
            />
          </div>
        </div>
      </section>

      <section 
        className="right-image-text-product"
        ref={(el) => (benefitSections.current[1] = el)}
      >
        <div className="product-text-image-right-container">
          <div className="product-text-image">
            <img
               src={Benifit_2}
              alt="Customized Interior"
            />
          </div>
        </div>
        <div className="product-text-image-left-container">
          <h3>
            <span className="highlight">Customized</span> Interior Fit-Outs
            Available
            <div></div>
          </h3>
          <div className="product-text-image-content">
            <p>
              Aluminum interiors that are custom-made to fit your specific
              preferences and spatial needs. We offer custom designs that
              flawlessly reflect your idea, guaranteeing a unique touch in every
              aspect.
            </p>
          </div>
        </div>
      </section>

      <section 
        className="right-image-text-product mobile-right-image-text-product"
        ref={(el) => (benefitSections.current[2] = el)}
      >
        <div className="product-text-image-left-container">
          <h3>
            <span className="highlight">Green</span> - Solutions
            <div></div>
          </h3>
          <div className="product-text-image-content">
            <p>
              Sustainability is a priority in the construction of our aluminum
              interiors. We provide eco-friendly solutions that improve the
              environment without sacrificing quality by using recyclable
              materials.
            </p>
          </div>
        </div>
        <div className="product-text-image-right-container">
          <div className="product-text-image">
            <img
               src={Benifit_3}
              alt="Green Solutions"
            />
          </div>
        </div>
      </section>

      <section 
        className="right-image-text-product"
        ref={(el) => (benefitSections.current[3] = el)}
      >
        <div className="product-text-image-right-container">
          <div className="product-text-image">
            <img
               src={Benifit_4}
              alt="Durable Aluminum"
            />
          </div>
        </div>
        <div className="product-text-image-left-container">
          <h3>
            <span className="highlight">Long-Lasting</span> Durability and
            Strength
            <div></div>
          </h3>
          <div className="product-text-image-content">
            <p>
              Take advantage of aluminum's unparalleled durability for the
              interiors of your home. Our products provide you with long-term
              value and dependable performance since they are made to resist
              wear and tear.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeInterior;
