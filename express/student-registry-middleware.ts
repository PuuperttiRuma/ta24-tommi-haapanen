import { Request, Response, NextFunction} from "express";

const logger = (req: Request, _res: Response, next: NextFunction) =>{
  const {method, url, body} = req;
  const time = new Date().toISOString();
  let logString = `${time}: ${method} request to ${url}`;
  if (Object.keys(body).length > 0) {
    logString += `. BODY: ${JSON.stringify(body)}`;
  }
  console.log(logString);
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