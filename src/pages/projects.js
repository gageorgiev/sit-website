import React from "react";
import { Link, withPrefix, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NewProjectCard from '../components/new-project-card';
import projects from '../../static/projects.json';

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

/*{projects.map(project =>
  <Link className="pb-8" to={`/projects/${project.name}`}>
    <NewProjectCard
      name={project.name}
      description={project.description}
      frontimage={project.frontimage}
      client={project.client}
      carousel={project.carousel}
      displayname={project.displayname}
    />
  </Link>
)}*/




          /*<Tabs>
            <TabList className="w-full flex flex-row justify-around font-xs manrope font-bold uppercase">
              <Tab className="cursor-pointer m-2">Всички обекти</Tab>
              <Tab className="cursor-pointer m-2">Жилищно строителство</Tab>
              <Tab className="cursor-pointer m-2">Промишлено строителство</Tab>
              <Tab className="cursor-pointer m-2">Инфраструктура</Tab>
              <Tab className="cursor-pointer m-2">Обществени поръчки</Tab>
            </TabList>
            <TabPanel className="w-full flex flex-wrap justify-around pt-4">
              {projects.map(project =>
                <Link className="pb-8" to={`/projects/${project.name}`}>
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
            </TabPanel>
            <TabPanel className="w-full flex flex-wrap justify-around pt-4">
              {projects.map(project => project.jilishtno &&
                <Link className="pb-8" to={`/projects/${project.name}`}>
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
            </TabPanel>
            <TabPanel className="w-full flex flex-wrap justify-around pt-4">
              {projects.map(project => project.promishleno &&
                <Link className="pb-8" to={`/projects/${project.name}`}>
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
            </TabPanel>
            <TabPanel className="w-full flex flex-wrap justify-around pt-4">
              {projects.map(project => project.infrastruktura &&
                <Link className="pb-8" to={`/projects/${project.name}`}>
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
            </TabPanel>
            <TabPanel className="w-full flex flex-wrap justify-around pt-4">
              {projects.map(project => project.obshtestveni &&
                <Link className="pb-8" to={`/projects/${project.name}`}>
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
            </TabPanel>
          </Tabs>*/