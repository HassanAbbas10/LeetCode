`
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false



`;
let validPath = function (str) {
  let stack = [];
  for (const num of str) {
    if (str.length === 0) {
      return false;
    }

    if (num === "{" || num === "(" || num === "[") {
      stack.push(num);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let top = stack.pop()

      if (num === ")" && top !== "(") {
        return false;
      }
      if (num === "}" && top !== "{") {
        return false;
      }
      if (num === "]" && top !== "[") {
        return false;
      }
    }
  }
  return stack.length === 0
};

console.log(validPath("()[]{}"))
console.log(validPath("([)]"))
console.log(validPath("(]"))
console.log(validPath("()"))
console.log(validPath("()[}"))

