const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => ({});
}

module.exports = withCss({
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
        'sass-loader',
      ],
    });
    return config;
  },
});
