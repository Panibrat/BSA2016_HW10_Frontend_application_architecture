module.exports = function(grunt) {

    var vendors = 'backbone backbone.marionette backbone.localstorage'.split(' ');

    grunt.initConfig({

        browserify: {

            app: {
                src: 'resources/assets/js/app/app.js',
                dest: 'public/js/app.js',
                options: {
                    debug: true,
                    extensions: ['.hbs'],
                    transform: ['hbsfy'],
                    external: vendors
                }
            },
            vendors: {
                files: {
                    'public/js/vendors.js': []
                },
                options: {
                    'require': vendors
                }
            },
        },

        uglify: {

            bundle: {
                src: ['public/js/bower-vendors.js', 'public/js/vendors.js', 'public/js/app.js'],
                dest: 'public/js/bundle.min.js',
            },
        },

        concat: {
            options: {
                separator: '\n'
            },
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'public/js/bower-vendors.js'
            },
            vendor_css: {

                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
                dest: 'public/css/vendors.css'
            },
            css: {
                src: ['resources/assets/**/*.css'],
                dest: 'public/css/style.css'
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: 'resources/assets/**/*.js',
                tasks: ['browserify:app']
            },
            styles: {
                files: 'resources/assets/**/*.css',
                tasks: ['concat:css']
            },
            templates: {
                files: 'resources/assets/**/*.hbs',
                tasks: ['browserify:app']
            }
        },

        connect: {
            test: {
                options: {
                    port: 8080,
                    debug: true,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('stage', ['browserify:app', 'browserify:vendors', 'concat']);
    grunt.registerTask('prod', ['stage', 'uglify']);
    grunt.registerTask('dev', ['stage', 'watch']);

    grunt.registerTask('default', ['dev']);
};