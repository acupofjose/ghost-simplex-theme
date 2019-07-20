const gulp = require("gulp");

// Building
const clean = require("gulp-clean");
const sourcemaps = require("gulp-sourcemaps");
const zip = require("gulp-zip");
// Building: SASS
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
// Building: JS
const uglify = require("gulp-uglify");
// Utils
const browserSync = require("browser-sync").create();

gulp.task("clean", function(done) {
  Promise.all([
    gulp.src("assets/built/*", { read: false }).pipe(clean()),
    gulp.src("assets/css/*", { read: false }).pipe(clean())
  ]).then(() => done());
});

gulp.task("sass", function(done) {
  gulp
    .src("assets/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/built"))
    // this line has to be added to maintain compatability with gscan (stupid.)
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("js", function(done) {
  gulp
    .src("assets/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/built"));
  done();
});

gulp.task("zip", function(done) {
  const targetDir = "dist/";
  const themeName = require("./package.json").name;
  const filename = themeName + ".zip";

  gulp
    .src(["**", "!node_modules", "!node_modules/**", "!dist", "!dist/**"])
    .pipe(zip(filename))
    .pipe(gulp.dest(targetDir));

  done();
});

gulp.task("build", gulp.series("clean", "sass", "js"));

const reloadOnHBSChange = done => {
  browserSync.reload();
  done();
};

const reloadOnJSChange = done => {
  browserSync.reload();
  done();
};

const watch = () => {
  browserSync.init({
    proxy: "localhost:2368",
    open: "local"
  });

  gulp.watch("assets/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("**/*.hbs", reloadOnHBSChange);
  gulp.watch("assets/js/*.js", gulp.series("js", reloadOnJSChange));
};

gulp.task("develop", gulp.series("build", watch));
