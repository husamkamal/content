import React, { useEffect, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = ({ data }) => {
  const testimonialRef = useRef(null);
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
          duration: 1,
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: 'left center',
            end: 'right center',
          },
        },
      );
      gsap.fromTo(
        '.testimonial-slider',
        {
          x: 1200,
        },
        {
          x: 0,
          ease: 'power2',
          delay: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: 'top center',
            end: 'bottom center',
          },
        },
      );
    }, testimonialRef);

    return () => heroAnimation.revert();
  }, []);
  const { section6_subtitle, section6_title } = data[10].value;
  const { value } = data[15];
  return (
    <section className="testimonials-sec section" ref={testimonialRef}>
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
                // spaceBetween={10}
                slidesPerView={window.innerWidth < 600 ? 1 : 3}
                loop={true}
                pagination={{ clickable: true }}
              >
                {
                    value.map(e=>
                <SwiperSlide className="swiper-slide-single" key={e.id}>
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
