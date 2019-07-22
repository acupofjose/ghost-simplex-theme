# Ghost Simplex Theme

[![Build Status](https://travis-ci.org/acupajoe/ghost-simplex-theme.svg?branch=master)](https://travis-ci.org/acupajoe/ghost-simplex-theme)
![License](https://img.shields.io/github/license/acupajoe/ghost-simplex-theme.svg)

**Currently a WIP.**

After installing Ghost, I wanted to figure out how the themeing system was set up for developers. So what better way to do that than by just making a theme myself?

Simplex is heavily based on the shipped [Casper theme](https://github.com/TryGhost/Casper) for inspiration.

## What you get.

A fully responsive, easily themeable, customizable theme that is built and minified for speed.

Currently there is a dark theme and a light theme available for download.

## Progress.

**Theme**

- [x] Sidebar
- [x] Default & Index Templates
- [x] Post Excerpt Template
- [-] Compatibility with `.kg-gallery-*`
- [-] Single Post Template
- [ ] Author Template
- [ ] Category/Tags Template
- [-] Responsiveness
- [ ] Provision for Featured Posts

**Meta**

- [x] Build theme off scss instead of postcss
- [x] Setup Gulp as buildtool
- [x] Setup Travis to verify builds with Ghost's provided `gscan` util
- [x] Break scss into understandable / maintainable partials
- [x] Break templates (`hbs`) into understanable / maintainable partials
- [ ] Setup Gulp to build both the `light` and `dark` themes as part of the build process
- [ ] Clearer commenting
- [ ] Setup linting

## Libraries Leveraged.

- [BrowserSync](https://github.com/BrowserSync/browser-sync)
- [gscan](https://github.com/TryGhost/gscan)
- [gulp](https://github.com/gulpjs/gulp)
- [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
- [gulp-clean](https://github.com/peter-vilja/gulp-clean)
- [gulp-cli](https://github.com/gulpjs/gulp-cli)
- [gulp-csso](https://github.com/ben-eb/gulp-csso)
- [gulp-sass](https://github.com/dlmanning/gulp-sass)
- [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)
- [gulp-uglifyes](https://github.com/Teneff/gulp-uglifyes)
- [gulp-zip](https://github.com/sindresorhus/gulp-zip)
