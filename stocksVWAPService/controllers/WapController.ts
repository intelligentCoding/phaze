import { Request, Response, NextFunction} from 'express';
import { get, controller, use } from './decorators';
import { calculateVWAP } from './helpers/calculateVWAP';
import { stockAggregate } from './polygonAPIs/stocks'
import { returnResponse } from './helpers/interfaces';
import { routeAuth } from './middlewares';

@controller('/stocks')
class SmaController {
    @get('/vwap')
    @use(routeAuth)
     async getVWAP(req: Request, res: Response) {
         try {             
            const vwapData: returnResponse = await calculateVWAP();
            res.status(200).send(vwapData);
            return;
         } catch (error: any) {
             return res.status(502).send("Unable to process your request at the moment, please contact Admin");
         }
     };
}