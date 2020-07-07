import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';


export default function ProjectCardCarousel(props) {
    return (
            <CarouselProvider
                naturalSlideHeight={10000}
                naturalSlideWidth={10000}
                totalSlides={props.carousel.length}
                isPlaying={true}
                interval={2000}
            >
                <Slider>
                    {props.carousel.map((image, index) => 
                        <Slide index={index}>
                            <Image src={require(`../images/project-images/${props.name}/${image}`)} />
                        </Slide>
                    )}
                </Slider>
            </CarouselProvider>
    );
};
