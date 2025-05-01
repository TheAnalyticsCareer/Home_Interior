// import React, { useState } from 'react';
// import "./header.css";
// import { Dialog, DialogContent, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import brochure from "./img/brochure.pdf"
// import logo from "./img/companyLogo.jpg"
// import aidfLogo from "./img/aidf_logo.png"

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [contactFormOpen, setContactFormOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     service: 'uPVC',
//     email: ''
//   });

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setContactFormOpen(false);
//   };

//   // Function to determine active link
//   const isActive = (path) => {
//     return window.location.pathname === path ? 'active' : '';
//   };

//   return (
//     <>
//       {/* Contact Form Popup */}
//       <Dialog 
//         open={contactFormOpen} 
//         onClose={() => setContactFormOpen(false)}
//         maxWidth="sm"
//         fullWidth
//         className="contact-form-dialog"
//         BackdropProps={{
//           style: {
//             backgroundColor: 'rgba(0, 0, 0, 0.7)',
//             backdropFilter: 'blur(4px)'
//           }
//         }}
//       >
//         <DialogContent className="contact-form-content">
//           <IconButton 
//             aria-label="close" 
//             onClick={() => setContactFormOpen(false)}
//             className="close-button"
//             style={{ color: '#E90000' }}
//           >
//             <CloseIcon />
//           </IconButton>

//           <div className="contact-form-container">
//             <h2 className="form-title" style={{ color: '#E90000' }}>Get in Touch</h2>
//             <p className="form-subtitle">We'll get back to you shortly</p>

//             <form onSubmit={handleFormSubmit} className="contact-form">
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter your name"
//                   maxLength="35"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   maxLength="13"
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="service">I'm looking for</label>
//                 <select
//                   id="service"
//                   name="service"
//                   value={formData.service}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="uPVC">uPVC</option>
//                   <option value="ALU Home Interior">ALU Home Interior</option>
//                   <option value="Commercial partition system">Commercial partition system</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Email ID</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   maxLength="70"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>

//               <button type="submit" className="submit-button" style={{ backgroundColor: '#E90000' }}>
//                 Submit
//                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
//                   <path fill="none" stroke="currentColor" d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"></path>
//                 </svg>
//               </button>
//             </form>
//           </div>
//         </DialogContent>
//       </Dialog>

//       {/* Desktop Header Section */}
//       <div className="outer_desktop_header">
//         <div className="inner_desktop_header">
//           {/* Top Section - Action Buttons */}
//           <div className="header_top_section" style={{ backgroundColor: '#2A2A2A' }}>
//             <div className="header_top_container">
//               <div className="header_button_container">
//                 {/* <button className="header_button1" onClick={() => window.location.href = '/dealer'}>
//                   <img
//                     src="https://www.aluempire.com/assets/images/become-a-dealerIcon.png"
//                     alt="Dealer program icon"
//                   />
//                   <span>Become a Dealer</span>
//                 </button> */}

//                 <button className="header_button1" onClick={() => window.open(brochure, '_blank')}>
//                   <img
//                     src="https://www.aluempire.com/assets/images/Home/icons/brochure_icon.png"
//                     alt="Download brochure icon"
//                   />
//                   <span>Brochure</span>
//                 </button>

//                 <button className="header_button1" onClick={() => setContactFormOpen(true)}>
//                   <img
//                     src="https://www.aluempire.com/assets/images/Home/icons/enqury_icon.png"
//                     alt="Make an enquiry icon"
//                   />
//                   <span>Enquire</span>
//                 </button>

//                 <button className="header_button2" onClick={() => window.location.href = 'tel:9002690068'}>
//                   <img
//                     src="https://www.aluempire.com/assets/images/Home/icons/header_phone_icon.png"
//                     alt="Phone contact icon"
//                   />
//                   <span>90026 90068</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section - Navigation with Logo and Search */}
//           <div className="header_bottom_section" style={{ backgroundColor: '#ffffff' }}>
//             <div className="header_bottom_container">
//               {/* Logo Container */}
//               <div className="header_logo_container">
//                 <button onClick={() => window.location.href = '/'} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//                   <img src={logo} alt="Advant" className="company_logo" />
//                 </button>
//                 <button onClick={() => window.location.href = '/'} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//                   <img src={aidfLogo} alt="AIDF" className="aidf_logo" />
//                 </button>
//               </div>

//               {/* Search Bar - Centered */}
//               <div className="header_search_container">
//                 <div className="search_bar">
//                   <input type="text" placeholder="Search..." />
//                   <button className="search_button">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="1.2rem"
//                       height="1.2rem"
//                       viewBox="0 0 15 15"
//                     >
//                       <path
//                         fill="none"
//                         stroke="#2A2A2A"
//                         d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
//                       ></path>
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Main Navigation Menu */}
//               <nav className="main_navigation">
//                 <ul>
//                   <li>
//                     <button 
//                       className={`nav-button ${isActive('/')}`}
//                       onClick={() => window.location.href = '/'}
//                     >
//                       Home
//                     </button>
//                   </li>

