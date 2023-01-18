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
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Components/Global/Loading';
import NotFound from './NotFound';

const Home = () => {
    const { isLoading, error, data } = useQuery('homeData', async ()  => {
    const response = await axios.get('https://content-sa.com/api/v1/home/index')
    return response.data.data
})
  if(isLoading) return <Loading />
  console.log(data)
  if(error) return 'there is error'
    return (
        <div>
            <HeroSection data={data}  />
            {/* <AboutSection /> */}
            <Video data={data}/>
            <Services data={data}/>
            <Portfolio data={data}/>
            {/* <Team /> */}
            <Testimonials data={data} />
            <Consultation data={data}/>
            <WhyChoose data={data}/>
            {/* <CallToAction /> */}
            <LatestNews data={data} />
            <Clients data={data}/> 
        </div>
    );
}

export default Home;