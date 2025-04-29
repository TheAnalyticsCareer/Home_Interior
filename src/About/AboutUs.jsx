
import React from 'react';
import './AboutUs.css'; 
import heroImg from "./img/about_hero_banner.jpg";
import chairmanImg from "./img/chairman image.png";
import managingDirector from "./img/Managing Director.png";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      
      {/* ========== Top Hero Section ========== */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          
          {/* Left side content: Heading + Paragraph */}
          <div className="about-hero-content">
            <h1>
              <span className="highlight">Experts in making quality uPVC</span> to your exact standards.
            </h1>
            <div className="divider"></div>
            <p>
              Founded in 2013, Alu Empire is a premier provider of superior interior and design finish
              products. We specialize in delivering high-quality UPVC and aluminum solutions that
              enhance the aesthetic and functional value of both residential and commercial spaces.
              Our comprehensive product range includes: UPVC Doors & Windows,
              Aluminium Doors & Windows,
              Railing Systems, Shower Cubicles, Commercial Partition Systems, Profiles.
            </p>
          </div>

          {/* Right side image */}
          <div className="about-hero-image">
            <img
              src={heroImg} 
              alt="uPVC Technician at Work"
            />
          </div>

        </div>
      </section>

      {/* ========== Leadership Section ========== */}
      <section id='chairman-section' className="leadership-section">
        <div className="leader-container">

          {/* Leader Card - Chairman */}
          <div className="leader-card">
            {/* Chairman's Image */}
            <div className="leader-image">
             
            </div>

            {/* Chairman's Info */}
            <div className="leader-info">
             
              <h3>Chairman</h3>
              <div className="leader-bio">
                <p>
                  Since founding Alu Empire in 2013, <strong>Vijay Gupta</strong> has
                  driven the company's growth and success. Under his leadership, Alu
                  Empire has become a market leader in UPVC and aluminum doors and
                  windows. Mr. Gupta's innovative ideas in interior decor and
                  marketing ensure the company's profitability and sustainability.
                  His strategic vision fosters continuous improvement and excellence.
                  Believing in the power of a great team, Mr. Gupta has built a
                  skilled workforce dedicated to high standards. His leadership
                  inspires Alu Empire to achieve new heights, with a focus on customer
                  satisfaction and industry-leading innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Leader Card - Managing Director */}
          <div className="leader-card">
            {/* Managing Director's Image */}
            <div className="leader-image">
              
            </div>

            {/* Managing Director's Info */}
            <div className="leader-info">
             
              <h3>Managing Director</h3>
              <div className="leader-bio">
                <p>
                  <strong>Vijay Gupta</strong> is the dynamic and visionary Managing Director of Alu Empire, a leading force in the aluminum industry. He brings extensive expertise and a forward-thinking mindset to his leadership role. Vijay actively drives Product and Research Development, ensuring Alu Empire remains at the cutting edge through the exploration of new materials and the optimization of production for innovative aluminum solutions. His meticulous approach extends to Reviewing Production, where he upholds stringent quality standards and operational efficiency, guaranteeing the delivery of superior products. Beyond operations, Vijay champions exceptional Customer Service, cultivating a customer-centric culture focused on responsiveness and building lasting partnerships. Looking ahead, he is the driving force behind Alu Empire's Growth Vision, strategically pursuing expansion into new markets and fostering continuous improvement to solidify the company's leadership. His passion for the aluminum sector and unwavering commitment to excellence make Vijay Gupta an invaluable asset and a respected leader within the industry.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== Our Story Section ========== */}
      <section id='ourstory' className="our-story-section">
        <div className="story-container">
          <div className="story-box">
            {/* Section Heading */}
            <h2><span className="highlight">OUR</span> STORY</h2>
            
            {/* Story Content Divided into Left and Right */}
            <div className="story-content">

              {/* Left Side Story */}
              <div className="story-left">
                <p>
                  At Alu Empire, quality is our hallmark. We are dedicated to producing and supplying products that adhere to the highest standards of craftsmanship and durability. Our commitment to excellence ensures that our clients receive only the best, tailored to meet their specific needs. Whether you are looking to upgrade your home or design a commercial project, Alu Empire offers unmatched expertise and innovative solutions to bring your vision to life.
                </p>
                {/* Company Signature */}
                <p className="signature">ALU Empire</p>
              </div>

              {/* Right Side Story */}
              <div className="story-right">
                <p>
                  We have a dedicated and skilled team of executives who are the cornerstone of our firm's success. Our employees are selected for their expertise, prior experience, and domain proficiency. Working in close collaboration, our team ensures steady organizational growth by leveraging their skills and knowledge. We are rapidly expanding our business across the market and continually adding new clients to our portfolio. To further enhance our team's capabilities, we regularly conduct workshops, seminars, and development programs.
                </p>
                <p>
                  Based out of Faridabad, Haryana, Alu Empire is committed to excellence and innovation in the interior products industry.
                </p>
                <p>
                  Partner with us for exceptional quality and service in every product we deliver. Our Facilities and Presence
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========== Vision & Mission Section ========== */}
      <section id='vision-mission' className="vision-mission-section">
        <div className="vm-container">
          
          {/* Section Heading */}
          <h2>Vision and Mission</h2>
          
          {/* Vision Row */}
          <div className="vm-row">
            {/* Vision Card */}
            <div className="vm-card">
              <h3>VISION</h3>
            </div>

            {/* Vision Text Content */}
            <div className="vm-text">
              <h4>Designed By Architects</h4>
              <p>
                Our vision is to revolutionize the interior design industry by delivering innovative and high-quality products that transform spaces and enhance living experiences. We are committed to touching the milestone of 1 Billion in revenue within the next two years, driving substantial growth and creating significant employment opportunities. By fostering a culture of excellence, sustainability, and customer-centricity, we aim to become a leading name in the interior products market, empowering our team and community to thrive in an ever-evolving landscape.
              </p>
            </div>
          </div>
          
          {/* Mission Row */}
          <div className="vm-row reverse">
            
            {/* Mission Card */}
            <div className="vm-card">
              <h3>MISSION</h3>
            </div>

            {/* Mission Text Content */}
            <div className="vm-text">
              <h4>Designed By Architects</h4>
              <p>
                To create a service company that is passionate about offering Exceptional Customer Experience and Customized Building Solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
