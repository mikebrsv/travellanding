const img = {
  test: /\.(mp4)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'videos',
        publicPath: '/videos'
      }
    }
  ]
};

module.exports = img;