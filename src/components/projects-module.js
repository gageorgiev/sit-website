import React from 'react';
import projects from '../../static/projects.json';
import { Link } from 'gatsby';
import NewProjectCard from '../components/new-project-card';

import { Spring } from 'react-spring/renderprops';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProjectsModule = ({ }) => {
    return (
        <Tabs
            className="w-full font-bold manrope"
            selectedTabClassName="text-red-600 cursor-default"
        >
            <TabList
                className="flex flex-row justify-between text-xs md:text-base overflow-x-auto"
            >
                <Tab className="p-4 cursor-pointer">ВСИЧКИ ОБЕКТИ</Tab>
                <Tab className="p-4 cursor-pointer">ЖИЛИЩНО СТРОИТЕЛСТВО</Tab>
                <Tab className="p-4 cursor-pointer">ПРОМИШЛЕНО СТРОИТЕЛСТВО</Tab>
                <Tab className="p-4 cursor-pointer">ИНФРАСТРУКТУРА</Tab>
                <Tab className="p-4 cursor-pointer">ОБЩЕСТВЕНИ ПОРЪЧКИ</Tab>
            </TabList>
            <div className="pt-4">
            <TabPanel className="w-full flex flex-wrap justify-around ">
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
            <TabPanel className="w-full flex flex-wrap justify-around ">
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
            <TabPanel className="w-full flex flex-wrap justify-around ">
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
            <TabPanel className="w-full flex flex-wrap justify-around ">
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
            <TabPanel className="w-full flex flex-wrap justify-around ">
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
            </div>
        </Tabs>
    );
};

export default ProjectsModule;