import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LatestProject = ({ project }) => {
    console.log(project)
    const { name, image, description } = project;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className=' group relative  hover:-translate-y-6 duration-500 '>
            <img className='' src={image} alt="" />
            <div className='group-hover:-translate-y-10 py-2 block duration-500   w-full  bg-black absolute text-white text-center '>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default LatestProject;