//                   <li 
//                     className="product_menu" 
//                     onMouseEnter={() => toggleDropdown('about')}
//                     onMouseLeave={() => toggleDropdown(null)}
//                   >
//                     <button 
//                       className={`nav-button ${isActive('/about-us')}`}
//                       onClick={() => window.location.href = '/about-us'}
//                     >
//                       <div className="menu_item">
//                         About Us
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="1em"
//                           height="1em"
//                           viewBox="0 0 16 16"
//                         >
//                           <path
//                             fill="#2A2A2A"
//                             fillRule="nonzero"
//                             d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
//                           ></path>
//                         </svg>
//                       </div>
//                     </button>
//                     <div className={`product_dropdown ${activeDropdown === 'about' ? 'show' : ''}`}>
//                       <div className="innerproduct_dropdown">
//                         <ul>
//                           <li>
//                             <button onClick={() => window.location.href = '/about-us/#chairman-section'}>
//                               Chairman's Message
//                             </button>
//                           </li>
//                           <li>
//                             <button onClick={() => window.location.href = '/about-us/#ourstory'}>
//                               Our Story
//                             </button>
//                           </li>
//                           <li>
//                             <button onClick={() => window.location.href = '/about-us/#vision'}>
//                               Vision & Mission
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </li>

//                   <li 
//                     className="product_menu"
//                     onMouseEnter={() => toggleDropdown('product')}
//                     onMouseLeave={() => toggleDropdown(null)}
//                   >
//                     <button 
//                       className={`nav-button ${isActive('/productPage')}`}
//                       onClick={() => window.location.href = '/productPage'}
//                     >
//                       <div className="menu_item">
//                         Product
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="1em"
//                           height="1em"
//                           viewBox="0 0 16 16"
//                         >
//                           <path
//                             fill="#2A2A2A"
//                             fillRule="nonzero"
//                             d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
//                           ></path>
//                         </svg>
//                       </div>
//                     </button>
//                     <div className={`product_dropdown ${activeDropdown === 'product' ? 'show' : ''}`}>
//                       <div className="innerproduct_dropdown">
//                         <ul>
//                           <li>
//                             <button onClick={() => window.location.href = '/skirting'}>
//                               Skirting & profile
//                             </button>
//                           </li>
//                           <li>
//                             <button onClick={() => window.location.href = '/carpet'}>
//                               Carpets
//                             </button>
//                           </li>
//                           <li>
//                             <button onClick={() => window.location.href = '/flooring'}>
//                               Flooring
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </li>

//                   <li>
//                     <button 
//                       className={`nav-button ${isActive('/certificates')}`}
//                       onClick={() => window.location.href = '/certificates'}
//                     >
//                       Certifications
//                     </button>
//                   </li>
                  
//                   <li>
//                     <button 
//                       className={`nav-button ${isActive('/blogs/')}`}
//                       onClick={() => window.location.href = '/blogs/'}
//                     >
//                       Blogs
//                     </button>
//                   </li>

