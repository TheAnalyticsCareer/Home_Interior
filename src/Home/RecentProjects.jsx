import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './RecentProjects.css';

import project_1 from "./HomeImg/Commercial_Partition_Project_3.jpg"
import project_2 from "./HomeImg/Commercial_Partition_Project_2.jpg"
import project_3 from "./HomeImg/Commercial_Cartition_System_RECENT_PROJECT__copy.jpg"
import project_4 from "./HomeImg/RECENT_PROJECT_IMAGE_1.jpg"
import project_5 from "./HomeImg/RECENT_PROJECT_IMAGE_copy.jpg"


const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Commercial Partitions Project",
      image: project_1
    },
    {
      id: 2,
      title: "Commercial Partitions Project",
      image:project_2
    },
    {
      id: 3,
      title: "Commercial Partitions Project",
      image: project_3
    },
    {
      id: 4,
      title: "Sector - 8 (Faridabad)",
      image:project_4
    },
    {
      id: 5,
      title: "Sector - 30 Faridabad",
      image: project_5
    }
  ];

  return (
    <section className="recent_project_section" id="recentproject">
      <div className="section_header">
        <h4 className="section_subtitle">Transform your space, transform your life.</h4>
        <h3 className="section_title">RECENT PROJECT</h3>
      </div>
      
      <div className="recent_project_container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="project_swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="recent_project">
                <div className="project_image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project_title">
                  <h4>{project.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="view_more_container">
        <a href="/all-recent-project">
          <button className="read_more_btn">Read More</button>
        </a>
      </div>
    </section>
  );
};

export default RecentProjects;