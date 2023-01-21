import React, { useEffect } from "react";
import Breadcrumbs from "../Components/Global/Breadcrumbs";
import Blog from "../Components/Blog";
import { Link } from "react-router-dom";

const BlogSingle = () => {
  useEffect(()=>{
    window.scrollTo(0,0)

},[])
  return (
    <div>
      <Breadcrumbs>
        {" "}
        <h1 className="page-title">تفاصيل الأخبار</h1>
        <ul className="custom-flex breadcrumb">
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <Link to="/">الأخبار</Link>
          </li>
          <li>تفاصيل الأخبار</li>
        </ul>
      </Breadcrumbs>
      
              <Blog />
            
    </div>
  );
};

export default BlogSingle;
