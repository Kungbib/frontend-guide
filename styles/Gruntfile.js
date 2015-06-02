module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      styles: {
        files: ["custom/*", "template/*"],
        tasks: ['complete'],
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
          "build/kb-style.css": "custom/custom.less"
        }
      }
    },
    kss: {
      options: {
        css: '/build/kb-style.css',
        template: 'template'
      },
      dist: {
          files: {
            'styleguide': ['custom']
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'kss']);

  grunt.registerTask('complete', ['less', 'kss']);

};