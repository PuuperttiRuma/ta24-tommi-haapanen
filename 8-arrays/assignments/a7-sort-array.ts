{
  const sortNumberArray = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  };

  const array = [4, 19, 7, 1, 9, 22, 6, 13];
  const array2 = [-6, 2, 45, -3, 3, 22, 7, 188];
  sortNumberArray(array);
  console.log(array); // prints [ 1, 4, 6, 7, 9, 13, 19, 22 ]
  sortNumberArray(array2);
  console.log(array2); // prints [ -6, -3, 2, 3, 7, 22, 45, 188 ]
}