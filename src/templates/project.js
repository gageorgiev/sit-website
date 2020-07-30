import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
//import { CarouselProvider, Dot, Slide, Slider, Image } from 'pure-react-carousel';
import Slider from 'infinite-react-carousel';
import { Spring } from 'react-spring/renderprops';

const Project = ({ pageContext }) => {
    const [hovering, setHovering] = React.useState(false);

    return (
        <Layout>
            <SEO title={pageContext.displayname} />
            <div className="flex flex-wrap mt-10 mb-20">
                <div className="w-full flex flex-col items-start">
                    <div className="w-3/4 font-hairline">
                        <h1 className="text-4xl md:text-5xl text-red-600 garamond uppercase">{pageContext.displayname}</h1>
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
                                <p><strong>Възложител: </strong>{pageContext.client}</p>
                                <p><strong>Местоположение: </strong>{pageContext.place}</p>
                                <p><strong>Година на завършване: </strong>{pageContext.endyear}</p>
                            </div>}
                        </Spring>
                        <div className="h-96 w-full md:w-2/3">
                            <Slider arrows={false} dots={true} >
                                {pageContext.carousel.map(photo =>
                                    <div>
                                        <img src={require(`../images/project-images/${pageContext.name}/${photo}`)} />
                                    </div>    
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:h-24" />
        </Layout>
    );
}


export default Project;



                            /*<CarouselProvider
                                naturalSlideWidth={6000}
                                naturalSlideHeight={4000}
                                totalSlides={pageContext.carousel.length}
                                isPlaying={true}
                                interval={2000}
                            >
                                <Slider> 
                                    {pageContext.carousel.map((photo, index) =>
                                        <Slide index={index} >
                                            <Image src={require(`../images/project-images/${pageContext.name}/${photo}`)} />
                                        </Slide>
                                    )}
                                </Slider>
                                <div className="flex flex-row justify-around">
                                    {pageContext.carousel.map((photo, index) =>
                                    <Dot slide={index}>
                                        <img src={require(`../images/project-images/${pageContext.name}/${photo}`)} className="h-16 p-1" />
                                    </Dot>
                                    )}
                                </div>
                            </CarouselProvider>*/