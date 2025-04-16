/**
 * LeetCode Problem: Create Hello World Function
 * 
 * Problem: Implement a function `createHelloWorld` that returns a function.
 * This returned function, when invoked, should return the string "Hello World".
 * 
 * Example:
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

/**
 * Example usage:
 * const f = createHelloWorld();
 * f(); // returns "Hello World"
 */
