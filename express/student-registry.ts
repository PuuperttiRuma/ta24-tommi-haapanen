import express, { Request, Response } from "express";
import { logger, unknownEndpoint } from "./student-registry-middleware";

const server = express();
const port = 3100;
server.listen(port, () => console.log("Listening to port", port));

const students = [];

// Middleware declarations
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({extended: false}));

// End-points
server.get("/students", (_req: Request, res: Response) => {
  res.send(students);
});

// 404
server.use(unknownEndpoint);