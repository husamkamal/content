import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import BlogGridSection from '../Components/BlogGridSection';

const BlogGrid = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 class="page-title">المدونة</h1>
                        <ul class="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>المدونة</li>
                        </ul>
            </Breadcrumbs>
            
                    <BlogGridSection />
                    
        </div>
    );
}

export default BlogGrid;
