'use strict';

/**
 * Module dependences
 */

var dateformat = require('dateformat');

module.exports = function date(format, dt, epoch) {
  dt = dt || 'now';
  format = format || 'mmmm dd, yyyy';
  epoch = epoch || 'datestring';

  if (epoch === 'epoch') {
    dt = new Date(parseInt(dt));
  } else if (typeof dt === 'string' && dt !== 'now') {
    dt = new Date(dt);
  } else {
    dt = new Date();
  }

  return dateformat(dt, format);
};
