import React from 'react';
import NavBar from '../Components/Global/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Global/Footer';
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
const Root = () => {
    // const top = () =>{
    //     window.scrollTo(0,  offsetTop)
    // }
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            {
                window.innerWidth< 600 && 
            <div style={{position:'fixed',zIndex: 100, boxShadow: '3px 4px 3px #999', bottom:'1rem',borderRadius:'50%', left:'1rem'}}>
            <IoLogoWhatsapp style={{width:'3rem', height:'3rem', position:'relative',color:'green'}} />
            </div>
            }
            
            <div  style={{position:'fixed',zIndex: 100, boxShadow: '4px 3px 4px #999', bottom:'1rem',borderRadius:'10%', right:'1rem'}}>
            <BsFillArrowUpSquareFill style={{width:'3rem', height:'3rem', position:'relative',color:'#2C3075'}} />
            </div>
        </div>
    );
}

export default Root;
