function countPairs(arr, target) {
  let count = 0;
  let set = new Set(arr);

  for (let num of arr) {
    const complement = target - num;

    if (set.has(complement) && num !== complement) {
      count++;
      set.delete(num);
      set.delete(complement);
    }
  }

  return count;
}


module.exports = countPairs;