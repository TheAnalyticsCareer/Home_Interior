import React from "react";
import { assets } from "./assets/asset";
import "./LocateUs.css"; // Import the CSS file

const LocateUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="blog_hero_section">
        <div className="blog_hero_banner">
          {/*--- IN Order to change contact image---*/}
          <img
            src={assets.contact_us_banner}
            alt="Contact Us Banner"
            className="hero_image"
          />
        </div>
        <div className="blog_hero_banner_overlay">
          <div className="innerblog_hero_content">
            <h3 style={{ color: "white" }}>
              <span style={{ color: "rgb(250, 133, 61)" }}>Contact Us</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="getin_touch_section">
        <div className="getin_touch_container" id="quiery-form">
          <div className="getin_touch_right_container">
            <div className="innergetin_touch_right_container shadow">
              <p>
                <h4></h4>
                <strong></strong>
                <h1 style={{ fontSize: "1.3rem" }}>
                  {" "}
                  Tell us about your project
                </h1>
              </p>

              <div className="form_input_feild_container">
                <div className="pricing_container">
                  <div className="input_feild_title">
                    <p>Name</p>
                  </div>
                  <div className="input_feild">
                    <input
                      className="contact_form_input_feild"
                      type="text"
                      placeholder="Enter your name"
                      maxLength={35}
                    />
                  </div>
                </div>
                <div className="pricing_container">
                  <div className="input_feild_title">
                    <p>Phone Number</p>
                  </div>
                  <div className="input_feild">
                    <input
                      className="contact_form_input_feild"
                      type="text"
                      placeholder="Enter your phone number"
                      maxLength="35"
                    />
                  </div>
                </div>
                <div className="pricing_container">
                  <div className="input_feild_title">
                    <p style={{ marginBottom: 0, color: "white" }}>
                      I'm looking for
                    </p>
                  </div>
                  <div className="input_feild">
                    <select
                      name="requiredService"
                      id="requiredService"
                      required=""
                    >
                      <option value="uPVC">uPVC</option>
                      <option value="ALU Home Interior">
                        ALU Home Interior
                      </option>
                      <option value="Commercial partition system">
                        Commercial partition system
                      </option>
                      <option value="other">other</option>
                    </select>
                  </div>
                </div>

                <div className="pricing_container">
                  <div className="input_feild_title">
                    <p>Email</p>
                  </div>
                  <div className="input_feild">
                    <input
                      className="contact_form_input_feild"
                      type="email"
                      placeholder="Enter your email"
                      maxLength={35}
                    />
                  </div>
                </div>

                <button className="form_btn">
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="getin_touch_left_container">
            <h4 className="getin_touch_heading">
              <span style={{ color: "rgb(250, 133, 61)" }}>Get In </span>
              Touch
            </h4>

            <p style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
              "If you have any query, feel free to ask for details."
            </p>

            <div className="contact_info">
              {/* Phone Card */}
              <div className="address_container">
                <div className="address_image">
                  {/*--- IN Order to change phone image---*/}
                  <img src={assets.phone} alt="Phone Icon" />
                </div>
                <div>
                  <h4 className="card_heading">Phone Number</h4>{" "}
                  {/*- phone no heading -*/}
                  <p className="card_para">+91-87440-36000</p>{" "}
                  {/*- phone no -*/}
                </div>
              </div>

              {/* Email Card */}
              <div className="address_container">
                <div className="address_image">
                  {/*---  go to the src/assets/asset.js to change the image---*/}
                  <img src={assets.email} alt="Email Icon" />
                </div>
                <div>
                  <h4 className="card_heading">Email</h4> {/*-Email -*/}
                  <p className="card_para">contact@aidfgroup.com</p>{" "}
                  {/*-Email of the website-*/}
                </div>
              </div>
              {/* Location Card */}
              <div className="address_container">
                <div className="address_image">
                  {/*---  go to the src/assets/asset.js to change the image---*/}
                  <img src={assets.location} alt="Location" />
                </div>
                <div>
                  <h4 className="card_heading">HEAD OFFICE</h4>
                  <p className="card_para">
                    H. No. 256, Village Anangpur Dairy Bhagwat Colony,
                    Sector-37, Faridabad- HR-121003
                  </p>{" "}
                  {/* Address of the office */}
                </div>
              </div>
              {/*-----OUR SHOWROOMS-------*/}
              <div className="address_container">
                <div className="address_image"></div>
                <div>
                  <h4>OUR SHOWROOMS</h4>
                </div>
              </div>
              {/* 1 SHOWROOM Card */}
              <div className="address_container">
                <div className="address_image">
                  {/*---  go to the src/assets/asset.js to change the image---*/}
                  <img src={assets.location} alt="Location" />
                </div>
                <div>
                  <h4 className="card_heading">
                    {" "}
                    {/* 1 SHOWROOM NAME */} INFO
                  </h4>
                  <p className="card_para">{/* SHOWROOM INFORMATION */} INFO</p>
                </div>
              </div>

              {/* 2 SHOWROOM Card */}
              <div className="address_container">
                <div className="address_image">
                  {/*---  go to the src/assets/asset.js to change the image---*/}
                  <img src={assets.location} alt="Location" />
                </div>
                <div>
                  <h4 className="card_heading">
                    {" "}
                    {/* 2 SHOWROOM NAME */} INFO
                  </h4>
                  <p className="card_para">{/* SHOWROOM INFORMATION */} INFO</p>
                </div>
              </div>

              {/* 3 SHOWROOM Card */}
              <div className="address_container">
                <div className="address_image">
                  {/*---  go to the src/assets/asset.js to change the image---*/}
                  <img src={assets.location} alt="Location" />
                </div>
                <div>
                  <h4 className="card_heading"> {/* 3 SHOWROOM NAME */}INFO</h4>
                  <p className="card_para"> {/* SHOWROOM INFORMATION */}INFO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="contact_map_section">
        <h1 className="map_title">
          <span></span>
          Find us on google map {/*heading of map*/}
          <div></div>
        </h1>
        <div className="contact_map_container">
          {/* link of the location from google map*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d56163.174471376515!2d77.22929938178875!3d28.383074855003354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.3629015!2d77.2903259!4m5!1s0x390cdf679be5a621%3A0xc16d657b9ec65f6b!2salu%20empire!3m2!1d28.3933388!2d77.2494543!5e0!3m2!1sen!2sin!4v1725619265929!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default LocateUs;
