var twoShim = require('two-shim')

function __getTwoValue() {
  var two = twoShim()
  return two
}

function __retrieveTwo() {
  return __getTwoValue()
}

function _createImplementation() {
  return __retrieveTwo()
}

const implementation = _createImplementation()

module.exports = implementation