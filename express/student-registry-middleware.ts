import { Request, Response, NextFunction} from "express";

const logger = (req: Request, _res: Response, next: NextFunction) =>{
  const {method, url, body} = req;
  const time = new Date().toISOString();
  const bodyLog = body ? " message body: " + body : "";
  console.log(`${time}: ${method} request to ${url}${bodyLog}`);
  next();
};

const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({error: "We can't find what you are looking for"});
};

export {logger, unknownEndpoint};