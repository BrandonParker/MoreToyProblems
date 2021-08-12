//  Longest Substring Without Repeating Characters
// Medium

// 16430

// 794

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  for (let x = 0; x < s.length; x++) {
      for (let y = x; y < s.length; y++) {
          let sub = s.substring(x, y + 1);
          let uniqueChar = {};
          let unique = true;
          for (let z = 0; z < sub.length; z++) {
              if (uniqueChar[sub[z]]) {
                  unique = false;
              }
              uniqueChar[sub[z]] = true;
          }
          if (unique && sub.length > longestSubstring) {
              longestSubstring = sub.length;
          }
      }
  }
  return longestSubstring;
};