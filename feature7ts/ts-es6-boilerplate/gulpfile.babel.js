import gulp from "gulp";
import babel from "gulp-babel";
import typescript from "gulp-typescript";
import merge from "merge2";

const src = "./src/**/*.ts";
const out = "./build";
const babelConf = { presets: ["es2015"] };
const project = typescript.createProject("tsconfig.json", {
  outDir: out,
  typescript: require("typescript"),
});

gulp.task("build", function () {
  var result = gulp.src(src).pipe(typescript(project));

  return merge([
    result.dts.pipe(gulp.dest(`${out}/definitions`)),
    result.js
      .pipe(babel(babelConf))
      .pipe(gulp.dest(`${out}/js`))
  ]);
});

gulp.task("watch", ["build"], function () {
  gulp.watch(src, ["build"]);
});

gulp.task("default", ["build"]);
