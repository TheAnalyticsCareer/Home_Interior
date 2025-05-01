// import React from 'react'
// import heroImg from "./UPVC/img/aluminium-skirting-profile.jpg"

// const SkirtingProfile = () => {
//   return (
//     <>
//       <div>skirting</div>
//       <div>Profile</div>
//     </>
//   )
// }

// export default SkirtingProfile







// import React from 'react';
// import { useEffect } from 'react';
// import "./SkirtingProfile.css"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import heroImg from "./UPVC/img/aluminium-skirting-profile.jpg";

// const SkirtingProfile = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true
//     });
//   }, []);

//   return (
//     <div className="skirting-profile-page">
//       {/* Hero Section */}
//       <section className="skirting-hero">
//         <div className="hero-container">
//           <div className="hero-content" data-aos="fade-up">
//             <h1>Aluminium Skirting And Profile</h1>
//             <p>
//               Floors And Walls Matching up with the ever increasing demands of the customers, 
//               we are instrumental in offering Aluminium Skirting Profiles. These Aluminium 
//               Skirting Profiles are extensively used in different residential and commercial buildings.
//             </p>
//           </div>
//           <div className="hero-image" data-aos="fade-left">
//             <img src={heroImg} alt="Aluminium Skirting Profile" />
//           </div>
//         </div>
//       </section>

//       {/* Service Options Section */}
//       <section className="service-options">
//         <div className="service-tabs">
//           <button className="tab-button active">Skirting Solutions</button>
//           <button className="tab-button">Profile Solutions</button>
//         </div>

//         {/* Skirting Solutions */}
//         <div className="service-section" data-aos="fade-up">
//           <div className="service-content">
//             <h2>Screw On Skirting</h2>
//             <div className="service-features">
//               <h3>ADVANTAGES</h3>
//               <p>
//                 Aidf Aluminium screw on skirting, is ideal to cover any type of wall base to protect 
//                 from foot scratches and also to cover any type of flooring covering thereby providing 
//                 a neat finish on the joint. It is installed using a screw covered by PVC beading for neat fixing.
//               </p>
//               <ul>
//                 <li>Available in natural silver anodized, stainless steel finish & powder coat finish</li>
//                 <li>Choice of 5 heights– 50mm, 75mm, 100mm, 125mm,150mm</li>
//                 <li>Design allows to cover the flooring edges and gives a smooth finish.</li>
//                 <li>Supplied in 3m lengths (End caps & rubber bidding included. extra end caps available on request)</li>
//                 <li>Aluminium beading instead of rubber beading is also available.</li>
//                 <li>Quick and easy mechanical fix</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-image" data-aos="fade-left">
//             <div className="image-placeholder">Screw On Skirting Image</div>
//           </div>
//         </div>

//         {/* Stick On Toe Skirting */}
//         <div className="service-section reverse" data-aos="fade-up">
//           <div className="service-image" data-aos="fade-right">
//             <div className="image-placeholder">Stick On Toe Skirting Image</div>
//           </div>
//           <div className="service-content">
//             <h2>Stick On Toe Skirting</h2>
//             <div className="service-features">
//               <h3>ADVANTAGES</h3>
//               <p>
//                 Aidf Aluminium Toe Skirting provide a modern, streamlined finish for a variety of 
//                 commercial environments. Using clean, simple lines, the range is ideal for areas 
//                 where a Hi-Tech appearance is required.
//               </p>
//               <ul>
//                 <li>Available in natural silver anodized, stainless steel finish and powder coat finish</li>
//                 <li>Choice of 3 heights – 60mm, 80mm, 100mm</li>
//                 <li>Sit-on profile – designed to be installed on top of floor coverings</li>
//                 <li>Features a capped toe design to allow wall-to-floor expansion gaps to be hidden when installed with tiled floor coverings</li>
//                 <li>PVC End cap accessories available for neat finishing on-site</li>
//                 <li>Quick and easy to fit using appropriate adhesive</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Line Skirting */}
//         <div className="service-section" data-aos="fade-up">
//           <div className="service-content">
//             <h2>Line Skirting</h2>
//             <div className="service-features">
//               <h3>ADVANTAGES</h3>
//               <p>
//                 Aidf Aluminium Line skirting is designed to meet the requirements of modern commercial 
//                 environments, providing a Hi-Tech finish for a clean and simple appearance whilst 
//                 offering a practical and functional solution for concealing low voltage cables.
//               </p>
//               <ul>
//                 <li>Available in natural silver anodized, stainless steel finish and powder coat finsh</li>
//                 <li>Choice of 2 heights – 75mm, 100mm</li>
//                 <li>Sit-on profile – designed to be installed on top of floor</li>
//                 <li>Design allows low voltage (computer & telephone) cables to be hidden behind the skirting profile</li>
//                 <li>PVC End cap accessories available for neat finishing on-site</li>
//                 <li>Quick and easy to fit using appropriate adhesive</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-image" data-aos="fade-left">
//             <div className="image-placeholder">Line Skirting Image</div>
//           </div>
//         </div>

