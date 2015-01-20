module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var jshintrc = grunt.file.readJSON('.jshintrc');

    grunt.initConfig({
        cmpnt: grunt.file.readJSON('bower.json'),

        banner: '/*! ngHello v<%= cmpnt.version %> by Gonzalo Ayuso(gonzalo123@gmail.com) - ' +
            'http://github.com/gonzalo123/ngHello - MIT License */\n',

        jshint: {
            files: ['Gruntfile.js', 'karma.conf.js', 'src/**.js', 'test/**.js'],
            options: {
                globals: jshintrc
            }
        },

        clean: ["dest/"],

        copy: {
            js: {
                src: 'src/ng-hello.js',
                dest: 'dist/ng-hello.js'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                runnerPort: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR'
            }
        },

        uglify: {
            js: {
                src: ['src/ng-hello.js'],
                dest: 'dist/ng-hello.min.js',
                options: {
                    banner: '<%= banner %>',
                    sourceMap: function (fileName) {
                        return fileName.replace(/$/, '.map');
                    }
                }
            }
        }
    });
    grunt.registerTask('build', ['clean', 'jshint', 'karma', 'copy', 'uglify']);
};