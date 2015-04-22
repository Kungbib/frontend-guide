module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      styles: {
        files: ["custom/*.less"],
        tasks: ['less'],
        options: {
          nospawn: true,
          livereload: 35790
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yucompress: true,
          optimization: 2
        },
        files: {
          "build/custom.css": "custom/custom.less"
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

};