const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");
const clean = require("gulp-clean");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("clean", function(done) {
  gulp.src("assets/built/*", { read: false }).pipe(clean());
  done();
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

gulp.task("develop", function() {
  browserSync.init({
    proxy: "localhost:2368",
    open: "local"
  });

  gulp.watch("**/*.hbs", browserSync.reload);
  gulp.watch("assets/scss/**/*.scss", gulp.series("sass"));
  gulp.watch(
    "assets/js/*.js",
    gulp.series("js", done => {
      browserSync.reload();
      done();
    })
  );
});

gulp.task("build", gulp.series("clean", "sass", "js"));
