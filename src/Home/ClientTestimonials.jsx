


import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import './ClientTestimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



import client_1 from "./HomeImg/user.jpg";
import client_2 from "./HomeImg/user.jpg";
import client_3 from "./HomeImg/user.jpg";

SwiperCore.use([Pagination, Autoplay, Navigation]);


const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
   
    review: "AIDF GROUP delivers unmatched craftsmanship and quality. Their wooden flooring brought warmth and elegance to my client’s home — highly recommended for anyone serious about aesthetics and durability.",
    image: client_1,
  },
  {
    id: 2,
    name: "Pooja Mehta",

    review: "From carpet tiles to vinyl flooring, every product from AIDF speaks volumes about premium construction and thoughtful design. Their team provided excellent support throughout the project lifecycle.",
    image: client_2,
  },
  {
    id: 3,
    name: "Karan Verma",
  
    review: "I’ve worked with AIDF GROUP for over 3 years. Their consistent quality, timely delivery, and customizable options make them my preferred partner for high-end commercial and residential projects.",
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