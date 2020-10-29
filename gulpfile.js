const { series, parallel, watch, src, dest } = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	browserSync = require("browser-sync"),
	bytediff = require("gulp-bytediff"),
	cachebust = require("gulp-cache-bust"),
	cleancss = require("gulp-clean-css"),
	concat = require("gulp-concat"),
	connect = require("gulp-connect-php"),
	debug = require("gulp-debug"),
	del = require("del"),
	log = require("fancy-log"),
	merge = require("merge-stream"),
	newer = require("gulp-newer"),
	notify = require("gulp-notify"),
	order = require("gulp-order"),
	plumber = require("gulp-plumber"),
	rename = require("gulp-rename"),
	sass = require("gulp-sass"),
	sourcemaps = require("gulp-sourcemaps"),
	uglify = require("gulp-uglify"),
	webp = require("gulp-webp");

//SRCs
var _dist = "./www";
var _build_dashboard = _dist + "/dashboard/assets/";
var _build_login = _dist + "/assets/";

// BUNDLERs
function javascript_bundler(bundleName, source, outputName, outputFolder, cb) {
	log.info(bundleName, outputFolder + outputName);
	var run = src(source)
		.pipe(
			debug({
				title: bundleName,
			})
		)
		.pipe(sourcemaps.init())
		.pipe(
			plumber({
				errorHandler: notify.onError("Error: <%= error.message %>"),
			})
		)
		.pipe(bytediff.start())
		.pipe(concat(outputName))
		.pipe(dest(outputFolder))
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(uglify())
		.pipe(bytediff.stop())
		.pipe(plumber.stop())
		.pipe(sourcemaps.write("./"))
		.pipe(dest(outputFolder));
	cb();
}
function style_bundler(bundleName, sourceSCSS, sourceSCSSPaths, sourceCSS, outputName, outputFolder, cb) {
	log.info(bundleName, outputFolder + outputName);
	var cssStream = src(sourceCSS)
		.pipe(
			debug({
				title: bundleName + " CSS",
			})
		)
		.pipe(concat("tmp-css.css"));
	var scssStream = src(sourceSCSS)
		.pipe(
			sass({
				includePaths: sourceSCSSPaths,
			}).on("error", sass.logError)
		)
		.pipe(
			debug({
				title: bundleName + " SCSS/SASS",
			})
		)
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"],
			})
		)
		.pipe(concat("tmp-sass.css"));
	var styleStream = merge(scssStream, cssStream)
		.pipe(
			debug({
				title: bundleName,
			})
		)
		.pipe(order(["tmp-sass.css", "tmp-css.css"]))
		.pipe(concat(outputName))
		.pipe(sourcemaps.init())
		.pipe(
			plumber({
				errorHandler: notify.onError("Error: <%= error.message %>"),
			})
		)
		.pipe(bytediff.start())
		.pipe(dest(outputFolder))
		.pipe(cleancss())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest(outputFolder))
		.pipe(bytediff.stop())
		.pipe(plumber.stop())
		.pipe(sourcemaps.write("./"))
		.pipe(dest(outputFolder))
		.pipe(browserSync.stream());
	cb();
}
/* TASKs */
// MAIN DASHBOARD
function scripts_dashboard(cb) {
	var source = [
		"./node_modules/jquery/dist/jquery.js",
		"./node_modules/bootstrap/dist/js/bootstrap.bundle.js",
		"./node_modules/inputmask/dist/jquery.inputmask.bundle.js",
		"./node_modules/jquery-mask-plugin/dist/jquery.mask.js",
		"./node_modules/jquery-validation/dist/jquery.validate.js",
		"./node_modules/jquery-validation/dist/additional-methods.js",
		"./node_modules/jquery-validation/dist/localization/messages_pt_BR.js",
		"./node_modules/toastr/toastr.js",
		"./source/dashboard/js/_forms.js",
		"./source/dashboard/js/dashboard.js",
	];
	var outputName = "dashboard.js";
	var outputFolder = _build_dashboard + "js/";
	javascript_bundler("dashboard js", source, outputName, outputFolder, cb);
}
function styles_dashboard(cb) {
	var sourceSCSS_ = "./source/dashboard/scss/dashboard.scss";
	var sourceSCSSPaths = [
		"./source/dashboard/scss/",
		"./node_modules/bootstrap/scss/",
		"./node_modules/hamburgers/_sass/hamburgers/",
		"./node_modules/@fortawesome/fontawesome-free/scss",
	];
	var sourceCSS = ["./node_modules/animate.css/animate.min.css"];
	var outputName = "dashboard.css";
	var outputFolder = _build_dashboard + "css/";
	style_bundler("dashboard css", sourceSCSS_, sourceSCSSPaths, sourceCSS, outputName, outputFolder, cb);
}
function images_dashboard(cb) {
	var images_src = "./source/images/**/*.{png,jpg,svg}";
	var images_dest = _build_dashboard + "images/";

	var images = src(images_src)
		.pipe(
			newer({
				dest: images_dest,
				map: function (rel) {
					var regex = /(\.(png|jpg))$/g;
					return rel.replace(regex, ".webp");
				},
			})
		)
		.pipe(debug({ title: "WEBP Images" }))
		.pipe(
			webp({
				quality: 100,
				method: 6,
			})
		)
		.pipe(dest(images_dest));
	browserSync.reload();
	cb();
}
// MAIN LOGIN
function scripts_login(cb) {
	var source = [
		"./node_modules/jquery/dist/jquery.js",
		"./node_modules/bootstrap/dist/js/bootstrap.bundle.js",
		"./node_modules/inputmask/dist/jquery.inputmask.bundle.js",
		"./node_modules/jquery-mask-plugin/dist/jquery.mask.js",
		"./node_modules/jquery-validation/dist/jquery.validate.js",
		"./node_modules/jquery-validation/dist/additional-methods.js",
		"./node_modules/jquery-validation/dist/localization/messages_pt_BR.js",
		"./node_modules/toastr/toastr.js",
		"./source/login/js/_forms.js",
		"./source/login/js/login.js",
	];
	var outputName = "login.js";
	var outputFolder = _build_login + "js/";
	javascript_bundler("login js", source, outputName, outputFolder, cb);
}
function styles_login(cb) {
	var sourceSCSS_ = "./source/login/scss/login.scss";
	var sourceSCSSPaths = [
		"./source/login/scss/",
		"./node_modules/bootstrap/scss/",
		"./node_modules/@fortawesome/fontawesome-free/scss",
	];
	var sourceCSS = ["./node_modules/animate.css/animate.min.css"];
	var outputName = "login.css";
	var outputFolder = _build_login + "css/";
	style_bundler("login css", sourceSCSS_, sourceSCSSPaths, sourceCSS, outputName, outputFolder, cb);
}
function images_login(cb) {
	var images_src = "./source/images/**/*.{png,jpg,svg}";
	var images_dest = _build_login + "images/";

	var images = src(images_src)
		.pipe(
			newer({
				dest: images_dest,
				map: function (rel) {
					var regex = /(\.(png|jpg))$/g;
					return rel.replace(regex, ".webp");
				},
			})
		)
		.pipe(debug({ title: "WEBP Images" }))
		.pipe(
			webp({
				quality: 100,
				method: 6,
			})
		)
		.pipe(dest(images_dest));
	browserSync.reload();
	cb();
}
// Webfonts
function webfonts(cb) {
	src("./node_modules/@fortawesome/fontawesome-free/webfonts/**.*").pipe(dest(_build_login + "/webfonts/"));
	src("./node_modules/@fortawesome/fontawesome-free/webfonts/**.*").pipe(dest(_build_dashboard + "/webfonts/"));
	cb();
}
// Clean
function clean(cb) {
	del.sync([_build + "css", _build + "js", _build + "webfonts"]);
	cb();
}
// Watch files
function observer() {
	watch("source/images/**/*.*", series(images_login, images_dashboard));
	watch("./source/dashboard/js/**/*.js", series(scripts_dashboard));
	watch("./source/dashboard/scss/**/*.scss", series(styles_dashboard));
	watch("./source/login/js/**/*.js", series(scripts_login));
	watch("./source/login/scss/**/*.scss", series(styles_login));
}
// Server
function localServer(cb) {
	connect.server(
		{
			base: _dist,
			port: 3081,
			debug: true,
		},
		function () {
			browserSync.init([_dist + "/**/**.*"], {
				// server: _dist
				proxy: "127.0.0.1:3081",
				port: 81,
				notify: false,
				ghostMode: false,
			});
		}
	);
	cb();
}
function proxyServer(cb) {
	browserSync.init([_dist + "/**/**.*"], {
		proxy: "http://atf.cornerpix.com.br/",
		port: 8100,
		notify: false,
		ghostMode: false,
	});
	cb();
}
function server(cb) {
	localServer(cb);
}

function clearcache(cb) {
	src([_dist + "/**/*.{html,php}", "!" + _dist + "/template/*.*"])
		.pipe(debug({ title: "Cache Bust" }))
		.pipe(
			cachebust({
				type: "timestamp",
			})
		)
		.pipe(dest(_dist));
	cb();
}

// Exports
const build = series(
	webfonts,
	parallel(scripts_dashboard, styles_dashboard, images_dashboard),
	parallel(scripts_login, styles_login, images_login),
	parallel(observer, server)
);
const host = series(clearcache, parallel(observer, server));
// Package Scripts
exports.build = build;
exports.pushversion = clearcache;
exports.default = function (cb) {
	host();
	cb();
};
