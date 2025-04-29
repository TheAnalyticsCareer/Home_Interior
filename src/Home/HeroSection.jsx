

import React from 'react';
import './HeroSection.css';
import card1 from "./HomeImg/skirtingCard_3.webp";
import card2 from "./HomeImg/carptet card.webp";
import card3 from "./HomeImg/flooring card copy.webp";

const HeroSection = () => {
  return (
    // Outer section for the entire hero area (video + footer cards)
    <section className="outer_hero_section">

      {/* Main Hero Section containing the background video */}
      <div className="hero_section">
        {/* Background video playing automatically in a loop */}
        <video width="100%" height="100%" autoPlay loop muted playsInline>
          <source
            src="https://aluempire.gyanouspro.com/media/app-setting/banner.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Footer section below the hero video containing clickable cards */}
      <div className="hero_section_footer">

        {/* First footer item - Alu Home Interior */}
        <a
          href="/skirting"
          style={{ textDecoration: 'none', color: 'rgb(53, 56, 57)' }}
        >
          <div className="hero_section_footer_items">
            {/* Image for Alu Home Interior */}
            <img
              src={card1}
              alt="Alu Home Interior"
            />
            {/* Title and arrow icon for the card */}
            <div className="hero_section_footer_items_title">
              <h6 style={{ fontWeight: 600 }}>Skirting & Profile</h6>
              {/* Down arrow icon inside the card */}
              <div className="arrow_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3rem"
                  height="1.3rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Second footer item - uPVC Door & Window */}
        <a
          href="/carpet"
          style={{ textDecoration: 'none', color: 'rgb(53, 56, 57)' }}
        >
          <div className="hero_section_footer_items">
            {/* Image for uPVC Door & Window */}
            <img
              src={card2}
              alt="uPVC Door & Window"
            />
            {/* Title and arrow icon for the card */}
            <div className="hero_section_footer_items_title">
              <h6 style={{ fontWeight: 600 }}>Carpets</h6>
              {/* Down arrow icon inside the card */}
              <div className="arrow_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3rem"
                  height="1.3rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Third footer item - Commercial Partition System */}
        <a
          href="/flooring"
          style={{ textDecoration: 'none', color: 'rgb(53, 56, 57)' }}
        >
          <div className="hero_section_footer_items">
            {/* Image for Commercial Partition System */}
            <img
              src={card3}
              alt="Commercial Partition System"
            />
            {/* Title and arrow icon for the card */}
            <div className="hero_section_footer_items_title">
              <h6 style={{ fontWeight: 600 }}>Flooring</h6>
              {/* Down arrow icon inside the card */}
              <div className="arrow_div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3rem"
                  height="1.3rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>

      </div> {/* End of hero_section_footer */}
    </section>
  );
};

export default HeroSection;
