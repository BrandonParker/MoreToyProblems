// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false
// Example 3:

// Input: c = 4
// Output: true
// Example 4:

// Input: c = 2
// Output: true
// Example 5:

// Input: c = 1
// Output: true
 

// Constraints:

// 0 <= c <= 231 - 1


// @param {number} c
// @return {boolean}
 
 var judgeSquareSum = function(c) {
  for (x = 1; x < c; x++) {
    for (y = x + 1; y < c; y++) {
        if ((x ** 2 + y ** 2) === c) return true;
    }
}
return false; 
};