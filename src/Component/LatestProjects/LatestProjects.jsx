import { useLoaderData } from 'react-router-dom';
import LatestProject from '../LatestProject/LatestProject';

import 'aos/dist/aos.css';



const LatestProjects = () => {

    const allProject = useLoaderData()







    return (

        <div className='container mx-auto'>
            <div className='text-center font-bold text-3xl py-5'>
                <h2>LATEST PROJECTS</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full px-5 rounded-lg '>
                {
                    allProject.map((project, idx) => <LatestProject key={idx} project={project}></LatestProject>)
                }
            </div>
        </div>
    );
};

export default LatestProjects;