const fruits = [
    {name: "a pear", weight: 178},
    {name: "a lemon", weight: 120},
    {name: "an apple", weight: 90},
    {name: "a mango", weight: 150},
];

const averageWeight = 
    fruits.reduce((acc, fruit) => acc + fruit.weight, 0)
    / fruits.length;

fruits.forEach(fruit => {
    fruit.weightFromAverage = Math.abs(fruit.weight - averageWeight);
});

const closestToAverage = (fruits) => {
    let closest = fruits[0];
    fruits.forEach(fruit => {
        if (closest.weightFromAverage > fruit.weightFromAverage) {
            closest = fruit;
        }
    });
    return closest.name;
}

console.log(`Fruit weighing closest to weight average is ${closestToAverage(fruits)}.`);

