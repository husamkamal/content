import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Assets';

const NotFound = () => {
    return (
        <section className="error-page">
		<div className="table">
			<div className="table-cell">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
							<div className="error-inner">
								<img src={Image.error} alt="#" />
								<h2>الصفحة غير موجودة</h2>
								<p>عفوًا! الصفحة التي تبحث عنها غير موجودة. ربما تم نقله أو حذفه.</p>
								<div className="button">
									<Link href="index.html" className="btn">اذهب إلى الصفحة الرئيسية</Link>
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

export default NotFound;
