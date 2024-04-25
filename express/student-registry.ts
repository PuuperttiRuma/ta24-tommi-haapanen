import express, { Request, Response } from "express";
import { logger, unknownEndpoint, validateStudent } from "./student-registry-middleware";

const server = express();
const port = 3100;
server.listen(port, () => console.log("Listening to port", port));

interface Student {
  id: number,
  name: string,
  email: string
}

let currentNewId = 1;
const idGenerator = () => currentNewId++;

const students: Student[] = [];

// Middleware declarations
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({extended: false}));

// End-points
server.get("/students", (_req: Request, res: Response) => {
  res.send(students);
});

server.post("/student", validateStudent, (req: Request, res: Response) => {
  const {name, email} = req.body;
  const studentToAdd: Student = {
    id: idGenerator(),
    name: name,
    email: email
  };  
  students.push(studentToAdd);
  res.status(201).send();
});

// 404
server.use(unknownEndpoint);