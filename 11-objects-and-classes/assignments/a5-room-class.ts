{
  class Room {
    width: number;
    length: number;
    furniture: string[];

    constructor(width: number, length: number) {
      this.width = width;
      this.length = length;
      this.furniture = [];
    }

    getArea() {
      return this.width * this.length;
    }
    addFurniture(furniture: string) {
      this.furniture.push(furniture);
    }
  }

  const room = new Room(4.5, 6.0);
  room.addFurniture("sofa");
  room.addFurniture("bed");
  room.addFurniture("chair");
  const area = room.getArea();
  console.log(room); // prints Room { width: 4.5, height: 6, furniture: [ 'sofa', 'bed', 'chair' ] }  
  console.log(area); // prints 27
}