//                   <li>
//                     <button 
//                       className={`nav-button ${isActive('/locateUs')}`}
//                       onClick={() => window.location.href = '/locateUs'}
//                     >
//                       Locate Us
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Header Section */}
//       <div className="outer_mobile_header">
//         <header className="mobile_header">
//           {/* Mobile Logo */}
//           <div className="mobile_header_logo_container">
//             <button onClick={() => window.location.href = '/'} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//               <img src={logo} alt="Advant" className="mobile_logo" />
//             </button>
//           </div>

//           {/* Mobile Menu Icons (Search and Hamburger) */}
//           <div className="mobile_menu_container">
//             <div className="mobile_search_container">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.2rem"
//                 height="1.2rem"
//                 viewBox="0 0 15 15"
//               >
//                 <path
//                   fill="none"
//                   stroke="#2A2A2A"
//                   d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
//                 ></path>
//               </svg>
//             </div>
            
//             {/* Hamburger Menu Button */}
//             <div className="menu_bnt" onClick={toggleMobileMenu}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.8em"
//                 height="1.8em"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#2A2A2A"
//                   d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//         </header>
        
//         {/* Mobile Menu Content */}
//         <div className={`mobile_menu ${mobileMenuOpen ? 'open' : ''}`}>
//           <div className="mobile_menu_content">
//             <ul>
//               <li>
//                 <button 
//                   className={`mobile-nav-button ${isActive('/')}`}
//                   onClick={() => window.location.href = '/'}
//                 >
//                   Home
//                 </button>
//               </li>

//               <li className="mobile_dropdown">
//                 <div className="mobile_dropdown_toggle" onClick={() => toggleDropdown('mobile-about')}>
//                   <span className={isActive('/about-us')}>About Us</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 16 16"
//                     className={activeDropdown === 'mobile-about' ? 'rotate' : ''}
//                   >
//                     <path
//                       fill="#2A2A2A"
//                       fillRule="nonzero"
//                       d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
//                     ></path>
//                   </svg>
//                 </div>
//                 <div className={`mobile_submenu ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>
//                   <ul>
//                     <li>
//                       <button onClick={() => window.location.href = '/about-us/#chairman-message'}>
//                         Chairman's Message
//                       </button>
//                     </li>
//                     <li>
//                       <button onClick={() => window.location.href = '/about-us/#our-story'}>
//                         Our Story
//                       </button>
//                     </li>
//                     <li>
//                       <button onClick={() => window.location.href = '/about-us/#vision-&-mission'}>
//                         Vision & Mission
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li className="mobile_dropdown">
//                 <div className="mobile_dropdown_toggle" onClick={() => toggleDropdown('mobile-product')}>
//                   <span className={isActive('/productPage')}>Product</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 16 16"
//                     className={activeDropdown === 'mobile-product' ? 'rotate' : ''}
//                   >
//                     <path
//                       fill="#2A2A2A"
//                       fillRule="nonzero"
//                       d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
//                     ></path>
//                   </svg>
//                 </div>
//                 <div className={`mobile_submenu ${activeDropdown === 'mobile-product' ? 'open' : ''}`}>
//                   <ul>
//                     <li>
//                       <button onClick={() => window.location.href = '/alu-home-interior'}>
//                         Alu Home Interior
//                       </button>
//                     </li>
//                     <li>
//                       <button onClick={() => window.location.href = '/upvc-door-and-window'}>
//                         uPVC Door & Window
//                       </button>
//                     </li>
//                     <li>
//                       <button onClick={() => window.location.href = '/commercial-partition-system'}>
//                         Commercial Partition System
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               <li>
//                 <button 
//                   className={`mobile-nav-button ${isActive('/certificates')}`}
//                   onClick={() => window.location.href = '/certificates'}
//                 >
//                   Certifications
//                 </button>
//               </li>

//               <li>
//                 <button 
//                   className={`mobile-nav-button ${isActive('/blogs/')}`}
//                   onClick={() => window.location.href = '/blogs/'}
//                 >
//                   Blogs
//                 </button>
//               </li>

//               <li>
//                 <button 
//                   className={`mobile-nav-button ${isActive('/locate-us/')}`}
//                   onClick={() => window.location.href = '/locate-us/'}
//                 >
//                   Locate Us
//                 </button>
//               </li>
//             </ul>

