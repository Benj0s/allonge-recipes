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
 * Decorator function
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

/**
 * Variadic function
 * Function which accepts an indefinite number of arguments
 */

var _slice = Array.prototype.slice;

function variadic(fn) {
  var fnLength = fn.length;

  if (fnLength < 1) {
    return fn;
  } else if (fnLength === 1) {
    return function () {
      return fn.call(this, _slice.call(arguments, 0));
    };
  } else {
    return function () {
      var numberOfArgs = arguments.length,
          namedArgs = _slice.call(arguments, 0, fnLength - 1),
          numberOfMissingNamedArgs = Math.max(fnLength - numberOfArgs - 1, 0),
          argPadding = new Array(numberOfMissingNamedArgs),
          variadicArgs = _slice.call(arguments, fn.length - 1);

      return fn.apply(this, namedArgs.concat(argPadding).concat([variadicArgs]));
    };
  }
}

/* Variadic function examples
function unary(first) {
  return first;
}

unary('why', 'hello', 'there');

variadic(unary)('why', 'hello', 'there');

function binary(first, rest) {
  return [first, rest];
}

binary('why', 'hello', 'there');

variadic(binary)('why', 'hello', 'there');
*/
