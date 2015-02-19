'use strict';

/**
 * Module dependences
 */

var dateformat = require('dateformat');

module.exports = function date(str, format) {
  var dt;

  if (typeof str === 'string') {
    dt = new Date(str);
  } else {
    dt = new Date();
  }

  if (typeof format !== 'string' || format === 'today') {
    format = 'mmmm dd, yyyy';
  }
  return dateformat(dt, format);
};
