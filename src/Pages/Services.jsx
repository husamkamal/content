import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import ServicesCard from '../Components/Home/Services/ServicesCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Components/Global/Loading';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

const Services = () => {
	const [page, setPage] = useState(1)
	const { isLoading,  data } = useQuery('ServicesData', async ()  => {
		const response = await axios.get(`https://content-sa.com/api/v1/services/index?page=${page}`)
		return response.data
	})
	useEffect(()=>{
		window.scrollTo(0,0)
	
	},[])
	const handleChange = (event, value) => {
		setPage(value);
	  };
	 
	if(isLoading) return <Loading />
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">خدماتنا</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><Link to="/">الرئيسية</Link></li>
                            <li>خدماتنا</li>
                        </ul>
            </Breadcrumbs>
            <section className="services extra-page section">
		<div className="container">
			<div className="row">
				{data.data.map(e=>{
					const name = e.name.replace(/\s+/g, '-')
				return 	<ServicesCard
					key={e.id}
					src={e.image}
					title={e.name}
					desc={e.about}
					link={`/service-single/${name}/${e.id}`}
					/>
				}
			)}
				</div>
			<div className="row">
				<div className="col-12">
					<div className="pagination center justify-content-lg-center">
					<Pagination  count={data.pagination.total_pages} page={page} onChange={handleChange} />
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    );
}

export default Services;
