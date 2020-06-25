import React from "react";
import cx from "classnames";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Parallax, ParallaxLayer } from 'react-spring';
import home from "../images/green-building.jpg";
import Timeline from '../components/timeline';
import IndexCarousel from '../components/carousel';
import builders from '../images/builders.jpg';
import ImageSlider from '../components/image-slider';

const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-indigo-700 hover:bg-indigo-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-red-700 hover:text-red-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};


function Index({ data }) {
  const services = data.services.edges;

  return (
    <>
      <div className="h-indexscreen" >
        <ImageSlider />
      </div>
      <Layout headerClass="relative bg-white">
        <SEO title="Home" />
        <div
          className="min-h-screen mt-8 mb-20 bg-size-full md:bg-size-screen bg-no-repeat flex flex-col items-right"
        >

          <div className="bg-fixed bg-center" style={{ backgroundImage: `url(${builders})` }}>
            <div className="mb-24 flex flex-col mt-10 md:mt-16" >
              <p className="mb-2 text-4xl text-gray-800 self-center">
                Нашите услуги
            </p>

              <div className="flex flex-wrap">
                {services.map(({ node }) => (
                  <Service
                    title={node.frontmatter.title}
                    url={node.frontmatter.path}
                    key={node.frontmatter.path}
                  >
                    {node.excerpt}
                  </Service>
                ))}
              </div>
            </div>

          </div>

        </div>
        <Timeline />
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
