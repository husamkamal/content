import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div className="team-area section">
        <div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 col-12 wow zoomIn" data-wow-delay="0.4s">
					<div className="section-title">
						<h4>التق بفريقنا</h4>
						<h2>فريقنا الإبداعي</h2>
					</div>
				</div>
			</div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="single-team">
                        <div className="team-img">
                            <img src="https://via.placeholder.com/370x390" alt="" />
                            <div className="team-02-icon">
                                <div className="inner-team-icon pos-rel">
                                    <Link href="#" className="plus"><i className="icofont-plus"></i></Link>
                                    <div className="team-icon">
                                        <Link className="google" href="#"><i className="icofont-facebook"></i></Link>
                                        <Link className="fb" href="#"><i className="icofont-twitter"></i></Link>
                                        <Link className="twitter" href="#"><i className="icofont-behance"></i></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-text">
							<h3>نعيم الرحمن</h3>
                            <span>Front-End Developer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="single-team">
                        <div className="team-img">
                            <img src="https://via.placeholder.com/370x390" alt="" />
                            <div className="team-02-icon">
                                <div className="inner-team-icon pos-rel">
                                    <a href="#" className="plus"><i className="icofont-plus"></i></a>
                                    <div className="team-icon">
                                        <Link className="google" href="#"><i className="icofont-facebook"></i></Link>
                                        <Link className="fb" href="#"><i className="icofont-twitter"></i></Link>
                                        <Link className="twitter" href="#"><i className="icofont-behance"></i></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-text">
							<h3>حسن خميس</h3>
                            <span>Back-End Developer</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.8s">
                    <div className="single-team">
                        <div className="team-img">
                            <img src="https://via.placeholder.com/370x390" alt="" />
                            <div className="team-02-icon">
                                <div className="inner-team-icon pos-rel">
                                    <Link href="#" className="plus"><i className="icofont-plus"></i></Link>
                                    <div className="team-icon">
                                        <Link className="google" href="#"><i className="icofont-facebook"></i></Link>
                                        <Link className="fb" href="#"><i className="icofont-twitter"></i></Link>
                                        <Link className="twitter" href="#"><i className="icofont-behance"></i></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-text">
                            <h3>محمد احمد</h3>
                            <span>Graphic Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Team;
