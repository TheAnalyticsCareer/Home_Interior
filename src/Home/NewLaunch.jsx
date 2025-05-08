// import React from 'react'
// import img1 from "./NewLaunchImg/project-1.jpeg"
// import img2 from "./NewLaunchImg/project-2.jpeg"
// import img3 from "./NewLaunchImg/project-3.jpeg"
// import img4 from "./NewLaunchImg/project-4.jpeg"
// import img5 from "./NewLaunchImg/project-5.jpeg"
// import img6 from "./NewLaunchImg/project-6.jpeg"

// const NewLaunch = () => {
//   return (
//     <>
      
//     </>
//   )
// }

// export default NewLaunch







// import { useState, useEffect, useRef } from "react"
// import img1 from "./NewLaunchImg/project-1.jpeg"
// import img2 from "./NewLaunchImg/project-2.jpeg"
// import img3 from "./NewLaunchImg/project-3.jpeg"
// import img4 from "./NewLaunchImg/project-4.jpeg"
// import img5 from "./NewLaunchImg/project-5.jpeg"
// import img6 from "./NewLaunchImg/project-6.jpeg"
// import "./NewLaunch.css"

// const NewLaunch = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isPaused, setIsPaused] = useState(false)
//   const totalSlides = 6
//   const autoPlayInterval = 5000 // 5 seconds
//   const timerRef = useRef(null)

//   const images = [img1, img2, img3, img4, img5, img6]

//   // Function to go to next slide
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
//   }

//   // Function to go to previous slide
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
//   }

//   // Function to go to a specific slide
//   const goToSlide = (index) => {
//     setCurrentSlide(index)
//   }

//   // Set up auto-play
//   useEffect(() => {
//     if (!isPaused) {
//       timerRef.current = setTimeout(() => {
//         nextSlide()
//       }, autoPlayInterval)
//     }

//     // Cleanup function to clear the timeout when component unmounts or when currentSlide changes
//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current)
//       }
//     }
//   }, [currentSlide, isPaused])

//   // Pause auto-play when user interacts with carousel
//   const handleMouseEnter = () => {
//     setIsPaused(true)
//   }

//   // Resume auto-play when user stops interacting
//   const handleMouseLeave = () => {
//     setIsPaused(false)
//   }

//   return (
//     <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//         {images.map((image, index) => (
//           <div className="carousel-slide" key={index}>
//             <img src={image || "/placeholder.svg"} alt={`Project ${index + 1}`} className="carousel-image" />
//             <div className="slide-content">
//               <h2>Project {index + 1}</h2>
//               <p>Discover our latest architectural innovations</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button className="carousel-button prev-button" onClick={prevSlide} aria-label="Previous slide">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <polyline points="15 18 9 12 15 6"></polyline>
//         </svg>
//       </button>

//       <button className="carousel-button next-button" onClick={nextSlide} aria-label="Next slide">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <polyline points="9 18 15 12 9 6"></polyline>
//         </svg>
//       </button>

//       {/* Indicator Dots */}
//       <div className="carousel-indicators">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             className={`indicator-dot ${currentSlide === index ? "active" : ""}`}
//             onClick={() => goToSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default NewLaunch







import { useState, useEffect, useRef } from "react";
import img1 from "./NewLaunchImg/ULTRA- Glass Partition.jpg";
import img2 from "./NewLaunchImg/ULTRA STRONG- Glass Partition.jpg";
import img3 from "./NewLaunchImg/ultra-max.jpg";
import img4 from "./NewLaunchImg/project-4.jpeg";
import img5 from "./NewLaunchImg/STILE DOORS- Glass Partition.webp";
import img6 from "./NewLaunchImg/Oak Walnut Art Tiles.webp";
import "./NewLaunch.css";

const NewLaunch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 6;
  const autoPlayInterval = 5000; // 5 seconds
  const timerRef = useRef(null);

  const projects = [
    { id: 1, image: img1, title: "ULTRA- Glass Partition", location: "Bangalore" },
    { id: 2, image: img2, title: "ULTRA STRONG- Glass Partition", location: "Mumbai" },
    { id: 3, image: img3, title: "ULTRA MAX- Glass Partition", location: "Goa" },
    { id: 4, image: img4, title: "Aluminium Glass Partition", location: "Pune" },
    { id: 5, image: img5, title: "STILE DOORS- Glass Partition", location: "Delhi" },
    { id: 6, image: img6, title: "Oak Walnut Art Tiles", location: "Dehradun" },
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Set up auto-play
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  // Pause auto-play when user interacts with carousel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Resume auto-play when user stops interacting
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="new-launch-section">
      <div className="section-header">
        <h2 className="section-title"> OUR NEWLY LAUNCHED PROJECTS </h2>
        <p className="section-subtitle" style={{ color: "#61CE70" }}>
          Discover exceptional living spaces crafted with precision and elegance
        </p>
      </div>

      <div
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div className="carousel-slide" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="carousel-image"
              />
              <div className="slide-content">
                <div className="content-wrapper">
                  <span className="project-badge">New Launch</span>
                  <h2>{project.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="carousel-button prev-button"
          onClick={prevSlide}
          aria-label="Previous slide"
        > 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          
        </button> 

        <button
          className="carousel-button next-button"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

       
      </div>
    </section>
  );
};

export default NewLaunch;