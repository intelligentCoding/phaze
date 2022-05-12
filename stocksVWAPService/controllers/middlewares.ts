import { Request, Response, NextFunction, RequestHandler} from 'express';
import * as jwt from "jsonwebtoken";

export function routeAuth(req: Request, res: Response, next: NextFunction) {
    if(req.headers["authorization"]){
        try {            
            const decodeToken = jwt.verify(req.headers["authorization"], "privateKey");
            if(decodeToken) {            
                next();
                return;
            }
        } catch (error) {            
            return res.status(401).json({error: "Invalid Token"});
        }
    }
    res.status(401).json({error: "401 Unauthorized - missing API key"});
}