/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = {};
    for(let num of nums){
        if (freq[num] === undefined){
            freq[num] = 1
        } else {
            freq[num] += 1;
        }
    }
    
    for(let num in freq){
        if (freq[num] === 1){
            return num;
        }
    }
};
