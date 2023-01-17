import React from 'react';
import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <section className="watch-video overlay section">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12 ">
					<div className="content wow fadeInLeft" data-wow-delay="0.4s">
						<h2>احصل على حل أفضل لعملك</h2>
						<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<div className="watch-inner">
						<div className="video-head wow zoomIn" data-wow-delay="0.4s">
							<Link href="https://www.youtube.com/watch?v=Ao2XIhZ0JGs" className="video video-popup mfp-iframe">
								<i className="fa fa-play"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Video;
