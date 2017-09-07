"use strict";

const suffixes = ["th", "st", "nd", "rd"];

const enhance = require("./enhance"),
	identity = require("./identity");

/**
 * Returns the ordinal suffix (st, nd, th) for the provided number.
 *
 * @param  {Number} number    a number, if type of the provided element
 *                            is not a number then function will not fail
 *                            and will return undefined.
 * @return {String}          a string containing the number ordinal suffix.
 */
function ordinalSuffix(number) {
	if (typeof(number) !== "number") {
		throw new TypeError(`Cannot determine ordinal suffix of something of type ${typeof(number)}`)
	}

	if (Number.isNaN(number)) {
		return undefined;
	}
	const v = Math.abs(number) % 100;
	return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
}

/**
 * Returns the ordinal reprentation of a certain number.
 *
 * @param  {Number} number    a number, if type of the provided element
 *                            is not a number then function will fail. If NaN
 *                            then "NaN" will be returned.
 * @param  {Function} transform an optional function that will be invoked
 *                              with the suffix associated to the number.
 *                              This can be used to perform some transformation
 *                              before appending the suffix to the number
 *                              itself.
 *
 * @return {String}          a string containing the number ordinal
 *                           representation.
 */
function toOrdinal(number, transform) {
	transform = transform || identity;

	const s = ordinalSuffix(number);
	return s ? number + transform(s) : number.toString();
}

/**
 * Extends Number prototype adding the toOrdinal method
 */
const ordinal = function() {
	enhance(Number, "toOrdinal", toOrdinal);
	enhance(Number, "ordinalSuffix", ordinalSuffix);
}
ordinal.toOrdinal = toOrdinal;
ordinal.ordinalSuffix = ordinalSuffix;

module.exports = ordinal;
