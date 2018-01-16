# [Starter Project]

![Starter Project Logo - Folder with start button](https://raw.githubusercontent.com/maliMirkec/starter-project/master/src/gfx/png/starter-project.png)

### A set of gulp task that helps you develop high performant websites using latest best practices.

Welcome to Starter Project, the easiest way to implement latest best practices to your website. It doesn't matter if you have an existing project or you start from the scratch; you can use this package to meet all your needs.

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

Starter Project is set of gulp tasks that will make your life easier. Here you will find everything that is necessary for developing a modern website, including:

* Browser-sync
* Sass compiler and linter
* JavaScript/es6 compiler and linter
* Pug template engine
* HTML linter
* Fonts
* Image optimization
* Favicon generation
* Critical CSS
* SassDoc
* JSDoc
* KSS
* and more.

Documentation is still work in progress, stay tuned for more features and docs.

## Project Structure

```
|-- .editorconfig
|-- .eslintignore
|-- .eslintrc.json
|-- .gitignore
|-- .htmllintrc
|-- .jshintrc
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
