import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Global/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';

const ServicesSingle = () => {
    const {id} = useParams()
    const { isLoading, error, data } = useQuery('SingleServicesData', async ()  => {
        const response = await axios.get(`https://content-sa.com/api/v1/services/${id}/show`)
        return response.data.data
    })
      if(isLoading) return <Loading />
    return (
        <section className="section service-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="service-details">
                        <p>{data.about}</p>
                        <div className="service-single-img">
                            <img src={`${data.image}`} alt="#" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html:  data.description }} style={{fontFamily:'cairo !important'}} />
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
}

export default ServicesSingle;
