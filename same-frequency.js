// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  const freqObj = {};
  let length = 0;
  while (int1 > 0) {
    const digit = int1 % 10;
    freqObj[digit] = freqObj[digit] + 1 || 1;
    int1 = Math.floor(int1 / 10);
    length++;
  }
  while (int2 > 0) {
    const digit = int2 % 10;
    if (!freqObj[digit]) return false;
    freqObj[digit]--;
    int2 = Math.floor(int2 / 10);
    length--;
  }
  if (length) return false;
  return true;
}

module.exports = sameFrequency;