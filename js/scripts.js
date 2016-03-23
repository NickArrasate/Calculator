
/*===Calculator Functions
====================================*/

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

$(document).ready(function() {

 $("form#add").submit(function(event){
	var number1 = parseInt($("#add1").val());
	var number2 = parseInt($("#add2").val());
	var result = add(number1, number2);
	$("#addoutput").text(result);

	event.preventDefault();

	});

	$("form#subtract").submit(function(event){
 	var number1 = parseInt($("#sub1").val());
 	var number2 = parseInt($("#sub2").val());
 	var result = subtract(number1, number2);
 	$("#suboutput").text(result);

 	event.preventDefault();

 	});

	$("form#multiply").submit(function(event){
 	var number1 = parseInt($("#mult1").val());
 	var number2 = parseInt($("#mult2").val());
 	var result = multiply(number1, number2);
 	$("#multoutput").text(result);

 	event.preventDefault();

 	});

	$("form#divide").submit(function(event){
 	var number1 = parseInt($("#div1").val());
 	var number2 = parseInt($("#div2").val());
 	var result = divide(number1, number2);
 	$("#divoutput").text(result);

 	event.preventDefault();

 	});
});

/*===BMI Functions
====================================*/

// var userBmi = function(weight,height) {
// 	return (weight * 703) / (height * height);
// };
//
// var weight = parseInt(prompt("How much do you weight?"));
//
// var height = parseInt(prompt("How tall are you?"));
//
// var result = userBmi(height,weight);
//
// // alert("Your BMI is " + result.toPrecision(4) + ".");

/*===Temperature Functions
====================================*/

// var temp = parseInt(prompt("Enter Fahrenheit to convert to Celcius"));
//
// var fToC = function(temp) {
// 	return temp * (9/5) + 32
// };
//
// var cToF = function(temp) {
// 	return (temp - 32) * (5/9);
// };
//
// var result = cToF(temp);
//
// // alert(result.toPrecision(3));
//
// /*===Unit conversion Functions
// ====================================*/
