const findLargest = (array: number[]) => {
  let largest = array[0];
  for (const number of array) {
    if (largest < number) {
      largest = number;
    }
  }
  return largest;
}

const array = [ 4, 19, 7, 1, 9, 22, 6, 13 ];
const largest = findLargest(array);
console.log(largest); // prints 22