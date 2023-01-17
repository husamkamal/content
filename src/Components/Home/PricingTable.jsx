import React from 'react';
import { Link } from 'react-router-dom';

const PricingTable = () => {
    return (
        <section className="pricing-table section">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 col-12 wow zoomIn" data-wow-delay="0.4s">
					<div className="section-title">
						<h4>أفضل الأسعار لدينا</h4>
						<h2>جدول الاسعار</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
					<div className="single-table">
						<div className="table-head">
							<h4 className="title">طيور الصباح</h4>
							<div className="price">
								<p className="amount"><span className="curency">$</span>29<span className="duration">/ شهر</span></p>
							</div>
						</div>
						<ul className="table-list">
							<li>3 مستخدمين</li>
							<li>مشاريع غير محدودة</li>
							<li>دعم غير محدود</li>
							<li>تنزيل النماذج الأولية</li>
						</ul>
						<div className="button">
							<Link className="btn" href="#">شراء الآن</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
					<div className="single-table">
						<div className="table-head">
							<h4 className="title">الفريق</h4>
							<div className="price">
								<p className="amount"><span className="curency">$</span>55<span className="duration">/ شهر</span></p>
							</div>
						</div>
						<ul className="table-list">
							<li>5 مستخدمين</li>
							<li>مشاريع غير محدودة</li>
							<li>دعم غير محدود</li>
							<li>تنزيل النماذج الأولية</li>
						</ul>
						<div className="button">
							<Link className="btn" href="#">شراء الآن</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.8s">
					<div className="single-table">
						<p className="popular">شائع</p>
						<div className="table-head">
							<h4 className="title">الشخصية</h4>
							<div className="price">
								<p className="amount"><span className="curency">$</span>199<span className="duration">/ شهر</span></p>
							</div>
						</div>
						<ul className="table-list">
							<li>10 مستخدمين</li>
							<li>مشاريع غير محدودة</li>
							<li>دعم غير محدود</li>
							<li>تنزيل النماذج الأولية</li>
						</ul>
						<div className="button">
							<Link className="btn" href="#">شراء الآن</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="1s">
					<div className="single-table">
						<div className="table-head">
							<h4 className="title">مدفوع</h4>
							<div className="price">
								<p className="amount"><span className="curency">$</span>599<span className="duration">/ شهر</span></p>
							</div>
						</div>
						<ul className="table-list">
							<li>مستخدمون غير محدودين</li>
							<li>مشاريع غير محدودة</li>
							<li>دعم غير محدود</li>
							<li>تنزيل النماذج الأولية</li>
						</ul>
						<div className="button">
							<Link className="btn" href="#">شراء الآن</Link>
						</div>
					</div>
				</div>
			</div>	
		</div>	
	</section>
    );
}

export default PricingTable;
