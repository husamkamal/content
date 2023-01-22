import React, { useEffect, useRef, useState } from "react";
import PortfolioSlider from "./PortfolioSlider";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = ({data}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const portfolioRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const heroAnimation = gsap.context(() => {
      gsap.fromTo(
        '.section-title',
        {
          z: -800,
          scale: 0.5,
        },
        {
          z: 0,
          scale: 1,
          ease: 'power2',
          duration: 0.8,
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: 'left center',
            end: 'right center',
          },
        },
      );
      gsap.fromTo(
        '.portfolio-slider .single-portfolio',
        {
          x: 1200,
        },
        {
          x: 0,
          ease: 'power2',
          delay: 0.5,
          duration: 0.8,
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: 'top center',
            end: 'bottom center',
          },
        },
      );
    }, portfolioRef);

    return () => heroAnimation.revert();
  }, []);
  const {value} = data[12]
  const {section4_subtitle,section4_title	} = data[10].value
  return (
    <section id="portfolio" className="portfolio section" ref={portfolioRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-5 offset-lg-0 col-12 wow zoomIn"
            data-wow-delay="0.4s"
          >
            <div className="section-title">
              <h4>{section4_title}</h4>
              <h2>{section4_subtitle}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="portfolio-slider">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={window.innerWidth < 600 ? 0 :  50}
                slidesPerView={window.innerWidth < 600 ? 1 :  2}
                navigation
                loop={true}
                className="swiper-operant"
              >
                {value.map(e=>

                <SwiperSlide className="swiper-slide-single" key={e.id}>
                  {" "}
                  <PortfolioSlider src={e.image} />
                </SwiperSlide>
                )}
                
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
