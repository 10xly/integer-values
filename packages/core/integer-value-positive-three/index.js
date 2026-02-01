require('make-jquery-global')()
require('jquery-basic-arithmetic-plugin')

var five = require('five')
var add = require('add-two-numbers2')

module.exports = function three() {
  return jQuery.divide(add(add(five(), five()), five()), five())
}
