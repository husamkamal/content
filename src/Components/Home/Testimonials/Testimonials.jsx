import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
    return (
        <section className="testimonials-sec section">
        <div className="container">
            <div className="row">
				<div className="col-lg-8 offset-lg-2 col-12 wow zoomIn" data-wow-delay="0.4s">
					<div className="section-title">
						<h4>قالو عنا</h4>
						<h2>ردود فعل عملائنا</h2>
					</div>
				</div>
			</div>
            <div className="row">
                <div className="col-12">
                    <div className="testimonial-slider">
                    <Swiper
      modules={[ Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>                        <TestimonialsCard
                        title={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
                        name={'احمد محمد'}
                        major={'مدير اعمال'}
                        />
</SwiperSlide>
      <SwiperSlide>                        <TestimonialsCard
                        title={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
                        name={'احمد محمد'}
                        major={'مدير اعمال'}
                        />
</SwiperSlide>
      <SwiperSlide>                        <TestimonialsCard
                        title={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
                        name={'احمد محمد'}
                        major={'مدير اعمال'}
                        />
</SwiperSlide>
      <SwiperSlide>                        <TestimonialsCard
                        title={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
                        name={'احمد محمد'}
                        major={'مدير اعمال'}
                        />
</SwiperSlide>
    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Testimonials;
