'use strict';

/**
 * Polymer Controller
 */

module.exports.controller = function (app) {
  app.get('/polymer', function (req, res) {
    res.render('polymer/index', {
      section: 'polymer'
    });
  });

  app.get('/polymer/buildingElement', function (req, res) {
    res.render('polymer/buildingElement', {
      section: 'polymer'
    });
  });

  app.get('/polymer/complexExample', function (req, res) {
    res.render('polymer/complexExample', {
      section: 'polymer'
    });
  });

  app.get('/polymer/polymerSugar', function (reg, res) {
    res.render('polymer/polymerSugar', {
      section: 'polymer'
    });
  });
};
