import express, { Request, Response } from "express";

const server = express();
const port = 3100;
server.listen(port, () => console.log("Listening to port", port));

const students = [];

// Middleware definitions
const logger = (req: Request, res: Response, next) =>{
  const {method, url} = req;
  const time = new Date().toISOString();
  console.log(`${time}: ${method} request to ${url}`);
  next();
};

// Middleware declarations
server.use(logger);

// End-points
server.get("/students", (req: Request, res: Response) => {
  res.send(students);
});
