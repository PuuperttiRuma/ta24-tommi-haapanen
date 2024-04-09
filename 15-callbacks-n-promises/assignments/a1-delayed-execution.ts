{
  const triangularSum = (limit: number) => {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
      sum += i;
    }
    return sum;
  };

  const createDelayedCalculation = (limit: number, delay: number) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(triangularSum(limit));
      }, delay);
    });

  console.log(triangularSum(10));

  new Promise((resolve) => {
    resolve(triangularSum(40000));
  }).then((value) => console.log(value));

  new Promise((resolve) => {
    setTimeout(() => {
      resolve(triangularSum(50000));
    }, 2000);
  }).then((value) => console.log(value));

  // DelayedCalc1
  // Prints 200000010000000 after a delay of 2 seconds
  createDelayedCalculation(20000000, 2000).then((result) =>
    console.log(result)
  );

  //DelayedCalc2
  // Prints 1250025000 after a delay of 0.5 seconds
  createDelayedCalculation(50000, 500).then((result) => console.log(result));

  /*
  The calculation of the DelayedCalc1 and DelayedCalc2 starts one after the
  other. But they are promises, so they are executed when they are
  resolved. Because Calc2 is resolved after half second, it is logged then
  and calc1 is logged after 2 seconds when it is ready. It is interesting,
  that the naked promise must be resolved before code goes to call
  Calc1 and Calc2. It has probably something to do with the two being
  functions and the first is just a promise. 
  */
}

