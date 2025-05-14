// import React from 'react';
// import './Footer.css';
// import linkedIn from "./HomeImg/linkedin.png";
// import facebook from "./HomeImg/facebook.png";
// import whatsapp from "./HomeImg/whatsapp.png";
// import instagram from "./HomeImg/insta.png";
// import logo from "./HomeImg/aidf_logo.png"

// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       {/* Main container for the entire footer */}
//       <div className="footer-content">

//         {/* Top section of the footer - contains logo and social media links */}
//         <div className="footer-top">

//           {/* Logo link to homepage */}
//           <a href="/" className="footer-logo-link">
//             <div className="footer-logo">
//               {/* Company Logo Image */}
//               <img src={logo} alt="Aidf" />
//             </div>
//             <h4></h4>
//             <div className="footer-tagline">
//               <span> We Provide Best quality,</span><br />
//               <span> Complete Flooring Solutions</span>
//             </div>
//           </a>

//           {/* Social Media Section */}
//           <div className="social-media-container">
//             <h5>Connect With Us</h5>
//             <div className="social-icons">
//               {/* LinkedIn Social Media Icon Link */}
//               <a href="https://www.linkedin.com/company/alu-empire/" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={linkedIn} alt="LinkedIn" />
//                 </div>
//               </a>

//               {/* Facebook Social Media Icon Link */}
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={facebook} alt="Facebook" />
//                 </div>
//               </a>

//               {/* WhatsApp Social Media Icon Link */}
//               <a href="https://wa.me/919002690068" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={whatsapp} alt="WhatsApp" />
//                 </div>
//               </a>

//               {/* Instagram Social Media Icon Link */}
//               <a href="https://www.instagram.com/aidfgroup/" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={instagram} alt="Instagram" />
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Navigation Links Section */}
//         <div className="footer-nav">

//           {/* Column 1 - Links to discover pages */}
//           <div className="footer-column">
//             <h6 className="footer-heading">Discover AIDF GROUP</h6>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/about-us/">About Us</a></li>
//               <li><a href="/blogs/">Blog</a></li>
//             </ul>
//           </div>

//           {/* Column 2 - Links to Alu Home Interior products */}
//           <div className="footer-column">
//             <h6 className="footer-heading"> AIDF GROUP Home Interior</h6>
//             <ul>
//               <li><a href="/alu-home-interior/doors-and-window">Door & Window</a></li>
//               <li><a href="/alu-home-interior/railingsystem">Stair Railing</a></li>
//               <li><a href="/alu-home-interior/shower-cubical">Shower Cubical</a></li>
//               <li><a href="/alu-home-interior/sky-light">Sky Light</a></li>
//               <li><a href="/alu-home-interior/Slim-Sliding-Doors">Slim Sliding Door</a></li>
//             </ul>
//           </div>

//           {/* Column 3 - Links to uPVC Window & Door products */}
//           <div className="footer-column">
//             <h6 className="footer-heading">uPVC Window & Door</h6>
//             <ul>
//               <li><a href="/upvc-door-and-window/window">Window</a></li>
//               <li><a href="/upvc-door-and-window/door">Door</a></li>
//               <li><a href="/accessories/window-door-and-accessories">Accessories</a></li>
//             </ul>
//           </div>

//           {/* Column 4 - Links to Commercial Partition System */}
//           <div className="footer-column">
//             <h6 className="footer-heading">Commercial Partition System</h6>
//             <ul>
//               <li><a href="/commercial-partition-system/glass-partition">Glass Partition</a></li>
//               <li><a href="/accessories/profile-and-accessories">Profile & Accessories</a></li>
//             </ul>
//           </div>

