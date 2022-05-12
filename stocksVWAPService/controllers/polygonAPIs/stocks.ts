import { get } from "./requests";
import { AggregationResponse } from "./interfaces";
import config from '../../config/config';
export const stockAggregate = async (date: string): Promise<AggregationResponse> => {
  return get(
    `v2/aggs/grouped/locale/US/market/STOCKS/${date}`,
    config.API_KEY,
    config.API_BASE
  );
}
