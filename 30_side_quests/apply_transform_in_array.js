/** Day 5
 * 🧠 LeetCode - 30 Days of JavaScript Challenge
 * 📌 Problem: Apply Transform Over Each Element in Array
 * 🔗 https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * 💡 Difficulty: Easy
 *
 * 💬 Description:
 * Given an integer array `arr` and a mapping function `fn`, return a new array with 
 * a transformation applied to each element.
 *
 * The returned array should be created such that:
 *    returnedArray[i] = fn(arr[i], i)
 *
 * ❌ You must solve it without using the built-in Array.map method.
 *
 * 📥 Input:
 * - arr: number[] - the input array
 * - fn: Function - a function that takes (element, index) and returns a transformed value
 *
 * 📤 Output:
 * - number[] - the new transformed array
 *
 * 🧪 Example 1:
 * Input: 
 *    arr = [1, 2, 3], 
 *    fn = function plusone(n) { return n + 1; }
 * Output: [2, 3, 4]
 * Explanation:
 *    const newArray = map(arr, plusone); // [2, 3, 4]
 *    The function increases each value in the array by one.
 *
 * 🧪 Example 2:
 * Input: 
 *    arr = [1, 2, 3], 
 *    fn = function plusIndex(n, i) { return n + i; }
 * Output: [1, 3, 5]
 */

/**
 * @param {number[]} arr - The array to transform
 * @param {Function} fn - The transformation function
 * @return {number[]} - The new transformed array
 */
var map = function(arr, fn) {
    let returnedArray = [];

    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i);
    }

    return returnedArray;
};

// 🧪 Example usage:

// Example 1: add one to each value
function plusOne(n) {
    return n + 1;
}
console.log(map([1, 2, 3], plusOne)); // Output: [2, 3, 4]

// Example 2: add value and its index
function plusIndex(n, i) {
    return n + i;
}
console.log(map([1, 2, 3], plusIndex)); // Output: [1, 3, 5]
