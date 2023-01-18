import React from "react";
import { Link } from "react-router-dom";
// import LastNewsCard from "../LastNewsCard";
import BlogCard from "../BlogCard";

const LatestNews = ({data}) => {
    const {value} = data[11]
    const { section9_subtitle, section9_title } = data[10].value;

  return (
    <div className="latest-news-area section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 offset-lg-2 col-12 wow zoomIn"
            data-wow-delay="0.4s"
          >
            <div className="section-title">
              <h4>{section9_title} </h4>
              <h2>{section9_subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="letast-news-grid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="latest-news">
                <div className="row">
                    {value.map(e=>
                  <BlogCard key={e.id} src={e.image} title={e.name}/>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
