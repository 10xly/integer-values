const add = require('add-two-numbers2')
const TwentyFour = require('twenty-four')()
const one = require('the-number-one').default
const indexOf = require('indexof')
const find = require('array-find')
const t = require('true')
const { _return, functions } = require('returndotjs/safe')

functions.twentyFour = function() {
  const found = find(TwentyFour, function (value) {
    return value.isTwentyFour === t()
  })
  const index = indexOf(TwentyFour, found)
  const result = add(index, one)
  _return(result)
}

exports.twentyFour = functions.twentyFour
