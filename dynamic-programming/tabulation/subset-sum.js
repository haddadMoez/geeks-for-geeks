//Given a set of non-negative integers, and a value sum,
// determine if there is a subset of the given set with sum equal to given sum.

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output: True
// There is a subset (4, 5) with sum 9.

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
// Output: False
// There is no subset that add up to 30.

const isSubSet = (sum, set) => {
  if (!set.includes(0)) set.unshift(0);
  else set.sort((a, b) => a - b);
  const matrix = Array(sum + 1)
    .fill()
    .map(() => Array(set.length - 1).fill(false));

  for (let i = 0; i < set.length; i++) matrix[0][i] = true;

  for (let i = 1; i <= sum; i++) matrix[i][0] = false;

  for (let i = 1; i <= sum; i++) {
    for (let j = 1; j < set.length; j++) {
      if (set[j] > i) matrix[i][j] = matrix[i][j - 1];
      else matrix[i][j] = matrix[i][j - 1] || matrix[i - set[j]][j - 1];
    }
  }

  return matrix[sum][set.length - 1];
};

console.log(isSubSet(9, [3, 34, 4, 12, 5, 2])); // true
console.log(isSubSet(30, [3, 34, 4, 12, 5, 2])); // false
console.log(isSubSet(6, [3, 4, 5, 2])); // true
console.log(isSubSet(8, [2, 3, 5])); // true
console.log(isSubSet(5, [2, 3])); // true
console.log(isSubSet(7, [5, 3, 4, 7])); // true
console.log(isSubSet(6, [3, 2])); // false
console.log(isSubSet(7, [4, 2])); //false
console.log(isSubSet(14, [7, 3, 4])); // true
console.log(isSubSet(300, [7, 14])); //false
