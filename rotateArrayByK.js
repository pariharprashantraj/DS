let arr = [1, 2, 3, 4, 5];
//        [4, 5, 1, 2, 3]
// 0-2    [3, 2, 1, 4, 5]
// 1-3    [3, 4, 1, 2, 5]
// 2-4    [3, 4, 1, 2, 5]
// 3-5 n=5 5%5 3-0
// 4-6 n=5 6%5 4-1

function rotateArrayByK(array, k) {
  function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  }
  const reverseArr = reverseArray(array);
  const leftArray = reverseArray(reverseArr.slice(0, k));
  const rightArray = reverseArray(reverseArr.slice(k));
  return [...leftArray, ...rightArray];
}

function rotateArrayByKWithoutReversing(array, k) {
  const n = array.length;
  k = k % n;
  return [...array.slice(n - k), ...array.slice(0, n - k)];
}

function rotateRightManually(array, k) {
  const n = array.length;
  k = k % n;
  for (let i = 0; i < k; i++) {
    let lastItem = array.pop();
    array.unshift(lastItem);
  }
  return array;
}

// console.log(rotateArrayByK(arr, 2));
console.log(rotateRightManually(arr, 2));
