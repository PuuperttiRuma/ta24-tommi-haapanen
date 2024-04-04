class Robot {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  handleMessage(message: string) {
    switch (message) {
      case "E":
        this.x += 1;
        break;
      case "W":
        this.x -= 1;
        break;
      case "N":
        this.y += 1;
        break;
      case "S":
        this.y -= 1;
        break;
      default:
        console.log("Invalid command");
        break;
    }
  }
}

class FlexibleRobot extends Robot {
  constructor(x: number, y: number) {
    super(x, y);
  }
  handleMessage(message: string): void {
    switch (message) {
      case "NE":
        this.x++;
        this.y++;
        break;
      case "SE":
        this.x++;
        this.y--;
        break;
      case "SW":
        this.x--;
        this.y--;
        break;
      case "NW":
        this.x--;
        this.y++;
        break;
      default:
        super.handleMessage(message);
        break;
    }
  }
}

const robo = new Robot(0, 0);
console.log(robo);
robo.handleMessage("E");
robo.handleMessage("E");
robo.handleMessage("N");
console.log(robo);

const flexrobo = new FlexibleRobot(0, 0);
console.log(flexrobo);
flexrobo.handleMessage("NE");
flexrobo.handleMessage("NE");
flexrobo.handleMessage("E");
flexrobo.handleMessage("E");
console.log(flexrobo);