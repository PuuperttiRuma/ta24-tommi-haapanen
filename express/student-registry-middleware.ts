import { Request, Response, NextFunction } from "express";
import { students } from "./student-registry";

const logger = (req: Request, _res: Response, next: NextFunction) => {
  const { method, url, body } = req;
  const time = new Date().toISOString();
  let logString = `${time}: ${method} request to "${url}"`;
  if (Object.keys(body).length > 0) {
    logString += ` BODY: ${JSON.stringify(body)}`;
  }
  console.log(logString);
  next();
};

// Validators
const validatePostStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email } = req.body;
  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).send("Missing or invalid parameters");
  }
  next();
};

/**
 * Checks whether the request has an ID parameter in a valid
 * format (ie. a number). If so, find the student with that ID
 * and adds it as a property to the Request = req.student.
 * If no student was found, sends 404.
 * @param req
 * @param res
 * @param next
 */
const validateId = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) {
    res.status(400).send("Invalid ID-parameter");
  }
  const student = students.find((student) => student.id === id);
  if (student === undefined) {
    res.status(404).send("No student with that ID found");
  }
  req.student = student;
  next();
};

const validatePutStudent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email } = req.body;
  if (typeof name === "string" || typeof email === "string") {
    next();
  } else {
    return res.status(400).send("Missing or invalid parameters");
  }
};

const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({ error: "We can't find what you are looking for" });
};

export {
  logger,
  unknownEndpoint,
  validatePostStudent,
  validatePutStudent,
  validateId,
};
