const insertNumber = (array: number[], n: number) => {
  let i = 0;
  while (array[i] < n) {
    i++;
  }
  return array.splice(i,0,n);
};

const testArray = [1, 3, 4, 7, 11];
insertNumber(testArray, 8);
console.log(testArray); // prints [ 1, 3, 4, 7, 8, 11 ]
insertNumber(testArray, 90);
console.log(testArray); // prints [ 1, 3, 4, 7, 8, 11, 90 ]
