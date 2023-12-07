const middle = function (arr) {
  let middle = [];
  let length = arr.length;
  if (length <= 2) {
    return middle;
  }
  if (length % 2 === 0) {
    middle.push(Math.floor(arr[length / 2 - 1]));
    middle.push(Math.floor(arr[length / 2]));
  } else {
    middle.push(Math.floor(arr[(length - 1) / 2]));
  }
  return middle;
};

module.exports = middle;
