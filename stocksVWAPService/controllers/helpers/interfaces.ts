import { aggregationResults } from '../polygonAPIs/interfaces';
export interface returnResponse {
    status: string,
    resultsCount: number,
    locale: string,
    market: string,
    TA: string,
    results: aggregationResults[],
}