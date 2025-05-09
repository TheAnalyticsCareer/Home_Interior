// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Import all customer images
// import customer1 from "./customersImg/Screenshot 2025-04-30 124830.png";
// import customer2 from "./customersImg/Screenshot 2025-04-30 124853.png";
// import customer3 from "./customersImg/Screenshot 2025-04-30 124905.png";
// import customer4 from "./customersImg/Screenshot 2025-04-30 124920.png";
// import customer5 from "./customersImg/Screenshot 2025-04-30 124932.png";
// import customer6 from "./customersImg/Screenshot 2025-04-30 124944.png";
// import customer7 from "./customersImg/Screenshot 2025-04-30 124955.png";
// import customer8 from "./customersImg/Screenshot 2025-04-30 125026.png";
// import customer9 from "./customersImg/Screenshot 2025-04-30 125036.png";
// import customer10 from "./customersImg/Screenshot 2025-04-30 125111.png";
// import customer11 from "./customersImg/Screenshot 2025-04-30 125139.png";
// import customer12 from "./customersImg/Screenshot 2025-04-30 125152.png";
// import customer13 from "./customersImg/Screenshot 2025-04-30 125213.png";
// import customer14 from "./customersImg/Screenshot 2025-04-30 125228.png";
// import customer15 from "./customersImg/Screenshot 2025-04-30 125241.png";
// import customer16 from "./customersImg/Screenshot 2025-04-30 125252.png";
// import customer17 from "./customersImg/Screenshot 2025-04-30 125302.png";
// import customer18 from "./customersImg/Screenshot 2025-04-30 125315.png";
// import customer19 from "./customersImg/Screenshot 2025-04-30 125332.png";
// import customer20 from "./customersImg/Screenshot 2025-04-30 125350.png";
// import customer21 from "./customersImg/Screenshot 2025-04-30 125412.png";
// import customer22 from "./customersImg/Screenshot 2025-04-30 125430.png";

// const Customer = () => {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 800,
//       slidesToShow: 6,
//       slidesToScroll: 3,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       cssEase: "ease-in-out",
//       pauseOnHover: true,
//       arrows: false,
//       responsive: [
//         {
//           breakpoint: 1280,
//           settings: {
//             slidesToShow: 5,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 640,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };

//     const customers = [
//       customer1, customer2, customer3, customer4, customer5,
//       customer6, customer7, customer8, customer9, customer10,
//       customer11, customer12, customer13, customer14, customer15,
//       customer16, customer17, customer18, customer19, customer20,
//       customer21, customer22
//     ];

//     return (
//       <section className="py-20 bg-gray-50">
//         <div className="mx-auto px-4 max-w-7xl">
//           <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//             OUR VALUED CUSTOMERS
//           </h2>

//           <div className="relative px-10">
//             <Slider {...settings}>
//               {customers.map((customer, index) => (
//                 <div key={index} className="px-2 focus:outline-none h-full">
//                   <div className="flex items-center justify-center h-32">
//                     <img
//                       src={customer}
//                       alt={`Customer Logo ${index + 1}`}
//                       className="max-h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
//                       style={{ maxWidth: '160px', width: 'auto', height: 'auto' }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   export default Customer;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import customer1 from "./customersImg/BNP-Paribas-Emblem.png";
import customer2 from "./customersImg/Siemens-Logo.png";
import customer3 from "./customersImg/bizzhub.jpg";
import customer4 from "./customersImg/danube.png";
import customer5 from "./customersImg/kpmg.jfif";
import customer6 from "./customersImg/ford.png";
import customer7 from "./customersImg/green park.jpeg";
import customer8 from "./customersImg/hyatt.png";
import customer9 from "./customersImg/infosys.jpg";
import customer10 from "./customersImg/leed.png";
import customer11 from "./customersImg/lemon tree hotels.png";
import customer12 from "./customersImg/sebi.png";
import customer13 from "./customersImg/tata.png";
import customer14 from "./customersImg/tvs.jpg";
import customer15 from "./customersImg/welspun.jpg";
import customer16 from "./customersImg/marriott.jfif";
import customer17 from "./customersImg/micron.jfif";
import customer18 from "./customersImg/novotels.jfif";
import customer19 from "./customersImg/orchid.jfif";
import customer20 from "./customersImg/the cowrks.jfif";
import customer21 from "./customersImg/wipro.jfif";
import customer22 from "./customersImg/wns.jfif";


const Customer = () => {
  const settings = {
    dots: false, // changed from true to false
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };
  

  const customers = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7,
    customer8,
    customer9,
    customer10,
    customer11,
    customer12,
    customer13,
    customer14,
    customer15,
    customer16,
    customer17,
    customer18,
    customer19,
    customer20,
    customer21,
    customer22
  ];

  return (
    <section style={{paddingTop:'30px', paddingBottom:'30px'}}>
        <h2 style={{color:'#61CE70'}} className="text-5xl font-extrabold text-center mb-20 text-gray-800 ">
            OUR VALUED CUSTOMERS
          </h2>

<div style={{paddingTop:'30px', paddingBottom:'30px'}}></div>

      <div  className="py-28 bg-gray-50 ">
        <div className="mx-auto px-4 max-w-7xl">
          

          <div className="relative px-6">
            <Slider {...settings}>
              {customers.map((customer, index) => (
                <div key={index} className="px-4 focus:outline-none">
                  <div className="flex items-center justify-center h-44">
                    <img
                      src={customer}
                      alt={`Customer Logo ${index + 1}`}
                      className="max-h-28 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        maxWidth: "160px",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
