import React from "react";
import BlogCard from "./BlogCard";
import Loading from "./Global/Loading";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const BlogGridSection = () => {
  const { isLoading, error, data } = useQuery('BlogData', async ()  => {
    const response = await axios.get('https://content-sa.com/api/v1/blog/index')
    return response.data.data
})
  if(isLoading) return <Loading />
  return (
    <div className="latest-news-area extra-page section">
      <div className="letast-news-grid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="latest-news">
                <div className="row">
                  {data.map(e=>

                    
                <BlogCard 
                key={e.id}
                title={e.name}
                src={e.image}
                link={`/blog-single/${e.name}/${e.id}`}
                />
                    )}
                  
                <div className="row">
                  <div className="col-12">
                    <div className="pagination center justify-content-lg-center">
                      <ul className="pagination-list">
                        <li>
                          <a href="#">
                            <i className="icofont-long-arrow-left"></i>
                          </a>
                        </li>
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icofont-long-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
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

export default BlogGridSection;
