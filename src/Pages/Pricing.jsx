import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import PricingTable from '../Components/Home/PricingTable';

const Pricing = () => {
    return (
        <div>
            <Breadcrumbs>
    
            <h1 className="page-title">الاسعار</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>الاسعار</li>
                        </ul>            
            </Breadcrumbs>
            <PricingTable />
        </div>
    );
}

export default Pricing;
