var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
};
function sum_to_n_b(n) {
  // Sử dụng reduce .reduce((a, b) => a + b, 0);
  const sum = Array.from({ length: n }, (_, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );
  console.log(sum);
  return sum;
}

function sum_to_n_c(n) {
  // Sử dụng công thức tổng của dãy số tự nhiên
  const sum = (n * (n + 1)) / 2;
  console.log(sum);
  return sum;
}
// sum_to_n_a(5);
sum_to_n_b(5);
