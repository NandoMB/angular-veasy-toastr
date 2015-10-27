'use strict'

module.exports = function (grunt) {

  grunt.initConfig({

    bower: {
      install: {
        options: {
          targetDir: 'demo/bower_components',
          install: true,
          verbose: true,
          copy: false
        }
      }
    },

    clean: {
      build: ['dist'],
      target: ['src/target']
    },

    html2js: {
      options: {
        base: 'app',
        module: 'veasyToastr.templates',
        singleModule: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      rename: {
        options: {
          rename: function (moduleName) {
            return moduleName.replace('../src/templates/', '');
          }
        },
        src: ['src/**/*.html'],
        dest: 'src/target/veasy-toastr-tpls.js'
      }
    },

    uglify: {
      tpls: {
        files: {
          'src/target/veasy-toastr-tpls.min.js': ['src/target/veasy-toastr-tpls.js']
        }
      },
      dist: {
        files: {
          'src/target/veasy-toastr.min.js': ['src/js/veasy-toastr.js']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/css/veasy-toastr.min.css': ['src/css/veasy-toastr.css']
        }
      }
    },

    copy: {
      src: {
        files: [
          { src: ['src/veasy-toastr.js'],              dest: 'dist/js/veasy-toastr.js' },
          { src: ['src/target/veasy-toastr-tpls.js'],  dest: 'dist/js/veasy-toastr-tpls.js' }
        ],
      },
      min: {
        files: [
          { src: ['src/target/veasy-toastr.min.js'],       dest: 'dist/js/veasy-toastr.min.js' },
          { src: ['src/target/veasy-toastr-tpls.min.js'],  dest: 'dist/js/veasy-toastr-tpls.min.js' }
        ],
      }
    }

  });

  // Plugins
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Tasks
  grunt.registerTask('dist', [
    'clean',
    'html2js',
    'uglify:tpls',
    'uglify:dist',
    'cssmin',
    'copy:min',
    'clean:target'
  ]);

  grunt.registerTask('dev', [
    'clean',
    'bower:install',
    'html2js',
    'uglify:tpls',
    'uglify:dist',
    'cssmin',
    'copy:min',
    'copy:src',
    'clean:target'
  ]);

};
