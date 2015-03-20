'use strict';

/**
 * Proxy Controller
 */

var request = require('request');
module.exports.controller = function (app) {
  app.get('/randomUser', function(req, res){
    request('http://api.randomuser.me/', function (error, response, body){
      if (!error && response.statusCode == 200) {
        res.send(200, body);
      } else {
        res.send(500);
      }
    });
  });
};
