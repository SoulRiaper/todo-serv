import express, { Express , Request, Response, NextFunction} from "express"
import { auth } from "./auth";
import { admin } from "./admin";
import "reflect-metadata"


const app: Express = express();
const port = 80

app.use(express.json())

app.get("/", auth, (req: Request, res: Response, next: NextFunction) => {
      res.json({
            tadaaa: "you are authorized"
      })
})

app.get("/get", [auth, admin], (req: Request, res: Response, next: NextFunction) => {
      res.json({
            tadaaa: "you are authorized an authenticated"
      })
})

app.listen(port, ()=>{
      console.log("Your trash is running");
})