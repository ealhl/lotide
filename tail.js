//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
const tail = function (arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
};

module.exports = tail;
