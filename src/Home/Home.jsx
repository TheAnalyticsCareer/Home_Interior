import React from 'react';
import HeroSection from './HeroSection';
// import SlideShow from './SlideShow';
import AboutSection from './AboutSection';
import HomeServices from './HomeServices';
import NewLaunch from './NewLaunch';
import RecentProjects from './RecentProjects';
import CounterSection from './CounterSection';
// import TrustSection from './TrustSection';
// import BlogSlider from './BlogSlider';
import ClientTestimonials from './ClientTestimonials';
import Customer from './Customer';
import Whatsapp from './Whatsapp';

function Home() {
  return (
    <>
      <HeroSection />
     
      {/* <SlideShow/> */}
      <AboutSection />
      <CounterSection />
      <HomeServices />
      <NewLaunch />
      <RecentProjects />
      {/* <TrustSection /> */}
      {/* <BlogSlider /> */}
      <ClientTestimonials />
      <Customer/>
    </>
  );
}

export default Home;