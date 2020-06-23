import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import iso9001 from "../certificates/CERT-10726_9001-2015_2017-2020.pdf";
import iso9001_eng from "../certificates/CERT-10726_9001-2015_2017-2020_eng.pdf";
import iso14001 from "../certificates/CERT-E2476_14001-2015_2017-2020.pdf";
import iso14001_eng from "../certificates/CERT-E2476_14001-2015_2017-2020_eng.pdf";
import ohsas18001 from "../certificates/CERT-O-1043_18001-2007_2017-2020.pdf";
import ohsas18001_eng from "../certificates/CERT-O-1043_18001-2007_2017-2020_eng.pdf";


const Testimonial = ({ title, name, jobTitle, children }) => {
  return (
    <div className="w-full sm:w-1/2 -mx-2 flex flex-col items-start">
      <div className="mx-2">
        <h2 className="text-3xl text-gray-800">{title}</h2>
        <p>
          <strong className="mr-2">{name}</strong>
          <span>{jobTitle}</span>
        </p>
      </div>
      <div className="w-full mt-6 mx-2">
        <blockquote className="testimonial-quote">{children}</blockquote>
      </div>
    </div>
  );
};

const Testimonials = ({ data }) => {
  const testimonials = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Testimonials" />
      <div className="mb-48 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-10 font-serif font-hairline">
          <h1 className="text-4xl md:text-5xl text-red-600">Сертификати</h1>
        </div>
        <div className="w-full mt-16 flex flex-row justify-between">
          <ul className="ml-10 list-disc" >
            <li><a className="underline" href={iso9001} target="_blank"><strong>ISO 9001:2015</strong></a> <a className="underline" href={iso9001_eng} target="_blank">(английска версия)</a></li>
            <li><a className="underline" href={iso14001} target="_blank"><strong>ISO 14001:2015</strong></a> <a className="underline" href={iso14001_eng} target="_blank">(английска версия)</a></li>
            <li><a className="underline" href={ohsas18001} target="_blank"><strong>OHSAS 18001:2007</strong></a> <a className="underline" href={ohsas18001_eng} target="_blank">(английска версия)</a></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Testimonials {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/testimonials/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            name
            jobtitle
          }
          html
        }
      }
    }
  }
`;

export default Testimonials;
