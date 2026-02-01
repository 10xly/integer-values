var ninev9 = require('value-nine')
var $Number = require('es-intrinsic-cache')('Number')

module.exports = function() {
  return $Number(ninev9())
}
