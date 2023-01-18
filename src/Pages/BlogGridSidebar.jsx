import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import BlogGridSection from '../Components/BlogGridSection';

const BlogGridSidebar = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 class="page-title"> المدونة</h1>
                        <ul class="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>المدونة</li>
                        </ul>
            </Breadcrumbs>
            
    <div class="latest-news-area extra-page section">
        <div class="letast-news-grid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-12">
                        <BlogGridSection/>
                    </div>
                    
        </div>
        </div>
        </div>
        </div>

        </div>
    );
}

export default BlogGridSidebar;
