export interface aggregationResults {
    T?: string;
    c?: number;
    h?: number;
    l?: number;
    n?: number;
    o?: number;
    t?: number;
    v?: number;
    vw?: number;
}

export interface AggregationResponse {
    ticker?: string;
    adjusted?: boolean;
    queryCount?: number;
    request_id?: number;
    resultsCount?: number;
    status?: string;
    results?: aggregationResults[];
  }

