{
  class Animal {
    weight: number;
    cuteness: number;

    constructor(weight: number, cuteness: number) {
      this.weight = weight;
      this.cuteness = cuteness;
    }

    makeSound(): void {
      console.log("silence");
    }
  }

  class Cat extends Animal {
    constructor(weight: number, cuteness: number) {
      super(weight, cuteness);
    }

    makeSound(): void {
      console.log("meow");
    }
  }

  class Dog extends Animal {
    breed: string;
    constructor(weight: number, cuteness: number, breed: string) {
      super(weight, cuteness);
      this.breed = breed;
    }

    makeSound(): void {
      if (this.cuteness > 4){
        console.log("awoo");        
      } else {
        console.log("bark");
        
      }
    }

  }

  const animal = new Animal(6.5, 4.0);
  console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"
  animal.makeSound(); // prints "silence"

  const cat = new Cat(4.5, 3.0);
  console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"
  cat.makeSound(); // prints "meow"
  const dog1 = new Dog(7.0, 4.5, "kleinspitz");
  const dog2 = new Dog(30.0, 3.75, "labrador");
  console.log(dog1);
  dog1.makeSound(); // prints "awoo"
  console.log(dog2);
  dog2.makeSound(); // prints "bark"
}
