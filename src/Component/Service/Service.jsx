import React from 'react';

const Service = ({ service }) => {
    const { event_type, image, price } = service;
    console.log(service)
    return (
        <div className=" px-10 py-20 space-y-3 text-white text-center rounded-md" style={{
            backgroundImage: `url(${image})`,
            backgroundColor: 'rgba(0,0,0, .5)',
            backgroundBlendMode: 'overlay',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
            <h2 className='text-3xl font-bold'>{event_type}</h2>
            <p className='text-xl font-semibold'>Budget: {price}</p>
            <button className='px-4 hover:bg-pink-500 hover:duration-500 border-2 rounded-full py-2'>Read More</button>
        </div>
    );
};

export default Service;