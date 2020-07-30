import React from 'react';
import BackgroundSlider from 'react-background-slider';
import sliderimage1 from '../images/slider-images/dsc_0161.jpg';
import sliderimage2 from '../images/slider-images/dsc_0018.jpg';
import sliderimage3 from '../images/slider-images/dsc_1439.jpg';
import { ScalarLeafs } from 'graphql/validation/rules/ScalarLeafs';

const ImageSlider = ({ className, ...props }) => {
    return (
        <BackgroundSlider
        className="bg-fixed"
            images={[sliderimage1, sliderimage2, sliderimage3]}
            duration={5}
            transition={2}
        />
    );
};


export default ImageSlider;