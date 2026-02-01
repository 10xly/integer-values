var $functionCall = require('function.call-x')
var $apply = require('uncurry-x')(require('function.apply-x'))
var $polyfillGetter = require('./get-polyfill')
var $emptyArray = require('lodash.stubarray')()
var $getPolyfill = $apply($functionCall, $polyfillGetter, $emptyArray)
var polyfill = $getPolyfill()

module.exports = polyfill()