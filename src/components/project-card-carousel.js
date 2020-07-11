import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';


export default function ProjectCardCarousel(props) {
    return (
            <CarouselProvider
                naturalSlideHeight={4000}
                naturalSlideWidth={6000}
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
                <div className="flex flex-row justify-center"> 
                    {props.carousel.map((image, index) =>
                        <Dot slide={index}>
                            <img src={require(`../images/project-images/${props.name}/${image}`)} className="h-16 p-1"/>
                        </Dot>
                    )}
                </div>
            </CarouselProvider>
    );
};
