



// import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion";
// import { assets } from "./assets/asset";
// import "./LocateUs.css";
// import heroImg from "./assets/locateUs-hero.jpg"

// const LocateUs = () => {
//   // Animation controls
//   const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
//   const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });
//   const [mapRef, mapInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
//   const heroControls = useAnimation();
//   const contactControls = useAnimation();
//   const mapControls = useAnimation();

//   useEffect(() => {
//     if (heroInView) heroControls.start("visible");
//     if (contactInView) contactControls.start("visible");
//     if (mapInView) mapControls.start("visible");
//   }, [heroInView, contactInView, mapInView]);

//   // Animation variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8 } }
//   };

//   const cardItem = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <div className="locate-us-page">
//       {/* Hero Section */}
//       <motion.section 
//         className="contact-hero"
//         ref={heroRef}
//         initial="hidden"
//         animate={heroControls}
//         variants={fadeIn}
//       >
//         <div className="hero-image-container">
//           <img src={heroImg} alt="Contact Us Banner" className="hero-image" />
//           <div className="hero-overlay"></div>
//         </div>
//         <motion.div className="hero-content" variants={fadeUp}>
//           <h1>
//             <span className="highlight">Get</span> In Touch
//           </h1>
//           <p>We'd love to hear from you. Reach out for inquiries or support.</p>
//         </motion.div>
//       </motion.section>

//       {/* Contact Section */}
//       <motion.section 
//         className="contact-section"
//         ref={contactRef}
//         initial="hidden"
//         animate={contactControls}
//         variants={fadeIn}
//       >
//         <div className="contact-container">
//           {/* Contact Info - Now on top */}
//           <motion.div 
//             className="contact-info-container"
//             variants={fadeUp}
//           >
//             <div className="info-grid">
//               <motion.div className="info-card" variants={cardItem} whileHover={{ y: -3 }}>
//                 <div className="card-icon">
//                   <img src={assets.phone} alt="Phone" />
//                 </div>
//                 <div className="card-content">
//                   <div className="info-row">
//                     <span className="info-label">Call Us:</span>
//                    <div style={{display: 'flex', flexDirection: 'column',paddingLeft:'10px'}}>
//                    <span className="info-value">+91-87440-36000</span>
//                    <span className="info-value">+91-87440-82000</span>
//                    </div>
//                   </div>
                
//                 </div>
//               </motion.div>
              
//               <motion.div className="info-card" variants={cardItem} whileHover={{ y: -3 }}>
//                 <div className="card-icon">
//                   <img src={assets.email} alt="Email" />
//                 </div>
//                 <div className="card-content">
//                   <div className="info-row">
//                     <span className="info-label">Email:</span>
//                     <div style={{paddingLeft:'10px'}}><span className="info-value">contact@aidfgroup.com</span></div>
//                   </div>
//                 </div>
//               </motion.div>
              
//               <motion.div className="info-card" variants={cardItem} whileHover={{ y: -3 }}>
//                 <div className="card-icon">
//                   <img src={assets.location} alt="Location" />
//                 </div>
//                 <div className="card-content">
//                   <div className="info-row">
//                     <span className="info-label">Head Office:</span>
//                    <div style={{paddingLeft:'10px'}}> <span className="info-value">H. No. 256, Village Anangpur Dairy Bhagwat Colony, Sector-37 Faridabad- HR-121003</span></div>
//                   </div>
                  
//                 </div>
//               </motion.div>
//             </div>

            
//           </motion.div>

//           {/* Contact Form - Compact version */}
//           <motion.div 
//             className="contact-form-container"
//             variants={fadeUp}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="form-header">
//               <h2>Send Us a Message</h2>
//               <p>Fill out this quick form and we'll respond promptly</p>
//             </div>
            
//             <form className="contact-form">
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   placeholder="Your Name" 
//                   className="form-input"
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input 
//                   type="tel" 
//                   placeholder="Phone Number" 
//                   className="form-input"
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input 
//                   type="email" 
//                   placeholder="Email Address" 
//                   className="form-input"
//                 />
//               </div>
              
//               <div className="form-group">
//                 <select className="form-input">
//                   <option value="">I'm interested in...</option>
//                   <option value="uPVC">uPVC</option>
//                   <option value="ALU Home Interior">ALU Home Interior</option>
//                   <option value="Commercial partition system">Commercial partition system</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
              
//               <div className="form-group">
//                 <textarea 
//                   placeholder="Your message (optional)" 
//                   rows="3"
//                   className="form-input"
//                 ></textarea>
//               </div>
              
//               <button type="submit" className="submit-btn">
//                 Send Message
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
//                 </svg>
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Map Section */}
//       <motion.section 
//         className="map-section"
//         ref={mapRef}
//         initial="hidden"
//         animate={mapControls}
//         variants={fadeIn}
//       >
//         <div className="section-header">
//           <h2>Find Us on <span className="highlight">Google Maps</span></h2>
//           <p>Visit our location or get directions</p>
//         </div>
//         <div className="map-container">
//           <iframe
//             src="https://maps.google.com/maps?q=AIDF%20GROUP&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="AIDF Group Location"
//           ></iframe>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default LocateUs;








