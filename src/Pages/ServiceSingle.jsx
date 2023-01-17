import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import { Link } from 'react-router-dom';
import ServicesSingle from '../Components/ServicesSingle';

const ServiceSingle = () => {
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">Service Details</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><Link href="index.html">Home</Link></li>
                            <li><Link href="news-standard.html">Service</Link></li>
                            <li>Service Details</li>
                        </ul>
            </Breadcrumbs>
           <ServicesSingle />
        </div>

    );
}

export default ServiceSingle;
