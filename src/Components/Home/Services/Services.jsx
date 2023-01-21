import React, { useEffect, useRef } from 'react';
import ServicesCard from './ServicesCard';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
const Services = ({data}) => {
	const servicesRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const heroAnimation = gsap.context(() => {
      gsap.fromTo(
        '.section-title',
        {
          z: -400,
          scale: 0.5,
        },
        {
          z: 0,
          scale: 1,
          ease: 'power2',
          duration: 0.8,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'left center',
            end: 'right center',
          },
        },
      );
      gsap.fromTo(
        '.container .row  div',
        {
          y: 800,
        },
        {
          y: 0,
          ease: 'power2',
          delay: 0.5,
          duration: 0.8,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top center',
            end: 'bottom center',
          },
        },
      );
    }, servicesRef);

    return () => heroAnimation.revert();
  }, []);
	const {section3_subtitle,section3_title	} = data[10].value
	const {value} = data[11]
    return (
        <section  className="services section" ref={servicesRef}>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-5 offset-lg-0 col-12 wow zoomIn" data-wow-delay="0.4s">
					<div className="section-title">
						<h4>{section3_title}</h4>
						<h2>{section3_subtitle}</h2>
					</div>
				</div>
			</div>
			<div className="row">
				{value.map(e=>

			<ServicesCard
			key={e.id}
			src={e.image
			}
			title={e.name}
			desc={e.about}
			link={`/service-single/${e.id}`}
			/>
				)}
				
			</div>
		</div>
	</section>
    );
}

export default Services;
