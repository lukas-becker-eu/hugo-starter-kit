const mix = require('laravel-mix');
const autoprefixer = require('autoprefixer');
const path = require('path');

mix
  .setPublicPath('assets')
  .extract()
  .js('src/js/app.js', 'js/app.js')
  .sass('src/scss/app.scss', 'css')
  .options({
    processCssUrls: false,
    autoprefixer: {
      options: {
        browsers: [
          'last 6 versions',
        ]
      }
    }
  })
  .browserSync({
    proxy: 'http://localhost:8080',
    files: ['src/**/*.{js,scss}', 'layouts/**/*.html'],
    notify: false,
    open: false
  })
  .disableSuccessNotifications();
