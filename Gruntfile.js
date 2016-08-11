/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;

    var base = '_site';

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner:
                '/*!\n' +
                ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
                ' * http://lab.hakim.se/reveal-js\n' +
                ' * MIT licensed\n' +
                ' *\n' +
                ' * Copyright (C) 2016 Hakim El Hattab, http://hakim.se\n' +
                ' */'
        },

        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            build: {
                src: 'js/reveal.js',
                dest: 'js/reveal.min.js'
            }
        },

        jshint: {
            options: {
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                expr: true,
                globals: {
                    head: false,
                    module: false,
                    console: false,
                    unescape: false,
                    define: false,
                    exports: false
                }
            },
            files: [ 'Gruntfile.js', 'js/reveal.js' ]
        },

        connect: {
            server: {
                options: {
                    port: port,
                    base: base,
                    livereload: true,
                    //open: true
                }
            }
        },

        zip: {
            'reveal-js-presentation.zip': [
                'index.html',
                'css/**',
                'js/**',
                'lib/**',
                'images/**',
                'plugin/**',
                '**.md'
            ]
        },

        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build',
            },
            //jekyllServe: {
                //command: 'bundle exec jekyll serve'
            //}
        },

        watch: {
            js: {
                files: [ 'Gruntfile.js', 'js/*.js' ],
                tasks: 'js'
            },
            theme: {
                files: [
                    'css/**/*.scss',
                ],
                tasks: ['jekyll']
            },
            html: {
                files: [ '*.html', '_slides/*.html'],
                tasks: ['jekyll'],
            },
            markdown: {
                files: [ '*.md', '_slides/*.md' ],
                tasks: ['jekyll'],
            },
            options: {
                livereload: true
            }
        }

    });

    // Dependencies
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-autoprefixer' );
    grunt.loadNpmTasks( 'grunt-zip' );
    grunt.loadNpmTasks( 'grunt-shell' );

    // Default task
    grunt.registerTask( 'jekyll', [ 'shell:jekyllBuild' ] );

    // JS task
    grunt.registerTask( 'js', [ 'jshint', 'uglify', 'jekyll' ] );

    // Package presentation to archive
    grunt.registerTask( 'package', [ 'default', 'zip' ] );

    // Serve presentation locally
    grunt.registerTask( 'serve', ['connect', 'jekyll', 'watch']);

    // Default task
    grunt.registerTask( 'default', ['js', 'jekyll' ] );

};
