var elixir = require('laravel-elixir');

require('laravel-elixir-imagemin');
require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
  mix;

  mix.copy(elixir.config.assetsPath + '/fonts/WireOne.ttf', elixir.config.publicPath + '/fonts/')
  .copy('node_modules/font-awesome/fonts/fontawesome-webfont.woff2', elixir.config.publicPath + '/fonts/')
  .copy('node_modules/font-awesome/fonts/fontawesome-webfont.woff', elixir.config.publicPath + '/fonts/')
  .copy('node_modules/font-awesome/fonts/fontawesome-webfont.ttf', elixir.config.publicPath + '/fonts/')
  .browserify('app.js')
  .sass('app.scss')
  .imagemin()
  .browserSync({
    proxy: "http://local.cmbirk.io"
  });
});
