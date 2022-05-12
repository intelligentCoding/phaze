import { get } from "./requests";
import { AggregationResponse } from "./interfaces";
import config from '../../config/config';
export const cryptoAggregate = async (
  ticker: string,
  from: string,
  to: string,
): Promise<AggregationResponse> => {
  return get(
    `v2/aggs/ticker/${ticker}/range/1/day/${from}/${to}`,
    config.API_KEY,
    config.API_BASE
  );
}
