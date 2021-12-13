const findHeight = (arr) => {
  let height = 0;
  for (let i = arr.length - 1; arr[i] != -1; i = arr[i]) height++;

  return height;
};

console.log(findHeight([-1, 0, 0, 1, 2, 2, 4, 4]));
console.log(findHeight([-1, 0, 1, 2, 3, 4, 5]));
console.log(findHeight([-1, 0, 0, 1, 2, 2, 4, 4, 5, 6, 7]));

const findHeight2 = (arr) => {
  let height = 0;
  let res = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    height = 0;
    for (let i = j; arr[i] != -1; i = arr[i]) height++;

    res.push(height);
  }

  return Math.max(...res);
};

console.log(findHeight2([-1, 0, 0, 1, 2, 2, 4, 4]));
console.log(findHeight2([-1, 0, 1, 2, 3, 4, 5]));
console.log(findHeight2([-1, 0, 0, 1, 2, 2, 4, 4, 5, 6, 7]));
console.log(findHeight2([-1, 0, 0, 1, 2, 2, 4, 4, 5, 6, 7, 2]));
