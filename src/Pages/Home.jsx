import React from 'react';
import HeroSection from '../Components/Home/HeroSection';
import AboutSection from '../Components/Home/About/AboutSection';
import Video from '../Components/Home/Video';
import Services from '../Components/Home/Services/Services';
import Portfolio from '../Components/Home/Portfolio/Portfolio';
import Team from '../Components/Home/Team';
import Testimonials from '../Components/Home/Testimonials/Testimonials';
import PricingTable from '../Components/Home/PricingTable';
import Consultation from '../Components/Home/Consultation';
import WhyChoose from '../Components/Home/WhyChoose/WhyChoose';
import CallToAction from '../Components/Home/CallToAction';
import LatestNews from '../Components/Home/LatestNews';
import Clients from '../Components/Home/Clients';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <Video />
            <Services />
            <Portfolio />
            <Team />
            <Testimonials />
            <Consultation />
            <WhyChoose />
            <CallToAction />
            <LatestNews />
            {/* <Clients /> */}
        </div>
    );
}

export default Home;
