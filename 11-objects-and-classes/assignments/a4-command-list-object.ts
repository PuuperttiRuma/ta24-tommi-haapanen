{
  class Robot {
    x: number;
    y: number;
    commandHandlers: { [command: string]: () => void };

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.commandHandlers = {
        E: () => this.x++,
        W: () => this.x--,
        N: () => this.y++,
        S: () => this.y--,
        C: () => null,
      };
    }
  }

  const robo = new Robot(0, 0);
  console.log(robo);
}
