// add whatever parameters you deem necessary
function averagePair(intArr, targetAvg) {
  let leftIdx = 0;
  let rightIdx = intArr.length - 1;
  while (leftIdx < rightIdx) {
    const currAvg = (intArr[leftIdx] + intArr[rightIdx]) / 2;
    console.log(currAvg);
    if (currAvg === targetAvg) return true;
    if (currAvg < targetAvg) leftIdx++;
    else rightIdx--;
  }
  return false;
}

module.exports = averagePair;