// import React from 'react';
// import './UPVCDoorsWindows.css'; 
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// import HeroImg from "./img/parker-tiles.png"
// import skirtingCard from "./img/skirting/skirtingCard_3.webp"
// import flooringCard from "./img/flooring/flooring card.webp"
// import carpetCard from "./img/carpet/carptet card.webp"
// import skirtingSection from "./img/skirting/Leistenshop24-Sockelleisten-Profile-im-Ueberblick_600x600@2x.webp"
// import flooringSection from "./img/flooring/jason-hafso-YypTXBPF5S4-unsplash.jpg"
// import carpetSection from "./img/carpet/imex-flooring-sweden-QLhqloXuSQw-unsplash.jpg"

// const UPVCDoorsWindows = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true
//     });
//   }, []);

//   return (
//     <div className="upvc-page">
//       {/* Hero Banner Section */}
//       <section className="upvc-hero-section">
//         <img 
//           src={HeroImg} 
//           alt="uPVC Doors & Windows" 
//           className="upvc-hero-image"
//         />
//         <div className="upvc-overlay">
//           <div className="inner-upvc-overlay">
//             <div className="upvc-content">
//               <h3>We Provide Best Flooring Solutions.</h3>
//               <p>Transform your interiors from the ground up with our expert flooring services. Elegant, functional, and tailored to your unique taste.</p>
//             </div>
//           </div>
//         </div>
//       </section>

    


// {/* Product Navigation Section  */}
// <section className="product-hero-footer">
//   <div className="product-footer-container">
//     <div className="product-footer-grid">
//       <a href="/upvc-door-and-window/window" className="product-footer-item">
//         <img 
//           src={skirtingCard}
//           alt="Skirting & Profile" 
//           className="product-footer-image"
//         />
//         <div className="product-footer-overlay">
//           <div className="product-footer-label">Skirting & Profile</div>
//         </div>
//       </a>
      
//       <a href="/upvc-door-and-window/door" className="product-footer-item">
//         <img 
//           src={carpetCard}
//           alt="Carpet" 
//           className="product-footer-image"
//         />
//         <div className="product-footer-overlay">
//           <div className="product-footer-label">Carpet</div>
//         </div>
//       </a>
      
//       <a href="/accessories/window-door-and-accessories" className="product-footer-item">
//         <img 
//           src={flooringCard}
//           alt="Flooring" 
//           className="product-footer-image"
//         />
//         <div className="product-footer-overlay">
//           <div className="product-footer-label">Flooring</div>
//         </div>
//       </a>
//     </div>
//   </div>
// </section>



    

//       {/* Benefits Section */}
//       <section className="upvc-benefits-section">
//         <div className="benefits-header">
//           <h1>Our Products</h1>
//         </div>

//         {/* Benefit 1 */}
//         <div className="benefit-item" data-aos="fade-up">
//           <div className="benefit-text" data-aos="fade-right">
//             <h3><span className="highlight">Skirting & Profile</span> </h3>
//             <p>
//               Because uPVC windows and doors have superior insulation, you can use less energy and pay less for utilities. 
//               Use this energy-saving option to maintain a comfortable home all year long.
//             </p>
//           </div>
//           <div className="benefit-image" data-aos="fade-left">
//             <img 
//               src={skirtingSection}
//               alt="Superior Insulation" 
//             />
//           </div>
//         </div>

//         {/* Benefit 2 */}
//         <div className="benefit-item reverse" data-aos="fade-up">
         
//           <div className="benefit-text" data-aos="fade-left">
//             <h3><span className="highlight">Carpet</span></h3>
//             <p>
//               uPVC is low maintenance and resistant to fading, rusting, and decay. It's a hassle-free option 
//               that offers long-lasting performance without requiring frequent repairs or maintenance.
//             </p>
//           </div>
//           <div className="benefit-image" data-aos="fade-right">
//             <img 
//               src={carpetSection} 
//               alt="Low Maintenance" 
//             />
//           </div>
//         </div>

//         {/* Benefit 3 */}
//         <div className="benefit-item" data-aos="fade-up">
//           <div className="benefit-text" data-aos="fade-right">
//             <h3><span className="highlight">Flooring</span> </h3>
//             <p>
//               Because uPVC frames are strong and long-lasting, your house will be more secure. You can feel secure 
//               knowing that your property is well-guarded from intruders when you install robust locking systems.
//             </p>
//           </div>
//           <div className="benefit-image" data-aos="fade-left">
//             <img 
//               src={flooringSection}
//               alt="Enhanced Security" 
//             />
//           </div>
//         </div>

       
//       </section>
//     </div>
//   );
// };

// export default UPVCDoorsWindows;




import React from 'react';
import './UPVCDoorsWindows.css'; 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroImg from "./img/parker-tiles.png"
import skirtingCard from "./img/skirting/skirtingCard_3.webp"
import flooringCard from "./img/flooring/flooring card.webp"
import carpetCard from "./img/carpet/carptet card.webp"
import skirtingSection from "./img/skirting/Leistenshop24-Sockelleisten-Profile-im-Ueberblick_600x600@2x.webp"
import flooringSection from "./img/flooring/jason-hafso-YypTXBPF5S4-unsplash.jpg"
import carpetSection from "./img/carpet/imex-flooring-sweden-QLhqloXuSQw-unsplash.jpg"

