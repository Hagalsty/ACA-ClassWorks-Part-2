const findSquareRoot = (x) => {
  let res = 0;
  let start = 0;
  let end = x / 2;

  while (start < end) {
    mid = (start + end) / 2;

    let sqr = mid * mid;
    if (sqr == x) return mid;
    if (sqr < x) {
      start = mid + 1;
      res = start;
    } else end = mid - 1;
  }

  return Math.floor(res);
};

console.log(findSquareRoot(31));
