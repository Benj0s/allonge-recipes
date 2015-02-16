/**
 * Once combinator
 * Ensures a function can only be called once
 */
function once(fn) {
  var done = false;

  return function () {
    return done ? void 0 : ((done = true), fn.apply(this, arguments));
  };
}

/* once example
var askedOnBlindDate = once(function () {
  return 'sure, why not?';
});
*/


/**
 * mapWith
 * Wraps around map and turns any other function into a mapping
 */
function mapWith(fn) {
  return function (list) {
    return Array.prototype.map.call(list, function (something) {
      return fn.call(this, something);
    });
  };
}

/* mapWith example
var squareMap = mapWith(function (n) {
  return n * n;
});
*/

/* mapWih avoids having to write it like this all the time
var squareMap = function (array) {
  return Array.prototype.map.call(array, function (n) {
    return n * n;
  });
};
*/


/**
 * Flip
 * Flips the argumemnts in a function
 */
function flip(fn) {
  return function (first) {
    return function (second) {
      return fn.call(second, first);
    };
  };
}

/**
 * mapWith can now be written as
 */
var mapWith = flip(map);

/**
 * Flip function with further flexibility to call with both params at once
 */
function flip (fn) {
  return function (first, second) {
    if (arguments.length === 2) {
      return fn.call(second, first);
    } else {
      return function (second) {
        return fn.call(second, first);
      };
    }
  };
}

/* mapWith can now be called with
mapWith(fn, list);
// or
mapWith(fn)(list);
*/
