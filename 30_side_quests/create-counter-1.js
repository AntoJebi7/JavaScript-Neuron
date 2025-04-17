/**
 * LeetCode Problem: Create Counter Function
 * 
 * Problem: Implement a function `createCounter` that takes a number `n` as input
 * and returns a function (counter). The returned function, when called, 
 * returns the current value of `n` and then increments `n` by 1 for the next call.
 * 
 * Example:
 * const counter = createCounter(10);
 * counter(); // returns 10
 * counter(); // returns 11
 * counter(); // returns 12
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/**
 * Example usage:
 * const counter = createCounter(10);
 * counter(); // returns 10
 * counter(); // returns 11
 * counter(); // returns 12
 */
