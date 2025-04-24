import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './AboutSection.css';
import aboutImg from "./HomeImg/about_img.png"
import about_2 from "./HomeImg/about_2.png"
import about_3 from "./HomeImg/about_3.png"
import about_4 from "./HomeImg/about_4.png"

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingImageVariants = {
    hidden: { x: 30, y: 30, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about_section" ref={ref}>
      <motion.div 
        className="about_left_container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div 
          className="about_left_image_container"
          variants={imageVariants}
        >
          <img
            src={aboutImg}
            alt="about alu empire"
          />
        </motion.div>
        <motion.div 
          className="about_left_floating_image"
          variants={floatingImageVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={about_2}
            alt="about alu empire images"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="about_right_container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="about_right_innercontainer">
          <motion.h4 variants={itemVariants}>
            <span></span>About ALU EMPIRE<span></span>
            <span></span>
          </motion.h4>
          <motion.h1 variants={itemVariants}>WE PROVIDE THE BEST</motion.h1>
          <motion.h2 variants={itemVariants}>uPVC DOORS & WINDOWS</motion.h2>
          
          <motion.div className="about_text_block" variants={itemVariants}>
            <p>
              Alu Empire provides a unique selection of premium uPVC, aluminum,
              and solid panel doors as well as windows and doors that are
              intended to improve the beauty of your house.
            </p>
          </motion.div>
          
          <motion.div className="about_content_row" variants={itemVariants}>
            <p>
              We offers a range of high-quality UPVC doors and windows designed
              to enhance your home's aesthetics and functionality—our
              customizable options to suit your unique preferences.
            </p>
            <motion.div 
              className="about_image_wrapper"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={about_3}
                alt="about alu empire door"
              />
            </motion.div>
          </motion.div>
          
          <motion.div className="about_content_row reverse" variants={itemVariants}>
            <motion.div 
              className="about_image_wrapper wide"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={about_4}
                alt="design elements"
              />
            </motion.div>
            <p>
              With an extensive range of customization options, Alu Empire
              Windows gives you the freedom to create custom doors that
              perfectly complement the aesthetic and style of your spaces at
              affordable uPVC doors price.
            </p>
          </motion.div>
          
          <motion.div className="about_button_container" variants={itemVariants}>
            <a href="/about-us/">
              <motion.button 
                className="read_more_btn"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(250, 133, 61, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
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