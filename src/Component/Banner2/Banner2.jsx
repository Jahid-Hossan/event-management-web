import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner2 = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='md:flex items-center container mx-auto justify-around px-5 my-5 md:my-10 lg:my-14 '>

            <div data-aos="fade-up" className='text-center md:text-left my-5 md:w-1/2'>
                <h2 className='font-bold  text-2xl  lg:px-16 md: lg:text-6xl'>Make your Function <br /><span className=' text-pink-500 '>Memorable</span></h2>
            </div>
            <div data-aos="fade-up" className='md:w-1/2 md:-order-1 ' >
                <img className=' rounded-tl-[30%] rounded-br-[30%] border-pink-500 border-8' src="https://i.ibb.co/P9gH0NT/pexels-jonathan-borba-3263714.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner2;