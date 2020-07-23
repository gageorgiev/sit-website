import React from "react";
import { Link, withPrefix, graphql } from "gatsby";
import Layout from "../components/layout";
import team from "../images/undraw_hang_out_h9ud.svg";
import SEO from "../components/seo";
import ProjectCard from '../components/project-card';
import NewProjectCard from '../components/new-project-card';
import projects from '../../static/projects.json';
import ProjectCardCarousel from "../components/project-card-carousel";


const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Проекти" />
      <div className="min-h-screen mb-48 flex flex-col items-start">
        <div className="w-3/4 md:w-1/2 mt-10 font-hairline">
          <h1 className="text-4xl md:text-5xl text-red-600 font-medium" >ПРОЕКТИ</h1>
        </div>
        <div className="w-full flex flex-wrap justify-around pt-4" >
          {projects.map(project =>
            <Link className="pb-4" to={`/projects/${project.name}`}>
              <NewProjectCard
                name={project.name}
                description={project.description}
                frontimage={project.frontimage}
                client={project.client}
                carousel={project.carousel}
                displayname={project.displayname}
              />
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
