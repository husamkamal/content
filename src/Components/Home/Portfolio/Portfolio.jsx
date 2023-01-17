import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 col-12 wow zoomIn" data-wow-delay="0.4s">
					<div className="section-title">
						<h4>أعمال إبداعية</h4>
						<h2>اعمالي</h2>
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
    >
      <SwiperSlide>						<PortfolioSlider /></SwiperSlide>
      <SwiperSlide>						<PortfolioSlider /></SwiperSlide>
      <SwiperSlide>						<PortfolioSlider /></SwiperSlide>
    </Swiper>



					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Portfolio;
