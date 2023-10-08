import './banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='banner h-screen flex items-center container mx-auto    '>
            <div data-aos="zoom-in" className=''>
                <h2 className='w-3/5 font-bold text-white text-2xl p-5 lg:px-16 md: lg:text-6xl'>We organize & build  creative <span className=' text-pink-500 '>Social Events</span></h2>
                <p className='text-white w-4/5 lg:w-2/4 px-5 lg:px-16'>Our commitment to excellence shines through in every detail, from meticulous planning to flawless execution. </p>
            </div>
        </div>
    );
};

export default Banner;