//             {/* Mobile Action Buttons */}
//             <div className="mobile_menu_buttons">
//               <button className="header_button1" onClick={() => window.location.href = '/become-a-dealer/'}>
//                 <img
//                   src="https://www.aluempire.com/assets/images/become-a-dealerIcon.png"
//                   alt="Become a dealer icon"
//                 />
//                 <span>Become a Dealer</span>
//               </button>
//               <button className="header_button1" onClick={() => window.open(brochure, '_blank')}>
//                 <img
//                   src="https://www.aluempire.com/assets/images/Home/icons/brochure_icon.png"
//                   alt="Download brochure icon"
//                 />
//                 <span>Brochure</span>
//               </button>
//               <button className="header_button1" onClick={() => setContactFormOpen(true)}>
//                 <img
//                   src="https://www.aluempire.com/assets/images/Home/icons/enqury_icon.png"
//                   alt="Make an enquiry icon"
//                 />
//                 <span>Enquire</span>
//               </button>
//               <button className="header_button2" onClick={() => window.location.href = 'tel:9002690068'}>
//                 <img
//                   src="https://www.aluempire.com/assets/images/Home/icons/header_phone_icon.png"
//                   alt="Phone contact icon"
//                 />
//                 <span>90026 90068</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;







import React, { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css";
import brochure from "./img/brochure.pdf";
import logo from "./img/companyLogo.jpg";
import aidfLogo from "./img/aidf_logo.png";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'uPVC',
    email: ''
  });

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setContactFormOpen(false);
  };

  const isActive = (path) => {
    return window.location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Contact Form Popup */}
      <Dialog 
        open={contactFormOpen} 
        onClose={() => setContactFormOpen(false)}
        maxWidth="sm"
        fullWidth
        className="contact-form-dialog"
      >
        <DialogContent className="contact-form-content">
          <IconButton 
            aria-label="close" 
            onClick={() => setContactFormOpen(false)}
            className="close-button"
          >
            <CloseIcon />
          </IconButton>
          <div className="contact-form-container">
            <h2 className="form-title">Get in Touch</h2>
            <p className="form-subtitle">We'll get back to you shortly</p>
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">I'm looking for</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                >
                  <option value="uPVC">uPVC</option>
                  <option value="ALU Home Interior">ALU Home Interior</option>
                  <option value="Commercial partition system">Commercial partition system</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Desktop Header */}
      <div className="outer_desktop_header">
        <div className="inner_desktop_header">
          {/* Top Action Bar */}
          <div className="header_top_section">
            <div className="header_top_container">
              <div className="header_button_container">
                <button className="header_button" onClick={() => window.open(brochure, '_blank')}>
                  <span className="button-icon">📄</span>
                  <span>Brochure</span>
                </button>
                <button className="header_button" onClick={() => setContactFormOpen(true)}>
                  <span className="button-icon">✉️</span>
                  <span>Enquire</span>
                </button>
                <button className="header_button phone" onClick={() => window.location.href = 'tel:9002690068'}>
                  <span className="button-icon">📞</span>
                  <span>90026 90068</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Navigation Bar */}
          <div className="header_bottom_section">
            <div className="header_bottom_container">
              {/* Logo Section */}
              <div className="header_logo_container">
                <a href="/" className="logo-link">
                  <img src={logo} alt="Company Logo" className="company_logo" />
                  <img src={aidfLogo} alt="AIDF Logo" className="aidf_logo" />
                </a>
              </div>

              {/* Search Bar */}
              <div className="header_search_container">
                <div className="search_bar">
                  <input type="text" placeholder="Search products..." />
                  <button className="search_button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Main Navigation */}
              <nav className="main_navigation">
                <ul className="nav-list">
                  <li className="nav-item">
                    <a href="/" className={`nav-link ${isActive('/')}`}>Home</a>
                  </li>
                  
                  <li className="nav-item dropdown" 
                      onMouseEnter={() => toggleDropdown('about')}
                      onMouseLeave={() => toggleDropdown(null)}>
                    <a href="/about-us" className={`nav-link ${isActive('/about-us')}`}>
                      About Us
                      <span className="dropdown-arrow">▼</span>
                    </a>
                    <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
                      <a href="/about-us/#chairman-section">Chairman's Message</a>
                      <a href="/about-us/#ourstory">Our Story</a>
                      <a href="/about-us/#vision">Vision & Mission</a>
                    </div>
                  </li>
                  
                  <li className="nav-item dropdown"
                      onMouseEnter={() => toggleDropdown('products')}
                      onMouseLeave={() => toggleDropdown(null)}>
                    <a href="/productPage" className={`nav-link ${isActive('/productPage')}`}>
                      Products
                      <span className="dropdown-arrow">▼</span>
                    </a>
                    <div className={`dropdown-menu ${activeDropdown === 'products' ? 'show' : ''}`}>
                      <a href="/skirtingProfile">Skirting & Profile</a>
                      <a href="/carpet">Carpets</a>
                      <a href="/flooring">Flooring</a>
                    </div>
                  </li>
                  
                  <li className="nav-item">
                    <a href="/certificates" className={`nav-link ${isActive('/certificates')}`}>Certifications</a>
                  </li>
                  
                  <li className="nav-item">
                    <a href="/blogs" className={`nav-link ${isActive('/blogs')}`}>Blogs</a>
                  </li>
                  
                  <li className="nav-item">
                    <a href="/locateUs" className={`nav-link ${isActive('/locateUs')}`}>Locate Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="outer_mobile_header">
        <header className="mobile_header">
          <div className="mobile_header_container">
            <a href="/" className="mobile_logo_link">
              <img src={logo} alt="Company Logo" className="mobile_logo" />
            </a>
            
            <div className="mobile_menu_icons">
              <button className="mobile_search_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/>
                </svg>
              </button>
              
              <button className="mobile_menu_button" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile_menu ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile_menu_content">
              <ul className="mobile_nav_list">
                <li className="mobile_nav_item">
                  <a href="/" className="mobile_nav_link">Home</a>
                </li>
                
                <li className="mobile_nav_item">
                  <div className="mobile_nav_link" onClick={() => toggleDropdown('mobile-about')}>
                    About Us
                    <span className={`mobile_dropdown_arrow ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>▼</span>
                  </div>
                  <div className={`mobile_dropdown_menu ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>
                    <a href="/about-us/#chairman-section">Chairman's Message</a>
                    <a href="/about-us/#ourstory">Our Story</a>
                    <a href="/about-us/#vision">Vision & Mission</a>
                  </div>
                </li>
                
                <li className="mobile_nav_item">
                  <div href="productPage" className="mobile_nav_link" onClick={() => toggleDropdown('mobile-products')}>
                    Products
                    <span className={`mobile_dropdown_arrow ${activeDropdown === 'mobile-products' ? 'open' : ''}`}>▼</span>
                  </div>
                  <div className={`mobile_dropdown_menu ${activeDropdown === 'mobile-products' ? 'open' : ''}`}>
                    <a href="/skirtingProfile">Skirting & Profile</a>
                    <a href="/carpet">Carpets</a>
                    <a href="/flooring">Flooring</a>
                  </div>
                </li>
                
                <li className="mobile_nav_item">
                  <a href="/certificates" className="mobile_nav_link">Certifications</a>
                </li>
                
                <li className="mobile_nav_item">
                  <a href="/blogs" className="mobile_nav_link">Blogs</a>
                </li>
                
                <li className="mobile_nav_item">
                  <a href="/locateUs" className="mobile_nav_link">Locate Us</a>
                </li>
              </ul>
              
              <div className="mobile_action_buttons">
                <button className="mobile_action_button" onClick={() => window.open(brochure, '_blank')}>
                  <span className="button-icon">📄</span>
                  Brochure
                </button>
                <button className="mobile_action_button" onClick={() => setContactFormOpen(true)}>
                  <span className="button-icon">✉️</span>
                  Enquire
                </button>
                <button className="mobile_action_button phone" onClick={() => window.location.href = 'tel:9002690068'}>
                  <span className="button-icon">📞</span>
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;