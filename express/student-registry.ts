import express, { Request, Response } from "express";
import {
  logger,
  unknownEndpoint,
  validateId,
  validatePostStudent,
  validatePutStudent,
} from "./student-registry-middleware";

interface Student {
  id: number;
  name: string;
  email: string;
}

declare module "express" {
  export interface Request {
    student?: Student;
  }
}

const server = express();
const port = 3100;
server.listen(port, () => console.log("Listening to port", port));

let currentNewId = 1;
const idGenerator = () => currentNewId++;

const students: Student[] = [
  { id: 1, name: "Tupu Ankka", email: "tupu@ankkalinna.fi" },
  { id: 2, name: "Hupu Ankka", email: "hupu@ankkalinna.fi" },
  { id: 3, name: "Lupu Ankka", email: "lupu@ankkalinna.fi" },
];

//Middleware declarations
//#region
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger);
//#endregion

//End-points
//#region
server.get("/students", (_req: Request, res: Response) => {
  res.send(students);
});

server.get("/students/:id", validateId, (req: Request, res: Response) => {
  res.send(req.student);
});

server.post("/students", validatePostStudent, (req: Request, res: Response) => {
  const { name, email } = req.body;
  students.push({
    id: idGenerator(),
    name: name,
    email: email,
  });
  res.status(201).send();
});

server.put(
  "/students/:id",
  validatePutStudent,
  validateId,
  (req: Request, res: Response) => {
    const newStudent = req.student as Student; // validateId checks that there is a student
    const name = req.body.name;
    const email = req.body.email;
    if (name) {
      newStudent.name = name;
    }
    if (email) {
      newStudent.email = email;
    }
    const oldStudentIndex = students.findIndex(
      (oldStudent) => oldStudent.id === newStudent.id
    );
    students.splice(oldStudentIndex, 1, newStudent);
    res.status(201).send();
  }
);

// 404
server.use(unknownEndpoint);
//#endregion

export { students };
