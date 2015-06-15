module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['less', 'replace', 'kss', 'copy']);
  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build'],
    connect: {
      all: {
        options: {port: 8500, hostname: "0.0.0.0"}
      }
    },
    watch: {
      files: ["custom/**/*", "template/**/*", "examples/**/*"],
      tasks: ['default'],
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
        css: './css/kb-style.css',
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
          {expand: true, src: ['examples/**'], dest: 'build/'},
        ]
      }
    },
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: '**/*'
    }
  });

};
