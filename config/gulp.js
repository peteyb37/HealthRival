module.exports = {
  plugins: {
    browserSync: {
      proxy: 'http://localhost:8080',
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
