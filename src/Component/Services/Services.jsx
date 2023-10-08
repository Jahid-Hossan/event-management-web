import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Service from '../Service/Service';

const Services = () => {

    const { allData } = useContext(AuthContext);
    console.log(allData)

    return (
        <div>

            <div className='grid grid-cols-1 px-5 container mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {
                    allData?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;