function fib(num) {
  var arr = [1, 1];

  var i = 0;
  while (true) {
    if (num == 0) {
      break;
    }

    if (i > 1) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    i++;

    if (num == i) {
      break;
    }
  }

  return arr[num - 1];
}

function shift() {}

function secondMax() {}

function fizzBuzz() {}

console.log(fib(12));
