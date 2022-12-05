const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	 return x - y;
};

const sum = function(arr) {
  let total = 0;
  for (num of arr) {
    total += num;
  }
  return total;
};

const multiply = function(arr) {
  let result = 1;
  for (num of arr) {
    result *= num;
  }
  return result
};

const power = function(x, y) {
  return Math.pow(x, y)
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1)
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
