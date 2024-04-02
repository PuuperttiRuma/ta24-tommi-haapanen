{
  const numbers = [1, 2];
  //const numberAsString = "3";

  //const multiplyJS = (a, b) => a*b; gives error on (a, b)
  const multiply = (a: number, b: number): number => a * b;

  console.log(
    `Multiplying ${numbers[0]} and ${numbers[1]} together gives ${multiply(
      numbers[0],
      numbers[1]
    )}`
  );
  //console.log(`Multiplying ${numbers[1]} and ${numberAsString} together gives ${multiply(numbers[1], numberAsString)}`); gives error on multiply(numbers[1], numberAsString)
}
