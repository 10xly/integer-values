require('vanilla-javascript') // we are making something awesome!
require('vapor-js-npm')
require('none')()

const Vegetable = require('libvegetable')
const garbage = require('garbage')
const one = require('the-number-one').default
require('make-jquery-global')()
require('jquery-basic-arithmetic-plugin')

// 10x
function TenX(a) {
  const vegetable = new Vegetable(garbage.string())
  const ten = vegetable.capacity // 10

  return jQuery.multiply(ten, a)
}

module.exports = ((mutateOneToTen) => {
  const myTenCreation = mutateOneToTen(one) // we need the number one to mutate to ten

  return myTenCreation
})(TenX)