# Starter Project

[![Starter Project on NPM](https://img.shields.io/badge/starter--project-npm-blue.svg)](https://www.npmjs.com/package/starter-project)
[![Starter Project CLI on NPM](https://img.shields.io/badge/starter--project--cli-npm-blue.svg)](https://www.npmjs.com/package/starter-project-cli)

> Starter Package is the best starting point for your new project — achieve the maximum score on page speed testing tools.

![Starter Project Logo - Folder with start button](/gfx/png/starter-project-md.png)

Starter Package is a package with the latest best practices for your HTML (pug), CSS (Sass), JavaScript (es6), graphic, font, and favicon files.

## Version 2

> ###### Version 2 is a major update! This version uses the [Starter Project CLI] for creating a perfect Gulp development environment within a few minutes.

You could use `node_modules/.bin/spro start` command, if you want to reinitialize Starter Project CLI. See more at [Starter Project CLI docs].

_Version 2 is not backward compatible with [version 1](/old/)._

### Installation

The package is available on npm. To install Starter Package, create a new directory, enter it and run the following command to install the latest version:

```console
npm install starter-project --save
```

After the installation, run the following command to set up the project:

```console
node node_modules/starter-package/postinstall.js
```

Starter Project should have installed source files, Gulp files, and configuration files.

If you want to learn more about the project structure, jump to the Structure section. If you want to learn more about npm packages, jump to the Packages section.

### Gulp tasks

You should be able to run Gulp tasks now. In the `gulpfile.js` folder you could find all Gulp task files and configuration files.

There are three available major Gulp tasks:
| Task      | Description                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------- |
| `default` | the task for running and watching all the tasks (useful for more thorough development process)  |
| `build`   | the task for running all tasks with the exit process (useful for Netlify builds)                |
| `dev`     | the task for running and watching only essential tasks (useful for primary development process) |

There are four other Gulp tasks:

| Task        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `bumpPatch` | the task for bumping patch versions of the `package.json` file |
| `bumpMinor` | the task for bumping minor versions of the `package.json` file |
| `bumpMajor` | the task for bumping major versions of the `package.json` file |
| `clean`     | the task for deleting compiled code.                           |

Run `gulp --tasks` to see all available Gulp tasks.

### Configuration

If you want more control over your Gulp tasks, you could find the configuration files for every single Gulp task in the `gulpfile.js` folder.

`.starter-project.json` is the main configuration file in which you could find all global settings for Gulp tasks. Avoid editing this file manually. See [Starter Project CLI docs] for more details.

### Structure

```md
|-- Workspace
    |-- .browserslistrc
    |-- .editorconfig
    |-- .eslintignore
    |-- .eslintrc.json
    |-- .gitignore
    |-- .htmllintrc
    |-- .stylelintrc
    |-- gulpfile.js
    |   |-- .critical.json
    |   |-- .css.json
    |   |-- .favicon-data.json
    |   |-- .favicon.json
    |   |-- .gfx.json
    |   |-- .helpers.json
    |   |-- .html.json
    |   |-- .js.json
    |   |-- .jsdoc.json
    |   |-- .kss.json
    |   |-- .sassdoc.json
    |   |-- .starter-project.json
    |   |-- .sync.json
    |   |-- .watch.json
    |   |-- bump.js
    |   |-- clean.js
    |   |-- critical.js
    |   |-- css.js
    |   |-- favicon.js
    |   |-- fonts.js
    |   |-- gfx.js
    |   |-- helpers.js
    |   |-- html.js
    |   |-- index.js
    |   |-- js.js
    |   |-- jsdoc.js
    |   |-- kss.js
    |   |-- sassdoc.js
    |   |-- sync.js
    |-- src
        |-- favicons
        |   |-- README.md
        |   |-- android-chrome-192x192.png
        |   |-- android-chrome-512x512.png
        |   |-- apple-touch-icon.png
        |   |-- browserconfig.xml
        |   |-- favicon-16x16.png
        |   |-- favicon-32x32.png
        |   |-- favicon.ico
        |   |-- html_code.html
        |   |-- mstile-144x144.png
        |   |-- mstile-150x150.png
        |   |-- mstile-310x150.png
        |   |-- mstile-310x310.png
        |   |-- mstile-70x70.png
        |   |-- safari-pinned-tab.svg
        |   |-- site.webmanifest
        |-- fonts
        |   |-- lato
        |       |-- Lato-Regular.woff
        |       |-- Lato-Regular.woff2
        |-- gfx
        |   |-- jpg
        |   |   |-- starter-project-md.jpg
        |   |   |-- starter-project.jpg
        |   |-- png
        |   |   |-- starter-project-md.png
        |   |   |-- starter-project.png
        |   |-- svg
        |       |-- starter-project-md.svg
        |       |-- starter-project.svg
        |-- html
        |   |-- 404.pug
        |   |-- index.pug
        |   |-- _assets
        |   |   |-- critical-css.pug
        |   |   |-- deferred-styles.pug
        |   |   |-- favicon.pug
        |   |   |-- scripts.pug
        |   |-- _layout
        |   |   |-- layout.pug
        |   |-- _partials
        |   |   |-- banner.pug
        |   |   |-- footer.pug
        |   |   |-- head.pug
        |   |   |-- header.pug
        |   |   |-- sidebar.pug
        |   |-- structure
        |       |-- index.pug
        |-- js
        |   |-- homepage.md
        |   |-- index.js
        |-- scss
            |-- homepage.md
            |-- style.critical.scss
            |-- style.scss
            |-- components
                |-- _font-face.scss
                |-- _font-style.scss
                |-- _helpers.scss
                |-- _locks.scss
                |-- _theme.scss
                |-- _typography.scss
                |-- _variables.scss
                |-- elements
                    |-- _banner.scss
                    |-- _content.scss
                    |-- _header.scss
                    |-- _sidebar.scss
                    |-- _sig.scss
```

### Packages

Starter Package CLI uses the following packages:

- `@babel/core`,
- `@babel/preset-env`,
- `babel-eslint`,
- `browser-sync`,
- `del`,
- `eslint`,
- `eslint-config-airbnb-base`,
- `eslint-plugin-import`,
- `eslint-plugin-node`,
- `gulp`,
- `gulp-autoprefixer`,
- `gulp-babel`,
- `gulp-bump`,
- `gulp-clean-css`,
- `gulp-cssimport`,
- `gulp-eslint`,
- `gulp-exit`,
- `gulp-htmllint`,
- `gulp-htmlmin`,
- `gulp-if`,
- `gulp-imagemin`,
- `gulp-include`,
- `gulp-inline-source`,
- `gulp-penthouse`,
- `gulp-pug`,
- `gulp-real-favicon`,
- `gulp-rename`,
- `gulp-sass`,
- `gulp-sourcemaps`,
- `gulp-stylelint`,
- `gulp-uglify`,
- `gulp-wait`,
- `imagemin-mozjpeg`,
- `imagemin-pngquant`,
- `kss`,
- `path`,
- `stylelint`,
- `stylelint-config-sass-guidelines`,
- `stylelint-order`, and
- `stylelint-scss`.

### Support

Show your support by starring the project on [Github](https://github.com/maliMirkec/starter-project), or by [sharing on Twitter](https://twitter.com/intent/tweet?url=https://starter.silvestar.codes&text=Starter%20Project%20is%20the%20easiest%20way%20to%20implement%20the%20latest%20best%20practices%20in%20your%20project.%20💯%20Try%20it%20out%20today!%20🔥&via=malimirkeccita), please. 🙏

Contribute: create [a new issue](https://github.com/maliMirkec/starter-project/issues/new) or create [a pull request](https://github.com/maliMirkec/starter-project/compare).

[Starter Project CLI]: /
[Starter Project CLI docs]: /
