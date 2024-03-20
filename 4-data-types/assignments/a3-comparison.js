const person1Age = 15;
const person2Age = 24;

const isFirstPersonOlder = person1Age > person2Age;
console.log(isFirstPersonOlder);
console.log(typeof(isFirstPersonOlder));

// c) 

// Hienompaa olisi tehdä array studenteista joilla on grade property, mutta en nyt jaksa
const class1 = {
  grades: [9, 6, 9]
};

const class2 = {
  grades: [7, 10, 5]
};

const classGradeAverage = (c) => {    
  let sum = 0;
  for (let i = 0; i < c.grades.length; i++){   
    sum += c.grades[i];
  }  
  return sum / c.grades.length;
};

console.log(`Class 1 average grade: ${classGradeAverage(class1)}`);
console.log(`Class 2 average grade: ${classGradeAverage(class2)}`);
console.log(`It is ${classGradeAverage(class1) > classGradeAverage(class2)} that class 1 had a higher average than class 2.`);