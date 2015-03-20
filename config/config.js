'use strict';

/**
 * Module Dependencies
 */

var pkg               = require('../package.json');
var dotenv            = require('dotenv');  // https://www.npmjs.com/package/dotenv

/**
 * Configuration File
 *
 * Why like this?
 *
 *  - All environmental variables documented in one place
 *  - If I use "." notation it's easy to cut/paste into code
 *  - Unlike JSON, javascript allows comments (which I like)
 *  - Reading package.json here centralizes all config info
 *
 */

// *For Development Purposes*
// Read in environment vars from .env file
// In production I recommend setting the
// environment vars directly
dotenv.load();

var config            = {};

// From package.json
config.name           = pkg.name;
config.version        = pkg.version;
config.description    = pkg.description;
config.company        = pkg.company;
config.author         = pkg.author;
config.keywords       = pkg.keywords;
config.nodeVersion    = pkg.engines.node;

config.port           = process.env.PORT || 3000;

/**
 * Logging Configuration
 */

config.logging        = process.env.LOGGING || false;

// Loggly configuration
config.loggly         = {};
config.loggly.token   = process.env.LOGGLY_TOKEN || 'Your Token';
config.loggly.subdomain = 'skeleton';
config.loggly.tags    = ['Nodejitsu'];
config.loggly.json    = true;

/**
 * Session Configuration
 */

var hour              = 3600000;
var day               = (hour * 24);
var week              = (day * 7);

// Session
config.session                 = {};
config.session.secret          = process.env.SESSION_SECRET || 'my big secret';
config.session.name            = 'sid';  // Generic - don't leak information
config.session.proxy           = false;  // Trust the reverse proxy for HTTPS/SSL
config.session.resave          = false;  // Forces session to be saved even when unmodified
config.session.saveUninitialized = false; // forces a session that is "uninitialized" to be saved to the store
config.session.cookie          = {};
config.session.cookie.httpOnly = true;   // Reduce XSS attack vector
config.session.cookie.secure   = false;  // Cookies via HTTPS/SSL
config.session.cookie.maxAge   = process.env.SESSION_MAX_AGE || week;

module.exports = config;
