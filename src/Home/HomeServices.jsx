
// import React from 'react';
// import './HomeServices.css';
// import icon_1 from "./HomeImg/service_icon1.png"
// import icon_2 from "./HomeImg/service_icon2.png"
// import icon_3 from "./HomeImg/service_icon3.png"

// const HomeServices = () => {
//   const services = [
//     {
//       id: 1,
//       title: "INSTALLATION",
//       description: "Precision installation of a wide variety of windows and doors.",
//       icon: icon_1
//     },
//     {
//       id: 2,
//       title: "REPAIR",
//       description: "Quick and efficient repairs for damaged or malfunctioning windows.",
//       icon:icon_2
//     },
//     {
//       id: 3,
//       title: "CUSTOMIZATION",
//       description: "Install custom windows & doors to perfectly match your home.",
//       icon:icon_3
//     }
//   ];

//   return (
//     <section className="home_service_section">
//       <div className="home_service_container">
//         <div className="service_header">
//           <h4 className="service_subtitle">SERVICE MAKE YOU HAPPIER LIFE!</h4>
//           <h3 className="service_title">Professional Window And Door Useful Services</h3>
//         </div>
        
//         <div className="services_grid">
//           {services.map((service) => (
//             <div key={service.id} className="service_card">
//               <div className="service_icon">
//                 <img src={service.icon} alt={service.title} />
//               </div>
//               <h6 className="card_title">{service.title}</h6>
//               <p className="card_text">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeServices;











import React from 'react';  
import './HomeServices.css';  // Import custom styles for this component
import icon_1 from "./HomeImg/service_icon1.png";  // Icon for Installation service
import icon_2 from "./HomeImg/service_icon2.png";  // Icon for Repair service
import icon_3 from "./HomeImg/service_icon3.png";  // Icon for Customization service

// HomeServices component displays a list of service cards on the homepage
const HomeServices = () => {
  // Array of service objects to display
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
      icon: icon_2
    },
    {
      id: 3,
      title: "CUSTOMIZATION",
      description: "Install custom windows & doors to perfectly match your home.",
      icon: icon_3
    }
  ];

  return (
    // Main section wrapper for home services
    <section className="home_service_section">
      
      {/* Container to center and constrain the content width */}
      <div className="home_service_container">
        
        {/* Header of the services section */}
        <div className="service_header">
          {/* Subtitle above the main title */}
          <h4 className="service_subtitle">
            SERVICE MAKE YOU HAPPIER LIFE!
          </h4>
          {/* Main title of the section */}
          <h3 className="service_title">
            Professional Window And Door Useful Services
          </h3>
        </div>
        
        {/* Grid layout for service cards */}
        <div className="services_grid">
          {services.map((service) => (
            // Individual service card
            <div key={service.id} className="service_card">
              
              {/* Icon container */}
              <div className="service_icon">
                {/* Service icon image */}
                <img src={service.icon} alt={service.title} />
              </div>
              
              {/* Service title */}
              <h6 className="card_title">{service.title}</h6>
              
              {/* Service description text */}
              <p className="card_text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;  // Export component for use in Home page