const UPVCDoorsWindows = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="interior-design-page">
      {/* Hero Banner Section */}
      <section className="interior-hero-section">
        <img 
          src={HeroImg} 
          alt="Premium Flooring Solutions" 
          className="interior-hero-image"
        />
        <div className="interior-hero-overlay">
          <div className="inner-hero-overlay">
            <div className="interior-hero-content" data-aos="fade-up">
              <h1>Elevate Your Spaces with Premium Flooring</h1>
              <p>Transform your interiors from the ground up with our expert flooring services. Elegant, functional, and tailored to your unique taste.</p>
              <button className="cta-button">Explore Our Collections</button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Navigation Section */}
      <section className="services-showcase">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Signature Services</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Discover the perfect foundation for your dream space
          </p>
          
          <div className="services-grid">
            <a href="/skirting" className="service-card" data-aos="fade-up">
              <img src={skirtingCard} alt="Skirting & Profile" className="service-image"/>
              <div className="service-overlay">
                <h3>Skirting & Profile</h3>
                <p>The perfect finishing touch for flawless interiors</p>
              </div>
            </a>
            
            <a href="/carpet" className="service-card" data-aos="fade-up" data-aos-delay="100">
              <img src={carpetCard} alt="Luxury Carpets" className="service-image"/>
              <div className="service-overlay">
                <h3>Luxury Carpets</h3>
                <p>Step into comfort with our premium carpet solutions</p>
              </div>
            </a>
            
            <a href="/flooring" className="service-card" data-aos="fade-up" data-aos-delay="200">
              <img src={flooringCard} alt="Flooring Solutions" className="service-image"/>
              <div className="service-overlay">
                <h3>Flooring Solutions</h3>
                <p>Durable, beautiful floors for every space</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Why Choose Our Expertise</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Crafting exceptional interiors with precision and passion
          </p>

          {/* Skirting Expertise */}
          <div className="expertise-item" data-aos="fade-up">
            <div className="expertise-text" data-aos="fade-right">
              <h3><span className="highlight">Premium Skirting</span> & Profile Solutions</h3>
              <p>
                Our skirting boards and profiles provide the perfect finishing touch to any interior space. 
                Crafted from high-quality materials, they seamlessly blend functionality with aesthetic appeal, 
                protecting your walls while enhancing your decor. With a wide range of styles from modern minimalist 
                to classic ornate, we offer solutions that complement any architectural design.
              </p>
              <ul className="benefits-list">
                <li>Customizable profiles to match your exact specifications</li>
                <li>Durable materials resistant to wear and tear</li>
                <li>Seamless integration with all flooring types</li>
                <li>Professional installation for flawless results</li>
              </ul>
            </div>
            <div className="expertise-image" data-aos="fade-left">
              <img src={skirtingSection} alt="Premium Skirting Solutions"/>
            </div>
          </div>

          {/* Carpet Expertise */}
          <div className="expertise-item reverse" data-aos="fade-up">
            <div className="expertise-text" data-aos="fade-left">
              <h3><span className="highlight">Luxury Carpet</span> Collections</h3>
              <p>
                Experience the ultimate in comfort and style with our premium carpet selections. From plush, 
                soft-pile options for bedrooms to durable, stain-resistant varieties for high-traffic areas, 
                we source only the finest materials from trusted manufacturers worldwide. Our carpets transform 
                spaces into warm, inviting environments while providing exceptional acoustic benefits.
              </p>
              <ul className="benefits-list">
                <li>Extensive selection of textures, colors, and patterns</li>
                <li>Eco-friendly and hypoallergenic options available</li>
                <li>Superior stain and wear resistance technologies</li>
                <li>Custom cutting and fitting services</li>
              </ul>
            </div>
            <div className="expertise-image" data-aos="fade-right">
              <img src={carpetSection} alt="Luxury Carpet Collections"/>
            </div>
          </div>

          {/* Flooring Expertise */}
          <div className="expertise-item" data-aos="fade-up">
            <div className="expertise-text" data-aos="fade-right">
              <h3><span className="highlight">Innovative Flooring</span> Solutions</h3>
              <p>
                Our flooring solutions combine beauty, durability, and practicality for spaces that inspire. 
                Whether you prefer the timeless elegance of hardwood, the versatility of laminate, or the 
                modern appeal of luxury vinyl tiles, we provide expert guidance and installation services. 
                Each product is selected for its quality, longevity, and ability to elevate your interior design.
              </p>
              <ul className="benefits-list">
                <li>Wide range of materials and finishes</li>
                <li>Waterproof and scratch-resistant options</li>
                <li>Underfloor heating compatible solutions</li>
                <li>Professional installation with precision craftsmanship</li>
              </ul>
            </div>
            <div className="expertise-image" data-aos="fade-left">
              <img src={flooringSection} alt="Innovative Flooring Solutions"/>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Schedule a consultation with our design experts today</p>
          <button className="cta-button">Book a Free Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default UPVCDoorsWindows;