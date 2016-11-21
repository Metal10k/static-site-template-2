var gulp = require("gulp");
var pug = require("gulp-pug");
var rename = require("gulp-rename");

gulp.task("build-views", () =>{
    return gulp.src(["./src/views/**/*.pug", "!./src/views/**/_*" ])
        .pipe(pug({
            data: {body: "layout.pug"}
        }))
        .pipe(gulp.dest("./bin"))
});

gulp.task("default", ["build-views"]);