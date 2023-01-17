import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import {ImTrello} from 'react-icons/im';
const AboutCard = ({icon, title,desc,link}) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
						<div className="single-service">
							{title === 'إقتبس' ? <TfiHeadphoneAlt style={{ fontWeight: 500,
    fontSize: '30px'}} />: <ImTrello  style={{ fontWeight: 500,
        fontSize: '30px'}}/>}
							<h4><Link href="#">{title}</Link></h4>
							<p>{desc}</p>
							<Link to={link} className="more btn2"><span>قراءة المزيد</span> <AiOutlineArrowLeft /></Link>
							<span className="serial">01</span>
						</div>
					</div>
    );
}

export default AboutCard;
