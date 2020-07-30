import React from "react";
import { Link, withPrefix, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import ProjectsModule from '../components/projects-module';

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Обекти" />
      <div className="min-h-screen mb-48 flex flex-col items-start w-full">
        <div className="w-3/4 md:w-1/2 mt-10 font-hairline">
          <h1 className="text-4xl md:text-5xl text-red-600 garamond" >ОБЕКТИ</h1>
        </div>
        <div className="w-full">
          <ProjectsModule/> 
        </div>
      </div>
    </Layout>
  );
};

export default Projects;