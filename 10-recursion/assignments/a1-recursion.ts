{
  // We have the following number sequence: 0, 1, 1, 4, 7, 19, 40, 97, 117, ...
  const recursion = (n: number): number => {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return recursion(n - 2) * 3 + recursion(n - 1);
  };

  console.log(recursion(9));
  console.log(recursion(17));
}
