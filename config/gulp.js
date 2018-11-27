module.exports = {
  plugins: {
    browserSync: {
      proxy: 'http://localhost:5000',
      files: ['views/**/*.*'],
      browser: 'google chrome',
      port: 7000
    },
    nodemon: {
      script: 'index.js',
      ignore: ['gulpfile.js', 'config/', 'node_modules/', 'views/']
    }
  }
};
