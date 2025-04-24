import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HomeServices from './HomeServices';
import NewLaunch from './NewLaunch';
import RecentProjects from './RecentProjects';
import CounterSection from './CounterSection';
import TrustSection from './TrustSection';
import BlogSlider from './BlogSlider';
import ClientTestimonials from './ClientTestimonials';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HomeServices />
      <NewLaunch />
      <RecentProjects />
      <CounterSection />
      <TrustSection />
      <BlogSlider />
      <ClientTestimonials />
    </>
  );
}

export default Home;