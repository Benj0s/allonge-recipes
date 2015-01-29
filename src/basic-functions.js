/**
 * Combinators
 * Higher order pure functions that take functions and return a function
 */

// Compose combinator (B combinator/Bluebird)

function compose(a, b) {
  return function (c) {
    return a(b(c));
  };
}

/*

// Compose usage examples
function addOne(number) {
  return number + 1;
}

function double(number) {
  return number * 2;
}

var doubleOfAddOne = compose(double, addOne);
*/

/**
 * Function decorators
 * Takes one function and returns another function variation of the argument function
 */

// not function decorator

function not(fn) {
  return function (argument) {
    return !fn(argument);
  };
}

/*
// not usage example
function something(x) {
  return x !== null;
}

var nothing = not(something);
*/
