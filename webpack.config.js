const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetsWebpackPlugin,
			new TerserWebpackPlugin
		]
	}

	return config;
}

const jsLoaders = () => {
	const loaders = [
		{
			loader: 'babel-loader'
		}
	];

	if (isDev) {
		loaders.push('eslint-loader');
	}

	return loaders;
}

const plugins = () => {
	const plugins = [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new HTMLWebpackPlugin({
      filename: 'test.html',
      template: 'src/test.html'
    }),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'dist')
				},
				{
					from: path.resolve(__dirname, 'src/images'),
					to: path.resolve(__dirname, 'dist/images')
				},
			]
		}),
		new MiniCssExtractPlugin({
			filename: filename('css')
		})
	];

	return plugins;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

let conf = {
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: optimization(),
	devServer: {
		port: 4200,
		hot: isDev
	},
	devtool: isDev ? 'source-map' : '',
	plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'dist') 
            },
          },
					'css-loader'
				],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'dist') 
            },
          },
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|svg|webp)$/,
				loader: 'file-loader',
				options: { 
					limit: 38000,
					name: 'images/[name].[ext]',
				}
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: jsLoaders()
			}
		]
	}
};

module.exports = (env, argv) => {
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	conf.target = isProd ? 'browserslist' : 'web';
	return conf;
}