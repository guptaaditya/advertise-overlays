const MEMERSHIP_COST = 25;
export const PERCENT_L1 = 10;
export const PERCENT_L2 = 5;

export function calculateTotalPayoutAmount(data = []) {
    return data.reduce(function(acc, rowData) {
        return acc + calculatePerResellerPayoutAmount(rowData);
    }, 0);
}

export function calculatePerResellerPayoutAmount(rowData) {
    const { affiliate1, affiliate2 } = rowData;
    const totalPayout = (affiliate1 * 0.01 * PERCENT_L1 * MEMERSHIP_COST) + (affiliate2 * 0.01 * PERCENT_L2 * MEMERSHIP_COST);
    const formattedPayout =  totalPayout.toFixed(2);
    return Number(formattedPayout);
}