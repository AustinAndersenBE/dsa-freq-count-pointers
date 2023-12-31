function averagePair(list, target) {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    let avg = (list[left] + list[right]) / 2;
    if (avg === target) return true;
    else if (avg < target) left++;
    else right--;
  }
  return false;
}

module.exports = averagePair;
