var polyfill = require('./polyfill-wrapper')
var literally = require('literally')

module.exports = literally(function getPolyfill() {
  return polyfill
})