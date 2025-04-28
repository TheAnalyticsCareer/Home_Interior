// import React from 'react';
// import './NewLaunch.css';
// import showerCubicleImg from "./HomeImg/Shower_Cubicle_Banner.jpg"

// const NewLaunch = () => {
//   return (
//     <section className="new_launch_section">
//       <div className="new_launch_header">
//         <h4>
//           <span className="orange-text">Newly Launched</span>
//         </h4>
//         <h3>SHOWER CUBICLE</h3>
//       </div>
//       <div className="new_launch_image_container">
//         <img 
//           src={showerCubicleImg}
//           alt="Shower Cubicle" 
//           className="new_launch_image"
//         />
//       </div>
//     </section>
//   );
// };

// export default NewLaunch;














import React from 'react';  // Import React library for building UI components
import './NewLaunch.css';    // Import custom styles for this component
import showerCubicleImg from "./HomeImg/Shower_Cubicle_Banner.jpg";  // Import the banner image for the new launch

const NewLaunch = () => {
  return (
    // Main section wrapper for the New Launch component
    <section className="new_launch_section">
      
      {/* Header container holding the subheading and main title */}
      <div className="new_launch_header">
        
        {/* Subheading element */}
        <h4>
          {/* Highlighted text for emphasis */}
          <span className="orange-text">Newly Launched</span>
        </h4>
        
        {/* Main title of the new product */}
        <h3>SHOWER CUBICLE</h3>
      </div>

      {/* Image container for displaying the product banner */}
      <div className="new_launch_image_container">
        {/* Product image */}
        <img
          src={showerCubicleImg}
          alt="Shower Cubicle"
          className="new_launch_image"
        />
      </div>
    </section>
  );
};

export default NewLaunch;  // Export the component so it can be used elsewhere in the app
