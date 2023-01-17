import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="hero-slider">
		<div className="single-slider" >
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<div className="hero-text">
							<h1>المصممين المحترفين <br/> & والمطورين تحت <br/> سقف واحد</h1>
							<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.</p>
							<div className="button">
								<Link href="about-us.html" className="btn">إكتشف أكثر</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<div className="hero-image">
							<img src="https://via.placeholder.com/1100x900" alt="#"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default HeroSection;
