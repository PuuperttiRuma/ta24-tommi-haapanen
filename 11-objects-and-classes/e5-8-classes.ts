{
  class Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    getArea() {
      return 0;
    }
  }

  class Rectangle extends Shape {
    constructor(width: number, height: number) {
      super(width, height);
    }
    getArea() {
      return this.width * this.height;
    }
  }

  class Triangle extends Shape {
    constructor(width: number, height: number) {
      super(width, height);
    }
    getArea() {
      return (this.width * this.height) / 2;
    }
  }

  class Ellipse extends Shape {
    constructor(width: number, height: number) {
      super(width, height);
    }
    getArea() {
      return (((Math.PI * this.width) / 2) * this.height) / 2;
    }
  }

  class Square extends Rectangle {
    constructor(side: number) {
      super(side, side);
    }
  }

  class Circle extends Ellipse {
    radius: number;
    constructor(radius: number) {
      super(radius * 2, radius * 2);
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  const shape1 = new Shape(4, 6);
  const rect1 = new Rectangle(4, 6);
  const rect2 = new Rectangle(10, 6);
  const rect3 = new Rectangle(4, 4);
  const square1 = new Square(4);
  const triangle1 = new Triangle(4, 6);
  const triangle2 = new Triangle(10, 6);
  const ellipse1 = new Ellipse(4, 6);
  const ellipse2 = new Ellipse(6, 6);
  const circle = new Circle(3);

  console.log(
    shape1,
    rect1,
    rect2,
    rect3,
    square1,
    triangle1,
    triangle2,
    ellipse1,
    ellipse2,
    circle
  );
  console.log(
    shape1.getArea(),
    rect1.getArea(),
    rect2.getArea(),
    rect3.getArea(),
    square1.getArea(),
    triangle1.getArea(),
    triangle2.getArea(),
    ellipse1.getArea(),
    ellipse2.getArea(),
    circle.getArea()
  );
}
