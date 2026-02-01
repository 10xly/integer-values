const Vegetable = require('libvegetable')
const zr0 = require('integer-value-positive-zero')
const numberZero = require('number-zero')
const two = require('two')
const three = require('numeric-constant-three')
const integer17 = require('seventeen-integer')
const successor = require('successor')
const harmonicMean = require('compute-hmean')
const f = require('false')

global.jQuery = require('jquery')
require('jquery-basic-arithmetic-plugin')

function createAnEighteenlikeValue(enableGreeting) {
  const veg = new Vegetable('Vegetable, and I am a tool for getting the positive number integeric value 18')
  if (enableGreeting) veg.greet()
  const guac = veg.intoGuacamole()
  const fiveInteger = guac.portionsLeft
  const fifteen = jQuery.multiply(fiveInteger, three())
  const twoInteger = jQuery.subtract(integer17(), fifteen)
  const zeroNum = jQuery.subtract(twoInteger, two())
  const threeZeroesAddedTogether = jQuery.add(zeroNum, zr0(), numberZero)
  const seventeen = jQuery.add(threeZeroesAddedTogether, integer17())
  const eighteen = successor(seventeen)
  const middleBetweenSeventeenAndEighteen = harmonicMean([seventeen, eighteen, eighteen, eighteen])

  return middleBetweenSeventeenAndEighteen
}

function Eighteen() {
  return Math.round(createAnEighteenlikeValue(f()))
}

module.exports = Eighteen