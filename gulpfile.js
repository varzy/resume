var gulp = require("gulp");
var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");
var useRef = require("gulp-useref");
var filter = require("gulp-filter");
var uglify = require("gulp-uglify");
var csso = require("gulp-csso");

gulp.task("default", function () {
  var jsFilter = filter("**/*.js", { restore: true });
  
})