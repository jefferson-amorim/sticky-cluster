'use strict';
var debug = require('debug')('sticky-cluster');

var chalk; try { chalk = require('chalk'); } catch (e) {}
var moment; try { moment = require('moment'); } catch (e) {}

function getCurrentTime () {
  var dt = moment ? moment().format('YYYY-MM-DD HH:mm:ss.SSS') : Date.now();
  return chalk ? chalk.grey(dt) : dt;
}

module.exports = function () {
  process.stdout.write(getCurrentTime() + '  ');
  debug.apply(debug, arguments);
};
