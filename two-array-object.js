// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valueArr) {
  return keyArr.reduce((obj, key, idx) => {
    console.log(obj);
    if (valueArr[idx] !== undefined) return {...obj, [key]: valueArr[idx]};
    else return {...obj, [key]: null};
  }, {})
}

module.exports = twoArrayObject;