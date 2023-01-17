import React from 'react';
import { Link } from 'react-router-dom';

const Mail = () => {
    return (
        <section className="mail-success">
		<div className="table">
			<div className="table-cell">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
							<div className="success-inner">
								<img src="images/mail-success.png" alt="#" />
								<h2> تم إرسال بريدك بنجاح!!</h2>
								<p>شكرًا على تواصلك معنا ، وسنرسل لك ملاحظاتك في أسرع وقت ممكن.</p>
								<div className="button">
									<Link href="index.html" className="btn">الذهاب للرئيسية</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Mail;
