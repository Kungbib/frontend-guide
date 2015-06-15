module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build'],
    watch: {
      files: ["custom/**/*", "template/**/*"],
      tasks: ['complete'],
      options: {
        nospawn: true,
        livereload: 35790
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
          "build/css/kb-style.css": "custom/custom.less"
        }
      }
    },
    kss: {
      options: {
        css: '/css/kb-style.css',
        template: 'template'
      },
      dist: {
          files: {
            'build': ['custom']
          }
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'timestamp',
              replacement: '<%= grunt.template.today("yyyy-mm-dd - HH:MM:ss") %>'
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['template/tmphtml/index.html'], dest: 'template/'}
        ]
      }
    },
    copy: {
      main: {
      files: [
        // includes files within path 
        {expand: true, src: ['examples/**'], dest: 'build/'},
      ]
      }
    },
    'gh-pages': {
      options: {
        base: 'build',
        push: false
      },
      src: '**/*'
    }
  });

  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('complete', ['less', 'replace', 'kss', 'copy']);
  grunt.registerTask('default', ['complete']);

};
