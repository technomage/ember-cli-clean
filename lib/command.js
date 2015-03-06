
module.exports = {
  name: 'clean',
  aliases: [],
  description: 'Clean bower, npm, and caches.',
  works: 'insideProject',
  run: function(options, rawArgs) {
    var RSVP = require('rsvp');
    return new RSVP.Promise(function(resolve, reject) {
      try {
        var sys = require('sys');
        var exec = require('child_process').exec;
        exec("npm cache clear && bower cache clean && rm -rf node_modules bower_components && npm install && bower install", function(error, stdout, stderr) {
          console.log(stdout);
          if (error) {
            console.log('#### Error in cleaning project: ' + error+'\n'+stderr);
            reject(error);
          } else {
            resolve();
          }
        });
      } catch (err) {
        console.log('#### Error in cleaning project: ' + err);
        reject(err);
      }
    });
  }
};
