
import React from 'react';
import './HomeServices.css';
import icon_1 from "./HomeImg/service_icon1.png"
import icon_2 from "./HomeImg/service_icon2.png"
import icon_3 from "./HomeImg/service_icon3.png"

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: "INSTALLATION",
      description: "Precision installation of a wide variety of windows and doors.",
      icon: icon_1
    },
    {
      id: 2,
      title: "REPAIR",
      description: "Quick and efficient repairs for damaged or malfunctioning windows.",
      icon:icon_2
    },
    {
      id: 3,
      title: "CUSTOMIZATION",
      description: "Install custom windows & doors to perfectly match your home.",
      icon:icon_3
    }
  ];

  return (
    <section className="home_service_section">
      <div className="home_service_container">
        <div className="service_header">
          <h4 className="service_subtitle">SERVICE MAKE YOU HAPPIER LIFE!</h4>
          <h3 className="service_title">Professional Window And Door Useful Services</h3>
        </div>
        
        <div className="services_grid">
          {services.map((service) => (
            <div key={service.id} className="service_card">
              <div className="service_icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h6 className="card_title">{service.title}</h6>
              <p className="card_text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;