import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import { Link } from 'react-router-dom';

const PortfolioSingle = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">تفاصيل المشروع</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>تفاصيل المشروع</li>
                        </ul>            
            </Breadcrumbs>
            <section className="project-details section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="project-head">
                        <ul className="custom-flex details">
                            <li>
                                <h5>مسؤل:</h5>
                                <Link href="#">احمد محمد</Link>
                            </li>
                            <li>
                                <h5>التاريخ:</h5>
                                <Link href="#">24th March 2020</Link>
                            </li>
                            <li>
                                <h5>فئة:</h5>
                                <Link href="#">الاستشارات,</Link>
                                <Link href="#">تمويل</Link>
                            </li>
                            <li>
                                <h5>الموقع:</h5>
                                <Link href="#">www.yourwebsite.com</Link>
                            </li>
                        </ul>
                        <div className="button">
                            <Link href="#" className="btn">المعاينة الحية <i className="icofont-eye"></i></Link>
                        </div>
                    </div>
                    <div className="single-p-thumb">
                        <img src="https://via.placeholder.com/1200x600" alt="#" />
                    </div>
                    <div className="quote-icon bg-blue">
                        P
                    </div>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. </p>
                    <div className="project-gallery row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-img">
                                <img src="https://via.placeholder.com/600x450" alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-img">
                                <img src="https://via.placeholder.com/600x450" alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-img">
                                <img src="https://via.placeholder.com/600x450" alt="#" />
                            </div>
                        </div>
                    </div>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. </p>
                    <div className="detail-post-navigation">
                        <div className="prev-post">
                            <span className="double-lines"><span>المشروع السابق</span></span>
                            <Link href="#">مولد النص العربي<i className="icofont-long-arrow-left"></i></Link>
                        </div>
                        <div className="next-post">
                            <span className="double-lines"><span>المشروع التالي</span></span>
                            <Link href="#">مولد النص العربي<i className="icofont-long-arrow-right"></i></Link>
                        </div>
                    </div>
					
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default PortfolioSingle;
