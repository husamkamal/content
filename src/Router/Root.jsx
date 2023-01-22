import React from 'react';
import NavBar from '../Components/Global/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Global/Footer';
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import Loading from '../Components/Global/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';
const Root = () => {
    const { isLoading, error, data } = useQuery('FooterNav', async ()  => {
        const response = await axios.get('https://content-sa.com/api/v1/home/index',{headers: {
            "Cache-Control": null,
            "X-Requested-With": null,
        }})
        return response.data.data
    })
      if(isLoading) return <Loading />
    return (
        <div>
            <NavBar data={data} />
            <Outlet />
            <Footer data={data}/>
            {
                window.innerWidth< 600 && 
            <div onClick={() => {
                const url = `http://api.whatsapp.com/send?phone=${data[5].value}`;
                window.open(url);
              }} style={{position:'fixed',zIndex: 100, boxShadow: '3px 4px 3px #999', bottom:'1rem',borderRadius:'50%', left:'1rem'}}>
            <IoLogoWhatsapp style={{width:'3rem', height:'3rem', position:'relative',color:'green'}} />
            </div>
            }
            
            <div  style={{position:'fixed',zIndex: 100, boxShadow: '4px 3px 4px #999', bottom:'1rem',borderRadius:'10%', right:'1rem'}}>
            <BsFillArrowUpSquareFill onClick={()=>{
                window.scrollTo(0, 0);
            }} style={{width:'3rem', height:'3rem', position:'relative',color:'#2C3075'}} />
            </div>
        </div>
    );
}

export default Root;
