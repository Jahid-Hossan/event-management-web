import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Caro from '../Caro/Caro';
import Banner5 from '../Banner5/Banner5';


const Carouselgallery = () => {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {

        fetch('/gallery.json')
            .then(res => res.json())
            .then(data => setGalleryData(data))
    }, [])
    return (
        <div className='container px-5  mx-auto'>

            <Carousel >
                {
                    galleryData.map(aData => <Caro key={aData.id} aData={aData}></Caro>)
                }

            </Carousel>
            <div>
                <Banner5></Banner5>
            </div>
        </div>
    );
};

export default Carouselgallery;