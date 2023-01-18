import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import BlogGridSection from '../Components/BlogGridSection';

const BlogGrid = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">المدونة</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>المدونة</li>
                        </ul>
            </Breadcrumbs>
            
                    <BlogGridSection />
                    
        </div>
    );
}

export default BlogGrid;
