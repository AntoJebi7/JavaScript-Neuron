/**
 * 🧠 LeetCode - 30 Days of JavaScript Challenge
 * 📅 Day X (Replace with the actual day number)
 * 📌 Problem: Counter (https://leetcode.com/problems/counter/)
 *
 * 💬 Description:
 * Implement a counter that can be incremented, decremented, and reset.
 *
 * 📥 Input: An integer `init` which will be the initial value of the counter.
 * 📤 Output: An object with three methods:
 *    - increment(): increases the counter by 1 and returns the new value.
 *    - decrement(): decreases the counter by 1 and returns the new value.
 *    - reset(): resets the counter to the initial value and returns it.
 *
 * 🧪 Example:
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset();     // 5
 * counter.decrement(); // 4
 *
 * 🛠️ Constraints:
 * - The returned object must always operate on the same internal state.
 */

/**
 * @param {integer} init - The initial value of the counter.
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let realinit = init; // Internal state to maintain current value

    return {
        // Increments the counter and returns the updated value
        increment: function() {
            return ++realinit;
        },
        // Decrements the counter and returns the updated value
        decrement: function() {
            return --realinit;
        },
        // Resets the counter to the original value and returns it
        reset: function() {
            realinit = init;
            return realinit;
        }
    };
};

// 🧪 Test Example
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset());     // Output: 5
console.log(counter.decrement()); // Output: 4
