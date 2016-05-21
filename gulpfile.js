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
  mix.copy(elixir.config.assetsPath + '/fonts/WireOne.ttf', elixir.config.publicPath + '/fonts/');

  mix.browserify('app.js')
  .sass('app.scss')
  .imagemin()
  .browserSync({
    proxy: "http://local.cmbirk.io"
  });
});
