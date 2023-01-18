import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = ({ data }) => {
  const { section6_subtitle, section6_title } = data[10].value;
  const { value } = data[15];
  return (
    <section className="testimonials-sec section">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-5 offset-lg-0 col-12 wow zoomIn"
            data-wow-delay="0.4s"
          >
            <div className="section-title">
              <h4>{section6_title}</h4>
              <h2>{section6_subtitle}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider">
              <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
              >
                {
                    value.map(e=>
                <SwiperSlide key={e.id}>
                  {" "}
                  <TestimonialsCard
                    title={e.caption}
                    name={e.client_name}
                    major={e.client_job_title}
                  />
                </SwiperSlide>
                        
                        )
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
