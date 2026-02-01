var successor = require('successor')
var three = require('integer-value-positive-three')
var constant = require('lodash.constant')
var { doop } = require('yanoop')

var _four = constant(successor(doop(three)))

module.exports = function four() {
  return _four()
}
