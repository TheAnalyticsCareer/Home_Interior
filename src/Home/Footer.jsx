// import React from 'react';
// import './Footer.css';
// import linkedIn from "./HomeImg/linkedin.png"
// import facebook from "./HomeImg/facebook.png"
// import whatsapp from "./HomeImg/whatsapp.png"
// import instagram from "./HomeImg/insta.png"




// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <div className="footer-content">
//         {/* Top Section - Logo and Social Media */}
//         <div className="footer-top">
//           <a href="/" className="footer-logo-link">
//             <div className="footer-logo">
//               <img src="/img/aidf_logo.png" alt="Alu Empire Logo" />
//             </div>
//           </a>
          
//           <div className="social-media-container">
//             <h5>Connect With Us</h5>
//             <div className="social-icons">
//               <a href="https://www.linkedin.com/company/alu-empire/" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={linkedIn} alt="LinkedIn" />
//                 </div>
//               </a>
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={facebook} alt="Facebook" />
//                 </div>
//               </a>
//               <a href="https://wa.me/919002690068" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={whatsapp} alt="WhatsApp" />
//                 </div>
//               </a>
//               <a href="https://www.instagram.com/aluempire" target="_blank" rel="noopener noreferrer">
//                 <div className="social-icon">
//                   <img src={instagram} alt="Instagram" />
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="footer-nav">
//           {/* Column 1 */}
//           <div className="footer-column">
//             <h6 className="footer-heading">Discover Alu Empire</h6>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/about-us/">About Us</a></li>
//               <li><a href="/blogs/">Blog</a></li>
//             </ul>
//           </div>

//           {/* Column 2 */}
//           <div className="footer-column">
//             <h6 className="footer-heading">Alu Home Interior</h6>
//             <ul>
//               <li><a href="/alu-home-interior/doors-and-window">Door & Window</a></li>
//               <li><a href="/alu-home-interior/railingsystem">Stair Railing</a></li>
//               <li><a href="/alu-home-interior/shower-cubical">Shower Cubical</a></li>
//               <li><a href="/alu-home-interior/sky-light">Sky Light</a></li>
//               <li><a href="/alu-home-interior/Slim-Sliding-Doors">Slim Sliding Door</a></li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="footer-column">
//             <h6 className="footer-heading">uPVC Window & Door</h6>
//             <ul>
//               <li><a href="/upvc-door-and-window/window">Window</a></li>
//               <li><a href="/upvc-door-and-window/door">Door</a></li>
//               <li><a href="/accessories/window-door-and-accessories">Accessories</a></li>
//             </ul>
//           </div>

//           {/* Column 4 */}
//           <div className="footer-column">
//             <h6 className="footer-heading">Commercial Partition System</h6>
//             <ul>
//               <li><a href="/commercial-partition-system/glass-partition">Glass Partition</a></li>
//               <li><a href="/accessories/profile-and-accessories">Profile & Accessories</a></li>
//             </ul>
//           </div>

//           {/* Column 5 */}
//           <div className="footer-column">
//             <h6 className="footer-heading">Support</h6>
//             <ul>
//               <li><a href="/terms-&-Condition/">Terms & Condition</a></li>
//               <li><a href="/privacy-policy/">Privacy Policy</a></li>
//               <li><a href="/locate-us/">Locate Us</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section - Copyright */}
//         <div className="footer-bottom">
//           <p>© 2024 Alu Empire. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










import React from 'react';
import './Footer.css';
import linkedIn from "./HomeImg/linkedin.png";
import facebook from "./HomeImg/facebook.png";
import whatsapp from "./HomeImg/whatsapp.png";
import instagram from "./HomeImg/insta.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Main container for the entire footer */}
      <div className="footer-content">
        
        {/* Top section of the footer - contains logo and social media links */}
        <div className="footer-top">
          
          {/* Logo link to homepage */}
          <a href="/" className="footer-logo-link">
            <div className="footer-logo">
              {/* Company Logo Image */}
              <img src="/img/aidf_logo.png" alt="Alu Empire Logo" />
            </div>
          </a>

          {/* Social Media Section */}
          <div className="social-media-container">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              {/* LinkedIn Social Media Icon Link */}
              <a href="https://www.linkedin.com/company/alu-empire/" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <img src={linkedIn} alt="LinkedIn" />
                </div>
              </a>

              {/* Facebook Social Media Icon Link */}
              <a href="/" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <img src={facebook} alt="Facebook" />
                </div>
              </a>

              {/* WhatsApp Social Media Icon Link */}
              <a href="https://wa.me/919002690068" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <img src={whatsapp} alt="WhatsApp" />
                </div>
              </a>

              {/* Instagram Social Media Icon Link */}
              <a href="https://www.instagram.com/aluempire" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <img src={instagram} alt="Instagram" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation Links Section */}
        <div className="footer-nav">
          
          {/* Column 1 - Links to discover pages */}
          <div className="footer-column">
            <h6 className="footer-heading">Discover Alu Empire</h6>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us/">About Us</a></li>
              <li><a href="/blogs/">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 - Links to Alu Home Interior products */}
          <div className="footer-column">
            <h6 className="footer-heading">Alu Home Interior</h6>
            <ul>
              <li><a href="/alu-home-interior/doors-and-window">Door & Window</a></li>
              <li><a href="/alu-home-interior/railingsystem">Stair Railing</a></li>
              <li><a href="/alu-home-interior/shower-cubical">Shower Cubical</a></li>
              <li><a href="/alu-home-interior/sky-light">Sky Light</a></li>
              <li><a href="/alu-home-interior/Slim-Sliding-Doors">Slim Sliding Door</a></li>
            </ul>
          </div>

          {/* Column 3 - Links to uPVC Window & Door products */}
          <div className="footer-column">
            <h6 className="footer-heading">uPVC Window & Door</h6>
            <ul>
              <li><a href="/upvc-door-and-window/window">Window</a></li>
              <li><a href="/upvc-door-and-window/door">Door</a></li>
              <li><a href="/accessories/window-door-and-accessories">Accessories</a></li>
            </ul>
          </div>

          {/* Column 4 - Links to Commercial Partition System */}
          <div className="footer-column">
            <h6 className="footer-heading">Commercial Partition System</h6>
            <ul>
              <li><a href="/commercial-partition-system/glass-partition">Glass Partition</a></li>
              <li><a href="/accessories/profile-and-accessories">Profile & Accessories</a></li>
            </ul>
          </div>

          {/* Column 5 - Support related links */}
          <div className="footer-column">
            <h6 className="footer-heading">Support</h6>
            <ul>
              <li><a href="/terms-&-Condition/">Terms & Condition</a></li>
              <li><a href="/privacy-policy/">Privacy Policy</a></li>
              <li><a href="/locate-us/">Locate Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section of the footer - Copyright */}
        <div className="footer-bottom">
          <p>© 2024 Alu Empire. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
