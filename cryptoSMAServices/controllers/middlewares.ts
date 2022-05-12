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

export function bodyValidator(keys: string[]) : RequestHandler {
    return function (req: Request, res: Response, next: NextFunction ) {
        if(!req.body) {
            res.status(422).send("Invalid Request");
            return;
        }
        for(let key of keys) {
            if(!req.body[key]) {
                res.status(422).send(`Missing Property ${key}`);
                return; 
            }
        }
        next();
    }
}

export function bodyTypeValidator(targetName: string) {
    return function (req: Request, res: Response, next: NextFunction ) {
        const { ticker, lowerSMA, higherSMA } = req.body;
        if(targetName === "SmaController"){
            if(isNaN(lowerSMA) || isNaN(higherSMA)) {
                res.status(422).send("Invalid Request");
                return;
            }
            //lowerSMA must be  > 0, < 730, < higherSMA, not decimal number
            if((lowerSMA <= 0 || lowerSMA >= 730 || Number(lowerSMA) >= Number(higherSMA) || lowerSMA % 1 != 0)){
                res.status(422).send("lowerSMA must be greater than 0, less than higerSMA, less than 730 and must not be a decimal number");
                return;
            }

            //higherSMA must be > 0, > lowerSMA, <= 730
            if(higherSMA <= 0 || higherSMA > 730 || Number(higherSMA) < Number(lowerSMA) || higherSMA % 1 != 0) {
                res.status(422).send("higherSMA must be greater than 0, greater than lowerSMA, no greater than 730 and not a decimal number");
                return;
            }

            //ticker prefix must be 
            if(ticker.substring(0, 2) !== "X:"){
                res.status(422).send("ticker prefix must be  \'X:\'");
                return;
            }
        }
        next();
    }
}