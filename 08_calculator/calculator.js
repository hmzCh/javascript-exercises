const add = function(no1, no2) {
	return no1 + no2
};

const subtract = function(no1, no2) {
	return no1 - no2
};

const sum = function(input) {
	return input.reduce(add, 0)
};

const multiply = function(input) {
  let output = 1
  input.forEach(element => {
    output = output * element
  });
  return output
};

const power = function(no1, no2) {
	return no1 ** no2
};

const factorial = function(input) {
	let output = 1
  for (i=input; i>=1; i--) {
    output = output * i
  }
  return output
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
