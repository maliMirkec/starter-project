# [Starter Project][Starter Project Web]

![Starter Project Logo - Folder with start button](https://raw.githubusercontent.com/maliMirkec/starter-project/master/src/gfx/png/starter-project.png)

### A set of gulp tasks that helps you develop high performant websites using latest best practices.

Welcome to [Starter Project][Starter Project Web], the easiest way to implement latest best practices to your website. It doesn't matter if you have an existing project or you start from the scratch; you can use this package to meet all your needs.

## [Official website][Starter Project Web]

You could see this package in action on the official website: [https://starter.silvestarbistrovic.from.hr][Starter Project Web]

## Installation

Install using npm

```bash
npm install starter-project --save
```

or yarn

```bash
yarn add starter-project
```

or clone from [Github][Starter Project]

```bash
git clone https://github.com/maliMirkec/starter-project.git
```

**We won't override your project if you already have `src` or `new_src` folder.**

## Initialization

To start developing use

```bash
gulp dev
```

To make production build, use

```bash
gulp
```

To see the full list of gulp tasks, run

```bash
gulp --tasks
```

## Configuration

It is possible to configure every single gulp task. All configuration options are available in [`config.json`](https://github.com/maliMirkec/starter-project/blob/master/config.json) file.

For example, if you want to change the destination path for the compiled resources, you could change `"dest"` option.

## What is Starter Project?

Starter Project is set of gulp taskss that will make your life easier. Here you will find everything that is necessary for developing a modern website, including:

* [Yarn](https://yarnpkg.com/en/)
* [Gulp](https://gulpjs.com/)
  * [Server versioning](https://www.npmjs.com/package/gulp-bump)
  * [Cleaning](https://www.npmjs.com/package/gulp-clean)
  * [Including directories](https://www.npmjs.com/package/require-dir)
* [Browser-sync](https://www.browsersync.io/)
* [editorconfig](http://editorconfig.org/)
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
  * [CSS Import](https://www.npmjs.com/package/gulp-cssimport)
  * [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
  * [Minification](https://www.npmjs.com/package/gulp-clean-css)
  * [Sass](http://sass-lang.com/)
    * [Normalize](https://www.npmjs.com/package/normalize.css)
    * [Sass Media Queries](https://www.npmjs.com/package/sass-mq)
    * [Modular Scale](https://www.npmjs.com/package/modularscale-sass)
    * [CSS Locks](https://fvsch.com/code/css-locks/)
  * [Stylelint](https://stylelint.io/)
    * [Sass Guidelines Config](https://www.npmjs.com/package/stylelint-config-sass-guidelines)
    * [SCSS](https://www.npmjs.com/package/stylelint-scss)
    * [Order](https://www.npmjs.com/package/stylelint-order)
* [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
  * [es6](http://es6-features.org/#Constants)
  * [Babel](https://babeljs.io/)
    * [babel-core](https://www.npmjs.com/package/babel-core)
    * [babel-preset-env](https://www.npmjs.com/package/babel-preset-env)
  * [Minification](https://www.npmjs.com/package/gulp-uglify)
  * [JavaScript Standard Style](https://standardjs.com/)
  * [ESLint](https://eslint.org/)
    * [Airbnb config](https://www.npmjs.com/package/eslint-config-airbnb-base)
    * [Import plugin](https://www.npmjs.com/package/eslint-plugin-import)
    * [Node plugin](https://www.npmjs.com/package/eslint-plugin-node)
    * [Standard plugin](https://www.npmjs.com/package/eslint-plugin-standard)
    * [Standard config](https://www.npmjs.com/package/eslint-config-standard)
* [HTML](https://www.w3.org/html/)
  * [Pug template engine](https://pugjs.org/api/getting-started.html)
  * [Markdown Pug Filter](https://www.npmjs.com/package/jstransformer-markdown-it)
  * [Inline source](https://www.npmjs.com/package/gulp-inline-source)
  * [Minification](https://www.npmjs.com/package/gulp-htmlmin)
  * [htmllint](http://htmllint.github.io/)
* Fonts
  * [Font Face Observer](https://www.npmjs.com/package/fontfaceobserver)
* [Images](https://images.guide/)
  * [Imagemin Minification](https://www.npmjs.com/package/gulp-imagemin)
  * [Imagemin plugin for mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg)
  * [Imagemin plugin for pngquant](https://www.npmjs.com/package/imagemin-pngquant)
* [Favicons](https://realfavicongenerator.net/)
  * [RealFaviconGenerator](https://www.npmjs.com/package/gulp-real-favicon)
* [Critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/)
  * [Penthouse](https://www.npmjs.com/package/gulp-penthouse)
* [Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
* [Gzip](https://www.npmjs.com/package/gulp-gzip)
* Documentation
  * [SassDoc](http://sassdoc.com/)
  * [JSDoc](http://usejsdoc.org/)
  * [KSS Styleguide](http://kss-node.github.io/kss-node/)

Documentation is still work in progress, stay tuned for more features and docs.

## Project Structure

```
|-- .editorconfig
|-- .eslintignore
|-- .eslintrc.json
|-- .gitignore
|-- .htmllintrc
|-- .stylelintrc
|-- LICENSE
|-- README.md
|-- config.json
|-- faviconData.json
|-- gulpfile.js
|-- package.json
|-- dist
|   |-- index.html
|   |-- css
|   |   |-- foft.css
|   |   |-- foft.min.css
|   |   |-- foft.min.css.map
|   |   |-- style.critical.css
|   |   |-- style.critical.min.css
|   |   |-- style.critical.min.css.map
|   |   |-- style.css
|   |   |-- style.min.css
|   |   |-- style.min.css.map
|   |-- docs
|   |   |-- js
|   |   |   |-- index.html
|   |   |   |-- module-Classily.html
|   |   |   |-- modules.list.html
|   |   |   |-- quicksearch.html
|   |   |   |-- fonts
|   |   |   |   |-- glyphicons-halflings-regular.eot
|   |   |   |   |-- glyphicons-halflings-regular.svg
|   |   |   |   |-- glyphicons-halflings-regular.ttf
|   |   |   |   |-- glyphicons-halflings-regular.woff
|   |   |   |   |-- glyphicons-halflings-regular.woff2
|   |   |   |-- img
|   |   |   |   |-- glyphicons-halflings-white.png
|   |   |   |   |-- glyphicons-halflings.png
|   |   |   |-- scripts
|   |   |   |   |-- docstrap.lib.js
|   |   |   |   |-- fulltext-search-ui.js
|   |   |   |   |-- fulltext-search.js
|   |   |   |   |-- lunr.min.js
|   |   |   |   |-- sunlight.js
|   |   |   |   |-- toc.js
|   |   |   |   |-- prettify
|   |   |   |       |-- Apache-License-2.0.txt
|   |   |   |       |-- jquery.min.js
|   |   |   |       |-- lang-css.js
|   |   |   |       |-- prettify.js
|   |   |   |-- styles
|   |   |       |-- darkstrap.css
|   |   |       |-- prettify-tomorrow.css
|   |   |       |-- site.cerulean.css
|   |   |       |-- site.cosmo.css
|   |   |       |-- site.cyborg.css
|   |   |       |-- site.darkly.css
|   |   |       |-- site.darkstrap.css
|   |   |       |-- site.dibs-bootstrap.css
|   |   |       |-- site.flatly.css
|   |   |       |-- site.journal.css
|   |   |       |-- site.lumen.css
|   |   |       |-- site.paper.css
|   |   |       |-- site.readable.css
|   |   |       |-- site.sandstone.css
|   |   |       |-- site.simplex.css
|   |   |       |-- site.slate.css
|   |   |       |-- site.spacelab.css
|   |   |       |-- site.superhero.css
|   |   |       |-- site.united.css
|   |   |       |-- site.yeti.css
|   |   |       |-- sunlight.dark.css
|   |   |       |-- sunlight.default.css
|   |   |-- sass
|   |   |   |-- index.html
|   |   |   |-- assets
|   |   |       |-- css
|   |   |       |   |-- main.css
|   |   |       |-- images
|   |   |       |   |-- favicon.png
|   |   |       |   |-- logo_full_compact.svg
|   |   |       |   |-- logo_full_inline.svg
|   |   |       |   |-- logo_light_compact.svg
|   |   |       |   |-- logo_light_inline.svg
|   |   |       |-- js
|   |   |           |-- main.js
|   |   |           |-- main.min.js
|   |   |           |-- search.js
|   |   |           |-- sidebar.js
|   |   |           |-- vendor
|   |   |               |-- fuse.min.js
|   |   |               |-- jquery.min.js
|   |   |               |-- prism.min.js
|   |   |-- styleguide
|   |       |-- index.html
|   |       |-- item-basic-headings.html
|   |       |-- item-basic.html
|   |       |-- section-basic.html
|   |       |-- kss-assets
|   |           |-- WARNING.txt
|   |           |-- github-fork--black.png
|   |           |-- kss-fullscreen.js
|   |           |-- kss-guides.js
|   |           |-- kss-markup.js
|   |           |-- kss.css
|   |           |-- kss.js
|   |           |-- kss.scss
|   |           |-- noise-low.png
|   |           |-- prettify.js
|   |           |-- sample-inline.png
|   |           |-- sample-inline.svg
|   |           |-- sample.png
|   |           |-- sample.svg
|   |           |-- scrollspy.js
|   |-- fonts
|   |   |-- lato
|   |       |-- Lato-Bold.woff
|   |       |-- Lato-Bold.woff2
|   |       |-- Lato-BoldItalic.woff
|   |       |-- Lato-BoldItalic.woff2
|   |       |-- Lato-Italic.woff
|   |       |-- Lato-Italic.woff2
|   |       |-- Lato-Regular.woff
|   |       |-- Lato-Regular.woff2
|   |-- gfx
|   |   |-- jpg
|   |   |   |-- starter-project.jpg
|   |   |-- png
|   |   |   |-- starter-project.png
|   |   |-- svg
|   |       |-- starter-project.svg
|   |-- js
|       |-- deferredStyles.js
|       |-- deferredStyles.js.map
|       |-- deferredStyles.min.js
|       |-- deferredStyles.min.js.map
|       |-- foftFontLoading.js
|       |-- foftFontLoading.js.map
|       |-- foftFontLoading.min.js
|       |-- foftFontLoading.min.js.map
|       |-- index.js
|       |-- index.js.map
|       |-- index.min.js
|       |-- index.min.js.map
|-- src
    |-- fonts
    |   |-- lato
    |       |-- Lato-Bold.woff
    |       |-- Lato-Bold.woff2
    |       |-- Lato-BoldItalic.woff
    |       |-- Lato-BoldItalic.woff2
    |       |-- Lato-Italic.woff
    |       |-- Lato-Italic.woff2
    |       |-- Lato-Regular.woff
    |       |-- Lato-Regular.woff2
    |-- gfx
    |   |-- jpg
    |   |   |-- starter-project.jpg
    |   |-- png
    |   |   |-- starter-project.png
    |   |-- svg
    |       |-- starter-project.svg
    |-- html
    |   |-- index.pug
    |   |-- assets
    |   |   |-- critical-css.pug
    |   |   |-- deferred-styles.pug
    |   |   |-- favicon.pug
    |   |   |-- foft-font-loading.pug
    |   |   |-- scripts.pug
    |   |-- markdown
    |   |   |-- index.pug
    |   |   |-- structure.pug
    |   |-- partials
    |       |-- footer.pug
    |       |-- header.pug
    |-- js
    |   |-- deferredStyles.js
    |   |-- foftFontLoading.js
    |   |-- index.js
    |-- scss
        |-- foft.scss
        |-- homepage.md
        |-- style.critical.scss
        |-- style.scss
        |-- components
            |-- _fonts.scss
            |-- _locks.scss
            |-- _theme.scss
            |-- _typography.scss
            |-- _variables.scss
```

[Starter Project]: https://github.com/maliMirkec/starter-project
[Starter Project Web]: https://starter.silvestarbistrovic.from.hr
