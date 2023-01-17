import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
		<div className="contact-details">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-12">
						<div className="single-info">
							<p><span>هل لديك أسئلة؟</span> <a href="mailto:username@domain.com">username@domain.com</a></p>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<div className="single-info">
							<p><span>جاهز للتحدث إلينا؟</span> <Link href="#">+44(0) 1482 628850</Link></p>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12">
						<ul className="social">
							<li className="active"><Link href="#"><i className="icofont-facebook"></i></Link></li>
							<li><Link href="#"><i className="icofont-twitter"></i></Link></li>
							<li><Link href="#"><i className="icofont-behance"></i></Link></li>
							<li><Link href="#"><i className="icofont-linkedin"></i></Link></li>
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
								<Link href="index.html"><img src={Image.logo2} alt="#" /></Link>
							</div>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>
							<div className="copyright-content">
								<Link href="#">الشروط والاحكام</Link>
								<p>جميع الحقوق محفوظة</p>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						<div className="single-footer f-link">
							<h3>الذي نفعله</h3>
							<ul>
								<li><Link href="#">الشعار التجارية</Link></li>
								<li><Link href="#">تصميم الرسومات</Link></li>
								<li><Link href="#">تصميم المواقع</Link></li>
								<li><Link href="#">التسويق عبر الإنترنت</Link></li>
								<li><Link href="#">تطوير التطبيقات</Link></li>
								<li><Link href="#">الرسوم المتحركة بالفيديو</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						<div className="single-footer f-link">
							<h3>روابط سريعة</h3>
							<ul>
								<li><a href="#">من نحن</a></li>
								<li><a href="#">الخدمات</a></li>
								<li><a href="#">الاسعار</a></li>
								<li><a href="#">المميزات</a></li>
								<li><a href="#">الاسئلة الشائعة</a></li>
								<li><a href="#">اتصل بنا</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="single-footer footer-newsletter">
							<h3>اشترك في النشرة الإخبارية</h3>
							<div className="newsletter-content">
								<p className="text">اشترك لمواكبة آخر الأخبار والتحديثات.</p>
								<div className="news-letter-form">
									<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
										<input name="email" placeholder="البريد الالكتروني" required="" type="email" />
										<button className="btnn">إشترك الآن</button>
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
