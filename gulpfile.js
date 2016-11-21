var gulp = require("gulp");
var pug = require("gulp-pug");
var rename = require("gulp-rename");
var watch = require("gulp-watch");

gulp.task("build-views", () =>{
    return gulp.src(["./src/views/**/*.pug", "!./src/views/**/_*" ])
        .pipe(pug({}))
        .pipe(gulp.dest("./bin"))
});

gulp.task("watch-views", () => {
    return watch(["./src/views/**/*.pug", "!./src/views/**/_*" ])
        .pipe(pug({ }))
        .pipe(gulp.dest("./bin"))
});

gulp.task("watch", ["watch-views"])

gulp.task("default", ["build-views"]);