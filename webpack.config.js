const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	mode,
	devtool,
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js'),
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
			{ test: /\.svg$/, loader: 'svg-inline-loader' },
		],
	},
};
