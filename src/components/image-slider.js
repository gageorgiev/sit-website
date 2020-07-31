import React from 'react';
import BackgroundSlider from 'react-background-slider';
import sliderimage1 from '../images/slider-images/dsc_0161.jpg';
import sliderimage2 from '../images/slider-images/dsc_1468.jpg';
import sliderimage3 from '../images/slider-images/dsc_1438.jpg';

const ImageSlider = ({ className, ...props }) => {
    return (
        <BackgroundSlider
        className="bg-fixed"
            images={[sliderimage1, sliderimage3, sliderimage2]}
            duration={5}
            transition={2}
        />
    );
};


export default ImageSlider;