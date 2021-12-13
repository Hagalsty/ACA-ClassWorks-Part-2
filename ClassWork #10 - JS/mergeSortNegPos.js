const mergeArrs = (arr, lIndex, mid, rIndex) => {
  let i = 0;
  let j = 0;
  let k = lIndex;
  const leftArr = [];
  const rightArr = [];
  let lenL = mid - lIndex + 1;
  let lenR = rIndex - mid;

  for (let i = 0; i < lenL; i++) leftArr[i] = arr[lIndex + i];

  for (let i = 0; i < lenR; i++) rightArr[i] = arr[mid + 1 + i];

  while (i < lenL && j < lenR) {
    if (leftArr[i] <= 0) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < lenL) {
    arr[k] = leftArr[i];
    k++;
    i++;
  }
  while (j < lenR) {
    arr[k] = rightArr[j];
    k++;
    j++;
  }
};

const mergeSortNegPos = (arr = [], start = 0, end = arr.length - 1) => {
  if (start >= end) return;
  let mid = Math.floor(start + (end - start) / 2);
  mergeSortNegPos(arr, start, mid);
  mergeSortNegPos(arr, mid + 1, end);
  mergeArrs(arr, start, mid, end);
};

arr = [-1500, 2, -5, 4, -7, 456, -56, 12, -84, 12, -51, 3, -1, 6];
console.log(mergeSortNegPos(arr, 0, arr.length - 1));
console.log(arr);
