import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Service from '../Service/Service';

const Services = () => {

    const { allData } = useContext(AuthContext);
    console.log(allData)

    return (
        <div>
            <div className='py-5 md:py-10 text-center'>
                {/* <h2 className='text-2xl font-bold'>EVENT MANAGEMENT SERVICES</h2>
                <p>We organize all type of social events</p> */}
                <h1 className=" text-5xl font-bold">Our Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;