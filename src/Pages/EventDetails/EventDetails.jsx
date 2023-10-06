import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {

    const allEvent = useLoaderData()
    const param = useParams();

    const selectedEvent = allEvent?.find(aEvent => aEvent.id == param.id);

    const { event_type, description, image, price } = selectedEvent;
    return (
        <div>
            <div className="text-white text-center  space-y-3 lg:space-y-10 items-center py-20 px-5 lg:py-[20vh]" style={{
                backgroundImage: `url(${image})`,
                backgroundColor: 'rgba(0,0,0, .5)',
                backgroundBlendMode: 'overlay',
                backgroundPosition: 'center',
                backgroundSize: 'cover',

            }}>
                <h1 className="text-2xl lg:text-7xl font-bold">{event_type}</h1>
                <p className="  max-w-5xl text-sm mx-auto">{description}</p>
                <button className="px-4  hover:bg-pink-500 hover:duration-500 border-2 rounded-full py-2">Book Now</button>
            </div>
            <div className="text-center my-5 space-y-2 p-5">
                <h2 className='text-2xl font-bold'>Let our team to take care of your <span className="text-pink-500">{event_type}</span></h2>
                <p>Event Management are a piece of art, you will love it!</p>
                <button className="px-4 text-white bg-pink-500 hover:bg-pink-700 hover:duration-500 border-2 rounded-full py-2"> Contact Us</button>
            </div>
        </div>
    );
};

export default EventDetails;