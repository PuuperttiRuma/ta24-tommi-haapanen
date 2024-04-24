import express, {Request, Response} from "express";

const server = express();

let counter = 0;
const users: {name: string, count: number}[] = [];

server.get("/", (req, res) => {
  res.send("Just saying cool things!");
});

server.get("/foobar", (req, res) => {
  res.send("Foobar");
});

server.get("/counter", (req: Request, res: Response) => {
  const numberString = req.query.number as string | undefined;
  const number = parseInt(numberString || "");
  if (isNaN(number)){
    counter++;
  } else {
    counter = number;
  }
  res.send(JSON.stringify(counter));
});

server.get("/counter/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  const user = users.find(user => user.name === name);
  if (user){
    user.count++;
    res.send(`${user.name} was here ${user.count} times.`);
  } else {
    const newUser = {name: name, count: 1};
    users.push(newUser);
    res.send(`${newUser.name} was here for the first time!`);
  }  
});

server.listen(3000, () => {
  console.log("Listening to port 3000");
});