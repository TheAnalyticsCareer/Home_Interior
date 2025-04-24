import React from 'react';
import './HeroSection.css';
import card1 from "./HomeImg/card_1.png"
import card2 from "./HomeImg/card_2.jpg"
import card3 from "./HomeImg/card_3.jpg"

const HeroSection = () => {
  return (
    <section className="outer_hero_section">
      <div className="hero_section">
        <video width="100%" height="100%" autoPlay loop muted playsInline>
          <source
            src="https://aluempire.gyanouspro.com/media/app-setting/banner.webm"
            type="video/webm"
          />
          
        </video>
      </div>
      <div className="hero_section_footer">
        <a
          href="/alu-home-interior"
          style={{ textDecoration: 'none', color: 'rgb(53, 56, 57)' }}
        >
          <div className="hero_section_footer_items">
            <img
              src={card1}
              alt="Alu Home Interior"
            />
            <div className="hero_section_footer_items_title">
              <h6 style={{ fontWeight: 600 }}>Alu Home Interior</h6>
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
        <a
          href="/upvc-door-and-window"
          style={{ textDecoration: 'none', color: 'rgb(53, 56, 57)' }}
        >
          <div className="hero_section_footer_items">
            <img
              src={card2}
              alt="uPVC Door & Window"
            />
            <div className="hero_section_footer_items_title">
              <h6 style={{ fontWeight: 600 }}>uPVC Door & Window</h6>
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
        <a
          href="/commercial-partition-system"
          style={{ textDecoration: 'none', color: 'rgb(53, 56, 57)' }}
        >
          <div className="hero_section_footer_items">
            <img
              src={card3}
              alt="Commercial Partition System"
            />
            <div className="hero_section_footer_items_title">
              <h6 style={{ fontWeight: 600 }}>Commercial Partition System</h6>
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
      </div>
    </section>
  );
};

export default HeroSection;