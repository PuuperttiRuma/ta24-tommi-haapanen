{
  const numbers = [8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50];

  // a)
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 20) {
      console.log(`The first number above is: ${numbers[i]}`);
      break;
    }
  }

  // b)
  console.log(
    `The first number above is: ${numbers.find((number) => number > 20)}`
  );

  // c)
  const indexOfFirstOver20 = numbers.findIndex((number) => number > 20);
  console.log(`The index of that number is: ${indexOfFirstOver20}`);

  // d)
  numbers.splice(indexOfFirstOver20);
  console.log("After splicing from the said index the array looks like this:");
  console.log(numbers);
}
