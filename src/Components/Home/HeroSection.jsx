import React from "react";

const HeroSection = ({ data }) => {
  const { section1_title, section1_subtitle } = data[10].value;
  const src = data[8].value
  const bacground = data[9].value
  return (
    <section className="hero-slider">
      <div style={{backgroundImage:`url(${bacground})`}} className="single-slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="hero-text">
                <h1>{section1_title} </h1>
                <p>
                {section1_subtitle}</p>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="hero-image">
                <img src={`${src}`} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
