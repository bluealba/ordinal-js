"use strict";

/**
 * Enhances a certain type prototype
 */
module.exports = function(type, name, fn) {
	if (!type.prototype[name]) {
		type.prototype[name] = function(...params) {
			return fn.call(null, this, ...params);
		}
	}
}
