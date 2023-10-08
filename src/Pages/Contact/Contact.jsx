import React from 'react';

const Contact = () => {
    return (
        <div className=''>
            <div className=" text-center mx-auto  py-[20vh]" style={{
                backgroundImage: "url(https://i.ibb.co/g7dkMMR/pexels-negative-space-33999.jpg)",
                backgroundColor: 'rgba(0,0,0, .5)',
                backgroundBlendMode: 'overlay',
                backgroundPosition: 'center',
                backgroundSize: 'cover',

            }}>
                <h2 className=' font-bold text-white  text-2xl p-5 lg:text-6xl'>Contact</h2>
                {/* <p className='text-white mx-auto max-w-2xl px-5'>Are you looking for A unique and creative design for your event? You came to the right place. We Designing and Decorate for any cultural and social event.</p> */}
            </div>
            <div className='container mx-auto my-5 px-5 lg:flex gap-5 lg:gap-10'>
                <div className='lg:w-1/4 text-center lg:text-left space-y-2'>
                    <h2 className='text-5xl font-bold '>Get in touch</h2>
                    <p className='py-5'>We are waiting for you on our office in Feni or in other way, you can contact us via the contact form below to discuss your project, your idea.</p>
                    <p className='text-lg py-5 font-semibold'>Feni, Chittagong,<br /> Mahipal plaza.</p>
                    <div className=''>
                        <h2><span className='text-lg font-semibold'>Email:</span> <span className='text-base'>jahidhossen02@gmail.com</span></h2>
                        <h2><span className='text-lg font-semibold'>Phone:</span> +88 1627095969</h2>
                        <h2><span className='text-lg font-semibold'>Phone:</span> +966 538171094</h2>
                    </div>
                </div>
                <form className='grid grid-cols-1 md:grid-cols-2 lg:w-3/4 gap-4'>
                    <div className='space-y-2'>
                        <h5 className='text-lg font-semibold'>Your Name (required)</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2'>
                        <h5 className='text-lg font-semibold'>Your Email (required)</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2'>
                        <h5 className='text-lg font-semibold'>Your Contact Number (required)</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2'>
                        <h5 className='text-lg font-semibold'>Subject</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2 col-span-2 w-full'>
                        <h5 className='text-lg font-semibold'>Your Message</h5>
                        <textarea className=' border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button className='btn bg-pink-500'>SEND EMAIL</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;