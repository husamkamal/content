import React, { useState } from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import { Link } from 'react-router-dom';
import ServicesCard from '../Components/Home/Services/ServicesCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Components/Global/Loading';
import { Pagination } from 'react-bootstrap';

const Services = () => {
	const [page, setPage] = useState(1)
	const { isLoading, error, data } = useQuery('ServicesData', async ()  => {
		const response = await axios.get('https://content-sa.com/api/v1/services/index')
		return response.data
	})
	const handleClick= (e)=>{
		setPage(e)
	}
	if(isLoading) return <Loading />
	console.log(data)
let items = [];
for (let number = 1; number <= data.pagination.total_pages; number++) {
  items.push(
    <Pagination.Item  onClick={()=>handleClick(number)} key={number} active={number === page}>
      {number}
    </Pagination.Item>,
  );
}	
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">خدماتنا</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>خدماتنا</li>
                        </ul>
            </Breadcrumbs>
            <section className="services extra-page section">
		<div className="container">
			<div className="row">
				{data.data.map(e=>
				<ServicesCard
			key={e.id}
			src={e.image
			}
			title={e.name}
			desc={e.about}
			link={`/service-single/${e.id}`}
			/>
			)}
				</div>
			<div className="row">
				<div className="col-12">
					<div className="pagination center justify-content-lg-center">
						<ul className="pagination-list ">
							<li><Link href="#"><i className="icofont-long-arrow-left"></i></Link></li>
							<Pagination>{items}</Pagination>
							<li><Link href="#"><i className="icofont-long-arrow-right"></i></Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    );
}

export default Services;
