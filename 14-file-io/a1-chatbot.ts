import readline from "readline-sync";

{
  interface Commands {
    [command: string]: () => void;
  }

  //Global variables (putting these to a class would be safer)
  let name = "Dave";
  let questionsAsked = 0;
  let botName = "Hal";

  // Commandlist and
  const commands: Commands = {
    help: () => {
      console.log(
        "-----------------------------\n",
        "Here's a list of commands that I can execute!\n",
        "\n",
        "help: Opens this dialog.\n",
        "hello: I will say hello to you\n",
        "info: I will introduce myself\n",
        "name: I will tell my name\n",
        "rename: You can rename me\n",
        "forecast: I will forecast tomorrows weather 100% accurately\n",
        "quit: Quits the program.\n",
        "-----------------------------"
      );
    },
    hello: () => {
      name = readline.question("What is your name?: ");
      console.log(`Hello there, ${name}`);
    },
    info: () => {
      console.log(
        `I am a dumb bot. You can ask me almost anything :). You have already asked me ${questionsAsked} questions.`
      );
    },
    name: () => {
      console.log(
        `My name is ${botName}. If you want to change it, type rename.`
      );
    },
    rename: () => {
      const botNameCandidate = readline.question("What should I be called?: ");
      do {
        answer = readline.question(
          `Are you happy with ${botNameCandidate}? (y/n): `
        );
      } while (answer !== "y" && answer !== "n");
      if (answer === "y") {
        botName = botNameCandidate;
        console.log(`My name is now ${botName}`);
      } else if (answer === "n") {
        console.log("Name not changed.");
      }
    },
    forecast: () => {
      const forecast = generateRandomForecast();
      console.log(`The weather tomorrow will be ${forecast.sunny ? "sunny" : "dark"} with`);
      console.log(`${forecast.cloudy ? "cloudy skies" : "clear skies"} and ${forecast.windy ? "strong winds" : "calm breeze"}.`);
      console.log(`Temperature will be ${forecast.temperature.toFixed(0)}°C.`);
    },
    quit: () => null,
  };

  //Helper functions
  const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleCommand = (input: string) => {
    input = input.toLowerCase().trim();
    if (input in commands) {
      commands[input]();
    } else {
      console.log(`${capitalize(input)}? I can't do that, ${name}.`);
    }
    questionsAsked++;
  };

  const generateRandomForecast = () => {
    return {
      temperature: Math.random() * 50 - 20,
      cloudy: Math.random() >= 0.5,
      sunny: Math.random() >= 0.5,
      windy: Math.random() >= 0.5,
    };
  };

  // The main program
  console.log(
    "Hi! I am a dumb chat bot. You can check all the things I can do by typing 'help'."
  );
  let answer = "";
  while (answer !== "quit") {
    answer = readline.question("What do you want? ");
    handleCommand(answer);
  }
}
