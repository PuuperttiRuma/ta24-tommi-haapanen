// Write a program that creates a new array filled with
// random numbers. Hint: Use Math.random().

// Sort the array in ascending order (smallest to largest)

// Print out all the numbers in this sorted array. Don’t forget types!
// EXTRA: ...in descending index order (starting from the end)
{
    const array: number[] = [];
    for (let i = 0; i < Math.ceil(Math.random() * 8 + 4); i++) {
        array[i] = Math.ceil(Math.random() * 100);

    }
    console.log(array);
    array.sort();
    console.log(array);
    for (let i = array.length - 1; 0 <= i; i--) {
        console.log(array[i]);
    }

}