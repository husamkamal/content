import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import AboutSection from '../Components/Home/About/AboutSection';
import WhyChoose from '../Components/Home/WhyChoose/WhyChoose';
import CallToAction from '../Components/Home/CallToAction';

const About = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">من نحن</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>من نحن</li>
                        </ul>
            </Breadcrumbs>
            <AboutSection />
            <WhyChoose />
            <CallToAction />
        </div>
    );
}

export default About;
