import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Hook to detect when element is in viewport
import { motion, useAnimation } from 'framer-motion'; // Animation library components
import './AboutSection.css'; // Component-specific styles
import aboutImg from "./HomeImg/about_img.png" // Main about section image
import about_2 from "./HomeImg/about_2.png" // Secondary floating image
import about_3 from "./HomeImg/about_3.png" // Content row image
import about_4 from "./HomeImg/about_4.png" // Another content row image

const AboutSection = () => {
  // Animation controls for Framer Motion
  const controls = useAnimation();
  
  // Intersection Observer hook to detect when section is in view
  // Triggers when 20% of element is visible and can trigger multiple times
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Effect to trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible'); // Start show animation
    } else {
      controls.start('hidden'); // Start hide animation
    }
  }, [controls, inView]);

  // Animation variants for the container (staggered children animations)
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial hidden state
    visible: {
      opacity: 1, // Visible state
      transition: {
        staggerChildren: 0.2, // Delay between child animations
        delayChildren: 0.3 // Initial delay before animations start
      }
    }
  };

  // Animation variants for text/content items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Starts slightly below and invisible
    visible: {
      y: 0, // Moves to normal position
      opacity: 1, // Fades in
      transition: {
        duration: 0.6, // Animation duration
        ease: "easeOut" // Smooth easing
      }
    }
  };

  // Animation variants for main images
  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 }, // Starts slightly scaled down and invisible
    visible: {
      scale: 1, // Scales to normal size
      opacity: 1, // Fades in
      transition: {
        duration: 0.8, // Slightly longer duration for images
        ease: "easeOut"
      }
    }
  };

  // Animation variants for floating images (different entrance effect)
  const floatingImageVariants = {
    hidden: { x: 30, y: 30, opacity: 0 }, // Starts offset diagonally
    visible: {
      x: 0, // Moves to normal x position
      y: 0, // Moves to normal y position
      opacity: 1, // Fades in
      transition: {
        delay: 0.5, // Extra delay for staggered effect
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    // Main section container with intersection observer ref
    <section className="about_section" ref={ref}>
      {/* Left container with images - animated with Framer Motion */}
      <motion.div 
        className="about_left_container"
        initial="hidden" // Initial animation state
        animate={controls} // Animation controls
        variants={containerVariants} // Animation variants for container
      >
        {/* Main about image with scale animation */}
        <motion.div 
          className="about_left_image_container"
          variants={imageVariants}
        >
          <img
            src={aboutImg}
            alt="About ALU EMPIRE company showing products"
          />
        </motion.div>
        
        {/* Floating secondary image with different entrance animation */}
        <motion.div 
          className="about_left_floating_image"
          variants={floatingImageVariants}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
        >
          <img
            src={about_2}
            alt="Close-up of ALU EMPIRE window product"
          />
        </motion.div>
      </motion.div>

      {/* Right container with text content */}
      <motion.div 
        className="about_right_container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="about_right_innercontainer">
          {/* Section title with decorative spans */}
          <motion.h4 variants={itemVariants}>
            <span></span>About ALU EMPIRE<span></span>
            <span></span>
          </motion.h4>
          
          {/* Main heading */}
          <motion.h1 variants={itemVariants}>WE PROVIDE THE BEST</motion.h1>
          
          {/* Subheading */}
          <motion.h2 variants={itemVariants}>uPVC DOORS & WINDOWS</motion.h2>
          
          {/* First paragraph block */}
          <motion.div className="about_text_block" variants={itemVariants}>
            <p>
              Alu Empire provides a unique selection of premium uPVC, aluminum,
              and solid panel doors as well as windows and doors that are
              intended to improve the beauty of your house.
            </p>
          </motion.div>
          
          {/* Content row with text and image */}
          <motion.div className="about_content_row" variants={itemVariants}>
            <p>
              We offers a range of high-quality UPVC doors and windows designed
              to enhance your home's aesthetics and functionality—our
              customizable options to suit your unique preferences.
            </p>
            <motion.div 
              className="about_image_wrapper"
              whileHover={{ scale: 1.05 }} // Hover effect
            >
              <img
                src={about_3}
                alt="ALU EMPIRE door product example"
              />
            </motion.div>
          </motion.div>
          
          {/* Reversed content row (image on left, text on right) */}
          <motion.div className="about_content_row reverse" variants={itemVariants}>
            <motion.div 
              className="about_image_wrapper wide"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={about_4}
                alt="ALU EMPIRE window design elements"
              />
            </motion.div>
            <p>
              With an extensive range of customization options, Alu Empire
              Windows gives you the freedom to create custom doors that
              perfectly complement the aesthetic and style of your spaces at
              affordable uPVC doors price.
            </p>
          </motion.div>
          
          {/* Read More button with hover and tap animations */}
          <motion.div className="about_button_container" variants={itemVariants}>
            <a href="/about-us/">
              <motion.button 
                className="read_more_btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(250, 133, 61, 0.4)" // Glow effect
                }}
                whileTap={{ scale: 0.98 }} // Slight press effect
              >
                Read More
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;