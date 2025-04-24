import React from 'react';
import './NewLaunch.css';
import showerCubicleImg from "./HomeImg/Shower_Cubicle_Banner.jpg"

const NewLaunch = () => {
  return (
    <section className="new_launch_section">
      <div className="new_launch_header">
        <h4>
          <span className="orange-text">Newly Launched</span>
        </h4>
        <h3>SHOWER CUBICLE</h3>
      </div>
      <div className="new_launch_image_container">
        <img 
          src={showerCubicleImg}
          alt="Shower Cubicle" 
          className="new_launch_image"
        />
      </div>
    </section>
  );
};

export default NewLaunch;