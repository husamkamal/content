import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className="latest-news-area section">
        <div className="container">
            <div className="row">
				<div className="col-lg-8 offset-lg-2 col-12 wow zoomIn" data-wow-delay="0.4s">
					<div className="section-title">
						<h4>اخر الاخبار </h4>
						<h2>اخر الاخبار والمدونات</h2>
					</div>
				</div>
			</div>
        </div>
        <div className="letast-news-grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="latest-news">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="letest-news-item">
                                        <span>بواسطة احمد 05 أغسطس 2019</span>
                                        <h4 className="title"><a href="blog-details.html">تحديث شهري لتطوير الويب أخلاقيات التصميم والوضوح على نظام الحلول</a></h4>
                                        <p>هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.</p>
                                        <div className="button">
											<Link className="btn3" href="blog-details.html">قراءة المزيد</Link>
										</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="letest-news-item">
                                        <span>بواسطة احمد 05 أغسطس 2019</span>
                                        <h4 className="title"><a href="blog-details.html">تحديث شهري لتطوير الويب أخلاقيات التصميم والوضوح على نظام الحلول</a></h4>
                                        <p>هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.</p>
                                        <div className="button">
											<Link className="btn3" href="blog-details.html">قراءة المزيد</Link>
										</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="letest-news-item">
                                        <span>بواسطة احمد 05 أغسطس 2019</span>
                                        <h4 className="title"><a href="blog-details.html">تحديث شهري لتطوير الويب أخلاقيات التصميم والوضوح على نظام الحلول</a></h4>
                                        <p>هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.</p>
                                        <div className="button">
											<Link className="btn3" href="blog-details.html">قراءة المزيد</Link>
										</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default LatestNews;
