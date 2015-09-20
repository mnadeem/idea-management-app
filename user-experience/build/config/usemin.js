module.exports = {
	html : [ '<%= appConfig.paths.dist %>/{,*/}*.html' ],
	css : [ '<%= appConfig.paths.dist %>/styles/{,*/}*.css' ],
	js : '<%= appConfig.paths.dist %>/scripts/{,*/}*.js',
	options : {
		assetsDirs : [ '<%= appConfig.paths.dist %>',
				'<%= appConfig.paths.dist %>/images' ],
		patterns : {
			// FIXME While usemin won't have full support for revved files we have to put all references manually here
			js : [ [ /(images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm,
					'Update the JS to reference our revved images' ] ]
		}
	}
};