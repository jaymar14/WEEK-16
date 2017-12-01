"use strict";

var expect = require("chai").expect;

// function mult(x,y){
// 	return x*y;
// }

var multiply = function(x,y){
	if(typeof x !== "number" || typeof y !== "number"){
		throw new Error("x or y is not a numb.");
	}
	else return x * y;
};

describe("multiply", function(){
	it("should multiply property when passed numbers", function(){
		expect(multiply(2,4)).to.equal(8);
	});
	
	it ("should throw when not passed numbers", function(){
		expect(function (){
			multiply(2,"4");
		}).to.throw(Error);
	});
});

// describe("My cases level1", function(){
// 	it("A string", function(){
// 		expect("6+56").to.equal(62);
// 	})

// });