import React from 'react';
import './UPVCDoorsWindows.css'; 
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImg from "./img/heroImg.jpg"
import benifit_1 from "./img/Why we use.jpg"
import benifit_2 from "./img/Benefit section 2.jpg"
import benifit_3 from "./img/Benefit section 3.jpg"
import benifit_4 from "./img/Benefit section 4.jpg"
import benifit_5 from "./img/Benefit section 5.jpg"
import card_1 from "./img/window_1.png"
import card_2 from "./img/casement.png"
import card_3 from "./img/accesories_1.png"

const UPVCDoorsWindows = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="upvc-page">
      {/* Hero Banner Section */}
      <section className="upvc-hero-section">
        <img 
          src={HeroImg} 
          alt="uPVC Doors & Windows" 
          className="upvc-hero-image"
        />
        <div className="upvc-overlay">
          <div className="inner-upvc-overlay">
            <div className="upvc-content">
              <h3>uPVC Door & Window</h3>
              <p>Think Once, Think Twice, Think UPVC door and window.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Navigation Section  */}
<section className="product-hero-footer">
  <div className="product-footer-container">
    <div className="product-footer-grid">
      <a href="/upvc-door-and-window/window" className="product-footer-item">
        <div className="product-icon-wrapper">
          <div className="product-icon-container">
            <img 
              src={card_1}
              alt="Windows" 
              className="product-icon"
            />
          </div>
        </div>
        <div className="product-footer-label">Windows</div>
      </a>
      
      <a href="/upvc-door-and-window/door" className="product-footer-item">
        <div className="product-icon-wrapper">
          <div className="product-icon-container">
            <img 
             src={card_2}
              alt="Doors" 
              className="product-icon"
            />
          </div>
        </div>
        <div className="product-footer-label">Doors</div>
      </a>
      
      <a href="/accessories/window-door-and-accessories" className="product-footer-item">
        <div className="product-icon-wrapper">
          <div className="product-icon-container">
            <img 
             src={card_3}
              alt="Accessories" 
              className="product-icon"
            />
          </div>
        </div>
        <div className="product-footer-label">Accessories</div>
      </a>
    </div>
  </div>
</section>

      {/* Why uPVC Section */}
      <section className="upvc-window-section">
        <div className="upvc-window-container">
          <div className="upvc-window-text" data-aos="fade-right">
            <h4>Why we use uPVC doors and window?</h4>
            <p>
              Modern homes are increasingly choosing uPVC doors and windows because of their great energy 
              efficiency, which lowers energy costs by preserving internal temperature consistency. Because
              uPVC resists rot, rust, and corrosion and can function reliably for a long time even in 
              adverse weather, it is well renowned for its durability. Furthermore, uPVC is a great
              option for homeowners looking for a hassle-free solution because it requires no upkeep. 
              Modern locking systems are frequently included with the sturdy, solid frames, enhancing house security. Additionally, 
              uPVC provides superior sound insulation, resulting in a calmer and quieter living space.
            </p>
          </div>
          <div className="upvc-window-image" data-aos="fade-left">
            <img 
              src={benifit_1}
              alt="Why uPVC" 
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="upvc-benefits-section">
        <div className="benefits-header">
          <h1>Benefits of uPVC</h1>
        </div>

        {/* Benefit 1 */}
        <div className="benefit-item" data-aos="fade-up">
          <div className="benefit-text" data-aos="fade-right">
            <h3><span className="highlight">Superior Insulation</span> and Energy Efficiency</h3>
            <p>
              Because uPVC windows and doors have superior insulation, you can use less energy and pay less for utilities. 
              Use this energy-saving option to maintain a comfortable home all year long.
            </p>
          </div>
          <div className="benefit-image" data-aos="fade-left">
            <img 
              src={benifit_2}
              alt="Superior Insulation" 
            />
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="benefit-item reverse" data-aos="fade-up">
         
          <div className="benefit-text" data-aos="fade-left">
            <h3><span className="highlight">Low Maintenance</span> and Durability</h3>
            <p>
              uPVC is low maintenance and resistant to fading, rusting, and decay. It's a hassle-free option 
              that offers long-lasting performance without requiring frequent repairs or maintenance.
            </p>
          </div>
          <div className="benefit-image" data-aos="fade-right">
            <img 
              src={benifit_3} 
              alt="Low Maintenance" 
            />
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="benefit-item" data-aos="fade-up">
          <div className="benefit-text" data-aos="fade-right">
            <h3><span className="highlight">Enhanced</span> Security and Safety</h3>
            <p>
              Because uPVC frames are strong and long-lasting, your house will be more secure. You can feel secure 
              knowing that your property is well-guarded from intruders when you install robust locking systems.
            </p>
          </div>
          <div className="benefit-image" data-aos="fade-left">
            <img 
              src={benifit_4}
              alt="Enhanced Security" 
            />
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="benefit-item reverse" data-aos="fade-up">
         
          <div className="benefit-text" data-aos="fade-left">
            <h3><span className="highlight">Cost-Effective</span> and Affordable</h3>
            <p>
              uPVC provides a high-quality substitute for conventional materials at a lower cost. Achieve the 
              advantages of superior performance, longevity, and elegance for a significantly lower price.
            </p>
          </div>
          <div className="benefit-image" data-aos="fade-right">
            <img 
               src={benifit_5} 
              alt="Cost Effective" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UPVCDoorsWindows;