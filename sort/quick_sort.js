//Time complexity of O(n log(n))
//Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted
//Works by selecting one element (called the "pivot") and finding the index where the pivots
//should end up.
//What that means is that we can select any element in the array as our starting point or
//"pivot" and then look through the array and move the numbers to the left or the right of our
//pivot point based on whether they are higher or lower. They will not be sortedd. With the
//placement of the numbers to the left and right, the pivot will be placed in its correct
//index spot. Then we start again and use that element as our pivout point on the left side
//then do the same to the right pivot.

//Pivot Helper Implementation

function pivot(arr, start = 0, end = arr.length + 1) {
  //swap function
  function swap(array, i, j) {
    var temp = arr[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
