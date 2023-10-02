import { NextFunction, Request, Response } from "express";
import { ResponseStatus } from "./responceModels/Status";


export const admin =async (req: Request, res: Response, next: NextFunction) => {
      try{
            if(req.body.roles){
                  if((req.body.roles as string[]).includes('admin')){
                        next();
                  } else {
                        res.status(401).json({
                              status: ResponseStatus.NOT_PERMISSION
                        })
                  }
            } else {
                  res.status(401).json({
                        status: ResponseStatus.HAS_NOT_ROLE
                  })
            }
      } catch (err) {
            res.status(401).json({
                  status: ResponseStatus.SERVER_ERROR,
                  msg: (err as Error).message
            })
      }
      
}