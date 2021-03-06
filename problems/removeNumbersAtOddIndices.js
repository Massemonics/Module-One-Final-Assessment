/** Takes an array of numbers and returns a new array
 * with only the numbers at odd indices in the input array.
 *
 * @param {number[]} arr - The input array
 * @returns {number[]} - An array removing all elements initially appearing at an odd index
 *
 * ex: removeNumbersAtOddIndices([0, 1, 2, 3, 4]);
 * returns: [0, 2, 4]
 *
 * ex: removeNumbersAtOddIndices([5, 4, 3, 2, 1]);
 * returns: [5, 3, 1]
 */
function removeNumbersAtOddIndices (arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

module.exports = removeNumbersAtOddIndices
