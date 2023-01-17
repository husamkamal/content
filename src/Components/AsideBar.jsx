import React from 'react';
import { Link } from 'react-router-dom';

const AsideBar = () => {
    return (
        <aside className="col-lg-3 col-md-4 col-12">
                    <div className="sidebar service-sidebar">
                        <ul className="custom service-category">
                            <li>
                                <Link href="#">
                                    التخطيط المالي
                                    <i className="icofont-long-arrow-right"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    التخطيط الضريبي
                                    <i className="icofont-long-arrow-right"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    استشارات التأمين
                                    <i className="icofont-long-arrow-right"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    استراتيجية الادخار
                                    <i className="icofont-long-arrow-right"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    صناديق الاستثمار
                                    <i className="icofont-long-arrow-right"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    القروض التجارية
                                    <i className="icofont-long-arrow-right"></i>
                                </Link>
                            </li>
                        </ul>
                        <ul className="custom service-docs mb-xl-30">
                            <li>
                                <Link href="#">
                                    <i className="icofont-file-pdf"></i>
                                    المستندات الكاملة
                                </Link>
                            </li>
                        </ul>
                        <div className="service-quote">
                            <p>نحن نعمل مع العملاء لدمج تدفق تجربة العميل عبر القنوات (على سبيل المثال ، وجهاً لوجه ، والهاتف) ، وفتح مصادر عملاء جديدة ، ودعم المبيعات للمعاملات ذات القيمة الأصغر ، وإنشاء نماذج جديدة للخدمة. نحن بشكل مستمر جديد عملي.</p>
                            <div className="quote-author">
                                <div className="quote-img">
                                    <img src="https://via.placeholder.com/180x200" alt="#" />
                                </div>
                                <div className="quote-text">
                                    <h5 className="no-margin">محمد احمد</h5>
                                    <p className="no-margin">مدير</p>
                                </div>
                            </div>
                        </div>
                        <div className="adv-banner">
                            <Link href="#"><img src="https://via.placeholder.com/270x400" alt="#" /></Link>
                        </div>
                    </div>
                </aside>
    );
}

export default AsideBar;
