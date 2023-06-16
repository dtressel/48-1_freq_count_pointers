// add whatever parameters you deem necessary
function countPairs(intArr, sumGoal) {
  const sorted = intArr.sort((a, b) => a - b);
  let leftIdx = 0;
  let rightIdx = sorted.length - 1;
  let pairCounter = 0;
  while (rightIdx > leftIdx) {
    const currSum = sorted[rightIdx] + sorted[leftIdx];
    if (currSum === sumGoal) {
      pairCounter++;
      leftIdx++;
      rightIdx--;
    }
    else if (currSum > sumGoal) {
      rightIdx--;
    }
    else leftIdx++;
  }
  return pairCounter;
}

module.exports = countPairs;