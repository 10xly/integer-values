const getIntrinsic = require("es-intrinsic-cache")
const numberPrototype = getIntrinsic("Number.prototype")
const valueOf = require("@resolve-es/valueof")

module.exports = function IntegerValuePositiveZero() {
  const zero = valueOf(numberPrototype)
  return zero
}
