/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-clean',
  includedCommands: function() {
    return {
      'clean': require('./lib/command')
    }
  }
};
