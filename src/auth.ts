import { Request, Response, NextFunction } from "express"
import { ResponseStatus } from "./responceModels/Status";
import { IAuth } from "./responceModels/IAuth";


export const auth =async (req:Request, res: Response, next: NextFunction) => {
      try{
            if (req.body.pass){
                  if (req.body.pass === 1001){
                        next();
                  }
                  else {
                        res.status(401).json({
                              status: ResponseStatus.BAD_PASS
                        })
                  }
            } else {
                  throw Error("no pass in query")
            }
      } catch(err){
            res.status(401).json({
                  status: ResponseStatus.UN_AUTH,
                  msg: (err as Error).message
            })
      }
}