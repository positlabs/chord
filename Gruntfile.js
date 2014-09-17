
/*

	

*/

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		// https://github.com/gruntjs/grunt-contrib-connect
		connect: {
			server: {
				options: {
					port: 8888,
					keepalive: true,
					base: 'dist'
				}
			}
		},


		// https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            css: {
                files: 'src/styles/**/*.less',
                tasks: ['less'],
                options: {
                    interrupt: true
                }
            },
            js: {
            	files: 'src/js/**/*.js',
            	tasks: ['js'],
            	options: {
                    interrupt: true
                }
            }
        },


		// https://github.com/gruntjs/grunt-contrib-less
        less: {
            options: {
                paths: ["src/styles"],
            },
            src: {
                expand: true,
                cwd: "src/styles",
                src: "main.less",
                dest: "dist/styles",
                ext: ".css"
            }
        },


        // https://github.com/gruntjs/grunt-contrib-concat
		concat: {
			options: {
				separator: ';\n',
			},
			dist: {
				src: ['node_modules/grunt-traceur/node_modules/traceur/bin/traceur-runtime.js', 'tmp/js/**/*.js'],
				dest: 'tmp/js/out.js',
			},
		},


        // https://github.com/changer/grunt-contrib-requirejs
        requirejs: {
			dev: {
				options: {
					mainConfigFile: "require_config.js",

					baseUrl: 'tmp/js/',
					name: '../../node_modules/almond/almond',
					insertRequire: ['main'],
					include: [
                        'main',
                        'traceur-runtime'
					],
					out: 'dist/js/out.js',
					wrap: true,
					optimize: 'none'
					// optimize: 'uglify2',
				}
			},
		},


		// https://github.com/aaronfrost/grunt-traceur
		traceur: {
			options: {
				// traceur options here
				blockBinding: true,
				modules: 'amd'
			},
			custom: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['**/*.js'],
					dest: 'tmp/js'
				}]
			},
		},


		// https://github.com/gruntjs/grunt-contrib-copy
		copy: {
			dist: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: 'src',
						dest: './dist',
						src: [
							'index.html',
                        ]
					}
				]
			}
		},


	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-traceur');


	// transpile es6 to es5, bake into a single file. Using requirejs because named module exports are broken in traceur
	grunt.registerTask('js', ['traceur', 'concat', 'requirejs']);
	
	// runs a server on localhost:8888
	grunt.registerTask('server', ['connect']);

	// full build
	grunt.registerTask('build', ['js', 'less', 'copy']); // or...
	grunt.registerTask('default', ['build']);

	// grunt watch will compile js and less on the fly

};