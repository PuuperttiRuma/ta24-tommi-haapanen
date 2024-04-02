// 1)
const total = (array: number[]) => array.reduce((sum, currentNumber) => sum + currentNumber);
console.log(total([1,2,3])); // 6

// 2)
//console.log(stringConcat([1,2,3])); // "123"
//const stringConcat = (array: number[]) => array.reduce((concatString: string, currentValue) => concatString + currentValue.toString());
