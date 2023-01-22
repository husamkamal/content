import React from "react";
import CollapseSection from "./Collapse";
import Number from "../NumberAnimation";

const WhyChoose = ({ data }) => {
  const {
    section8_subtitle,
    section8_title,
    section8_state1,
    section8_state2,
    section8_state3,
    section8_state4,
    section8_state_subtitle1,
    section8_state_subtitle2,
    section8_state_subtitle3,
    section8_state_subtitle4,
    section8_state_title1,
    section8_state_title2,
    section8_state_title3,
    section8_state_title4,
  } = data[10].value;
  const {value} = data[16]
  return (
    <div className="our-choose-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="choose-left">
              <div
                style={{ textAlign: "right" }}
                className="inner-section-title"
              >
                <h4>{section8_title}</h4>
                <h2 className="title">{section8_subtitle}</h2>
              </div>
              <div className="accordion" id="accordionExample">
                {value.map(e=>
                <CollapseSection
                  key={e.id}
                  title={e.name}
                  desc={e.description}
                />
                    )}                
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="our-choose-counter-area">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="our-choose-counter">
                    <sub>
                    <Number number={section8_state1} />
                      <sup>+</sup>
                    </sub>
                    <span className="title">{section8_state_title1}</span>
                    <p>{section8_state_subtitle1}</p>
                  </div>
                  <div className="our-choose-counter mt-top">
                  <sub>
                  <Number number={section8_state2} /> <sup>+</sup>
                    </sub>
                    <span className="title">{section8_state_title2}</span>
                    <p>{section8_state_subtitle2}</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="our-choose-counter small-mt-top">
                  <sub>
                  <Number number={section8_state3} /> <sup>+</sup>
                    </sub>
                    <span className="title">{section8_state_title3}</span>
                    <p>{section8_state_subtitle3}</p>
                  </div>
                  <div className="our-choose-counter mt-top">
                  <sub>
                  <Number number={section8_state4} /> <sup>+</sup>
                    </sub>
                    <span className="title">{section8_state_title4}</span>
                    <p>{section8_state_subtitle4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
