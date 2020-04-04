const glob = require('glob')

module.exports = ({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
   exportPathMap: async function() {
    const routes = {
      '/': { page : '/'},
      "/aixo": { page: "/aixo"},
      "/docs": { page: "/docs"},
      "/docs/doc-zero/": { page: "/docs/doc-zero"},
      "/docs/doc-primer/": { page: "/docs/doc-primer"}
    } 
    return routes
  }
});