/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
  let i = 0, res = 0, n = prices.length;
  let valley = prices[0], peak = prices[0];
  
  while(i < n - 1) {
    while(prices[i] >= prices[i + 1]) {
      i++;
    }
    
    valley = prices[i];
    
    while(prices[i] <= prices[i + 1]) {
      i++;
    }
    
    peak = prices[i];
    res += (peak-valley);
  }
  
  return res;
  
};
