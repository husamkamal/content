import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({src,title}) => {
    return (
      <div
      className="col-lg-4 col-md-6 col-12 wow fadeInUp"
      data-wow-delay="0.8s"
    >
      <Link to={'/'}>
      <div className="letest-news-item">
        <div className="service-image">
          <img src={src} alt="src" />
        </div>
        <h4 className="title">
          <span >{title}</span>
        </h4>
        
      </div>
      </Link>
    </div>
    );
}

export default BlogCard;
