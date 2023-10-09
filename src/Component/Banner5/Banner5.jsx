import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner5 = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='bg-white relative '>
            <div className='py-10 px-5 md:flex  items-center container mx-auto justify-around  '>

                <div data-aos="fade-up" className=' space-y-3 text-center lg:px-16 md:text-left my-5 md:w-1/2'>
                    <h4 className='text-xl lg:text-3xl font-semibold'>Who We Are</h4>
                    <h2 className='font-bold  text-2xl   md: lg:text-6xl'>Planner for Your <br />Perfect Event</h2>
                    <p className='text-base'>We are dedicated to creating unforgettable event experiences. With a team of passionate event professionals, we specialize in designing, planning, and executing a wide range of events.</p>
                    <h2 className='text-xl lg:text-3xl font-semibold'>Services Offered:</h2>
                    <ul className='list-disc list-inside'>
                        <li>Event Planning and Coordination</li>
                        <li>Venue Selection and Management</li>
                        <li>Vendor Sourcing and Management</li>
                        <li>Budgeting and Financial Management</li>
                        <li>Event Marketing and Promotion</li>
                        <li>On-Site Event Management</li>
                        <li>Post-Event Evaluation and Feedback</li>
                    </ul>
                    <button className='px-8 bg-pink-500 hover:bg-white hover:text-black text-white font-medium md:font-semibold hover:duration-500 border-2 rounded-full py-2' to="/login"  >Get A Free Quote</button>
                </div>
                <div data-aos="fade-up" className='md:w-1/2  md:-order-1 ' >
                    <img className=' rounded-tl-[30%]  rounded-br-[30%] border-pink-500 border-8' src="https://i.ibb.co/GcxtZhR/pexels-kasonya-wilcox-3012214-4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner5;