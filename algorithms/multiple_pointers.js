//MULTIPLE POINTERS - Creating pointers or values that correspond to an index or
//position and move towards the beginning, end, or middle based on a certain condition.
//Very efficient for solving problems with minimal space complexity as well

//Write a function called sumZero which accepts a sorted array of integers. The function should
//find the first pair where the sum is 0. Return an array that includes both values that
//sum to zero or undefined if a pair does not exist.

//Examples: sumZero([-3, -2 -1, 0, 1, 2 3]) // output is [-3,3] because this is the first pair to sum to zero
//sumZero([-1, 2, 5]) // output is undefined
//sumZero([-2, -1, 0, 1, 3]) // output is [-1,1]
//NAIVE SOLUTION
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//REFACTOR
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//countUniqueValues
//Implement a function called countUniqueValues, which accepts a sorted array, and counts
//the unique values in the array. There can be negative numbers in the array but it can always be sorted.
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7]));

//CODING EXERCISE
//averagePair - Write a function called averagePair. Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the
//target value. There may be more than one pair that matches the target value.
//Sample Input: averagePair([1,2,3], 2.5) //Output is true
//averagePair([1,3,3,5,6,7,10,12, 19], 8) //Output is true
//averagePair([-1, 0, 3, 4, 5, 6], 4.1)//Output is false
//averagePair([], 4)//Output is false

//MY SOLUTION
function averagePair(arr, n) {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === n) {
      return true;
    } else if (average < n) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

//HIS SOLUTION
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

//ANOTHER PRACTICE PROBLEM
//IS SUBSEQUENCE - Write a function called isSubsequence which takes in two strings and checks whether
//the character in the first string form a subsequence of the characters in the second string.
//In other words, the function should check whether the characters in the first string appear
//somewhere in the second string, without their order changing.

//MY SOLUTION

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;
  
  while(j < str2.length){
    if(str1[i] === str2[j]) {
      i++;
    }
    if(i === str1.length){
      return true;
    } else{
      j++
    }
  }
  return false;
}

//HIS SOLUTIONS
//isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
