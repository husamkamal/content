import React, { useEffect } from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import AboutSection from '../Components/Home/About/AboutSection';
import WhyChoose from '../Components/Home/WhyChoose/WhyChoose';
import CallToAction from '../Components/Home/CallToAction';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../Components/Global/Loading';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)

},[])
    const { isLoading, error, data } = useQuery('homeData', async ()  => {
        const response = await axios.get('https://content-sa.com/api/v1/pages/about')
        return response.data.data
    })
      if(isLoading) return <Loading />
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">عن الشركة</h1>
                        <ul className="custom-flex breadcrumb">
                            <li ><Link to="/">الرئيسية </Link></li>
                            <li>عن الشركة </li>
                        </ul>
            </Breadcrumbs>
            <section className="section blog-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-1 col-12">
            <div className="post-details">
              <h2 className="post-title">
                <Link href="#">{data.name}
                </Link>
              </h2>
              <p dangerouslySetInnerHTML={{ __html:  data.description }} style={{fontFamily:'cairo !important'}}  />

              
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default About;
