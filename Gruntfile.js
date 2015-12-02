'use strict';
module.exports = function( grunt ) {

	grunt.initConfig({
		clean: {
			dist: [ 'css' ]
		},
		cssmin: {
			target: {
				files: {
					'css/style.min.css': 'css/style.css'
				}
			}
		},
		sass: {
			options: {
				includePaths: ['node_modules/foundation-sites/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/style.css': 'style.scss'
				}
			}
		},
		watch: {
			css: {
				files: [ '*.scss' ],
				tasks: [ 'clean', 'sass', 'cssmin' ],
				options: {
					spawn: false
				}
			}
		}
	});

	// Load tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	grunt.registerTask( 'default', [
		'clean',
		'sass',
		'cssmin'
	]);
};