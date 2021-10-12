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
      filename: 'autom.html',
      template: 'src/autom.html'
    }),
		new HTMLWebpackPlugin({
      filename: 'contacts.html',
      template: 'src/contacts.html'
    }),
		new HTMLWebpackPlugin({
      filename: 'catalog.html',
      template: 'src/catalog.html'
    }),
		new HTMLWebpackPlugin({
      filename: 'pricelist.html',
      template: 'src/pricelist.html'
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
              publicPath: './' 
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
              publicPath: './' 
            },
          },
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|svg|webp)$/,
				loader: 'url-loader',
				options: { 
					limit: 2500,
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