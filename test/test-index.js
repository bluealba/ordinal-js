"use strict";

const ordinal = require("../index"),
	chai = require("chai");

chai.should();

describe("ordinal-js", () => {

	describe("toOrdinal()", () => {

		context("when language is english", () => {



			// Numbers ending in 1
			it("1 should be transformed to 1st", () => {
				ordinal.toOrdinal(1).should.be.equal("1st");
			});

			it("Any number that ends in 11 should be appended with th", () => {
				ordinal.toOrdinal(11).should.be.equal("11th");
				ordinal.toOrdinal(111).should.be.equal("111th");
				ordinal.toOrdinal(1011).should.be.equal("1011th");
				ordinal.toOrdinal(10011).should.be.equal("10011th");
				ordinal.toOrdinal(211).should.be.equal("211th");
			});

			it("Any other number that ends in 1 should be appended with st", () => {
				ordinal.toOrdinal(21).should.be.equal("21st");
				ordinal.toOrdinal(31).should.be.equal("31st");
				ordinal.toOrdinal(41).should.be.equal("41st");
				ordinal.toOrdinal(51).should.be.equal("51st");
				ordinal.toOrdinal(61).should.be.equal("61st");
				ordinal.toOrdinal(71).should.be.equal("71st");
				ordinal.toOrdinal(81).should.be.equal("81st");
				ordinal.toOrdinal(91).should.be.equal("91st");
			});

			// Numbers ending in 2
			it("2 should be transformed to 2nd", () => {
				ordinal.toOrdinal(2).should.be.equal("2nd");
			});

			it("Any number that ends in 12 should be appended with th", () => {
				ordinal.toOrdinal(12).should.be.equal("12th");
				ordinal.toOrdinal(112).should.be.equal("112th");
				ordinal.toOrdinal(1012).should.be.equal("1012th");
				ordinal.toOrdinal(10012).should.be.equal("10012th");
				ordinal.toOrdinal(212).should.be.equal("212th");
			});

			it("Any other number that ends in 2 should be appended with nd", () => {
				ordinal.toOrdinal(22).should.be.equal("22nd");
				ordinal.toOrdinal(32).should.be.equal("32nd");
				ordinal.toOrdinal(42).should.be.equal("42nd");
				ordinal.toOrdinal(52).should.be.equal("52nd");
				ordinal.toOrdinal(62).should.be.equal("62nd");
				ordinal.toOrdinal(72).should.be.equal("72nd");
				ordinal.toOrdinal(82).should.be.equal("82nd");
				ordinal.toOrdinal(92).should.be.equal("92nd");
			});

			// Numbers ending in 3
			it("3 should be transformed to 3rd", () => {
				ordinal.toOrdinal(3).should.be.equal("3rd");
			});

			it("Any number that ends in 13 should be appended with th", () => {
				ordinal.toOrdinal(13).should.be.equal("13th");
				ordinal.toOrdinal(113).should.be.equal("113th");
				ordinal.toOrdinal(1013).should.be.equal("1013th");
				ordinal.toOrdinal(10013).should.be.equal("10013th");
				ordinal.toOrdinal(213).should.be.equal("213th");
			});

			it("Any other number that ends in 3 should be appended with rd", () => {
				ordinal.toOrdinal(23).should.be.equal("23rd");
				ordinal.toOrdinal(33).should.be.equal("33rd");
				ordinal.toOrdinal(43).should.be.equal("43rd");
				ordinal.toOrdinal(53).should.be.equal("53rd");
				ordinal.toOrdinal(63).should.be.equal("63rd");
				ordinal.toOrdinal(73).should.be.equal("73rd");
				ordinal.toOrdinal(83).should.be.equal("83rd");
				ordinal.toOrdinal(93).should.be.equal("93rd");
			});

			it("4 to 13 should be appended with th", () => {
				ordinal.toOrdinal(4).should.be.equal("4th");
				ordinal.toOrdinal(5).should.be.equal("5th");
				ordinal.toOrdinal(6).should.be.equal("6th");
				ordinal.toOrdinal(7).should.be.equal("7th");
				ordinal.toOrdinal(8).should.be.equal("8th");
				ordinal.toOrdinal(9).should.be.equal("9th");
				ordinal.toOrdinal(10).should.be.equal("10th");
				ordinal.toOrdinal(11).should.be.equal("11th");
				ordinal.toOrdinal(12).should.be.equal("12th");
				ordinal.toOrdinal(13).should.be.equal("13th");
			});

			it("0 should be transformed to 0th", () => {
				ordinal.toOrdinal(0).should.be.equal("0th");
			});

			it("negative numbers should be treated as positive numbers", () => {
				ordinal.toOrdinal(-1).should.be.equal("-1st");
				ordinal.toOrdinal(-2).should.be.equal("-2nd");
			});

			it("non numbers will produce a TypeError", () => {
				(() => ordinal.toOrdinal("foo")).should.throw(TypeError);
			});

			it("undefined will produce a TypeError", () => {
				(() => ordinal.toOrdinal(undefined)).should.throw(TypeError);
			});

			it("null will produce a TypeError", () => {
				(() => ordinal.toOrdinal(null)).should.throw(TypeError);
			});

			it("NaN shuould just print NaN", () => {
				ordinal.toOrdinal(NaN).should.be.equal("NaN");
			});

		});

		describe("toOrdinal() with a tx function", () => {

			it("should invoke the transformation function to enhance the result", () => {
				ordinal.toOrdinal(1, suffix => ` ${suffix}`).should.be.equal("1 st");
				ordinal.toOrdinal(4, suffix => ` ${suffix}`).should.be.equal("4 th");
			});

		});

		describe("ordinalSuffix()", () => {

			it("should return the ordinal suffix without preppending the number", () => {
				ordinal.ordinalSuffix(1).should.be.equal("st");
				ordinal.ordinalSuffix(2).should.be.equal("nd");
			});

		});

		describe("Number prototype enhacement", () => {
			const one = 1;
			const two = 2;

			beforeEach(() => {
				ordinal();
			});

			it("number.toOrdinal() should return the ordinal representation", () => {
				one.toOrdinal().should.be.equal("1st");
				two.toOrdinal().should.be.equal("2nd");
			});

			it("number.toOrdinal() should return the ordinal representation", () => {
				one.ordinalSuffix().should.be.equal("st");
				two.ordinalSuffix().should.be.equal("nd");
			});


		});


	});


});
