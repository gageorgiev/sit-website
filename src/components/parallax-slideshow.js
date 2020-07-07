import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import ImageSlider from './image-slider';
import building from '../images/carousel-building1.jpg';


class ParallaxSlideshow extends React.Component {
    render() {
        return (
            <Parallax pages={1} ref={ref => (this.parallax = ref)}>
                <ParallaxLayer offset={0} speed={0.5}> 
                    <img src={building} />
                </ParallaxLayer>
            </Parallax>
        );
    };
};

export default ParallaxSlideshow;