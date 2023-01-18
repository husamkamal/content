import React from 'react';
import Breadcrumbs from '../Components/Global/Breadcrumbs';
import { Link } from 'react-router-dom';
import PortfolioSlider from '../Components/Home/Portfolio/PortfolioSlider';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../Components/Global/Loading';

const Portfolio = () => {
	const { isLoading, error, data } = useQuery('PortfolioData', async ()  => {
		const response = await axios.get('https://content-sa.com/api/v1/works/index')
		return response.data
	})
	if(isLoading) return <Loading />
    return (
        <div>
            <Breadcrumbs>
            <h1 className="page-title">معرض الاعمال</h1>
                        <ul className="custom-flex breadcrumb">
                            <li><a href="index.html">الرئيسية</a></li>
                            <li>معرض الاعمال</li>
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
						<ul className="pagination-list">
							<li><Link href="#"><i className="icofont-long-arrow-left"></i></Link></li>
							<li className="active"><a href="#">1</a></li>
							<li><Link href="#">2</Link></li>
							<li><Link href="#">3</Link></li>
							<li><Link href="#">4</Link></li>
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

export default Portfolio;
