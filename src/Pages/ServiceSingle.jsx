import React, { useEffect } from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import { Link } from 'react-router-dom';
import ServicesSingle from '../Components/ServicesSingle';

const ServiceSingle = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    
    },[])
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">تفاصيل الخدمة</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><Link href="index.html">الرئيسية</Link></li>
                            <li><Link href="news-standard.html">الخدمات </Link></li>
                            <li>تفاصيل الخدمة</li>
                        </ul>
            </Breadcrumbs>
           <ServicesSingle />
        </div>

    );
}

export default ServiceSingle;
