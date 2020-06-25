import React from 'react';
import BackgroundSlider from 'react-background-slider';
import sliderimage1 from '../images/carousel-building1.jpg';
import sliderimage2 from '../images/carousel-building2.jpg';
import sliderimage3 from '../images/carousel-building3.jpg';


const ImageSlider = ({ className, ...props }) => {
    return (
        <BackgroundSlider
            images={[sliderimage1, sliderimage2, sliderimage3]}
            duration={6}
            transition={2}
        />
    );
};


export default ImageSlider;