/**
 * LeetCode Problem: Custom Expectation Function
 * 
 * Problem: Implement a function that returns an object with two methods:
 *  - toBe(expected): Checks if the given value is equal to the expected value.
 *  - notToBe(expected): Checks if the given value is not equal to the expected value.
 * 
 * The function should throw an error with the message "Not Equal" or "Equal" 
 * if the assertion fails in the respective method.
 * 
 * Example:
 * expect(5).toBe(5);        // true
 * expect(5).notToBe(5);     // throws "Equal"
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    }
};

/**
 * Example usage:
 * expect(5).toBe(5);        // returns true
 * expect(5).notToBe(5);     // throws "Equal"
 */

