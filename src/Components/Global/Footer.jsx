import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Assets';
import axios from 'axios';

const Footer = ({data}) => {
	const [userEmail,setUserEmail] = useState()
	const email = data[6].value
	const phon = data[7].value
	const social = data[17].value
	const logo = data[0].value
	const description = data[1].value
	const services = data[11].value
	const emailHandler = (e) =>{
		setUserEmail(e.target.value)
	}
	const socialMedia = social.filter(e=>{
		return e.link !== '#'
	})
	const onSubmit = (e) =>{
		e.preventDefault()
	axios.post('https://content-sa.com/api/v1//subscribe/store',{email:userEmail})
	setUserEmail('')
	}
    return (
        <footer className="footer">
		<div className="contact-details">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-12">
						<div className="single-info">
							<p><span>هل لديك أسئلة؟</span> <a className='text-white' href="mailto:username@domain.com">{email}</a></p>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="single-info">
							<p><span>جاهز للتحدث إلينا؟</span> <Link href="#">{phon}</Link></p>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<ul className="social">
							{
								socialMedia.map(e=>
									<li key={e.key} className="active"><Link to={e.link}><i className='icofont-facebook'></i></Link></li>)
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-top">
			<img src={Image.footer} alt="#" className="footer-pattern"/>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						<div className="single-footer f-about">
							<div className="logo">
								<Link href="index.html"><img src={logo} alt="#" /></Link>
							</div>
							<p>{description}</p>
							
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						<div className="single-footer f-link">
							<h3>الذي نفعله</h3>
							<ul>
								{
									services.map(e=>
										
										<li key={e.id}><Link href="#">{e.name}</Link></li>
										)
								}
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						<div className="single-footer f-link">
							<h3>روابط سريعة</h3>
							<ul>
								<li><Link to="/">الرئيسية</Link></li>
								<li><Link to="/about">عن الشركة</Link></li>
								<li><Link to="/portfolio">معرض الأعمال</Link></li>
								<li><Link to="/services">الخدمات</Link></li>
								<li><Link to="/blog">المدونة</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="single-footer footer-newsletter">
							<h3>اشترك في النشرة البريدية</h3>
							<div className="newsletter-content">
								<p className="text">اشترك لمواكبة آخر الأخبار والتحديثات.</p>
								<div className="news-letter-form">
									<form onSubmit={onSubmit}  className="newsletter-inner">
										<input onChange={emailHandler} name="email" placeholder="البريد الالكتروني" required="" type="email" />
										<button type='submit' onClick={onSubmit} className="btnn">إشترك الآن</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
}

export default Footer;
