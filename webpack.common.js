import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';

export const entry = {
  // eslint-disable-next-line no-undef
  app: resolve(__dirname, 'src/scripts/index.js'),
};
export const output = {
  filename: '[name].bundle.js',
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
      ],
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    // eslint-disable-next-line no-undef
    template: resolve(__dirname, 'src/templates/index.html'),
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        // eslint-disable-next-line no-undef
        from: resolve(__dirname, 'src/public/'),
        // eslint-disable-next-line no-undef
        to: resolve(__dirname, 'dist/'),
      },
    ],
  }),
];