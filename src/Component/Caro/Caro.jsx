import React from 'react';
import './caro.css'
import { BiSolidQuoteRight, BiSolidQuoteLeft } from 'react-icons/bi'
const Caro = ({ aData }) => {
    console.log(aData);
    const { description, id, img, price, title, venue } = aData;
    return (
        <div className='relative  ' style={{
            backgroundImage: `url(${img})`,
            backgroundColor: 'rgba(0,0,0, .5)',
            backgroundBlendMode: 'overlay',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>

            <div className=" bottom-0 max-h-screen py-[30vh] lg:space-y-5 ">
                <h1 className='text-white text-2xl lg:text-5xl lg:font-bold font-semibold'>{title}</h1>
                <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold text-white'>Venue <br />{venue}</h2>
                <p className='text-xl font-semibold lg:text-5xl lg:font-bold text-white'>Price: {price}$</p>
                <div className='py-2'>
                    <button className='px-8 bg-pink-500 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-2' to="/login"  >Select </button>
                </div>
            </div>
        </div>
    );
};

export default Caro;