'use strict';

/**
 * Module dependences
 */

var dateformat = require('dateformat');

module.exports = function date(format, dt) {
  dt = dt || 'now';
  format = format || 'mmmm dd, yyyy';

  if (typeof dt === 'string' && dt !== 'now') {
    dt = new Date(dt);
  } else {
    dt = new Date();
  }

  return dateformat(dt, format);
};
