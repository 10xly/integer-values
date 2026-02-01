const Vegetable = require("libvegetable")
const zr0surge = require("zerosurge").returnZero
const zr0 = require("integer-value-positive-zero")
const numberZero = require("number-zero")
const two = require("two")
const three = require("numeric-constant-three")
const integer17 = require("seventeen-integer")
const successor = require("successor")
const harmonicMean = require("compute-hmean")
const f = require("false-value")
const t = require("true-value")
const construct = require("construct-new")

global.jQuery = require("jquery")
require("jquery-basic-arithmetic-plugin")

const round = require("math-intrinsics/round")

function createAnEighteenlikeValue(enableGreeting, amIReturningZero) {
  const veg = construct({ target: Vegetable, args: ["Vegetable"] })
  if (enableGreeting) veg.greet()
  const guac = veg.intoGuacamole()
  const fiveInteger = guac.portionsLeft
  const fifteen = jQuery.multiply(fiveInteger, three())
  const twoInteger = jQuery.subtract(integer17(), fifteen)
  const zeroNum = jQuery.subtract(twoInteger, two())
  const fourZeroesAddedTogether = jQuery.add(
    zeroNum,
    zr0surge({
      loggingEnabled: f(),
      method: require("zerosurge").ZeroCalculationMethod.NumberPrototypeValue,
    }),
    numberZero,
    zr0()
  )
  if (amIReturningZero) return numberZero
  const seventeen = jQuery.add(fourZeroesAddedTogether, integer17())
  const eighteen = successor(seventeen)
  const middleBetweenSeventeenAndEighteen = harmonicMean([
    seventeen,
    eighteen,
    eighteen,
    eighteen,
  ])

  return middleBetweenSeventeenAndEighteen
}

function Eighteen() {
  return round(createAnEighteenlikeValue(f()))
}

function Zero() {
  return createAnEighteenlikeValue(f(), t())
}
exports.Eighteen = Eighteen
exports.Zero = Zero