import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { assets } from "./assets/asset";
import "./LocateUs.css";
import heroImg from "./assets/locateUs-hero.jpg";

const LocateUs = () => {
  // Animation controls
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mapRef, mapInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [quoteRef, quoteInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const heroControls = useAnimation();
  const contactControls = useAnimation();
  const mapControls = useAnimation();
  const quoteControls = useAnimation();

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (contactInView) contactControls.start("visible");
    if (mapInView) mapControls.start("visible");
    if (quoteInView) quoteControls.start("visible");
  }, [heroInView, contactInView, mapInView, quoteInView]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="locate-us-page">
      {/* Hero Section */}
      <motion.section 
        className="locate-us__hero"
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
      >
        <div className="locate-us__hero-image-container">
          <img src={heroImg} alt="Contact Us Banner" className="locate-us__hero-image" />
          <div className="locate-us__hero-overlay"></div>
        </div>
        <motion.div className="locate-us__hero-content" variants={fadeUp}>
          <h1>
            <span className="locate-us__highlight">Get</span> In Touch
          </h1>
          <p>We'd love to hear from you. Reach out for inquiries or support.</p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="locate-us__contact-section"
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={fadeIn}
      >
        <div className="locate-us__contact-container">
          {/* Contact Info */}
          <motion.div 
            className="locate-us__contact-info"
            variants={fadeUp}
          >
            <h2 className="locate-us__contact-info-title">Contact Information</h2>
            <div className="locate-us__info-grid">
              <motion.div className="locate-us__info-card" variants={cardItem} whileHover={{ y: -3 }}>
                <div className="locate-us__card-icon">
                  <img src={assets.phone} alt="Phone" />
                </div>
                <div className="locate-us__card-content">
                  <h3 className="locate-us__card-title">Phone</h3>
                  <div className="locate-us__info-values">
                    <span className="locate-us__info-value">+91-87440-36000</span>
                    <span className="locate-us__info-value">+91-87440-82000</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="locate-us__info-card" variants={cardItem} whileHover={{ y: -3 }}>
                <div className="locate-us__card-icon">
                  <img src={assets.email} alt="Email" />
                </div>
                <div className="locate-us__card-content">
                  <h3 className="locate-us__card-title">Email</h3>
                  <span className="locate-us__info-value">contact@aidfgroup.com</span>
                </div>
              </motion.div>
              
              <motion.div className="locate-us__info-card" variants={cardItem} whileHover={{ y: -3 }}>
                <div className="locate-us__card-icon">
                  <img src={assets.location} alt="Location" />
                </div>
                <div className="locate-us__card-content">
                  <h3 className="locate-us__card-title">Head Office</h3>
                  <span className="locate-us__info-value">
                    H. No. 256, Village Anangpur Dairy Bhagwat Colony, Sector-37 Faridabad- HR-121003
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="locate-us__contact-form"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="locate-us__form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out this quick form and we'll respond promptly</p>
            </div>
            
            <form className="locate-us__form">
              <div className="locate-us__form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="locate-us__form-input"
                />
              </div>
              
              <div className="locate-us__form-group">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="locate-us__form-input"
                />
              </div>
              
              <div className="locate-us__form-group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="locate-us__form-input"
                />
              </div>
              
              <div className="locate-us__form-group">
                <select className="locate-us__form-input">
                  <option value="">I'm interested in...</option>
                  <option value="uPVC">uPVC</option>
                  <option value="ALU Home Interior">ALU Home Interior</option>
                  <option value="Commercial partition system">Commercial partition system</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="locate-us__form-group">
                <textarea 
                  placeholder="Your message (optional)" 
                  rows="3"
                  className="locate-us__form-input"
                ></textarea>
              </div>
              
              <button type="submit" className="locate-us__submit-btn">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Get Quote Section */}
      <motion.section 
        className="locate-us__quote-section"
        ref={quoteRef}
        initial="hidden"
        animate={quoteControls}
        variants={fadeIn}
      >
        <div className="locate-us__quote-container">
          <div className="locate-us__quote-content">
            <h2 className="locate-us__quote-title">Ready to Get Started?</h2>
            <p className="locate-us__quote-text">
              Get a free quote for your project today. Our team will get back to you within 24 hours.
            </p>
            <button className="locate-us__quote-btn">
              Request Free Quote
            </button>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="locate-us__map-section"
        ref={mapRef}
        initial="hidden"
        animate={mapControls}
        variants={fadeIn}
      >
        <div className="locate-us__section-header">
          <h2>Find Us on <span className="locate-us__highlight">Google Maps</span></h2>
          <p>Visit our location or get directions</p>
        </div>
        <div className="locate-us__map-container">
          <iframe
            src="https://maps.google.com/maps?q=AIDF%20GROUP&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AIDF Group Location"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
};

export default LocateUs;