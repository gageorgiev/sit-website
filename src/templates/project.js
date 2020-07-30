import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
                            </div>}
                        </Spring>
                            <Slider arrows={false} dots={true} className="h-96 w-full md:w-2/3">
                                {pageContext.carousel.map((photo, index) =>
                                    <div>
                                        <img src={require(`../images/project-images/${pageContext.name}/${photo}`)} alt={`${pageContext.name}-${index}`} />
                                    </div>    
                                )}
                            </Slider>
                    </div>
                </div>
            </div>
            <div className="lg:h-24" />
        </Layout>
    );
}


export default Project;
