// import React from "react";
// import { assets } from "./assets/asset";
// import "./LocateUs.css"; // Import the CSS file

// const LocateUs = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="blog_hero_section">
//         <div className="blog_hero_banner">
//           {/*--- IN Order to change contact image---*/}
//           <img
//             src={assets.contact_us_banner}
//             alt="Contact Us Banner"
//             className="hero_image"
//           />
//         </div>
//         <div className="blog_hero_banner_overlay">
//           <div className="innerblog_hero_content">
//             <h3 style={{ color: "white" }}>
//               <span style={{ color: "rgb(250, 133, 61)" }}>Contact Us</span>
//             </h3>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="getin_touch_section">
//         <div className="getin_touch_container" id="quiery-form">
//           <div className="getin_touch_right_container">
//             <div className="innergetin_touch_right_container shadow">
//               <p>
                
//                   ------- Fill The Form
//                   <h4></h4>
//                   <h4></h4>
//                 <h4></h4>
//                 <strong></strong>
//                 <h1 style={{ fontSize: "1.3rem" }}>
//                   {" "}
//                   Send A Message
//                 </h1>
//               </p>

//               <div className="form_input_feild_container">
//                 <div className="pricing_container">
//                   <div className="input_feild_title">
//                     <p>Name</p>
//                   </div>
//                   <div className="input_feild">
//                     <input
//                       className="contact_form_input_feild"
//                       type="text"
//                       placeholder="Enter your name"
//                       maxLength={35}
//                     />
//                   </div>
//                 </div>
//                 <div className="pricing_container">
//                   <div className="input_feild_title">
//                     <p>Phone Number</p>
//                   </div>
//                   <div className="input_feild">
//                     <input
//                       className="contact_form_input_feild"
//                       type="text"
//                       placeholder="Enter your phone number"
//                       maxLength="35"
//                     />
//                   </div>
//                 </div>
//                 <div className="pricing_container">
//                   <div className="input_feild_title">
//                     <p style={{ marginBottom: 0, color: "white" }}>
//                       I'm looking for
//                     </p>
//                   </div>
//                   <div className="input_feild">
//                     <select
//                       name="requiredService"
//                       id="requiredService"
//                       required=""
//                     >
//                       <option value="uPVC">uPVC</option>
//                       <option value="ALU Home Interior">
//                         ALU Home Interior
//                       </option>
//                       <option value="Commercial partition system">
//                         Commercial partition system
//                       </option>
//                       <option value="other">other</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="pricing_container">
//                   <div className="input_feild_title">
//                     <p>Email</p>
//                   </div>
//                   <div className="input_feild">
//                     <input
//                       className="contact_form_input_feild"
//                       type="email"
//                       placeholder="Enter your email"
//                       maxLength={35}
//                     />
//                   </div>
//                 </div>

//                 <button className="form_btn">
//                   Submit
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 15 15"
//                   >
//                     <path
//                       fill="none"
//                       stroke="currentColor"
//                       d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="getin_touch_left_container">
//             <h4 className="getin_touch_heading">
//               <span style={{ color: "rgb(250, 133, 61)" }}>Get In </span>
//               Touch
//             </h4>

//             <p style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
//               "If you have any query, feel free to ask for details."
//             </p>

//             <div className="contact_info">
//               {/* Phone Card */}
//               <div className="address_container">
//                 <div className="address_image">
//                   {/*--- IN Order to change phone image---*/}
//                   <img src={assets.phone} alt="Phone Icon" />
//                 </div>
//                 <div>
//                   <h4 className="card_heading">
//                   Call us</h4>{" "}
//                   {/*- phone no heading -*/}
//                   <p className="card_para">+91-87440-36000 <br />+91-84475-95048</p>{" "}
                  
            
//                   {/*- phone no -*/}
//                 </div>
//               </div>

//               {/* Email Card */}
//               <div className="address_container">
//                 <div className="address_image">
//                   {/*---  go to the src/assets/asset.js to change the image---*/}
//                   <img src={assets.email} alt="Email Icon" />
//                 </div>
//                 <div>
//                   <h4 className="card_heading">Email</h4> {/*-Email -*/}
//                   <p className="card_para">contact@aidfgroup.com</p>{" "}
//                   {/*-Email of the website-*/}
//                 </div>
//               </div>
//               {/* Location Card */}
//               <div className="address_container">
//                 <div className="address_image">
//                   {/*---  go to the src/assets/asset.js to change the image---*/}
//                   <img src={assets.location} alt="Location" />
//                 </div>
//                 <div>
//                   <h4 className="card_heading">Address</h4>
//                   <p className="card_para">
//                     H. No. 256, Village Anangpur Dairy Bhagwat Colony,
//                     Sector-37, Faridabad- HR-121003
//                   </p>{" "}
//                   {/* Address of the office */}
//                 </div>
//               </div>
//               {/*-----OUR SHOWROOMS-------*/}
//               <div className="address_container">
//                 <div className="address_image"></div>
//                 <div>
//                   <h4>OUR SHOWROOMS</h4>
//                 </div>
//               </div>
//               {/* 1 SHOWROOM Card */}
//               <div className="address_container">
//                 <div className="address_image">
//                   {/*---  go to the src/assets/asset.js to change the image---*/}
//                   <img src={assets.location} alt="Location" />
//                 </div>
//                 <div>
//                   <h4 className="card_heading">
//                     {" "}
//                     {/* 1 SHOWROOM NAME */} INFO
//                   </h4>
//                   <p className="card_para">{/* SHOWROOM INFORMATION */} INFO</p>
//                 </div>
//               </div>

