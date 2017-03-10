const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy(mix.config.assetsPath + '/fonts/*.ttf', mix.config.publicPath + '/fonts/')
  .copy('node_modules/font-awesome/fonts/fontawesome-webfont.woff2', mix.config.publicPath + '/fonts/')
  .copy('node_modules/font-awesome/fonts/fontawesome-webfont.woff', mix.config.publicPath + '/fonts/')
  .copy('node_modules/font-awesome/fonts/fontawesome-webfont.ttf', mix.config.publicPath + '/fonts/')
  .js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css');
