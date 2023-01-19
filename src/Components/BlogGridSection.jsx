import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Loading from "./Global/Loading";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

const BlogGridSection = () => {
  const [page, setPage] = useState(1)
  const { isLoading, error, data } = useQuery('BlogData', async ()  => {
    const response = await axios.get(`https://content-sa.com/api/v1/blog/index?page=${page}`)
    return response.data
})
const handleChange = (event, value) => {
  setPage(value);
  };
  if(isLoading) return <Loading />
  console.log(data)
  return (
    <div className="latest-news-area extra-page section">
      <div className="letast-news-grid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="latest-news">
                <div className="row">
                  {data.data.map(e=>

                    
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
                    <Pagination  count={data.pagination.total_pages} page={page} onChange={handleChange} />

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
