import React, { useEffect, useState } from "react";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/About/AboutSection";
import Video from "../Components/Home/Video";
import Services from "../Components/Home/Services/Services";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Team from "../Components/Home/Team";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import PricingTable from "../Components/Home/PricingTable";
import Consultation from "../Components/Home/Consultation";
import WhyChoose from "../Components/Home/WhyChoose/WhyChoose";
import LatestNews from "../Components/Home/LatestNews";
import Clients from "../Components/Home/Clients";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Components/Global/Loading";

const Home = () => {
  const [data, setData] = useState();
  useEffect( () => {
    window.scrollTo(0, 0);
    const getHome = async () =>{

        try {
          const response = await axios.get(
            "https://content-sa.com/api/v1/home/index",{headers: {
              "Cache-Control": null,
              "X-Requested-With": null,
          }}
          );
          setData(response.data.data);
        } catch (error) {}
    }
    getHome()
  }, []);

  if (!data?.length) return <Loading />;
  //   const getSettingsData = (key) => {
  //       const result = data.find((data) => data?.key === key);
  //       return result?.value;
  //     };
  return (
    <div>
      <HeroSection data={data} />
      {/* <AboutSection /> */}
      <Video data={data} />
      <Services data={data} />
      <Portfolio data={data} />
      <Testimonials data={data} />
      <Consultation data={data} />
      <WhyChoose data={data} />
      {/* <CallToAction /> */}
      <LatestNews data={data} />
      <Clients data={data} />
    </div>
  );
};

export default Home;
