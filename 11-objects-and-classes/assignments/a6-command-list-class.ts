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

    executeCommandList(commandList: string) {
      const commandArray = commandList.split("");
      for (const command of commandArray) {
        if (command === "B") {
          return;
        }
        if (command in this.commandHandlers) {
          this.commandHandlers[command]();
        }
      }
    }
  }
  const commandList = "NNEESSXWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
  const robo = new Robot(0, 0);
  robo.executeCommandList(commandList);
  console.log(robo);
}
