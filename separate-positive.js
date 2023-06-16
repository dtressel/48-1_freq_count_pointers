// add whatever parameters you deem necessary
function separatePositive(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    if (arr[leftIdx] > 0) {
      leftIdx ++;
      continue;
    }
    if (arr[rightIdx] < 0) {
      rightIdx --;
      continue;
    }
    [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
    leftIdx ++;
    rightIdx --;
  }
  return arr;
}

module.exports = separatePositive;