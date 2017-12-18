// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */

var num1 = 1001;
var num2 = 123882498;
var num3 = 7823287;
var num4 = 1233;


var isPalindrome = function(x) {
  // convert int to array of digits
  // utilize an array to act as a stack
  // iterate through array with for loop, pushing to stack
  // once halfway point (or point where palindrome should reverse) is reached, begin to pop from stack and compare to current number.
  // if there is ever not a match, number is not a palindrome

  var digitArray = x.toString().split("");
  var digitStack = [];
  var halfwayPoint = Math.floor(digitArray.length / 2);

  if (digitArray.length % 2 === 1) {
    for(var i = 0; i < digitArray.length; i++) {
      if (i < halfwayPoint) {
        digitStack.push(digitArray[i]);
      } else if (i > halfwayPoint) {
        if (digitStack.pop() != digitArray[i]) {
          return false;
        }
      }
    }
  } else {
    for(var i = 0; i < digitArray.length; i++) {
      if (i < halfwayPoint) {
        digitStack.push(digitArray[i]);
      } else if (i >= halfwayPoint) {
        if (digitStack.pop() != digitArray[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
console.log(isPalindrome(num3));
console.log(isPalindrome(num4));