module.exports = [
	{
		test: /\.js?$/,
		exclude: /(node_modules|bower_components|public)/,
		loader: "babel"
	},
	{
   test: /\.json$/,
   loader: 'json-loader'
	 },
	 {
	 	test: /(jpg|png|gif|svg|eot|ttf|woff|woff2|otf)/,
	 	exclude: /(node_modules|bower_components)/,
	 	loader: 'file?name=[name].[ext]'
	 },
	{
    test: /\.mp4$/,
    loader: 'url?limit=10000&mimetype=video/mp4'
  }
];
