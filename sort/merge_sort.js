//Time complexity of O(n log(n))
//Splits the array in half until each element in the array is in it's own array of length 1
//and then it sorts and merges the arrays back together
//Example [2,4,7,5]
//[2,4] [7,5]
//[2] [4] [7] [5]

//compare [2] and [4], two is smaller so we get [2,4]
//compare [7] and [5], five is smaller so we get [5,7]

//then we compare the last two arrays [2,4] and [5,7]
//compare 2 and 5, two is smallest so it will be first [2]
//then compare 4 and 5, 4 is smaller so it will be next [2,4]
//then compare 5 and 7, 5 is smaller so it will be next then 7 [2,4,5,7]

//you will work your way back starting with sorting the left division then sorting the right division
//then the left and right division will be merged together.

//code for the merge sort algorithm

function merge(arr1, arr2) {

  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}
