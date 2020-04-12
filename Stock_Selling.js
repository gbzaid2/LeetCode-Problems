/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // buy if next price is higher
    // sell if next price is lower
    // if reached end of array and you haven't sold, sell.
    let buyAt = -1;
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        if(i === prices.length - 1  && (buyAt !== -1)){
            profit += (prices[i] - buyAt);
            return profit;
        }
        if(prices[i+1] > prices[i]){
            if(buyAt === -1){
                buyAt = prices[i];
            }
        } else if (prices[i+1] < prices[i]){
            if(buyAt !== -1){
                profit += (prices[i] - buyAt);
                buyAt = -1;
            } 
        }
    }
    return profit;
};