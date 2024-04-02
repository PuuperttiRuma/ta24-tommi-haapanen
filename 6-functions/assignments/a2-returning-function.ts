{
  const minimum = (a: number, b: number, c: number) => {
    if (a < b && a < c) {
      return a;
    } else if (b < c) {
      return b;
    } else {
      return c;
    }
  };

  let numbers = [0, 6, 8];
  console.log(`Minimum of ${numbers[0]}, ${numbers[1]} and ${numbers[2]} is ${minimum(numbers[0], numbers[1], numbers[2])}`);
  numbers = [5, 1, 8];
  console.log(`Minimum of ${numbers[0]}, ${numbers[1]} and ${numbers[2]} is ${minimum(numbers[0], numbers[1], numbers[2])}`);
  numbers = [-234, 6, 8];
  console.log(`Minimum of ${numbers[0]}, ${numbers[1]} and ${numbers[2]} is ${minimum(numbers[0], numbers[1], numbers[2])}`);
  numbers = [0, 0, 8];
  console.log(`Minimum of ${numbers[0]}, ${numbers[1]} and ${numbers[2]} is ${minimum(numbers[0], numbers[1], numbers[2])}`);
  numbers = [8, 8, 4];
  console.log(`Minimum of ${numbers[0]}, ${numbers[1]} and ${numbers[2]} is ${minimum(numbers[0], numbers[1], numbers[2])}`);
}
