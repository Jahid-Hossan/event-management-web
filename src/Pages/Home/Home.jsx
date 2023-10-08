import React from 'react';
import Banner from '../../Component/Banner/banner';
import Services from '../../Component/Services/Services';
import LatestProjects from '../../Component/LatestProjects/LatestProjects';
import Focus from '../../Component/Focus/Focus';
import Banner2 from './../../Component/Banner2/Banner2';
import Banner3 from '../../Component/Banner3/Banner3';
import Banner4 from '../../Component/Banner4/Banner4';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <div className='py-5 md:py-10 text-center'>

                <h1 className=" text-5xl font-bold">Our Services</h1>
            </div>
            <Services></Services>
            <Banner3></Banner3>
            <LatestProjects></LatestProjects>
            <Banner4></Banner4>
            <Focus></Focus>
        </div>
    );
};

export default Home;