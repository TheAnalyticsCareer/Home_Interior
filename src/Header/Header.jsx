import React, { useState } from 'react';
import "./header.css"

const Header = () => {
  // State for managing dropdown menus in desktop view
  const [activeDropdown, setActiveDropdown] = useState(null);
  // State for managing mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dropdown menus in both desktop and mobile views
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* 
        Desktop Header Section 
        This section is visible on larger screens and hidden on mobile
      */}
      <div className="outer_desktop_header shadow-sm">
        <div className="inner_desktop_header">
          <header className="desktop_header">
            {/* Logo Container */}
            <div className="header_container_1">
              <div className="header_logo_container">
                <div style={{ backgroundColor: 'black', marginTop: '30px' }}>
                  {/* Main Logo - Links to home page */}
                  <a href="/">
                    <img
                      src="https://www.aluempire.com/wp-content/uploads/2022/06/ALU-EMPIRE-LOGO-WHITE.png"
                      alt="ALU Empire company logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation and Buttons Container */}
            <div className="header_container_2">
              {/* Action Buttons Section */}
              <div className="header_button_container">
                {/* Become a Dealer Button */}
                <a href="/dealer" style={{ textDecoration: 'none' }}>
                  <button className="header_button1">
                    <img
                      src="https://www.aluempire.com/assets/images/become-a-dealerIcon.png"
                      alt="Dealer program icon"
                    />
                    <span>Become a Dealer</span>
                  </button>
                </a>

                {/* Brochure Download Button */}
                <a
                  href="/assets/images/Brochure_alu_empire.pdf"
                  download=""
                  style={{ textDecoration: 'none' }}
                >
                  <button className="header_button1">
                    <img
                      src="https://www.aluempire.com/assets/images/Home/icons/brochure_icon.png"
                      alt="Download brochure icon"
                    />
                    <span>Brochure</span>
                  </button>
                </a>

                {/* Enquiry Button */}
                <button className="header_button1">
                  <img
                    src="https://www.aluempire.com/assets/images/Home/icons/enqury_icon.png"
                    alt="Make an enquiry icon"
                  />
                  <span>Enquire</span>
                </button>

                {/* Phone Contact Button */}
                <a href="tel:90026 90068" style={{ color: 'white', textDecoration: 'none' }}>
                  <button className="header_button2">
                    <img
                      src="https://www.aluempire.com/assets/images/Home/icons/header_phone_icon.png"
                      alt="Phone contact icon"
                    />
                    <span>90026 90068</span>
                  </button>
                </a>
              </div>

              {/* Main Navigation Menu */}
              <ul>
                {/* Home Link */}
                <li>
                  <a className="active" href="/">Home</a>
                </li>

                {/* About Us Dropdown Menu */}
                <li 
                  className="product_menu" 
                  onMouseEnter={() => toggleDropdown('about')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <a>
                    <div style={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontWeight: '600'
                    }}>
                      About Us
                      {/* Dropdown indicator icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="nonzero"
                          d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  {/* About Us Dropdown Content */}
                  <div className={`product_dropdown ${activeDropdown === 'about' ? 'show' : ''}`}>
                    <div className="innerproduct_dropdown">
                      <ul style={{ width: '100%' }}>
                        <a
                          href="/about-us/#chairman-section"
                          style={{
                            width: '100%',
                            padding: '0px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <li style={{ height: '100%', textTransform: 'capitalize' }}>
                            Chairman's Message
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="currentColor"
                                fillRule="nonzero"
                                d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                              ></path>
                            </svg>
                          </li>
                        </a>
                        <a
                          href="/about-us/#ourstory"
                          style={{
                            width: '100%',
                            padding: '0px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <li style={{ height: '100%', textTransform: 'capitalize' }}>
                            Our Story
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="currentColor"
                                fillRule="nonzero"
                                d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                              ></path>
                            </svg>
                          </li>
                        </a>
                        <a
                          href="/about-us/#vision-mission"
                          style={{
                            width: '100%',
                            padding: '0px',
                            textTransform: 'capitalize'
                          }}
                        >
                          <li style={{ height: '100%', textTransform: 'capitalize' }}>
                            Vision & Mission
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="currentColor"
                                fillRule="nonzero"
                                d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                              ></path>
                            </svg>
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Products Menu Item */}
                <li 
                  className="product_menu"
                  onMouseEnter={() => toggleDropdown('product')}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <a className="" href="/productPage">
                    <div style={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontWeight: '600'
                    }}>
                      Product
                    </div>
                  </a>
                </li>

                {/* Blogs Link */}
                <li>
                  <a className="" href="/blogs/">Blogs</a>
                </li>

                {/* Locate Us Link */}
                <li>
                  <a className="" href="/locateUs">Locate Us</a>
                </li>

                {/* Search Icon */}
                <li style={{ position: 'relative' }}>
                  <div className="outer_search_container">
                    <div className="search_container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.2rem"
                        height="1.2rem"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </header>
          {/* Spacer to account for fixed header */}
          <div className="desktop_header_spacer"></div>
        </div>
      </div>

      {/* 
        Mobile Header Section 
        This section is visible on smaller screens and hidden on desktop
      */}
      <div className="outer_mobile_header">
        <header className="mobile_header shadow-sm">
          {/* Mobile Logo */}
          <div className="mobile_header_logo_container">
            <div style={{ backgroundColor: 'black', marginTop: '30px' }}>
              <a href="/">
                <img
                  src="https://www.aluempire.com/wp-content/uploads/2022/06/ALU-EMPIRE-LOGO-WHITE.png"
                  alt="ALU Empire company logo for mobile"
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu Icons (Search and Hamburger) */}
          <div className="mobile_menu_container">
            <div>
              <div className="">
                {/* Search Icon for Mobile */}
                <div className="search_container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="m14.5 14.5l-4-4m-4 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Hamburger Menu Button - Toggles mobile menu */}
            <div className="menu_bnt" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.8em"
                height="1.8em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                ></path>
              </svg>
            </div>
          </div>
        </header>
        
        {/* 
          Mobile Menu Content 
          Slides in from the side when hamburger menu is clicked
        */}
        <div className={`mobile_menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile_menu_content">
            <ul>
              {/* Mobile Home Link */}
              <li>
                <a href="/">Home</a>
              </li>

              {/* Mobile About Us Dropdown */}
              <li className="mobile_dropdown">
                <div className="mobile_dropdown_toggle" onClick={() => toggleDropdown('mobile-about')}>
                  <span>About Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className={activeDropdown === 'mobile-about' ? 'rotate' : ''}
                  >
                    <path
                      fill="currentColor"
                      fillRule="nonzero"
                      d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                    ></path>
                  </svg>
                </div>
                <div className={`mobile_submenu ${activeDropdown === 'mobile-about' ? 'open' : ''}`}>
                  <ul>
                    <li>
                      <a href="/about-us/#chairman-message">Chairman's Message</a>
                    </li>
                    <li>
                      <a href="/about-us/#our-story">Our Story</a>
                    </li>
                    <li>
                      <a href="/about-us/#vision-&-mission">Vision & Mission</a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Mobile Products Dropdown */}
              <li className="mobile_dropdown">
                <div className="mobile_dropdown_toggle" onClick={() => toggleDropdown('mobile-product')}>
                  <span>Product</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className={activeDropdown === 'mobile-product' ? 'rotate' : ''}
                  >
                    <path
                      fill="currentColor"
                      fillRule="nonzero"
                      d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0"
                    ></path>
                  </svg>
                </div>
                <div className={`mobile_submenu ${activeDropdown === 'mobile-product' ? 'open' : ''}`}>
                  <ul>
                    <li>
                      <a href="/alu-home-interior">Alu Home Interior</a>
                    </li>
                    <li>
                      <a href="/upvc-door-and-window">uPVC Door & Window</a>
                    </li>
                    <li>
                      <a href="/commercial-partition-system">Commercial Partition System</a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Mobile Blogs Link */}
              <li>
                <a href="/blogs/">Blogs</a>
              </li>

              {/* Mobile Locate Us Link */}
              <li>
                <a href="/locate-us/">Locate Us</a>
              </li>
            </ul>

            {/* Mobile Action Buttons */}
            <div className="mobile_menu_buttons">
              <a href="/become-a-dealer/">
                <button className="header_button1">
                  <img
                    src="https://www.aluempire.com/assets/images/become-a-dealerIcon.png"
                    alt="Become a dealer icon for mobile"
                  />
                  <span>Become a Dealer</span>
                </button>
              </a>
              <a href="/assets/images/Brochure_alu_empire.pdf" download="">
                <button className="header_button1">
                  <img
                    src="https://www.aluempire.com/assets/images/Home/icons/brochure_icon.png"
                    alt="Download brochure icon for mobile"
                  />
                  <span>Brochure</span>
                </button>
              </a>
              <button className="header_button1">
                <img
                  src="https://www.aluempire.com/assets/images/Home/icons/enqury_icon.png"
                  alt="Make an enquiry icon for mobile"
                />
                <span>Enquire</span>
              </button>
              <a href="tel:90026 90068">
                <button className="header_button2">
                  <img
                    src="https://www.aluempire.com/assets/images/Home/icons/header_phone_icon.png"
                    alt="Phone contact icon for mobile"
                  />
                  <span>90026 90068</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;