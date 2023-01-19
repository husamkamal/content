import axios from "axios";
import { useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
const Consultation = ({ data }) => {
	const navigate = useNavigate()
  const { section7_subtitle, section7_title } = data[10].value;
  const email = data[6].value;
  const phon = data[7].value;
  const { register, handleSubmit,  formState } = useForm();
  const onSubmit = async data => { 
    try {
      await axios.post('https://content-sa.com/api/v1/home/store-contact-us',data,{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      navigate('/success')
    } catch (error) {

    }

}
  return (
    <div className="contact-area section">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-5 offset-lg-0 col-12 wow zoomIn"
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
                    <span>{phon}</span>
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
                    <span>{email} </span>
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
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="contacts-icon contactss-name">
                        <input
                          type="text"
                          placeholder="الاسم"
                          // required="required"
                          {...register("name", { required: 'name is required' })}
						/>
                      {formState.errors.name?.message &&<span style={{color:'red', marginTop:'-2rem'}}>{formState.errors.name?.message}</span>}
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="contacts-icon contactss-email">
                        <input
                          type="text"
                          placeholder="البريد الالكتروني"
                          // required
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        })}
                        />
                        {formState.errors.email?.message &&<span style={{color:'red', marginTop:'-2rem'}}>{formState.errors.email?.message}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contacts-icon contactss-message">
                        <textarea
                          name="message"
                          rows="7"
                          placeholder="الرسائل"
                          {...register("description", { required: 'message is required' })}
                        ></textarea>
                            {formState.errors.description?.message &&<span style={{color:'red', marginTop:'-2rem'}}>{formState.errors.description?.message}</span>}
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
