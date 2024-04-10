const numberRange = (start: number, end: number) => {
  const result: number[] = [];
  if (start < end) {
    for (let i = 0; i <= end-start; i++) {
      result[i] = start + i;
    }
  } else {
    for (let i = 0; i <= start-end; i++) {
      result[i] = start - i;
    }
  }
  return result;
};

console.log(numberRange(1, 5));   // prints [ 1, 2, 3, 4, 5 ]
console.log(numberRange(-5, -1)); // prints [ -5, -4, -3, -2, -1 ]
console.log(numberRange(9, 5));   // prints [ 9, 8, 7, 6, 5 ]
console.log(numberRange(2, 2));   // prints [ 2 ]