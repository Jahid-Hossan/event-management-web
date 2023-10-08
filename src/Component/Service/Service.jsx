import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({ service }) => {
    const { event_type, image, price, id } = service;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div data-aos="zoom-in-up" className=" px-10 py-20  space-y-3 text-white text-center hover: rounded-md" style={{
            backgroundImage: `url(${image})`,
            backgroundColor: 'rgba(0,0,0, .5)',
            backgroundBlendMode: 'overlay',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
            <h2 className='text-3xl font-bold'>{event_type}</h2>
            <p className='text-xl font-semibold'>Budget: {price}</p>
            <button className='px-4 hover:bg-pink-500 hover:duration-500 border-2 rounded-full py-2'><Link to={`/service/${id}`}>Read More</Link></button>
        </div>
    );
};

export default Service;