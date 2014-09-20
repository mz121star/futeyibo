var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {
grunt.initConfig({
    imagemin: {                          // Task

        dynamic: {                         // Another target
            files: [{
                expand: true,                  // Enable dynamic expansion
                images: 'images/',                   // Src matches are relative to this path
                src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                dest: 'dist/'                  // Destination path prefix
            }]
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']); }