//               {/* 2 SHOWROOM Card */}
//               <div className="address_container">
//                 <div className="address_image">
//                   {/*---  go to the src/assets/asset.js to change the image---*/}
//                   <img src={assets.location} alt="Location" />
//                 </div>
//                 <div>
//                   <h4 className="card_heading">
//                     {" "}
//                     {/* 2 SHOWROOM NAME */} INFO
//                   </h4>
//                   <p className="card_para">{/* SHOWROOM INFORMATION */} INFO</p>
//                 </div>
//               </div>

//               {/* 3 SHOWROOM Card */}
//               <div className="address_container">
//                 <div className="address_image">
//                   {/*---  go to the src/assets/asset.js to change the image---*/}
//                   <img src={assets.location} alt="Location" />
//                 </div>
//                 <div>
//                   <h4 className="card_heading"> {/* 3 SHOWROOM NAME */}INFO</h4>
//                   <p className="card_para"> {/* SHOWROOM INFORMATION */}INFO</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Google Map Section */}
//       <section className="contact_map_section">
//         <h1 className="map_title">
//           <span></span>
//           Find us on google map {/*heading of map*/}
//           <div></div>
//         </h1>
//         <div className="contact_map_container">
//           {/* link of the location from google map*/}
//           <iframe
//             src="https://maps.google.com/maps?q=AIDF%20GROUP&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"            width="100%"
//             height="500"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LocateUs;











import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { assets } from "./assets/asset";
import "./LocateUs.css";
import heroImg from "./assets/locateUs-hero.jpg"

const LocateUs = () => {
  // Animation controls
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mapRef, mapInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const heroControls = useAnimation();
  const contactControls = useAnimation();
  const mapControls = useAnimation();

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (contactInView) contactControls.start("visible");
    if (mapInView) mapControls.start("visible");
  }, [heroInView, contactInView, mapInView]);

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
        className="contact-hero"
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
      >
        <div className="hero-image-container">
          <img src={heroImg} alt="Contact Us Banner" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <motion.div className="hero-content" variants={fadeUp}>
          <h1>
            <span className="highlight">Get</span> In Touch
          </h1>
          <p>We'd love to hear from you. Reach out for inquiries or support.</p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="contact-section"
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={fadeIn}
      >
        <div className="contact-container">
          {/* Contact Info - Now on top */}
          <motion.div 
            className="contact-info-container"
            variants={fadeUp}
          >
            <div className="info-grid">
              <motion.div className="info-card" variants={cardItem} whileHover={{ y: -3 }}>
                <div className="card-icon">
                  <img src={assets.phone} alt="Phone" />
                </div>
                <div className="card-content">
                  <div className="info-row">
                    <span className="info-label">Call Us:</span>
                   <div style={{display: 'flex', flexDirection: 'column',paddingLeft:'10px'}}>
                   <span className="info-value">+91-87440-36000</span>
                   <span className="info-value">+91-87440-82000</span>
                   </div>
                  </div>
                
                </div>
              </motion.div>
              
              <motion.div className="info-card" variants={cardItem} whileHover={{ y: -3 }}>
                <div className="card-icon">
                  <img src={assets.email} alt="Email" />
                </div>
                <div className="card-content">
                  <div className="info-row">
                    <span className="info-label">Email:</span>
                    <div style={{paddingLeft:'10px'}}><span className="info-value">contact@aidfgroup.com</span></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="info-card" variants={cardItem} whileHover={{ y: -3 }}>
                <div className="card-icon">
                  <img src={assets.location} alt="Location" />
                </div>
                <div className="card-content">
                  <div className="info-row">
                    <span className="info-label">Head Office:</span>
                   <div style={{paddingLeft:'10px'}}> <span className="info-value">H. No. 256, Village Anangpur Dairy Bhagwat Colony, Sector-37 Faridabad- HR-121003</span></div>
                  </div>
                  
                </div>
              </motion.div>
            </div>

            <div className="showrooms-section">
              <h3 className="section-subtitle">Our Showrooms</h3>
              <div className="showrooms-grid">
                <motion.div className="info-card compact" variants={cardItem} whileHover={{ y: -3 }}>
                  <div className="card-icon small">
                    <img src={assets.location} alt="Location" />
                  </div>
                  <div className="card-content">
                    <div className="info-row">
                      <span className="info-label">Showroom 1: </span>
                      <div style={{paddingLeft:'10px'}}><span className="info-value"> Location details</span></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div className="info-card compact" variants={cardItem} whileHover={{ y: -3 }}>
                  <div className="card-icon small">
                    <img src={assets.location} alt="Location" />
                  </div>
                  <div className="card-content">
                    <div className="info-row">
                      <span className="info-label">Showroom 2:</span>
                      <div style={{paddingLeft:'10px'}}><span className="info-value"> Location details</span></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div className="info-card compact" variants={cardItem} whileHover={{ y: -3 }}>
                  <div className="card-icon small">
                    <img src={assets.location} alt="Location" />
                  </div>
                  <div className="card-content">
                    <div className="info-row">
                      <span className="info-label">Showroom 3:</span>
                      <div style={{paddingLeft:'10px'}}><span className="info-value"> Location details</span></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Compact version */}
          <motion.div 
            className="contact-form-container"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out this quick form and we'll respond promptly</p>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <select className="form-input">
                  <option value="">I'm interested in...</option>
                  <option value="uPVC">uPVC</option>
                  <option value="ALU Home Interior">ALU Home Interior</option>
                  <option value="Commercial partition system">Commercial partition system</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea 
                  placeholder="Your message (optional)" 
                  rows="3"
                  className="form-input"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="map-section"
        ref={mapRef}
        initial="hidden"
        animate={mapControls}
        variants={fadeIn}
      >
        <div className="section-header">
          <h2>Find Us on <span className="highlight">Google Maps</span></h2>
          <p>Visit our location or get directions</p>
        </div>
        <div className="map-container">
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