module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/hello-mock.js',
            'src/ng-hello.js',

            'test/*.js'
        ],

        preprocessors: {
            '*.js': 'coverage'
        },

        reporters: ['progress', 'coverage'],

        autoWatch: true,

        browsers: ['PhantomJS'],

        coverageReporter: {
            type: 'lcov',
            dir: 'out/coverage'
        }
    });
};