/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) { return nums[0];}
    let currentTotal = 0;
    let sums = [];
    
    for (let i = 0; i < nums.length; i++){
        currentTotal += nums[i];
        sums.push(currentTotal);
    }
    let n = nums.length;
    let maxSum = -Infinity;
    for (let i = 0; i < n; i++){
      let tempSum = 0;
      for(let j = 0; j < n; j++){
         if (j+i >= n) { break;}
         if (j === 0){
              tempSum = sums[j+i]
             
         } else {
              tempSum = sums[j+i] - sums[j-1];
             
         }
          if (tempSum > maxSum){
              maxSum = tempSum;
          }
      }
        
        
    }
    return maxSum;
};
