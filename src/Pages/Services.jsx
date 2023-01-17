import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">خدماتنا</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>خدماتنا</li>
                        </ul>
            </Breadcrumbs>
            <section className="services extra-page section">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-service">
						<div className="service-image">
							<img src="https://via.placeholder.com/370x300" alt="#" />
						</div>
						<div className="content">
							<h4><a href="#">تصميم غرافيك</a></h4>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>	
							<div className="button">
								<Link href="#" className="btn">قراءة المزيد</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-service">
						<div className="service-image">
							<img src="https://via.placeholder.com/370x300" alt="#" />
						</div>
						<div className="content">
							<h4><a href="#">استشارات تكنولوجيا المعلومات</a></h4>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>	
							<div className="button">
								<Link href="#" className="btn">قراءة المزيد</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-service">
						<div className="service-image">
							<img src="https://via.placeholder.com/370x300" alt="#" />
						</div>
						<div className="content">
							<h4><a href="#">تكنولوجيا الأستاذ</a></h4>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>	
							<div className="button">
								<Link href="#" className="btn">قراءة المزيد</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-service">
						<div className="service-image">
							<img src="https://via.placeholder.com/370x300" alt="#" />
						</div>
						<div className="content">
							<h4><a href="#">تطوير الشبكة</a></h4>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>	
							<div className="button">
								<Link href="#" className="btn">قراءة المزيد</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-service">
						<div className="service-image">
							<img src="https://via.placeholder.com/370x300" alt="#" />
						</div>
						<div className="content">
							<h4><a href="#">تطوير التطبيقات</a></h4>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>	
							<div className="button">
								<a href="#" className="btn">قراءة المزيد</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<div className="single-service">
						<div className="service-image">
							<img src="https://via.placeholder.com/370x300" alt="#" />
						</div>
						<div className="content">
							<h4><a href="#">تطوير اللعبة</a></h4>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>	
							<div className="button">
								<Link href="#" className="btn">قراءة المزيد</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="pagination center justify-content-lg-center">
						<ul className="pagination-list ">
							<li><Link href="#"><i className="icofont-long-arrow-left"></i></Link></li>
							<li className="active"><a href="#">1</a></li>
							<li><Link href="#">2</Link></li>
							<li><Link href="#">3</Link></li>
							<li><Link href="#">4</Link></li>
							<li><Link href="#"><i className="icofont-long-arrow-right"></i></Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    );
}

export default Services;
