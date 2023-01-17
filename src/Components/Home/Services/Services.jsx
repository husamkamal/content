import React from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    return (
        <section className="services section">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 col-12 wow zoomIn" data-wow-delay="0.4s">
					<div className="section-title">
						<h4>الذي نفعله</h4>
						<h2>أفضل خدماتنا</h2>
					</div>
				</div>
			</div>
			<div className="row">
			<ServicesCard
			src={"https://via.placeholder.com/370x300"}
			title={'استشارات تكنولوجيا المعلومات'}
			desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'}
			link={'/'}
			/>
				<ServicesCard
			src={"https://via.placeholder.com/370x300"}
			title={'استشارات تكنولوجيا المعلومات'}
			desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'}
			link={'/'}
			/>
			<ServicesCard
			src={"https://via.placeholder.com/370x300"}
			title={'استشارات تكنولوجيا المعلومات'}
			desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'}
			link={'/'}
			/>	<ServicesCard
			src={"https://via.placeholder.com/370x300"}
			title={'استشارات تكنولوجيا المعلومات'}
			desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'}
			link={'/'}
			/>
			<ServicesCard
			src={"https://via.placeholder.com/370x300"}
			title={'استشارات تكنولوجيا المعلومات'}
			desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'}
			link={'/'}
			/>
			<ServicesCard
			src={"https://via.placeholder.com/370x300"}
			title={'استشارات تكنولوجيا المعلومات'}
			desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'}
			link={'/'}
			/>
			</div>
		</div>
	</section>
    );
}

export default Services;
