function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

const arr = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(arr)); // [1, 2, 5, 5, 6, 9]
