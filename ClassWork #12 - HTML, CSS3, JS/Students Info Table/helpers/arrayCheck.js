export function checkArray(arr) {
  if (arr.every((x, i) => i === 0 || x >= arr[i - 1])) {
    return "Ascending";
  }
  if (arr.every((x, i) => i === 0 || x <= arr[i - 1])) {
    return "Descending";
  }
  return "Unsorted";
}
