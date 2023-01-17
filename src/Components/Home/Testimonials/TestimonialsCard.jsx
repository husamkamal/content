import React from 'react';

const TestimonialsCard = ({title, name,  major}) => {
    return (
        <div className="slide-item">
        <div className="testimonial-box">
            <p className="text">{title}</p>
            <h4 className="name"><a href="#">{name}</a></h4>
            <p className="deg"><span>{major}</span></p>
        </div>
    </div>
    );
}

export default TestimonialsCard;
