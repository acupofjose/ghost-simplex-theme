<h1 align="center">Ghost Simplex Theme.</h1>

<p align="center">
  <a href="https://travis-ci.org/acupajoe/ghost-simplex-theme"><img alt="build status" src="https://travis-ci.org/acupajoe/ghost-simplex-theme.svg?branch=master"/></a>
  <img src="https://img.shields.io/github/license/acupajoe/ghost-simplex-theme.svg">
</p>

<p align="center">
  <img src=".github/preview.png" alt="preview"/>
</p>

Simplex is heavily based on the shipped [Casper theme](https://github.com/TryGhost/Casper) for inspiration.

## What you get.

A fully responsive, easily themeable, customizable theme that is built and minified for speed.

Currently there is a dark theme and a light theme available for download.

## Progress.

**Theme**

- [x] Sidebar
- [x] Default & Index Templates
- [x] Post Excerpt Template
- [x] Compatibility with `.kg-gallery-*`
- [x] Single Post Template
- [x] Author Template
- [x] Category/Tags Template
- [x] Responsiveness
- [ ] Provision for Featured Posts
- [x] Light Theme
- [x] Dark Theme

**Meta**

- [x] Build theme off scss instead of postcss
- [x] Setup Gulp as buildtool
- [x] Setup Travis to verify builds with Ghost's provided `gscan` util
- [x] Break scss into understandable / maintainable partials
- [x] Break templates (`hbs`) into understanable / maintainable partials
- [?] Setup Gulp to build both the `light` and `dark` themes as part of the build process
- [x] Clearer commenting
- [ ] Setup linting

## Customizing.

1. (Optional) [Setup a local ghost environment.](https://ghost.org/docs/install/local/)
2. Clone this repo into `content/themes`
3. Install devDependencies
4. Set your theme in `assets/screen.scss`
5. `npm run develop`

When finished you can run `npm run build` to output your customized theme .zip to `dist`.

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
