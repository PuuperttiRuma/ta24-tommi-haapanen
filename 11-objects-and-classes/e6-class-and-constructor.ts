class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number){
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(4, 6);
const rect2 = new Rectangle(10, 6);

console.log(rect1, rect2);
console.log(rect1.getArea(), rect2.getArea());
