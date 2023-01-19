import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Global/Loading";
import axios from "axios";
import { useQuery } from "react-query";

const Blog = () => {
  const {id} = useParams()
    const { isLoading, error, data } = useQuery('SingleBlogData', async ()  => {
        const response = await axios.get(`https://content-sa.com/api/v1/blog/${id}/show`)
        return response.data.data
    })
      if(isLoading) return <Loading />
  return (
    <section className="section blog-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-1 col-12">
            <div className="post-details">
              <div className="post-image animate-img">
                <Link href="#">
                  <img src={data.image} alt="#" />
                </Link>
              </div>
              <h2 className="post-title">
                <Link href="#">{data.name}
                </Link>
              </h2>
              <ul className="custom-flex post-meta">
                <li>
                  <Link href="#">
                    <i className="icofont-calendar"></i>
                    {data.created_at}
                  </Link>
                </li>
              </ul>
              <p>
                {data.description}
              </p>
              
                          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
