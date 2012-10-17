module.exports = function(grunt) {

  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['js/jquery.dashboard.js']
    },
    meta: {
      banner: '/*\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("dd/mm/yyyy") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\n" : "" %>' +
        '<%= pkg.origional ? " * " + pkg.origional + "\n" : "" %>' +
        ' * Copyright (c) 2010-<%= grunt.template.today("yyyy") %> <%= pkg.origionalauthor.name %>\n' +
        ' * Modifications made by <%= pkg.author.name %>\n' +
        ' * Dual licensed under the MIT and GPL licenses (same as jQuery):\n'+
        ' *   <%= _.pluck(pkg.licenses, "url").join("\n *   ") %>\n */'
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'js/jquery.dashboard.js'],
        dest: 'js/jquery.dashboard.min-<%= pkg.version %>.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib');

  // Default task.
  grunt.registerTask('default', 'lint');

};