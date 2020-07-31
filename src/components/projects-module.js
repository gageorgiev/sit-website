import React from 'react';
import projects from '../../static/projects.json';
import { Link } from 'gatsby';
import NewProjectCard from '../components/new-project-card';

import { Spring } from 'react-spring/renderprops';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProjectsModule = ({ }) => {
  return (
    <div className="flex flex-col items-center">
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
          <TabPanel className="w-full flex flex-wrap justify-evenly ">
            {projects.map(project =>
              <Link className="mb-8" to={`/projects/${project.name}`}>
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
      <div className="pt-8" >
      <a href='../obekti.pdf' target='_blank' >
      <button class="bg-gray-300 hover:bg-red-100 hover:text-red-600 font-bold text-xl manrope py-2 px-4 rounded focus:bg-red-200 focus:border-red-700">
        Опис на обектите
      </button>
      </a>
      </div>
    </div>
  );
};

export default ProjectsModule;