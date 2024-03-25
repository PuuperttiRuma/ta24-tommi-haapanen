{
  const fruits = [
    { name: "a pear", weight: 178 },
    { name: "a lemon", weight: 120 },
    { name: "an apple", weight: 90 },
    { name: "a mango", weight: 150 },
  ];

  const averageWeight =
    fruits.reduce((acc, fruit) => acc + fruit.weight, 0) / fruits.length;

  /* Näyttääpä siltä, että tämä implementointitapa ei toimi Typescriptissä tällaisenään ja
   tämän hetkisellä osaamisellani.
   Ongelmia on kaksi:
   1) Hedelmä-objektille attribuutin antaminen lennosta
   2) fruits-arrayn antaminen functiokutsussa tarvitsee tyypityksen
*/

  // fruits.forEach(fruit => {
  //     fruit.weightFromAverage = Math.abs(fruit.weight - averageWeight);
  // });

  // const closestToAverage = (fruits : Array<object>) => {
  //     let closest = fruits[0];
  //     fruits.forEach((fruit)  => {
  //         if (closest.weightFromAverage > fruit.weightFromAverage) {
  //             closest = fruit;
  //         }
  //     });
  //     return closest.name;
  // }

  // console.log(`Fruit weighing closest to weight average is ${closestToAverage(fruits)}.`);
}
