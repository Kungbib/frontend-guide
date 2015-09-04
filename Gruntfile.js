module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['less', 'replace', 'kss', 'copy:main', 'copy:dist']);
  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('deploy', ['clean', 'build', 'gh-pages']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build', 'dist'],
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
          "build/css/kb-style.css": "theme/theme.less"
        }
      },
      kssdev: {
        options: {
          compress: true,
          yucompress: true,
          optimization: 2
        },
        files: {
          "template/public/kss.css": "template/public/kss.less"
        }
      }
    },
    kss: {
      options: {
        // css: './css/kb-style.css',
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
              replacement: '<%= grunt.template.today("yyyy-mm-dd - HH:MM") %>'
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
          {expand: true, src: ['assets/**'], dest: 'build/'},
          {expand: true, flatten: true, src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'], dest: 'build/vendor/'},
          {expand: true, flatten: true, src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'build/vendor/'},
        ]
      },
      dist: {
        files: [
          {expand: true, cwd: 'assets/', src: ['*'], dest: 'dist/assets/'},
          {expand: true, cwd: 'build/css/', src: ['*'], dest: 'dist/css/'},
          {expand: true, cwd: 'custom/', src: ['**/*.less'], dest: 'dist/less/'}
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
