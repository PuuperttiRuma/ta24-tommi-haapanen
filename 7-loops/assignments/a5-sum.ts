const calculatePyramidalNumberToSum = (targetSum: number) => {
  let i;
  let sum = 0;
  for (i = 1; sum <= targetSum; i++) {    
    sum += i;
    //console.log("After", i, "loop, sum:", sum);
  }
  return i-1;
};

//Test cases (not exhaustive): 
let targetSum = 9;
console.log(`For pyramidal number to exceed ${targetSum}, you have to sum up to ${calculatePyramidalNumberToSum(targetSum)}.`);
targetSum = 10;
console.log(`For pyramidal number to exceed ${targetSum}, you have to sum up to ${calculatePyramidalNumberToSum(targetSum)}.`);
targetSum = 11;
console.log(`For pyramidal number to exceed ${targetSum}, you have to sum up to ${calculatePyramidalNumberToSum(targetSum)}.`);


targetSum = 10000;
console.log(`For pyramidal number to exceed ${targetSum}, you have to sum up to ${calculatePyramidalNumberToSum(targetSum)}.`);


