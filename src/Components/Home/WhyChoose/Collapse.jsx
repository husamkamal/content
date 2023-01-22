import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';

const CollapseSection = ({title,desc}) => {
    const [open, setOpen] = useState(false)
    useEffect(()=>{
      document.addEventListener('click', ()=>{
        setOpen(false)
      }, true);
      return () => {
        document.removeEventListener('click',()=>{
          setOpen(false)
        }, true);
      };
    })
  return (
    <div className="card">
      <div className="card-header" id="headingThree">
        <Link
          className="collapsed"
          to=""
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineArrowLeft /> {title}
        </Link>
      </div>
      <Collapse in={open}>
      <div
        id="collapseThree"
        className="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <p>
          {desc}</p>
        </div>
      </div>
      </Collapse>
    </div>
  );
};

export default CollapseSection;