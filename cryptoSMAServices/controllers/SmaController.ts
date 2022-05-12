import { Request, Response, NextFunction} from 'express';
import { post, controller, use, bodyValidator } from './decorators';
import { calculateSMA } from './helpers/calculateSMA';
import { getToAndFromDate } from '../utils/utils';
import { cryptoAggregate } from './polygonAPIs/crypto'
import { routeAuth } from './middlewares';

interface RequestWithBody extends Request {
    body: {
        ticker: string,
        lowerSMA: number,
        higherSMA: number,
    }
}

@controller('/crypto')
class SmaController {
    @post('/sma')
    @use(routeAuth)
    @bodyValidator('ticker', 'lowerSMA', 'higherSMA')
     async postSMA(req: RequestWithBody, res: Response) {
         const { ticker, lowerSMA, higherSMA} = req.body;
         try {             
             const results = await calculateSMA(lowerSMA, higherSMA)
             const response = {
                 ticker,
                 status: "OK",
                 LSMA: lowerSMA,
                 HSMA: higherSMA,
                 results
             }
             res.status(200).send(response)
         } catch (error: any) {
             res.status(502).send("Unable to process your request at the moment, please contact Admin");
         }
     };
}