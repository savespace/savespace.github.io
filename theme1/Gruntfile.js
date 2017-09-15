module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'style.sass'
        }
      }
    },
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).

  grunt.registerTask('default', ['sass']);
};