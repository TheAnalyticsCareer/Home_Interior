// import React from 'react';  // Import React for creating components
// import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper core and slide components
// import { Pagination, Autoplay } from 'swiper';       // Import Swiper modules for pagination and autoplay
// import 'swiper/css';          // Base Swiper styles
// import 'swiper/css/pagination';  // Pagination module styles
// import 'swiper/css/autoplay';     // Autoplay module styles
// import './RecentProjects.css';    // Custom styles for this component

// // Import images for recent projects
// import project_1 from "./HomeImg/Commercial_Partition_Project_3.jpg";
// import project_2 from "./HomeImg/Commercial_Partition_Project_2.jpg";
// import project_3 from "./HomeImg/Commercial_Cartition_System_RECENT_PROJECT__copy.jpg";
// import project_4 from "./HomeImg/RECENT_PROJECT_IMAGE_1.jpg";
// import project_5 from "./HomeImg/RECENT_PROJECT_IMAGE_copy.jpg";

// const RecentProjects = () => {
//   // Array of project objects with id, title, and image
//   const projects = [
//     { id: 1, title: "Commercial Partitions Project", image: project_1 },
//     { id: 2, title: "Commercial Partitions Project", image: project_2 },
//     { id: 3, title: "Commercial Partitions Project", image: project_3 },
//     { id: 4, title: "Sector - 8 (Faridabad)", image: project_4 },
//     { id: 5, title: "Sector - 30 Faridabad", image: project_5 }
//   ];

//   return (
//     // Main section wrapper for the recent projects
//     <section className="recent_project_section" id="recentproject">
      
//       {/* Section header: subtitle and title */}
//       <div className="section_header">
//         {/* Subtitle text */}
//         <h4 className="section_subtitle">
//           Transform your space, transform your life.
//         </h4>
//         {/* Main title */}
//         <h3 className="section_title">RECENT PROJECT</h3>
//       </div>
      
//       {/* Container for the Swiper carousel */}
//       <div className="recent_project_container">
//         <Swiper
//           modules={[Pagination, Autoplay]}          // Enable pagination and autoplay
//           spaceBetween={30}                         // Space between slides in px
//           slidesPerView={1}                         // Number of slides to show at once
//           pagination={{ clickable: true }}          // Allow clicking on pagination dots
//           autoplay={{ delay: 3000, disableOnInteraction: false }}  // Auto-slide every 3s
//           breakpoints={{                            // Responsive breakpoints
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 30 }
//           }}
//           className="project_swiper"               // Custom class for styling
//         >
//           {/* Loop through projects and render each as a SwiperSlide */}
//           {projects.map((project) => (
//             <SwiperSlide key={project.id}>
//               {/* Single project card */}
//               <div className="recent_project">
                
//                 {/* Project image container */}
//                 <div className="project_image">
//                   <img src={project.image} alt={project.title} />
//                 </div>
                
//                 {/* Project title container */}
//                 <div className="project_title">
//                   <h4>{project.title}</h4>
//                 </div>
                
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
      
//       {/* "Read More" button linking to full project list */}
//       <div className="view_more_container">
//         <a href="/all-recent-project">
//           <button className="read_more_btn">Read More</button>
//         </a>
//       </div>
      
//     </section>
//   );
// };

// export default RecentProjects;  // Export component to use in Home page












import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './RecentProjects.css';
import project_1 from "./HomeImg/p1.jpg";
import project_2 from "./HomeImg/p2.png";
import project_3 from "./HomeImg/p3.jpg";
import project_4 from "./HomeImg/p4.jpg";
import project_5 from "./HomeImg/p5.jpg";

SwiperCore.use([Pagination, Autoplay, Navigation]);


const RecentProjects = () => {
  const projects = [
    { id: 1, title: "Wood & Composites", image: project_1 },
    { id: 2, title: "Hospitality & Banquet Carpet", image: project_2 },
    { id: 3, title: "Wall Covering", image: project_3 },
    { id: 4, title: "Laminate Wooden Flooring", image: project_4 },
    { id: 5, title: "Modular Carpet Tiles", image: project_5 }
  ];

  const swiperRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="projects-section" style={{ backgroundColor: ' #fafafa ' }} id="recentproject">
      <motion.div 
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h3 className="section-title" style={{ color: '#0F2A1D' }}>RECENT PROJECTS</h3>
          <h4 className="section-subtitle" style={{ color: '#61CE70' }}>
            Transform your space, transform your life.
          </h4>
        </motion.div>

        <motion.div className="swiper-container" variants={itemVariants}>
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active'
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="project-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div 
                  className="project-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                    />
                    <div className="image-overlay" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)  ' }}></div>
                  </div>
                  <div className="project-title" style={{ backgroundColor: 'grey' }}>
                    <h4 style={{ color: '#E3EED4' }}>{project.title}</h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-controls">
            <div className="swiper-button-prev" style={{ color: '#0F2A1D' }}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg></div>
            <div className="custom-pagination"></div>
            <div className="swiper-button-next" style={{ color: '#0F2A1D' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg></div>
          </div>
        </motion.div>

        <motion.div className="view-more-container" variants={itemVariants}>
          <a href="/productPage" className="view-more-link">
            <motion.button 
              className="view-more-btn"
              style={{ 
                backgroundColor: 'red',
                color: '#E3EED4'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'grey',
                boxShadow: '0 8px 20px rgba(15, 42, 29, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RecentProjects;