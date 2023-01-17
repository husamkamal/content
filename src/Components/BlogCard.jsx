import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({title,subtitle,desc,link}) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
                    <div className="letest-news-item">
                      <span>{title}</span>
                      <h4 className="title">
                        <Link to="/blog">
                        {subtitle}</Link>
                      </h4>
                      <p>
                      {desc}</p>
                      <div className="button">
                        <Link className="btn3" to={link}>
                          قراءة المزيد
                        </Link>
                      </div>
                    </div>
                  </div>
    );
}

export default BlogCard;
