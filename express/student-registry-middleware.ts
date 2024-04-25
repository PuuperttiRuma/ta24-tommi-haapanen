import { Request, Response, NextFunction} from "express";

const logger = (req: Request, _res: Response, next: NextFunction) =>{
  const {method, url, body} = req;
  const time = new Date().toISOString();
  const bodyLog = body ? " message body: " + body : "";
  console.log(`${time}: ${method} request to ${url}${bodyLog}`);
  next();
};

// Validators
const validateStudent = (req: Request, res: Response, next: NextFunction) => {
  const {name, email} = req.body;
  if (typeof(name) !== "string" || typeof(email) !== "string") {
    return res.status(400).send("Missing or invalid parameters");
  }
  next();
};

const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({error: "We can't find what you are looking for"});
};

export {logger, unknownEndpoint, validateStudent};