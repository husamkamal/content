import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import Blog from '../Components/Blog';
import { Link } from 'react-router-dom';

const BlogSingleSidebar = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">تفاصيل الأخبار</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li><a href="news-standard.html">الأخبار</a></li>
                            <li>تفاصيل الأخبار</li>
                        </ul>
            </Breadcrumbs>
            
    <section className="section blog-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-8"></div>
                <Blog />
                </div>
                <aside className="col-lg-4 col-12">
					<div className="sidebar">
						<div className="widget about-author-widget">
							<h5 className="widget-title">عني</h5>
							<div className="author-box">
								<img src="https://via.placeholder.com/490x490" alt="author" />
								<h6>احمد محمد</h6>
								<p className="fw-500">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ.</p>
								<ul className="social-icon custom-flex">
									<li><a href="#"><i className="icofont-facebook"></i></a></li>
									<li><a href="#"><i className="icofont-twitter"></i></a></li>
									<li><a href="#"><i className="icofont-behance"></i></a></li>
									<li><a href="#"><i className="icofont-linkedin"></i></a></li>
									<li><a href="#"><i className="icofont-youtube"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="widget search-widget">
							<h5 className="widget-title">البحث</h5>
							<form action="#">
								<input type="text" placeholder="البحث..." />
								<button type="submit"><i className="icofont-search-1"></i></button>
							</form>
						</div>
						<div className="widget popular-feeds">
							<h5 className="widget-title">الخلاصات الشعبية</h5>
							<div className="popular-feed-loop">
								<div className="single-popular-feed">
									<div className="feed-img animate-img">
										<Link href="#">
											<img src="https://via.placeholder.com/80x80" className="rounded-circle" alt="#" />
										</Link>
									</div>
									<div className="feed-desc">
										<h6 className="post-title"><a href="#">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة.</a></h6>
										<span className="time"><i className="far fa-calendar-alt"></i> 24th March 2020</span>
									</div>
								</div>
								<div className="single-popular-feed">
									<div className="feed-img animate-img">
										<Link href="#">
											<img src="https://via.placeholder.com/80x80" className="rounded-circle" alt="#" />
										</Link>
									</div>
									<div className="feed-desc">
										<h6 className="post-title"><Link href="#">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة.</Link></h6>
										<span className="time"><i className="far fa-calendar-alt"></i> 24th March 2020</span>
									</div>
								</div>
								<div className="single-popular-feed">
									<div className="feed-img animate-img">
										<a href="#">
											<img src="https://via.placeholder.com/80x80" className="rounded-circle" alt="#" />
										</a>
									</div>
									<div className="feed-desc">
										<h6 className="post-title"><Link href="#">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة.</Link></h6>
										<span className="time"><i className="far fa-calendar-alt"></i> 24th March 2020</span>
									</div>
								</div>
								<div className="single-popular-feed">
									<div className="feed-img animate-img">
										<a href="#">
											<img src="https://via.placeholder.com/80x80" className="rounded-circle" alt="#" />
										</a>
									</div>
									<div className="feed-desc">
										<h6 className="post-title"><Link href="#">هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة.</Link></h6>
										<span className="time"><i className="far fa-calendar-alt"></i> 24th March 2020</span>
									</div>
								</div>
							</div>
						</div>
						<div className="widget categories-widget">
							<h5 className="widget-title">فئات</h5>
							<ul className="custom">
								<li>
									<Link href="#">اعمال<span>26</span></Link>
								</li>
								<li>
									<Link href="#">مستشار<span>30</span></Link>
								</li>
								<li>
									<Link href="#">مبدع<span>71</span></Link>
								</li>
								<li>
									<Link href="#">UI/UX<span>56</span></Link>
								</li>
								<li>
									<Link href="#">تقنية<span>60</span></Link>
								</li>
							</ul>
						</div>
						<div className="widget social-widget">
							<h5 className="widget-title">لا تفوت الأخبار</h5>
							<ul className="custom-flex">
								<li><Link href="#"><i className="icofont-facebook"></i></Link></li>
								<li><Link href="#"><i className="icofont-twitter"></i></Link></li>
								<li><Link href="#"><i className="icofont-behance"></i></Link></li>
								<li><Link href="#"><i className="icofont-linkedin"></i></Link></li>
								<li><Link href="#"><i className="icofont-pinterest"></i></Link></li>
							</ul>
						</div>
						<div className="widget twitter-feed-widget">
							<h5 className="widget-title">منشورات تويتر</h5>
							<ul className="custom">
								<li>
									<Link href="#">
										Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @
										ThemeForest https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1
									</Link>
									<span className="date">November 25, 2020</span>
								</li>
								<li>
									<Link href="#">
										Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @
										ThemeForest https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1
									</Link>
									<span className="date">November 25, 2020</span>
								</li>
								<li>
									<Link href="#">
										Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @
										ThemeForest https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1
									</Link>
									<span className="date">November 25, 2020</span>
								</li>
							</ul>
						</div>
						<div className="widget instagram-feed-widget">
							<h5 className="widget-title">منشورات انستجرام</h5>
							<ul className="custom-flex">
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
                                <Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
								<li className="animate-img">
									<Link href="#">
										<img src="https://via.placeholder.com/80x80" alt="#" />
									</Link>
								</li>
							</ul>
						</div>
						<div className="widget popular-tag-widget">
							<h5 className="widget-title">الكلمات الشعبية</h5>
							<div className="tags">
								<Link href="#">Popular</Link>
								<Link href="#">Design</Link>
								<Link href="#">UX</Link>
								<Link href="#">Usability</Link>
								<Link href="#">Develop</Link>
								<Link href="#">Icon</Link>
								<Link href="#">Business</Link>
								<Link href="#">Consult</Link>
								<Link href="#">Kit</Link>
								<Link href="#">Keyboard</Link>
								<Link href="#">Mouse</Link>
								<Link href="#">Tech</Link>
							</div>
						</div>
					</div>
				</aside>
                </div>
                </section>
        </div>
    );
}

export default BlogSingleSidebar;
