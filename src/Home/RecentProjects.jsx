// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; 
// import { Pagination, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import './RecentProjects.css';

// import project_1 from "./HomeImg/Commercial_Partition_Project_3.jpg"
// import project_2 from "./HomeImg/Commercial_Partition_Project_2.jpg"
// import project_3 from "./HomeImg/Commercial_Cartition_System_RECENT_PROJECT__copy.jpg"
// import project_4 from "./HomeImg/RECENT_PROJECT_IMAGE_1.jpg"
// import project_5 from "./HomeImg/RECENT_PROJECT_IMAGE_copy.jpg"


// const RecentProjects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Commercial Partitions Project",
//       image: project_1
//     },
//     {
//       id: 2,
//       title: "Commercial Partitions Project",
//       image:project_2
//     },
//     {
//       id: 3,
//       title: "Commercial Partitions Project",
//       image: project_3
//     },
//     {
//       id: 4,
//       title: "Sector - 8 (Faridabad)",
//       image:project_4
//     },
//     {
//       id: 5,
//       title: "Sector - 30 Faridabad",
//       image: project_5
//     }
//   ];

//   return (
//     <section className="recent_project_section" id="recentproject">
//       <div className="section_header">
//         <h4 className="section_subtitle">Transform your space, transform your life.</h4>
//         <h3 className="section_title">RECENT PROJECT</h3>
//       </div>
      
//       <div className="recent_project_container">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//           className="project_swiper"
//         >
//           {projects.map((project) => (
//             <SwiperSlide key={project.id}>
//               <div className="recent_project">
//                 <div className="project_image">
//                   <img src={project.image} alt={project.title} />
//                 </div>
//                 <div className="project_title">
//                   <h4>{project.title}</h4>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
      
//       <div className="view_more_container">
//         <a href="/all-recent-project">
//           <button className="read_more_btn">Read More</button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default RecentProjects;















import React from 'react';  // Import React for creating components
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper core and slide components
import { Pagination, Autoplay } from 'swiper';       // Import Swiper modules for pagination and autoplay
import 'swiper/css';          // Base Swiper styles
import 'swiper/css/pagination';  // Pagination module styles
import 'swiper/css/autoplay';     // Autoplay module styles
import './RecentProjects.css';    // Custom styles for this component

// Import images for recent projects
import project_1 from "./HomeImg/Commercial_Partition_Project_3.jpg";
import project_2 from "./HomeImg/Commercial_Partition_Project_2.jpg";
import project_3 from "./HomeImg/Commercial_Cartition_System_RECENT_PROJECT__copy.jpg";
import project_4 from "./HomeImg/RECENT_PROJECT_IMAGE_1.jpg";
import project_5 from "./HomeImg/RECENT_PROJECT_IMAGE_copy.jpg";

const RecentProjects = () => {
  // Array of project objects with id, title, and image
  const projects = [
    { id: 1, title: "Commercial Partitions Project", image: project_1 },
    { id: 2, title: "Commercial Partitions Project", image: project_2 },
    { id: 3, title: "Commercial Partitions Project", image: project_3 },
    { id: 4, title: "Sector - 8 (Faridabad)", image: project_4 },
    { id: 5, title: "Sector - 30 Faridabad", image: project_5 }
  ];

  return (
    // Main section wrapper for the recent projects
    <section className="recent_project_section" id="recentproject">
      
      {/* Section header: subtitle and title */}
      <div className="section_header">
        {/* Subtitle text */}
        <h4 className="section_subtitle">
          Transform your space, transform your life.
        </h4>
        {/* Main title */}
        <h3 className="section_title">RECENT PROJECT</h3>
      </div>
      
      {/* Container for the Swiper carousel */}
      <div className="recent_project_container">
        <Swiper
          modules={[Pagination, Autoplay]}          // Enable pagination and autoplay
          spaceBetween={30}                         // Space between slides in px
          slidesPerView={1}                         // Number of slides to show at once
          pagination={{ clickable: true }}          // Allow clicking on pagination dots
          autoplay={{ delay: 3000, disableOnInteraction: false }}  // Auto-slide every 3s
          breakpoints={{                            // Responsive breakpoints
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
          }}
          className="project_swiper"               // Custom class for styling
        >
          {/* Loop through projects and render each as a SwiperSlide */}
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              {/* Single project card */}
              <div className="recent_project">
                
                {/* Project image container */}
                <div className="project_image">
                  <img src={project.image} alt={project.title} />
                </div>
                
                {/* Project title container */}
                <div className="project_title">
                  <h4>{project.title}</h4>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* "Read More" button linking to full project list */}
      <div className="view_more_container">
        <a href="/all-recent-project">
          <button className="read_more_btn">Read More</button>
        </a>
      </div>
      
    </section>
  );
};

export default RecentProjects;  // Export component to use in Home page
