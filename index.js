'use strict';

var dateformat = require('dateformat');

module.exports = function date (format, dt) {
  dt = dt || 'now';
  format = format || 'mmmm dd, yyyy';

  if ((typeof dt === 'string' && dt !== 'now') || typeof dt === 'number') {
    dt = new Date(dt);
  } else {
    dt = new Date();
  }

  return dateformat(dt, format);
};
