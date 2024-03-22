const countSheep = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {    
    result = `${result}${i+1} sheep... `
  }
  return result
};

console.log(`${countSheep(0)}`);
console.log(`${countSheep(3)}`);
console.log(`${countSheep(-1)}`);
console.log(`${countSheep(5)}`);