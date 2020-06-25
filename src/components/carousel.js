import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import building1 from '../images/carousel-building1.jpg';
import building2 from '../images/carousel-building2.jpg';
import building3 from '../images/carousel-building3.jpg';
 


class IndexCarousel extends Component {
    render() {
        return (
            <Carousel> 
                <div> 
                    <img src={building1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={building2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={building3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default IndexCarousel;