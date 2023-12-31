
function twoArrayObject(keys, values) { //keys = ["a", "b", "c"] values = [1, 2, 3]
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = i < values.length ? values[i] : null;
  }
  return result;
}

module.exports = twoArrayObject;
