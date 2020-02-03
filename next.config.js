const withTM = require('@weco/next-plugin-transpile-modules');

module.exports = withTM({
  transpileModules: ['framework7', 'framework7-react', 'template7', 'dom7', 'ssr-window'],
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
