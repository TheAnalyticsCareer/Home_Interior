import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BlogSlider.css';

import img_1 from "./HomeImg/SKIRTING_BLOG_BANNER_2_copy.jpg"
import img_2 from "./HomeImg/Commercial_Front_Banner_copy.jpg"
import img_3 from "./HomeImg/Shower_Front_Banner_copy.jpg"
import img_4 from "./HomeImg/Shower_Front_Banner_copy.jpg"
import img_5 from "./HomeImg/Aluminium_door_front_Banner_copy.jpg"


const BlogSlider = () => {
  const blogs = [
    {
      id: 1,
      title: "Aluminium Skirting and LED Skirting for Modern Interiors",
      image: img_1,
      date: "09/10/2024",
      link: "/blog-details-page/aluminium-skirtings-and-led-skirtings"
    },
    {
      id: 2,
      title: "Commercial Aluminium Glass Partition Systems",
      image: img_2,
      date: "09/10/2024",
      link: "/blog-details-page/commercial-aluminium-glass-partition-systems"
    },
    {
      id: 3,
      title: "Aluminium Shower Cubicles",
      image: img_3,
      date: "09/10/2024",
      link: "/blog-details-page/aluminium-shower-cubicles"
    },
    {
      id: 4,
      title: "uPVC Doors and Windows",
      image: img_4,
      date: "09/10/2024",
      link: "/blog-details-page/upvc-door-window"
    },
    {
      id: 5,
      title: "Aluminium Door & Window",
      image: img_5,
      date: "09/10/2024",
      link: "/blog-details-page/aluminium-door-window"
    }
  ];

  return (
    <div className="blogs_slider_container">
      <div className="blog_heading">
        <h4>OUR RECENT NEWS</h4>
        <h3>Recent Blog</h3>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.blog-slider-next',
          prevEl: '.blog-slider-prev',
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="blog-slider"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="blog_card">
              <div className="blog_image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog_date">{blog.date}</div>
              </div>
              <div className="blog_content">
                <h5>{blog.title}</h5>
                <a href={blog.link} className="read_more_btn">
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        <div className="blog-slider-nav">
          <div className="blog-slider-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            </svg>
          </div>
          <div className="blog-slider-next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default BlogSlider;