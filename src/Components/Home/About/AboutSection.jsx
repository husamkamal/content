import React from 'react';
import { Link } from 'react-router-dom';
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import AboutCard from './AboutCard';

const AboutSection = () => {
    return (
        <section className="about-area section">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<div className="about-left overlay">
						<h4><span>ابحاث</span>زيادة الرخاء مع التفكير الإيجابي</h4>
						<div className="button">
							<Link href="#" className="btn2"><i className="icofont-external-link"></i> اكتشف اعمالنا</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-8 col-md-6 col-12">
					<div className="about-right">
						<div className="row">
							<div className="col-lg-6 col-12">
								<img src="https://via.placeholder.com/1400x1900" alt="#" />
							</div>
							<div className="col-lg-6 col-12">
								<div className="about-content">
									<h4><span>تحليل السوق</span>نحن نتتبع <br/> السوق</h4>
									<p>الشركات في الوقت الحاضر قد خلقت<br/> ولدت أجواء فعالة<br/> ظهرت الإعلانات.</p>
									<div className="button">
										<Link href="#" className="btn">من نحن</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-newsletter">
				<div className="row">
					<AboutCard
					icon={TfiHeadphoneAlt}
					title={'إقتبس'}
					desc={'العديد من جوانب الحوسبة والتكنولوجيا والمصطلح يمكن التعرف عليه أكثر من ذي قبل.'}
					/>
						<AboutCard
					icon={TfiHeadphoneAlt}
					title={'يستريح'}
					desc={'العديد من جوانب الحوسبة والتكنولوجيا والمصطلح يمكن التعرف عليه أكثر من ذي قبل.'}
					/>
					<div className="col-lg-4 col-12">
						<div className="newsletter-form">
							<h4>اشتراك الان</h4>
							<p>اشترك لمواكبة آخر الأخبار والتحديثات</p>
							<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
								<input name="email" placeholder="البريد الالكتروني" required="" type="email" />
								<button className="btnn">اشتراك الان</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default AboutSection;
