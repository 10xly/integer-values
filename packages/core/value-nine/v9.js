require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

global.jQuery = require('jquery')
require('jquery-basic-arithmetic-plugin')
const noop6 = require('noop6') // import a noop
const one = require('the-number-one').default
const { EIGHT: eight } = require('eight-toolkit').constants
const nine = jQuery.add(eight, one)
const not = require('not')
const If = require('if')
const { noop } = require('yanoop')
const leftPad = require('left-pad')
const rightPad = require('right-pad')
const zeropad = require('zeropad')
const pad = require('pad')

const LEFT_PAD_INPUT = nine
const RIGHT_PAD_INPUT = nine

let NineV9 = function() {
  var _nine = Array.from({ length: nine }, (_, i) => i + one)[eight]
 
  this.v9Value = v9ify(_nine)
}

function v9ify(n) {
  If(not(jQuery.equals)(n, nine)).Then(() => { n = nine })
  // Add V9 Flair to nine
  return `V${n}`
}

let Ninifier = noop6 // doesn't need to do anything because we just use the prototype's functios

Ninifier.prototype.ninify = function(value) {
  return parseInt(value.split('V')[one])
}

function ninev9() {
  noop()
  leftPad('required', LEFT_PAD_INPUT)
  rightPad('required', RIGHT_PAD_INPUT)
  zeropad('1000', 4)
  pad(5, 'pad')
  pad('pad', 5)

  const v9 = new NineV9()
  const ninifier = new Ninifier()
  const value = v9.v9Value

  const myNineValue = ninifier.ninify(value)
  return myNineValue
}

module.exports = ninev9