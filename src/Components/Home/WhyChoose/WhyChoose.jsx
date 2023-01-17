import React from 'react';
import CollapseSection from './Collapse';

const WhyChoose = () => {
    return (
        <div className="our-choose-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
					<div className="choose-left">
						<div style={{textAlign:'right'}} className="inner-section-title">
							<h4>أفضل وكالة لك</h4>
							<h2 className="title">لماذا تختار حلولنا</h2>
						</div>
						<div className="accordion" id="accordionExample">
						<CollapseSection
							title={'نظام هندسة الإدارة'}
							desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
							/> 
							<CollapseSection
							title={'نظام هندسة الإدارة'}
							desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
							/> 
							<CollapseSection
							title={'نظام هندسة الإدارة'}
							desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
							/>
							<CollapseSection
							title={'نظام هندسة الإدارة'}
							desc={'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'}
							/>
						</div>
					</div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="our-choose-counter-area">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="our-choose-counter">
                                    <sub><span className="number">569</span> <sup>+</sup></sub>
                                    <span className="title">مشروع مكتمل</span>
                                    <p>ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً</p>
                                </div>
                                <div className="our-choose-counter mt-top">
                                    <sub><span className="number">783</span> <sup>+</sup></sub>
                                    <span className="title">شركاء العمل</span>
                                    <p>ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="our-choose-counter small-mt-top">
                                    <sub><span className="number">356</span> <sup>+</sup></sub>
                                    <span className="title">عملاء سعداء</span>
                                    <p>ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً</p>
                                </div>
                                <div className="our-choose-counter mt-top">
                                    <sub><span className="number">894</span> <sup>+</sup></sub>
                                    <span className="title">IT Consultant</span>
                                    <p>ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً</p>
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

export default WhyChoose;
