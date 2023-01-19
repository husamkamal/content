import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import BlogCard from "../BlogCard";

const LatestNews = ({data}) => {
  const lastRef = useRef(null);
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
            trigger: lastRef.current,
            start: 'left center',
            end: 'right center',
          },
        },
      );
      gsap.fromTo(
        '.latest-news .row div',
        {
          y: 1200,
        },
        {
          y: 0,
          ease: 'power2',
          delay: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: lastRef.current,
            start: 'top center',
            end: 'bottom center',
          },
        },
      );
      
    }, lastRef);

    return () => heroAnimation.revert();
  }, []);
    const {value} = data[11]
    const { section9_subtitle, section9_title } = data[10].value;

  return (
    <div className="latest-news-area section" ref={lastRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-5 offset-lg-0 col-12 wow zoomIn"
            data-wow-delay="0.4s"
          >
            <div className="section-title">
              <h4>{section9_title} </h4>
              <h2>{section9_subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="letast-news-grid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="latest-news">
                <div className="row">
                    {value.map(e=>
                  <BlogCard key={e.id} src={e.image} title={e.name}/>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
