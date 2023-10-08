import { useLoaderData } from 'react-router-dom';
import LatestProject from '../LatestProject/LatestProject';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const LatestProjects = () => {

    const allProject = useLoaderData()





    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (

        <div className='container mx-auto'>
            <div className='text-center font-bold text-3xl py-5'>
                <h2>LATEST PROJECTS</h2>
            </div>
            <div data-aos="zoom-in" className='grid md:grid-cols-2 lg:grid-cols-4 w-full px-5 rounded-lg '>
                {
                    allProject.map((project, idx) => <LatestProject key={idx} project={project}></LatestProject>)
                }
            </div>
        </div>
    );
};

export default LatestProjects;