//         {/* Easy Fix PVC Skirting */}
//         <div className="service-section reverse" data-aos="fade-up">
//           <div className="service-image" data-aos="fade-right">
//             <div className="image-placeholder">Easy Fix PVC Skirting Image</div>
//           </div>
//           <div className="service-content">
//             <h2>Easy Fix PVC Skirting</h2>
//             <div className="service-features">
//               <h3>ADVANTAGES</h3>
//               <p>
//                 Aidf EASY FIX PVC SKIRTING provides a modern, streamlined finish for a variety of 
//                 commercial environments. Using clean and simple lines, the range is ideal for areas 
//                 where a stylish appearance is required.
//               </p>
//               <ul>
//                 <li>Available in natural silver anodized, aluminium finish.</li>
//                 <li>Sit-on profile – designed to be installed on top of floor coverings</li>
//                 <li>PVC End cap accessories available for neat finishing on-site</li>
//                 <li>Design allows low voltage (computer & telephone) cables to be hidden behind the skirting profile.</li>
//                 <li>Snap Fit design has a removable upper part which allows for painting and wall papering without unscrewing the skirting profile.</li>
//                 <li>Due to material flexibility this skirting profile adjusts itself to minor irregularities of walls and floors.</li>
//                 <li>Extremely easy to fix using appropriate screws.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="skirting-cta" data-aos="fade-up">
//         <div className="cta-container">
//           <h2>Ready to Elevate Your Space with Premium Skirting Solutions?</h2>
//           <p>Contact our experts today for a consultation and quote</p>
//           <button className="cta-button">Get a Free Quote</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SkirtingProfile;










import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./SkirtingProfile.css";
import { Link } from 'react-router-dom';
import heroImg from "./UPVC/img/aluminium-skirting-profile.jpg";
import skirtingIcon from "./UPVC/img/aluminium-skirting-profile.jpg"; // Replace with actual image
import profileIcon from "./UPVC/img/aluminium-skirting-profile.jpg"; // Replace with actual image
import screwOnImg from "./UPVC/img/aluminium-skirting-profile.jpg";
import stickOnImg from "./UPVC/img/aluminium-skirting-profile.jpg";
import lineImg from "./UPVC/img/aluminium-skirting-profile.jpg";
import easyFixImg from "./UPVC/img/aluminium-skirting-profile.jpg";

const SkirtingProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="skirting-profile-page">
      {/* Full-width Hero Section */}
      <section className="skirting-hero-fullwidth">
        <div className="hero-overlay">
          <div className="hero-content" data-aos="fade-up">
            <h1>Aluminium Skirting & Profile Solutions</h1>
            <p>
              Premium architectural solutions for modern residential and commercial spaces, 
              combining durability with elegant design.
            </p>
          </div>
        </div>
      </section>

      {/* Bifurcation Section */}
      <section className="bifurcation-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Product Range</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Two specialized solutions for all your architectural needs
          </p>
          
          <div className="bifurcation-grid">
            <div className="bifurcation-card" data-aos="fade-right">
              <div className="bifurcation-icon">
                <img src={skirtingIcon} alt="Skirting Solutions" />
              </div>
              <h3>Skirting Solutions</h3>
              <p>
                Elegant finishing touches that protect walls and create seamless transitions 
                between floors and walls in any space.
              </p>
              <ul>
                <li>Multiple height options</li>
                <li>Various material finishes</li>
                <li>Easy installation</li>
              </ul>
              <Link to="/skirtingProfile/skirting" className='visit-ctn'>View</Link>
            </div>
            
            <div className="divider" data-aos="fade-up" data-aos-delay="200">
              <span>OR</span>
            </div>
            
            <div className="bifurcation-card" data-aos="fade-left">
              <div className="bifurcation-icon">
                <img src={profileIcon} alt="Profile Solutions" />
              </div>
              <h3>Profile Solutions</h3>
              <p>
                Modern, functional designs for commercial spaces with additional features 
                like cable management and expansion gap coverage.
              </p>
              <ul>
                <li>Hi-tech appearance</li>
                <li>Cable concealment</li>
                <li>Commercial-grade durability</li>
              </ul>
              <button href='/skirtingProfile/skirting'  className='visit-ctn'>View</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="service-sections">
        {/* Screw On Skirting */}
        <div className="service-section" data-aos="fade-up">
          <div className="service-content">
            <span className="service-badge">Skirting Solution</span>
            <h2>Screw On Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Ideal to cover any type of wall base to protect from foot scratches and 
                to cover flooring edges, providing a neat finish on the joint.
              </p>
              <ul>
                <li>Available in natural silver anodized, stainless steel & powder coat finishes</li>
                <li>5 height options: 50mm, 75mm, 100mm, 125mm, 150mm</li>
                <li>Covers flooring edges for smooth transition</li>
                <li>Supplied in 3m lengths with end caps included</li>
                <li>Optional aluminium beading available</li>
                <li>Quick and easy mechanical fix</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-left">
            <img src={screwOnImg} alt="Screw On Skirting" />
          </div>
        </div>

        {/* Stick On Toe Skirting */}
        <div className="service-section reverse" data-aos="fade-up">
        
          <div className="service-content">
            <span className="service-badge">Profile Solution</span>
            <h2>Stick On Toe Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Modern, streamlined finish for commercial environments where a Hi-Tech 
                appearance is required.
              </p>
              <ul>
                <li>Multiple finish options including powder coat</li>
                <li>3 height choices: 60mm, 80mm, 100mm</li>
                <li>Sit-on profile design for floor coverings</li>
                <li>Capped toe design hides expansion gaps</li>
                <li>PVC end caps for neat finishing</li>
                <li>Easy installation with appropriate adhesive</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-right">
            <img src={stickOnImg} alt="Stick On Toe Skirting" />
          </div>
        </div>

        {/* Line Skirting */}
        <div className="service-section" data-aos="fade-up">
          <div className="service-content">
            <span className="service-badge">Profile Solution</span>
            <h2>Line Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Hi-Tech solution for modern commercial environments with cable 
                management functionality.
              </p>
              <ul>
                <li>Available in multiple premium finishes</li>
                <li>2 height options: 75mm, 100mm</li>
                <li>Designed to sit on top of floor</li>
                <li>Conceals low voltage cables (computer & telephone)</li>
                <li>PVC end caps for clean installation</li>
                <li>Quick adhesive installation</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-left">
            <img src={lineImg} alt="Line Skirting" />
          </div>
        </div>

        {/* Easy Fix PVC Skirting */}
        <div className="service-section reverse" data-aos="fade-up">
          
          <div className="service-content">
            <span className="service-badge">Skirting Solution</span>
            <h2>Easy Fix PVC Skirting</h2>
            <div className="service-features">
              <h3>ADVANTAGES</h3>
              <p>
                Modern, stylish solution with practical benefits for easy installation 
                and maintenance.
              </p>
              <ul>
                <li>Natural silver anodized and aluminium finishes</li>
                <li>Sit-on profile design for floor coverings</li>
                <li>Includes PVC end caps for neat finishing</li>
                <li>Conceals low voltage cables</li>
                <li>Removable upper part for easy painting/wallpapering</li>
                <li>Flexible material adjusts to wall irregularities</li>
                <li>Simple screw fixing</li>
              </ul>
            </div>
          </div>
          <div className="service-image" data-aos="fade-right">
            <img src={easyFixImg} alt="Easy Fix PVC Skirting" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="skirting-cta" data-aos="fade-up">
        <div className="cta-container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Our experts are ready to help you choose the perfect solution for your project</p>
          <div className="cta-buttons">
            <button className="cta-button">Get a Free Quote</button>
            <button className="secondary-button">View Product Catalog</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkirtingProfile;