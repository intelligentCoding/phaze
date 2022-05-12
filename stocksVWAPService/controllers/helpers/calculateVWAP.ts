import { getPreviousDate } from '../../utils/utils';
import { stockAggregate } from '../polygonAPIs/stocks'
import { returnResponse } from './interfaces';
export async function calculateVWAP(): Promise<returnResponse> {
    const stockAggregateData = await stockAggregate(getPreviousDate());
    const filteredData = stockAggregateData.results!.filter((data) => data.c! < data.vw!);
    return  {
        status: "OK",
        resultsCount: filteredData.length,
        locale: "US",
        market: "STOCKS",
        TA: "price below VWAP",
        results:  filteredData
    }
}
