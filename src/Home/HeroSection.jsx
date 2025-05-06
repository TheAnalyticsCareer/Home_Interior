// import React from 'react';
// import './HeroSection.css';
// import card1 from "./HomeImg/stick-on-skirting.jpg";
// import card2 from "./HomeImg/carpet.jpg";
// import card3 from "./HomeImg/flooring.jpg";

// const HeroSection = () => {
//   return (
//     <section className="hero-container">
//       {/* Video Background */}
//       <div className="video-container">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="hero-video"
//         >
//           <source
//             src="https://aluempire.gyanouspro.com/media/app-setting/banner.webm"
//             type="video/webm"
//           />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay with subtle gradient */}
//         <div className="video-overlay"></div>
//       </div>

//       {/* Product Cards - Redesigned */}
//       <div className="product-cards-container" >
//         {/* Card 1 */}
//         <a href="/skirting" className="product-card">
//           <div className="card-image-container">
//             <img
//               src={card1}
//               alt="Skirting & Profile"
//               className="card-image"
//             />
//             <div className="image-overlay"></div>
//           </div>
//           <div className="card-content">
//             <h3 style={{color:'black'}} className="card-title">Skirting & Profile</h3>
//             <div className="card-arrow">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.3rem"
//                 height="1.3rem"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#E3EED4"
//                   fillRule="evenodd"
//                   d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//         </a>

//         {/* Card 2 */}
//         <a href="/carpet" className="product-card">
//           <div className="card-image-container">
//             <img
//               src={card2}
//               alt="Carpets"
//               className="card-image"
//             />
//             <div className="image-overlay"></div>
//           </div>
//           <div className="card-content">
//             <h3 className="card-title">Carpets</h3>
//             <div className="card-arrow">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.3rem"
//                 height="1.3rem"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#E3EED4"
//                   fillRule="evenodd"
//                   d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//         </a>

//         {/* Card 3 */}
//         <a href="/flooring" className="product-card">
//           <div className="card-image-container">
//             <img
//               src={card3}
//               alt="Flooring"
//               className="card-image"
//             />
//             <div className="image-overlay"></div>
//           </div>
//           <div className="card-content">
//             <h3 className="card-title">Flooring</h3>
//             <div className="card-arrow">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1.3rem"
//                 height="1.3rem"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#E3EED4"
//                   fillRule="evenodd"
//                   d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect, useRef } from "react";
import "./SlideShow.css"; // You might not need this if styles are in HeroSection.css
import image1 from "./SlideImg/parker-tiles.jpg";
import image2 from "./SlideImg/2img.jpg";
import image3 from "./SlideImg/3img.jpg";
import "./HeroSection.css";
import card1 from "./HomeImg/stick-on-skirting.jpg";
import card2 from "./HomeImg/carpet.jpg";
import card3 from "./HomeImg/flooring.jpg";
import years from "./HomeImg/15+excellence.png";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const interval = 5000;

  const slides = [
    {
      src: image1,
      caption: {
        title: "Premium Flooring Solutions",
        description: "Discover our high-quality flooring products",
        buttonText: "View Products",
      },
    },
    {
      src: image2,
      caption: {
        title: "Modern Designs",
        description: "Latest trends in home and commercial flooring",
      },
    },
    {
      src: image3,
      caption: {
        title: "Expert Installation",
        description: "Professional installation services available",
        buttonText: "Get a Quote",
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero-container">
      {/* Slideshow Container */}
      <div
        className="slideshow-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        <div
          className="slides-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${slide.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                transition: "opacity 0.3s ease",
              }}
              aria-hidden={index !== currentIndex}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="nav-arrow prev-arrow"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className="nav-arrow next-arrow"
          onClick={goToNext}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      {/* Product Cards - Redesigned */}
      <div className="product-cards-container">
        {/* Card 1 */}
        <a href="/skirtingProfile" className="product-card">
          <div className="card-image-container">
            <img src={card1} alt="Skirting & Profile" className="card-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3 style={{ color: "black" }} className="card-title">
              Skirting & Profile
            </h3>
            <div className="card-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#E3EED4"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>

        {/* Card 2 */}
        <a href="/carpet" className="product-card">
          <div className="card-image-container">
            <img src={card2} alt="Carpets" className="card-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Carpets</h3>
            <div className="card-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#E3EED4"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>

        {/* Card 3 */}
        <a href="/flooring" className="product-card">
          <div className="card-image-container">
            <img src={card3} alt="Flooring" className="card-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Flooring</h3>
            <div className="card-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3rem"
                height="1.3rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#E3EED4"
                  fillRule="evenodd"
                  d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
      {/* 15+ Years Image - Moved outside the next arrow */}
      <div className="years-image-wrapper">
  <img src={years} alt="15+ Years Excellence" className="years-image" />
</div>


    </section>
  );
};

export default HeroSection;
