module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'includes/js/indexmin.js': ['includes/js/index.js']
				} //files
			} //my_targt
		}, //uglify

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, // compass

		watch: {
			options: { livereload: true },
			scripts: {
				files: ['includes/js/index.js'],
				tasks: ['uglify']				
			}, //scripts
			php: {
				files: ['*.php']
			}, //php
			sass: {
				files: ['includes/sass/*.scss'],
				tasks: ['compass:dev']
			} //sass

		} //watch
	}); //initConfig

	grunt.registerTask('default', 'watch');
} //exports