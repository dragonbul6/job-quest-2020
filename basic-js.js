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

function shift(arr, dir, pos) {
  var shifted = [];
  var temp = [];
  var newArr = [];
  if (dir == "left") {
    //   push temp
    for (let index = 0; index < pos; index++) {
      temp.push(arr[index]);
    }
    // push shifted
    for (let index = pos; index < arr.length; index++) {
      shifted.push(arr[index]);
    }
    newArr = shifted.concat(temp);
  } else {
    //   Assign to temp
    for (let index = pos - 1; index < arr.length; index++) {
      shifted.push(arr[index]);
    }
    for (let index = 0; index < pos - 1; index++) {
      temp.push(arr[index]);
    }
    newArr = shifted.concat(temp);
  }

  return newArr;
}

function secondMax(arr) {
  var max = 0;
  var sec = 0;

  if (arr.length == 0) {
    return "Error!";
  }

  //  find max
  arr.map((n) => {
    if (n > max) {
      max = n;
    }
  });

  // find second
  arr.map((n) => {
    if (sec < n && n != max) {
      sec = n;
    }
  });

  if (sec == 0) {
    sec = max;
  }

  return sec;
}

function fizzBuzz(num) {
  var three = ["Fizz", ""];
  var five = ["Buzz", ""];

  var result3 = num % 3;
  var result5 = num % 5;

  return three[result3] + five[result5];
}
