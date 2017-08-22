# ordinal.js

[![Build Status](https://travis-ci.org/bluealba/ordinal-js.svg?branch=master)](https://travis-ci.org/bluealba/ordinal-js)
[![npm](https://img.shields.io/npm/v/ordinal-js.svg)](https://npmjs.org/package/ordinal-js)
[![npm](https://img.shields.io/npm/dt/ordinal-js.svg)](https://npmjs.org/package/ordinal-js)
[![Coverage Status](https://coveralls.io/repos/github/bluealba/ordinal-js/badge.svg?branch=master)](https://coveralls.io/github/bluealba/ordinal-js?branch=master)

This library provides a simple utility to translate from a regular number to its
ordinal representation (1 to 1st, 2 to 2nd, 3 to 3rd)

## Installation
```
npm install ordinal-js --save
```

or if you rather use `yarn`
```
yarn add ordinal-js
```

## Usage
Currently only english strategy is supported, although there are plans to extend
the library and add i18n support.

Converting a number to its ordinal representation is as simple as:

#### Example
```javascript
const ordinal = require("ordinal-js");

console.log(ordinal.toOrdinal(1)) // "1st"
console.log(ordinal.toOrdinal(2)) // "2nd"
console.log(ordinal.toOrdinal(3)) // "3rd"
console.log(ordinal.toOrdinal(4)) // "4th"
```

Also the function `ordinalSuffix(number)` is available and will return the suffix
itself without prepending the number to it.

#### Example
```javascript
const ordinal = require("ordinal-js");

console.log(ordinal.ordinalSuffix(1)) // "st"
console.log(ordinal.ordinalSuffix(2)) // "nd"
console.log(ordinal.ordinalSuffix(3)) // "rd"
console.log(ordinal.ordinalSuffix(4)) // "th"
```

If you don't care about prototypes pollution you can invoke the `ordinal` function
itself and it will add two new methods (`toOrdinal()` and `ordinalSuffix()`) to
Number's prototype.

#### Example
```javascript
const ordinal = require("ordinal-js");
ordinal(); //only needed once

const someNumber = 1;

console.log(someNumber.ordinalSuffix()) //st
console.log(someNumber.toOrdinal()) //1st
```

Note that this approach will only work with non literal numbers (you cannot do
`1.toOrdinal()` while in strict mode)

## API
This section describes every method in the ordinal object

### toOrdinal
#### Description
Returns the ordinal representation of the number
```
@param      {Number} number       - a number, if type of the provided element is not a number then function will throw a TypeError. If NaN then "NaN" will be returned.
@param      {Function} transform  - an optional function that will be invoked with the suffix associated to the number. This can be used to perform some transformation before appending the suffix to the number itself.
@throws     {TypeError}           - if the provided parameter is not a number.
```
#### Example
```javascript
const ordinal = require("ordinal-js");

console.log(ordinal.toOrdinal(12)) //12th
console.log(ordinal.toOrdinal(12, suffix => ` ${suffix.toUpperCase()}`)) //12 TH
```

### ordinalSuffix
#### Description
Returns the ordinal suffix for the given number
```
@param      {Number} number - a number, if type of the provided element is not a number then function will throw a TypeError. If NaN undefined will be returned.
@throws     {TypeError}     -  the provided parameter is not a number.
```
#### Example
```javascript
const ordinal = require("ordinal-js");

console.log(ordinal.ordinalSuffix(12)) //th
```
