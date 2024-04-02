{
  const numbers = [ 4, 7, 1, 8, 5 ];
  
  const incrementAll = (numbers: number[]) => {    
    return numbers.map(number => number + 1);
  };

  const decrementAll = (numbers: number[]) => {
    return numbers.map(number => number - 1);
  };

  console.log(incrementAll(numbers)); // prints [ 5, 8, 2, 9, 6 ]
  console.log(decrementAll(numbers)); // prints [ 3, 6, 0, 7, 4 ]
}
