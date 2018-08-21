const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FEWP = require("friendly-errors-webpack-plugin");

module.exports = {
	devServer: {
		port: 3000,
		quiet: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],

			},
			{
				test: /\.(jpg|png|gif|svg|pdf|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]'
						},
					},
				]
			},
			{
				test: /.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use:
						"css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader",
				}),
			}
		],
	},
	plugins: [
		new FEWP(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new ExtractTextPlugin("style.css"),
	],
};
