
import React, { useEffect } from 'react';  // Import React and useEffect hook
import AOS from 'aos';                           // Import AOS library for scroll animations
import 'aos/dist/aos.css';                      // Import AOS styles for animations
import './UPVCDoorsWindows.css';                // Import custom CSS for this component

// Import images for hero banner and service/expertise sections
import HeroImg from './img/parker-tiles.png';
import skirtingCard from './img/skirting/skirtingCard_3.webp';
import flooringCard from './img/flooring/flooring card.webp';
import carpetCard from './img/carpet/carptet card.webp';
import skirtingSection from './img/skirting/Leistenshop24-Sockelleisten-Profile-im-Ueberblick_600x600@2x.webp';
import flooringSection from './img/flooring/jason-hafso-YypTXBPF5S4-unsplash.jpg';
import carpetSection from './img/carpet/imex-flooring-sweden-QLhqloXuSQw-unsplash.jpg';

// UPVCDoorsWindows component showcasing flooring, carpet, and skirting services
const UPVCDoorsWindows = () => {
  // Initialize AOS animations when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800,          // Animation duration in ms
      easing: 'ease-in-out',  // Easing style for animations
      once: true              // Animate only once per element
    });
  }, []);

  return (
    // Wrapper for the entire interior design page content
    <div className="interior-design-page">

      {/* Hero Banner Section */}
      <section className="interior-hero-section">
        {/* Hero image background */}
        <img
          src={HeroImg}
          alt="Premium Flooring Solutions"
          className="interior-hero-image"
        />
        {/* Overlay layer on hero image for contrast */}
        <div className="interior-hero-overlay">
          <div className="inner-hero-overlay">
            {/* Hero content block animated on scroll */}
            <div className="interior-hero-content" data-aos="fade-up">
              {/* Main heading */}
              <h1>Elevate Your Spaces with Premium Flooring</h1>
              {/* Subheading text */}
              <p>
                Transform your interiors from the ground up with our expert flooring services.
                Elegant, functional, and tailored to your unique taste.
              </p>
              {/* Call-to-action button */}
              <button className="cta-button">Explore Our Collections</button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Navigation / Services Showcase Section */}
      <section className="services-showcase">
        {/* Container to center and constrain width */}
        <div className="container">
          {/* Section title animated on scroll */}
          <h2 className="section-title" data-aos="fade-up">
            Our Signature Services
          </h2>
          {/* Section subtitle with delay animation */}
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Discover the perfect foundation for your dream space
          </p>

          {/* Grid of service cards */}
          <div className="services-grid">
            {/* Skirting & Profile service card */}
            <a href="/skirtingProfile" className="service-card" data-aos="fade-up">
              <img src={skirtingCard} alt="Skirting & Profile" className="service-image" />
              {/* Overlay with title and description */}
              <div className="service-overlay">
                <h3>Skirting & Profile</h3>
                <p>The perfect finishing touch for flawless interiors</p>
              </div>
            </a>

            {/* Luxury Carpets service card */}
            <a href="/carpet" className="service-card" data-aos="fade-up" data-aos-delay="100">
              <img src={carpetCard} alt="Luxury Carpets" className="service-image" />
              <div className="service-overlay">
                <h3>Luxury Carpets</h3>
                <p>Step into comfort with our premium carpet solutions</p>
              </div>
            </a>

            {/* Flooring Solutions service card */}
            <a href="/flooring" className="service-card" data-aos="fade-up" data-aos-delay="200">
              <img src={flooringCard} alt="Flooring Solutions" className="service-image" />
              <div className="service-overlay">
                <h3>Flooring Solutions</h3>
                <p>Durable, beautiful floors for every space</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits / Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          {/* Expertise section heading */}
          <h2 className="section-title" data-aos="fade-up">
            Why Choose Our Expertise
          </h2>
          {/* Expertise subtitle with delay */}
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Crafting exceptional interiors with precision and passion
          </p>

          {/* Skirting Expertise Item */}
          <div className="expertise-item" data-aos="fade-up">
            {/* Text block animated from right */}
            <div className="expertise-text" data-aos="fade-right">
              <h3>
                <span className="highlight">Premium Skirting</span> & Profile Solutions
              </h3>
              <p>
                Our skirting boards and profiles provide the perfect finishing touch to any interior space...
              </p>
              {/* List of benefits */}
              <ul className="benefits-list">
                <li>Customizable profiles to match your exact specifications</li>
                <li>Durable materials resistant to wear and tear</li>
                <li>Seamless integration with all flooring types</li>
                <li>Professional installation for flawless results</li>
              </ul>
            </div>
            {/* Image block animated from left */}
            <div className="expertise-image" data-aos="fade-left">
              <img src={skirtingSection} alt="Premium Skirting Solutions" />
            </div>
          </div>

          {/* Carpet Expertise Item (reversed layout) */}
          <div className="expertise-item reverse" data-aos="fade-up">
            <div className="expertise-text" data-aos="fade-left">
              <h3>
                <span className="highlight">Luxury Carpet</span> Collections
              </h3>
              <p>
                Experience the ultimate in comfort and style with our premium carpet selections...
              </p>
              <ul className="benefits-list">
                <li>Extensive selection of textures, colors, and patterns</li>
                <li>Eco-friendly and hypoallergenic options available</li>
                <li>Superior stain and wear resistance technologies</li>
                <li>Custom cutting and fitting services</li>
              </ul>
            </div>
            <div className="expertise-image" data-aos="fade-right">
              <img src={carpetSection} alt="Luxury Carpet Collections" />
            </div>
          </div>

          {/* Flooring Expertise Item */}
          <div className="expertise-item" data-aos="fade-up">
            <div className="expertise-text" data-aos="fade-right">
              <h3>
                <span className="highlight">Innovative Flooring</span> Solutions
              </h3>
              <p>
                Our flooring solutions combine beauty, durability, and practicality for spaces that inspire...
              </p>
              <ul className="benefits-list">
                <li>Wide range of materials and finishes</li>
                <li>Waterproof and scratch-resistant options</li>
                <li>Underfloor heating compatible solutions</li>
                <li>Professional installation with precision craftsmanship</li>
              </ul>
            </div>
            <div className="expertise-image" data-aos="fade-left">
              <img src={flooringSection} alt="Innovative Flooring Solutions" />
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default UPVCDoorsWindows;  // Export component for routing or parent use
