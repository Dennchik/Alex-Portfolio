const sprite = () => {
	return $.gulp.src($.path.svgSpr.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "sprite",
				message: error.message
			}))
		}))
		.pipe($.gul.svgmin($.app.svgMin))
		.pipe($.gul.cheerio($.app.cheerio))
		// .pipe($.gul.svgstore({ inlineSvg: true }))
		.pipe($.gul.replace('&gt;', '>'))
		.pipe($.gul.svgSprite($.app.svgSpr))
		.pipe($.gulp.dest($.path.svgSpr.dest));
};
module.exports = sprite;