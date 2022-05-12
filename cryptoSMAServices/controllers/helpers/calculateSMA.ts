import { getToAndFromDate } from '../../utils/utils';
import { cryptoAggregate } from '../polygonAPIs/crypto'
import { aggregationResults } from '../polygonAPIs/interfaces';
export async function calculateSMA(lowerSMA: number, higherSMA: number) {
    const lowerSMADates = getToAndFromDate(lowerSMA);
    const higherSMADates = getToAndFromDate(higherSMA);
    const lowerSMAData = await cryptoAggregate("X:BTCUSD", lowerSMADates.from,  lowerSMADates.to);
    const higherSMAData = await cryptoAggregate("X:BTCUSD", higherSMADates.from,  higherSMADates.to);
    let results: any = {};
    results["SMA-" + lowerSMA] = await SMA(lowerSMAData.results!, lowerSMA);
    results["SMA-" + higherSMA] = await SMA(higherSMAData.results!, higherSMA);
    results["deathCross"] = results["SMA-" + lowerSMA] < results["SMA-" + higherSMA];
    results["goldenCross"] = results["SMA-" + lowerSMA] > results["SMA-" + higherSMA];
    return results;
}

async function SMA(SMAData: aggregationResults[], denominator: number){
    const SMATotal = SMAData.reduce((partialSum, currentValue: aggregationResults): any => partialSum + currentValue.c!, 0);
    return (SMATotal / denominator).toFixed(2);
}