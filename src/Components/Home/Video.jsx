import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Video = ({data}) => {
  const { section2_title, section2_subtitle, section2_link } = data[10].value;
  return (
    <section  className="watch-video overlay section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 ">
            <div className="content wow fadeInLeft" data-wow-delay="0.4s">
              <h2>{section2_title}</h2>
              <p>
                 {section2_subtitle}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="watch-inner">
              <div className="video-head wow zoomIn" data-wow-delay="0.4s">
                <a
                  href={section2_link}
                  className="video video-popup mfp-iframe"
                >
                  <BsFillPlayFill/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
