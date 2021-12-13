function factorial(n) {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

const calculPaths1 = (m, n) => {
  return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
};

const calculPaths2 = (m, n) => {
  const arr = new Array(m);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
  }

  for (let i = 0; i < m; i++) arr[i][n - 1] = 1;
  for (let j = 0; j < n; j++) arr[m - 1][j] = 1;
  for (let i = m - 2; i >= 0; i--)
    for (j = n - 2; j >= 0; j--) arr[i][j] = arr[i][j + 1] + arr[i + 1][j];

  return arr[0][0];
};

const calculPaths3 = (m, n) => {
  if (m == 1 || n == 1) return 1;

  return calculPaths3(m - 1, n) + calculPaths3(m, n - 1);
};

console.log(calculPaths1(3, 3));
console.log(calculPaths2(3, 3));
console.log(calculPaths3(3, 3));
