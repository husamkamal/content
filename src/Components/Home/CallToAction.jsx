import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="meet-us-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div style={{    backgroundImage: "url('https://via.placeholder.com/1170x300')"
}} className="meet-us-item bg_cover d-flex align-items-center justify-content-between">
                        <h2 className="title">التحضير لك <br/> نجاح الأعمال</h2>
                        <div className="button">
							<Link className="btn" href="#">قابلنا <i className="icofont-long-arrow-right"></i></Link>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CallToAction;
