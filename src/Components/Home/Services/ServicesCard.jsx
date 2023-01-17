import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({src, title, desc, link}) => {
    return (
        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.2s">
					<div className="single-service">
						<div className="service-image">
							<img src={src} alt="#" />
						</div>
						<div className="content">
							<h4><Link to="#">{title}</Link></h4>
							<p>{desc}</p>	
							<div className="button">
								<Link to={link} style={{width:'100%'}} className="btn"> مشاهدة</Link>
							</div>
						</div>
					</div>
				</div>
    );
}

export default ServicesCard;
