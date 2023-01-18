import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Global/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';

const ServicesSingle = () => {
    const {id} = useParams()
    console.log(id)
    const { isLoading, error, data } = useQuery('SingleServicesData', async ()  => {
        const response = await axios.get(`https://content-dev.com/content/public/api/v1/services/${id}/show`)
        return response.data.data
    })
      if(isLoading) return <Loading />
      console.log(data)
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
                        <p>{data.description}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
}

export default ServicesSingle;
