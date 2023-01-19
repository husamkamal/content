import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import AboutSection from '../Components/Home/About/AboutSection';
import WhyChoose from '../Components/Home/WhyChoose/WhyChoose';
import CallToAction from '../Components/Home/CallToAction';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../Components/Global/Loading';

const About = () => {
    
    // const { isLoading, error, data } = useQuery('homeData', async ()  => {
    //     const response = await axios.get('https://content-sa.com/api/v1/pages/about')
    //     return response.data.data
    // })
    //   if(isLoading) return <Loading />
    //   console.log(data,'about')
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">من نحن</h1>
                        <ul className="custom-flex breadcrumb">
                            <li>من نحن</li>
                            <li><a href="index.html">الرئيسية</a></li>
                        </ul>
            </Breadcrumbs>
            <AboutSection />
            {/* <WhyChoose /> */}
            <CallToAction />
        </div>
    );
}

export default About;
