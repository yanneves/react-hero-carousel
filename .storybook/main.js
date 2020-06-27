const merge = require("webpack-merge");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-viewport", "@storybook/addon-storysource"],
  webpackFinal: (config) =>
    merge.smart(config, {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: { modules: true },
              },
            ],
          },
        ],
      },
    }),
};
