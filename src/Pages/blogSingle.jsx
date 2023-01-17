import React from "react";
import Breadcrumbs from "../Components/Global/Breadcrumbs";
import Blog from "../Components/Blog";
import { Link } from "react-router-dom";

const BlogSingle = () => {
  return (
    <div>
      <Breadcrumbs>
        {" "}
        <h1 class="page-title">تفاصيل الأخبار</h1>
        <ul class="custom-flex breadcrumb">
          <li>
            <a href="index.html">الرئيسية</a>
          </li>
          <li>
            <a href="news-standard.html">الأخبار</a>
          </li>
          <li>تفاصيل الأخبار</li>
        </ul>
      </Breadcrumbs>
      
              <Blog />
            
    </div>
  );
};

export default BlogSingle;
