var config = {
   entry: './components/router.jsx',
	
   output: {
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 9090
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;