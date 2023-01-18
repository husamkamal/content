import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = ({data}) => {
  const {value} = data[12]
  const {section4_subtitle,section4_title	} = data[10].value
  return (
    <section id="portfolio" className="portfolio section">
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
                spaceBetween={50}
                slidesPerView={2}
                navigation
                loop={true}
              >
                {value.map(e=>

                <SwiperSlide key={e.id}>
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
