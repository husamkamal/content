import React, { useState } from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import { Link } from 'react-router-dom';
import PortfolioSlider from '../Components/Home/Portfolio/PortfolioSlider';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../Components/Global/Loading';
import { Pagination } from '@mui/material';

const Portfolio = () => {
	const [page, setPage] = useState(1)
	const { isLoading, error, data } = useQuery('PortfolioData', async ()  => {
		const response = await axios.get(`https://content-sa.com/api/v1/works/index?${page}`)
		return response.data
	})
	const handleChange = (event, value) => {
		setPage(value);
	  };
	if(isLoading) return <Loading />
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">معرض الاعمال</h1>
                        <ul className="custom-flex breadcrumb">
                            <li>معرض الاعمال</li>
                            <li><a href="index.html">الرئيسية</a></li>
                        </ul>            
            </Breadcrumbs>
            <section id="portfolio" className="portfolio section">
		<div className="container">
			<div className="row">
				{
					data.data.map(e=>
				<div key={e.id} className="col-lg-6 col-12">
				<PortfolioSlider src={e.image} />
				</div>

					)
				}
			</div>
			<div className="row">
				<div className="col-12">
					<div className="pagination center justify-content-center">
					<Pagination  count={data.pagination.total_pages} page={page} onChange={handleChange} />
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    );
}

export default Portfolio;
