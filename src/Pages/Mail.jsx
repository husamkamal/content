import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Assets';

const Mail = () => {
    return (
        <section className="mail-success">
		<div className="table">
			<div className="table-cell">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-12">
							<div className="success-inner">
								<img src={Image.mail} alt="#" />
								<h2> تم إرسال بريدك بنجاح!!</h2>
								<p>شكرًا على تواصلك معنا ، وسنرسل لك ملاحظاتك في أسرع وقت ممكن.</p>
								<div  className="  button">
									<Link to={'/'} className="content-button btn">الذهاب للرئيسية</Link>
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
