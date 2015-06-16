module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ejs');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.initConfig({

        copy: {
            assets: {
                files: [{
                    src: ['**'],
                    dest: 'build/img/',
                    cwd: 'www/img/',
                    expand: true
                }]
            }
        },

        ejs: {
            all: {
                src: ['**/*.ejs', '!templates/**/*'],
                dest: 'build/',
                ext: '.html',
                expand: true,
                cwd: 'www/'
            },
        },
        sass: {// Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'compact',
                sourcemap: 'none'
              },
              files:  [{
                expand: true,
                cwd: 'www/scss/',
                src: ['**/*.scss'],
                dest: 'build/css/',
                ext: '.css'
              }]
            }
        },
        htmlmin: { // Task
            dist:{ // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true,

                },
                files: { // Dictionary of files
                    'build/min.html': 'build/*.html' // 'destination': 'source'
                }
            }
        },

        watch: {
            files: ["**/*.ejs", "**/*.scss"],
            tasks: ["ejs", "htmlmin", "sass", "copy:assets"],
            options: {
                livereload: true,
            }
        }
    });

};
