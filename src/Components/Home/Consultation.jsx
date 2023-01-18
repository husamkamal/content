import React from "react";
import { BiCalendar } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
const Consultation = ({ data }) => {
  const { section7_subtitle, section7_title } = data[10].value;

  return (
    <div className="contact-area section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 offset-lg-2 col-12 wow zoomIn"
            data-wow-delay="0.4s"
          >
            <div className="section-title">
              <h4>{section7_title}</h4>
              <h2>{section7_subtitle}</h2>
            </div>
          </div>
        </div>
        <div className="contact-inner">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-12">
              <div className="contact-address-wrapper">
                <div className="inner-section-title">
                  <h4>اكتب هنا</h4>
                  <h2>ابقى على تواصل</h2>
                </div>
                <div className="single-info">
                  <div className="contact-address-icon">
                    <i className="icofont-calendar">
                      <BiCalendar />
                    </i>
                  </div>
                  <div className="contact-address-text">
                    <h3>الهاتف</h3>
                    <span>هاتف المكتب : 0029129102320</span>
                    <span>موبايل : 000 2324 39493</span>
                  </div>
                </div>
                <div className="single-info">
                  <div className="contact-address-icon">
                    <i className="icofont-envelope">
                      <RxEnvelopeClosed />
                    </i>
                  </div>
                  <div className="contact-address-text">
                    <h3>البريد الالكتروني</h3>
                    <span>البريد الإلكتروني الرئيسي : carly@website.com</span>
                    <span>استفسارات : Info@carly.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-12">
              <div className="contact-wrapper">
                <div className="contact-text">
                  <h3>نحن نقبل حاليا مشاريع جديدة. نود أن نسمع شكلك</h3>
                </div>
                <form
                  className="contacts-form"
                  method="post"
                  action="mail/mail.php"
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="contacts-icon contactss-name">
                        <input
                          type="text"
                          placeholder="الاسم"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="contacts-icon contactss-email">
                        <input
                          type="email"
                          placeholder="البريد الالكتروني"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contacts-icon contactss-message">
                        <textarea
                          name="message"
                          rows="7"
                          placeholder="الرسائل"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contacts-button">
                        <button type="submit">ارسال</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
