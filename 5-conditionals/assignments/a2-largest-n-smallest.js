// const num1 = Math.round(Math.random() * 10);
// const num2 = Math.round(Math.random() * 10);
// const num3 = Math.round(Math.random() * 10);
const num1 = 4;
const num2 = 4;
const num3 = 4;

console.log(`Numbers are ${num1}, ${num2} and ${num3}.`);

// find the largest number and print it
// find the smallest number and print it
// if they're all equal, print that out

let largest;
let smallest;

if (num1 === num2 && num1 === num3 && num2 === num3) {
    console.log("All numbers are equal.");
} else {
    if (num1 > num2 && num1 > num3) {
        largest = num1;
    } else if (num2 > num3) {
        largest = num2;
    } else {
        largest = num3;
    };

    if (num1 < num2 && num1 < num3) {
        smallest = num1;
    } else if (num2 < num3) {
        smallest = num2;
    } else {
        smallest = num3;
    };
    console.log(`Largest number is ${largest}.`);
    console.log(`Smallest number is ${smallest}.`);
};
