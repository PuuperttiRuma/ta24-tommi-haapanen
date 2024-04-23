import express, {Request, Response} from "express";

const server = express();

let counter = 0;

server.get("/", (req, res) => {
  res.send("Just saying cool things!");
});

server.get("/foobar", (req, res) => {
  res.send("Foobar");
});

server.get("/counter", (req: Request, res: Response) => {
  const number = parseInt(req.query.number);
  if (isNaN(number)){
    counter++;
  } else {
    counter = number;
  }
  res.send(JSON.stringify(counter));
});

server.listen(3000, () => {
  console.log("Listening to port 3000");
});