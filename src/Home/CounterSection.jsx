import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CounterSection.css';
import counter_1 from "./HomeImg/banner1.jpg"
import counter_2 from "./HomeImg/banner2.jpg"
import counter_3 from "./HomeImg/banner3.jpg"

const CounterSection = () => {
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      const speed = 200;
      
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animateCounters, 1);
        } else {
          counter.innerText = target;
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const counterContainer = document.querySelector('.counter_container');
    if (counterContainer) {
      observer.observe(counterContainer);
    }
  }, []);

  return (
    <section className="outer_counter_section">
      <div className="counter_section">
        <Carousel controls indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={counter_1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={counter_2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={counter_3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        
        <div className="counter_section_images_overlay">
          <div className="counter_section_images_inneroverlay"></div>
        </div>
      </div>
      
      <div className="counter_container shadow">
        <div className="counter_innercontainer">
          <div className="counters">
            <div className="counter_wrapper">
              <h3 className="counter" data-target="1500">0</h3>
              <h3>+</h3>
            </div>
            <h6>Happy Clients</h6>
          </div>
          <div className="counters">
            <div className="counter_wrapper">
              <h3 className="counter" data-target="25">0</h3>
              <h3>+</h3>
            </div>
            <h6>Years</h6>
          </div>
          <div className="counters">
            <div className="counter_wrapper">
              <h3 className="counter" data-target="386">0</h3>
              <h3>+</h3>
            </div>
            <h6>Projects</h6>
          </div>
          <div className="counters">
            <div className="counter_wrapper">
              <h3 className="counter" data-target="99">0</h3>
              <h3>%</h3>
            </div>
            <h6>Quality</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;