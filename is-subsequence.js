// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      if (pointer1 === str1.length) return true;
    }
    pointer2++;
  }
  return false;
}

module.exports = isSubsequence;