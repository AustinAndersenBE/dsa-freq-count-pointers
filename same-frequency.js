function sameFrequency(num1, num2) {
  if (Math.floor(Math.log10(num1)) !== Math.floor(Math.log10(num2))) {
      return false;
  }

  let freqCounter = {};

  while (num1 > 0) {
      const digit = num1 % 10;
      freqCounter[digit] = (freqCounter[digit] || 0) + 1;
      num1 = Math.floor(num1 / 10);
  }

  while (num2 > 0) {
      const digit = num2 % 10;
      if (!freqCounter[digit]) {
          return false;
      }
      freqCounter[digit]--;
      num2 = Math.floor(num2 / 10);
  }

  return Object.values(freqCounter).every(count => count === 0);
}

module.exports = sameFrequency;
