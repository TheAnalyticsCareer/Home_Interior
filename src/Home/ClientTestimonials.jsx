// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './ClientTestimonials.css';

// import client_1 from "./HomeImg/WhatsApp_Image_1.jpeg"
// import client_2 from "./HomeImg/WhatsApp_Image_2.jpeg"
// import client_3 from "./HomeImg/WhatsApp_Image_3.jpeg"

// const ClientTestimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Megha",
//       role: "Human Resource Manager",
//       review: "I recently purchased this door & I couldn't be more pleased with my choice! The craftsmanship is with solid construction that feels sturdy & secure.",
//       image: client_2
//     },
//     {
//       id: 2,
//       name: "Raghav",
//       role: "Doctor",
//       review: "I coed with all the necessary hardware for the door. I would recommend this door to anyone looking for a reliable & stylish addition to their home!",
//       image:client_1
//     },
//     {
//       id: 3,
//       name: "Seema",
//       role: "Desktop Engineer",
//       review: "No creaks or sticking, just seamless experience every time. Installation was straightforward & the door arrived well-packaged with necessary hardware.",
//       image:client_3
//     }
//   ];

//   return (
//     <section className="client-testimonials">
//       <div className="testimonials-header">
//         <div className="header-content">
//           <h3 className="highlight-text">OUR HAPPY</h3>
//           <h3 className="normal-text">CLIENTS</h3>
//         </div>
//       </div>
      
//       <div className="testimonials-container">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             nextEl: '.testimonial-next',
//             prevEl: '.testimonial-prev',
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//             },
//           }}
//           className="testimonial-slider"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className="testimonial-card">
//                 <div className="client-avatar">
//                   <img src={testimonial.image} alt={testimonial.name} />
//                 </div>
//                 <p className="client-review">{testimonial.review}</p>
//                 <div className="client-info">
//                   <p className="client-name">{testimonial.name}</p>
//                   <p className="client-role">{testimonial.role}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
          
//           <div className="testimonial-navigation">
//             <div className="testimonial-prev">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//                 <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
//               </svg>
//             </div>
//             <div className="testimonial-next">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//                 <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
//               </svg>
//             </div>
//           </div>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default ClientTestimonials;






import React from 'react';
// Import Swiper components for the testimonial carousel
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules for navigation, pagination dots, and auto-play features
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper CSS styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import component-specific styles
import './ClientTestimonials.css';

// Import client testimonial images
import client_1 from "./HomeImg/WhatsApp_Image_1.jpeg"
import client_2 from "./HomeImg/WhatsApp_Image_2.jpeg"
import client_3 from "./HomeImg/WhatsApp_Image_3.jpeg"

const ClientTestimonials = () => {
  // Array containing all testimonial data (name, role, review, image)
  const testimonials = [
    {
      id: 1,
      name: "Megha",
      role: "Human Resource Manager",
      review: "I recently purchased this door & I couldn't be more pleased with my choice! The craftsmanship is with solid construction that feels sturdy & secure.",
      image: client_2
    },
    {
      id: 2,
      name: "Raghav",
      role: "Doctor",
      review: "I coed with all the necessary hardware for the door. I would recommend this door to anyone looking for a reliable & stylish addition to their home!",
      image: client_1
    },
    {
      id: 3,
      name: "Seema",
      role: "Desktop Engineer",
      review: "No creaks or sticking, just seamless experience every time. Installation was straightforward & the door arrived well-packaged with necessary hardware.",
      image: client_3
    }
  ];

  return (
    // Main section container for testimonials
    <section className="client-testimonials">
      {/* Section header with "OUR HAPPY CLIENTS" text */}
      <div className="testimonials-header">
        <div className="header-content">
          <h3 className="highlight-text">OUR HAPPY</h3> {/* Styled differently for emphasis */}
          <h3 className="normal-text">CLIENTS</h3>
        </div>
      </div>
      
      {/* Container for the testimonial carousel */}
      <div className="testimonials-container">
        {/* Swiper carousel component with multiple configuration options */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Enabled Swiper features
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default: 1 slide visible on mobile
          loop={true} // Infinite loop
          autoplay={{
            delay: 5000, // Auto-rotate every 5 seconds
            disableOnInteraction: false, // Continue auto-play after user interaction
          }}
          navigation={{
            nextEl: '.testimonial-next', // Custom next button selector
            prevEl: '.testimonial-prev', // Custom previous button selector
          }}
          pagination={{
            clickable: true, // Allow clicking pagination dots to navigate
          }}
          // Responsive breakpoints for different screen sizes
          breakpoints={{
            768: { // Tablet view
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: { // Desktop view
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="testimonial-slider"
        >
          {/* Map through testimonials array to create slides */}
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {/* Individual testimonial card */}
              <div className="testimonial-card">
                {/* Client avatar/image container */}
                <div className="client-avatar">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}, ${testimonial.role}`} 
                  />
                </div>
                {/* Client review text */}
                <p className="client-review">{testimonial.review}</p>
                {/* Container for client name and role */}
                <div className="client-info">
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-role">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom navigation arrows */}
          <div className="testimonial-navigation">
            {/* Previous arrow button */}
            <div className="testimonial-prev">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
            </div>
            {/* Next arrow button */}
            <div className="testimonial-next">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientTestimonials;