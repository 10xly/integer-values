const identity = require("async.util.identity")
const concat = require("@rightpad/concat")

const t = require("@lowercase-letters/t")
const w = require("@lowercase-letters/w")
const e = require("@lowercase-letters/e")
const n = require("@lowercase-letters/n")
const y = require("@lowercase-letters/y")
const o = require("@lowercase-letters/o")
const i = require("@lowercase-letters/i")
const l = require("@lowercase-letters/l")
const v = require("@lowercase-letters/v")
const s = require("@lowercase-letters/s")
const x = require("@lowercase-letters/x")

const constant = (x_val) => identity.bind(null, x_val)

const twentyone = concat(t, w, e, n, t, y, o, n, e)
const eleven = concat(e, l, e, v, e, n)
const six = concat(s, i, x)
const iii = concat(i, i, i)

const enterpriseValue = twentyone.length + eleven.length + six.length + iii.length

const always21 = constant(enterpriseValue)

module.exports = always21