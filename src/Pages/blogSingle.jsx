import React, { useEffect } from "react";
import Breadcrumbs from "../Components/Global/Breadcrumbs";
import Blog from "../Components/Blog";
import { Link, useParams } from "react-router-dom";

const BlogSingle = () => {
  useEffect(()=>{
    window.scrollTo(0,0)

},[])
const {name} = useParams()
const blogName = name.replaceAll('-',' ')
  return (
    <div>
      <Breadcrumbs>
        {" "}
        <h1 className="page-title">{blogName}</h1>
        <ul className="custom-flex breadcrumb">
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <Link to="/">المدونة</Link>
          </li>
          <li>{blogName}</li>
        </ul>
      </Breadcrumbs>
      
              <Blog />
            
    </div>
  );
};

export default BlogSingle;
