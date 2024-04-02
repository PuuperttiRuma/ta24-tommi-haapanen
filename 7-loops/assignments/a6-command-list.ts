const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
const coordinates = { x: 0, y: 0 };

const runCommandList = (commandList: string) => {
  for (let i: number = 0; i < commandList.length; i++) {
    const command = commandList.charAt(i).toUpperCase();
    //console.log("Command:", command);
    switch (command) {
      case "N":
        coordinates.y++;
        break;
      case "E":
        coordinates.x++;
        break;
      case "S":
        coordinates.y--;
        break;
      case "W":
        coordinates.x--;
        break;
      case "C":
        break;
      case "B":
        return;
      default:
        break;
    }
  }
};

// Some test cases of functionality not of breakability
runCommandList("NNN");
console.log(coordinates);
coordinates.x = 0;
coordinates.y = 0;

runCommandList("NEW");
console.log(coordinates);
coordinates.x = 0;
coordinates.y = 0;

runCommandList("WWWNNN");
console.log(coordinates);
coordinates.x = 0;
coordinates.y = 0;

runCommandList("WWWCCNNN");
console.log(coordinates);
coordinates.x = 0;
coordinates.y = 0;

runCommandList("WWWBNNN");
console.log(coordinates);
coordinates.x = 0;
coordinates.y = 0;

runCommandList(commandList);
console.log(coordinates);
