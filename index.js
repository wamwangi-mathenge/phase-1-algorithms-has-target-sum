function hasTargetSum(array, target) {
  const len = array.length;
  let sum;
  for (pos in array) {
    for (i = 0; i < len; i++) {
      if (array[pos] !== array[i]) {
        sum = array[pos] + array[i];
        if (sum === target) {
          return true;
        }
      }
    }
  }
  /*const firstNum = array[0];
  const lastNum = array[array.length - 1]
  const addNum = firstNum + lastNum

  if (addNum === target) return true
  else {
    return false
  }*/
  return false;
}
  


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Declare a function that takes in numbers array and a target integer as an argument
  The function should return true if any pair of numbers inside the array sum up to the target integer
*/

/*
  Add written explanation of your solution here
  Declared a function hasTragetSum() which takes two arguments.
  Declared a variable and assigned it the length of the array.
  Initialized a variable which will hold the sum of pairs of numbers inside the array.
  Iterated through the array and assigned the pairs' sum to the sum variable.
  Finally compared the sum to the target to return an appropriate boolean.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
