require('@babel/register')({
  babelrc: false,
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
});

global.__parseToRgbaNode = require('./packages/node/src').default;
