const findSquare = (num) => {
  let res = 0;
  let count = 0;
  for (let i = 1; i <= num && res < num; i += 2) {
    res += i;
    count++;
  }

  if (res == num) return count;
  return -1;
};

console.log(findSquare(5));
