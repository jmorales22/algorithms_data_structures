//This pattern uses objects or sets to collect values
//or frequencies of values. This can often avoid the need
//for nested loops or O(N^2) operations with arrays and
//strings

//Example - Write a function called same, which accepts two
//arrays. The function should return true if every value in
//the arrayhas its corresponding value squared in the second
//array. The frequency of values must be the same.

//NAIVE SOLUTION
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//REFACTORED
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr1) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//VALID ANAGRAM

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
}

console.log(validAnagram("azzb", "bzaa"));

//Write a function called sameFrequency. Given two positive integers, find out if the 
//two numbers have the same frequency of digits. You solution mush have the following complexities:
//Time: O(N)
//Sample Input: sameFrequency(182,128) //true
//sameFrequency(34, 14) // false
//sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222) // false

//MY SOLUTION (using a combination of the two solutions above)
function sameFrequency(int1, int2) {
    let newInt1 = Number(int1).toString();
    let newInt2 = Number(int2).toString();
    if (newInt1.length !== newInt2.length) {
      return false;
    }
  
    let obj1 = {};
    let obj2 = {};
  
    for (let i = 0; i < newInt1.length; i++) {
      let number = newInt1[i];
      obj1[number] ? (obj1[number] += 1) : (obj1[number] = 1);
    }
    for (let i = 0; i < newInt2.length; i++) {
      let number = newInt2[i];
      obj2[number] ? (obj2[number] += 1) : (obj2[number] = 1);
    }
    for (let key in obj1) {
      if (!(key in obj2)) {
        return false;
      }
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }

//HIS SOLUTION
//sameFrequency Solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

//2nd Practice Problem - Are there duplicates?
//Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks
//whether there are any duplicates amongst the arguments passed in.
//Sample Input:
//areThereDuplicates(1,2,3)//false
//areThereDuplicates(1,2,2)//true
//areThereDuplicates('a', 'b', 'c', 'a')//true

//MY SOLUTION
function areThereDuplicates(...args) {
    let n = [...args].length;
    let obj1 = {};
  
    for (let i = 0; i < n; i++) {
      let number = [...args][i];
      obj1[number] ? (obj1[number] += 1) : (obj1[number] = 1);
    }
  
    for (let key in obj1) {
      if (obj1[key] !== 1) return true;
    }
    return false;
  }

//HIS SOLUTION
//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
//areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

