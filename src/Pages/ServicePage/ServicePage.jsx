import Services from "../../Component/Services/Services";


const ServicePage = () => {


    return (
        <div className="container mx-auto">
            <div className=" text-center mx-auto  py-[20vh]" style={{
                backgroundImage: "url(https://i.ibb.co/Fzb2kbZ/pexels-asad-photo-maldives-169185.jpg)",
                backgroundColor: 'rgba(0,0,0, .5)',
                backgroundBlendMode: 'overlay',
                backgroundPosition: 'center',
                backgroundSize: 'cover',

            }}>
                <h2 className=' font-bold text-white  text-2xl p-5 lg:text-6xl'>Our Servies</h2>
                <p className='text-white mx-auto max-w-2xl px-5'>Are you looking for A unique and creative design for your event? You came to the right place. We Designing and Decorate for any cultural and social event.</p>
            </div>
            <div className="my-5 lg:my-10 px-5 text-center">
                <h2 className='text-2xl font-bold'>EVENT MANAGEMENT SERVICES</h2>
                <p>We organize all type of social events</p>
            </div>
            <Services></Services>
        </div>
    );
};

export default ServicePage;