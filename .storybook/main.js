const { mergeWithRules } = require("webpack-merge");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-viewport", "@storybook/addon-storysource"],
  webpackFinal: (config) =>
    mergeWithRules({
      module: {
        rules: {
          test: "match",
          use: {
            loader: "match",
            options: "replace",
          },
        },
      },
    })(config, {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: require.resolve(
                  "@storybook/builder-webpack4/node_modules/css-loader"
                ),
                options: { modules: true },
              },
            ],
          },
        ],
      },
    }),
};
