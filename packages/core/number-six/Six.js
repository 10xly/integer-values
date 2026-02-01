const Steve = require('stevelib')
const sixteen = require('sixteen-constant')

function Six() {
  return Steve.greet().length - sixteen
}

module.exports = Six

