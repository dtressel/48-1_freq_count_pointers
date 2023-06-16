// add whatever parameters you deem necessary
function isSubsequence(subStr, fullStr) {
  let subStrIdx = subStr.length - 1;
  let fullStrIdx = fullStr.length - 1;
  while (fullStrIdx >= subStrIdx) {
    if (subStr[subStrIdx] === fullStr[fullStrIdx]) {
      if (subStrIdx === 0) return true;
      subStrIdx--;
    }
    fullStrIdx--;
  }
  return false;
}

module.exports = isSubsequence;