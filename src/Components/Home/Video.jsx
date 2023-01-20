import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import React, { useEffect, useRef } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Video = ({data}) => {
  const heroRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const heroAnimation = gsap.context(() => {
      gsap.fromTo(
        '.anima',
        {
          x: -800,
          scale: 0.5,
        },
        {
          x: 0,
          scale: 1,
          ease: 'power2',
          duration: 0.8,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'left center',
            end: 'right center',
          },
        },
      );
      gsap.fromTo(
        '.watch-inner',
        {
          y: 800,
        },
        {
          y: 0,
          ease: 'power2',
          delay: 0.5,
          duration: 0.8,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center',
            end: 'bottom center',
          },
        },
      );
    }, heroRef);

    return () => heroAnimation.revert();
  }, []);
  const { section2_title, section2_subtitle, section2_link } = data[10].value;
  return (
    <section className="watch-video overlay section"  ref={heroRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12  anima">
            <div className="content wow fadeInLeft" data-wow-delay="0.4s">
              <h2>{section2_title}</h2>
              <p>
                 {section2_subtitle}
              </p>
            </div>
          </div>
          <div className=" col-lg-6 col-md-6 col-12">
            <div className="watch-inner">
              <div className="video-head wow zoomIn" data-wow-delay="0.4s">
                <a
                onClick={() => {
                  window.open(section2_link);
                }} 
                  href={section2_link}
                  className="video video-popup mfp-iframe"
                >
                  <BsFillPlayFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
