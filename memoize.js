function fibonacci(n) {
  return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize(func) {
  const memo = {};
  const slice = Array.prototype.slice;

  return function() {
    const args = slice.call(arguments);

    if (args in memo) {
      return memo[args];
    } else {
      return (memo[args] = func.apply(this, args));
    }
  }
}

const memonacci = memoize(function(n) {
  return (n === 0 || n === 1) ? n : memonacci(n - 1) + memonacci(n - 2);
});

console.time('standard');
console.log(fibonacci(40));
console.timeEnd('standard');

console.time('memoized');
console.log(memonacci(40));
console.timeEnd('memoized');