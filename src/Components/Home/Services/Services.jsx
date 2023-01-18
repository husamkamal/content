import React from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';
import Image from '../../../Assets';

const Services = ({data}) => {
	const {section3_subtitle,section3_title	} = data[10].value
	const {value} = data[11]
	console.log(value, 'dsfsdf')
    return (
        <section  className="services section">
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
