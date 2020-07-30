exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const projects = require("./static/projects.json")
  projects.forEach(project => {
    createPage({
      path: `/projects/${project.name}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        displayname: project.displayname,
        name: project.name,
        carousel: project.carousel,
        client: project.client,
        place: project.place
      }
    })
  });
};
