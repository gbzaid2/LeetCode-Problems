/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    //[1,0]
    if (nums.length === 0 || nums.length === 1){ 
        return nums;
    }
    let read = 0;
    let write = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[write] !== 0 && nums[read] === 0){
            let temp = nums[read];
            nums[read] = nums[write];
            nums[write] = temp;
            read += 1;
            write += 1;

        } else if (nums[write] === 0) {
            write += 1;
        } else if (nums[read] !== 0){
            read += 1;
            write += 1;
        }
    }
    return nums;

};