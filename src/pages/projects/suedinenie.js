import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { CarouselProvider, Dot, Slide, Slider, Image } from 'pure-react-carousel';
import { Spring } from 'react-spring/renderprops';

export default function Suedinenie(props) {
    const [hovering, setHovering] = React.useState(false);

    return (
        <Layout>
            <SEO title="Съединение" />
            <div className="flex flex-wrap mt-10 mb-20">
                <div className="w-full flex flex-col items-start">
                    <div className="w-3/4 font-hairline">
                        <h1 className="text-4xl md:text-5xl text-red-600 font-medium">СЪЕДИНЕНИЕ</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around w-full">
                        <Spring
                            to={{
                                transform: `scale(${hovering ? 1.1 : 1})`,
                                margin: `${hovering ? '1rem' : '0rem'}`
                            }}
                        >
                            {props => <div
                                onMouseEnter={() => setHovering(true)}
                                onMouseLeave={() => setHovering(false)}
                                className="w-full md:w-1/4 h-32 mt-10 px-6 py-4 manrope"
                                style={{
                                    boxShadow:
                                        "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)",
                                    transform: props.transform,
                                    marginBottom: props.margin,
                                    marginRight: props.margin,
                                }}
                            >
                                <p><strong>Клиент: </strong>XXX</p>
                            </div>}
                        </Spring>
                        <div className="h-96 w-full md:w-2/3">
                            <CarouselProvider
                                naturalSlideWidth={6000}
                                naturalSlideHeight={4000}
                                totalSlides={2}
                                isPlaying={true}
                                interval={2000}
                            >
                                <Slider>
                                    <Slide index={0} >
                                        <Image src={require('../../images/project-images/suedinenie/dsc_1468.jpg')} />
                                    </Slide>
                                    <Slide index={1}>
                                        <Image src={require('../../images/project-images/suedinenie/dsc_1471.jpg')} />
                                    </Slide>
                                </Slider>
                                <div className="flex flex-row justify-center">
                                    <Dot slide={0}>
                                        <img src={require('../../images/project-images/suedinenie/dsc_1468.jpg')} className="h-16 p-1" />
                                    </Dot>
                                    <Dot slide={1}>
                                        <img src={require('../../images/project-images/suedinenie/dsc_1471.jpg')} className="h-16 p-1" />
                                    </Dot>
                                </div>
                            </CarouselProvider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:h-24" />
        </Layout>
    );
}