import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import Consultation from '../Components/Home/Consultation';

const Contanct = () => {
    return (
        <div>
            <Breadcrumbs>
                        <h1 class="page-title">الاتصال بنا</h1>
                        <ul class="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>الاتصال بنا</li>
                        </ul></Breadcrumbs>
                        <Consultation />
        </div>
    );
}

export default Contanct;
