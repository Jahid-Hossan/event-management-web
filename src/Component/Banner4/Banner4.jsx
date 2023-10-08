import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner4 = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='bg-white relative '>
            <div className='py-10 px-5 md:flex  items-center container mx-auto justify-around  '>

                <div data-aos="fade-left" className='text-center md:text-left my-5 md:w-1/2'>
                    <h2 className='font-bold  text-2xl  lg:px-16 md: lg:text-6xl'>Make your Function <br /><span className=' text-pink-500 '>Memorable</span></h2>
                </div>
                <div data-aos="fade-right" className='md:w-1/2 md:-order-1 ' >
                    <img className=' rounded-tl-[30%] rounded-br-[30%] border-pink-500 border-8' src="https://i.ibb.co/RTtg69s/lucas-law-MTFq-QH1trs-A-unsplash-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner4;