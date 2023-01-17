import React from 'react';

const Breadcrumbs = ({children}) => {
    return (
        <div className="breadcrumbs">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumbs-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Breadcrumbs;
