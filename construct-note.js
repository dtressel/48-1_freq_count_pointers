// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    // check if letters is shorter than msg
    if (letters.length < msg.length) return false;
    // make a frequency counter of letters
    const lettersCounter = {};
    for (const letter of letters) {
      lettersCounter[letter] = lettersCounter[letter] + 1 || 1;
    }
    // loop through characters msg
    for (const char of msg) {
      // check if char is a key in freq counter or if value is zero, if not return false
      if (!lettersCounter[char]) return false;
      // if so, decrement the freq counter for that string
      lettersCounter[char]--;
    }
    return true;
}

module.exports = constructNote;