// add whatever parameters you deem necessary
function constructNote(message, letters) {
  let letterCounts = {};

  // count frequency of each letter in letters
  for (let letter of letters) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  // check each letter in the message
  for (let letter of message) {
    if (!letterCounts[letter]) return false;
    letterCounts[letter]--;
  }

  return true;
}

module.exports = constructNote;
