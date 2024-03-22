const exponentValueList = (n: number) => {
  if (n < 1) {
    console.log(`n needs to be positive`);
    return;
  }
  let x = 1;
  for (let i = 0; i < n; i++) {    
    x *= 2;
    console.log(x);
  }
}

exponentValueList(5);
exponentValueList(2);
exponentValueList(10);
exponentValueList(0);
exponentValueList(-3);