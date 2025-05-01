


import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import './ClientTestimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



import client_1 from "./HomeImg/WhatsApp_Image_1.jpeg";
import client_2 from "./HomeImg/WhatsApp_Image_2.jpeg";
import client_3 from "./HomeImg/WhatsApp_Image_3.jpeg";

SwiperCore.use([Pagination, Autoplay, Navigation]);


const testimonials = [
  {
    id: 1,
    name: "Megha",
    role: "Human Resource Manager",
    review: "I recently purchased this door & I couldn't be more pleased with my choice! The craftsmanship is solid with construction that feels sturdy & secure.",
    image: client_2,
  },
  {
    id: 2,
    name: "Raghav",
    role: "Doctor",
    review: "Came with all necessary hardware. I would recommend this door to anyone looking for a reliable & stylish addition to their home!",
    image: client_1,
  },
  {
    id: 3,
    name: "Seema",
    role: "Desktop Engineer",
    review: "No creaks or sticking, just seamless experience every time. Installation was straightforward & the door arrived well-packaged.",
    image: client_3,
  },
];

const ClientTestimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2><span>Our Happy</span> Clients</h2>
          <p>Here's what our valued customers have to say</p>
        </div>

        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map(({ id, name, role, review, image }) => (
              <SwiperSlide key={id}>
                <div className="testimonial-card">
                  <img className="client-img" src={image} alt={name} />
                  <p style={{color:'black'}} className="client-review">“{review}”</p>
                  <div className="client-meta">
                    <h4>{name}</h4>
                    <p style={{color:'red'}} >{role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>

          {/* Custom Pagination */}
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;