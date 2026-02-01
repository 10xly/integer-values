"use strict";

var successor = require("successor");
var twentyfour = require("numbertwentyfour").twentyFour;
var literally = require("literally");

var TWENTY_FOUR = twentyfour();
var TWENTY_FIVE = successor(TWENTY_FOUR);

var twentyfive = literally(TWENTY_FIVE);

module.exports = twentyfive;