//           {/* Column 5 - Support related links */}
//           <div className="footer-column">
//             <h6 className="footer-heading">Support</h6>
//             <ul>
//               <li><a href="/terms-&-Condition/">Terms & Condition</a></li>
//               <li><a href="/privacy-policy/">Privacy Policy</a></li>
//               <li><a href="/locate-us/">Locate Us</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom section of the footer - Copyright */}
//         <div className="footer-bottom">
//           <p>© 2023 AIDF GROUP | Powered By Sanekt</p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import linkedIn from "./HomeImg/linkedin.png";
import facebook from "./HomeImg/facebook.png";
import whatsapp from "./HomeImg/whatsapp.png";
import instagram from "./HomeImg/insta.png";
import logo from "./HomeImg/aidf_logo.png";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  {
    /** link to the social platform*/
  }
  const socialLinks = [
    { icon: linkedIn, url: "/", alt: "LinkedIn" },
    { icon: facebook, url: "/", alt: "Facebook" },
    { icon: whatsapp, url: "https://wa.me/918447595048", alt: "WhatsApp" },
    {
      icon: instagram,
      url: "https://www.instagram.com/aidfgroup/",
      alt: "Instagram",
    },
  ];

  const footerColumns = [
    {
      title: "Discover AIDF GROUP",
      links: [
        { text: "Home", url: "/" },
        { text: "About Us", url: "/about-us" },
        { text: "Products", url: "/products" },
        { text: "Blog", url: "/blogs" },
        { text: "Locate Us", url: "/locate-us" },
      ],
    },


    {
      title: "Skirting & Profile",

      links: [
        { text: "50MM Skirting", url: "/skirting&profile" },
        { text: "75MM Skirting", url: "/skirting&profile" },
        { text: "100MM Skirting", url: "/skirting&profile" },
        
               
      ],
    },


    {
      title: "Carpets",
      links: [
        { text: "Wall to Wall Carpet", url: "/carpets" },
        { text: "Carpet Tile", url: "/carpets" },
       
      
      ],
    },
    {
      title: "Flooring",
      links: [
        { text: "Laminate Flooring", url: "/flooring" },
        { text: "SPC Flooring", url: "/flooring" },
        { text: "Engineered Flooring", url: "/flooring" },
        { text: "Hardwood Flooring", url: "/flooring" },
        { text: "Bamboo Flooring", url: "/flooring" },
        { text: "Decking Wood", url: "/flooring" },
        { text: "Thermo Pine", url: "/flooring" },
      ],
    },
    {
      title: "Aluminium Glass Partition",
      links: [
        { text: "Curved Glass Partition", url: "/Aluminium_Glass_Partitions" },
        { text: "Aluminum Slim Glass Partition", url: "/Aluminium_Glass_Partitions" },
        { text: "Aluminium Acoustic Slim Glass Partition, For Office,", url: "/Aluminium_Glass_Partitions" },
        { text: "Aluminium Grid Partition", url: "/Aluminium_Glass_Partitions" },
        { text: "Slimline Glass Partition", url: "/Aluminium_Glass_Partitions" },
       { text: "Transparent Laminated Glass Partition, For Office", url: "/Aluminium_Glass_Partitions" },

      ],
    },

    {
      title: "More...",
      links: [
        { text: "More... ", url: "/Moreproducts" },
       
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Terms & Condition", url: "/terms&conditions" },
        { text: "Privacy Policy", url: "/privacy&policy" },
        { text: "Locate Us", url: "/locate-us" },
      ],
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top Section */}
        <motion.div
          className="footer-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Logo and Tagline */}
          <motion.div className="footer-brand" variants={fadeIn}>
            <a href="/" className="footer-logo-link">
              <img src={logo} alt="AIDF Group Logo" className="footer-logo" />
            </a>
            <div className="footer-tagline">
              <p>We Provide Best Quality, Complete Flooring Solutions</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div className="social-media-container" variants={fadeIn}>
            <div className="text-content">
              <h5 className="social-title">Connect With Us</h5>
              <div className="call-info">
                <h5 className="social-title">Call Us - 0129-4064647</h5>
                <div className="tel-no"><a href="tel:+911294064647" className="phone-number">
                  
                </a></div>
              </div>
            </div>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="social-icon">
                    <img src={social.icon} alt={social.alt} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="footer-nav"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {footerColumns.map((column, index) => (
            <motion.div className="footer-column" key={index} variants={fadeIn}>
              <h6 className="footer-heading">{column.title}</h6>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={link.url}>{link.text}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} AIDF GROUP </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
